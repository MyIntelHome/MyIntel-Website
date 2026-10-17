"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export function WebsiteInquiryForm({ type, light = false }: { type: "contact" | "care_company"; light?: boolean }) {
  const prefix = useId();
  const errorRef = useRef<HTMLParagraphElement>(null);
  const thanksRef = useRef<HTMLDivElement>(null);
  const submission = useRef({ payload: "", key: "" });
  const [busy, setBusy] = useState(false), [sent, setSent] = useState(false), [error, setError] = useState("");
  const company = type === "care_company";
  useEffect(() => { if (sent) thanksRef.current?.focus(); }, [sent]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget, values = new FormData(form);
    const value = (key: string) => String(values.get(key) || "").trim();
    setError("");
    if (!value("email") && !value("phone")) {
      setError("Please add your email or phone number so we can reply.");
      requestAnimationFrame(() => form.querySelector<HTMLInputElement>('input[name="email"]')?.focus());
      return;
    }
    const digits = value("phone").replace(/\D/g, "").length;
    if (value("phone") && (!/^[+()\d .-]+$/.test(value("phone")) || digits < 10 || digits > 15)) {
      setError("Please check your phone number. Include the area code.");
      requestAnimationFrame(() => form.querySelector<HTMLInputElement>('input[name="phone"]')?.focus());
      return;
    }
    const payload = { type, name: value("name"), email: value("email"), phone: value("phone"), message: value("message"), contactConsent: values.get("contactConsent") === "on", website: value("website"), ...(company ? { companyName: value("companyName"), role: value("role"), clientCount: value("clientCount") } : { relationship: value("relationship"), postalCode: value("postalCode") }) };
    const fingerprint = JSON.stringify(payload);
    if (submission.current.payload !== fingerprint) submission.current = { payload: fingerprint, key: crypto.randomUUID() };
    setBusy(true);
    try {
      if (!site.websiteInquiryUrl) throw Error("unavailable");
      const response = await fetch(site.websiteInquiryUrl, { method: "POST", credentials: "omit", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, idempotencyKey: submission.current.key }), signal: AbortSignal.timeout(25000) });
      if (!response.ok || (await response.json()).ok !== true) throw Error("unavailable");
      setSent(true);
    } catch {
      setError("Your note could not be confirmed. Please try again, or call us.");
      requestAnimationFrame(() => errorRef.current?.focus());
    } finally { setBusy(false); }
  }
  const field = (name: string, label: string, options: { type?: string; autoComplete?: string; required?: boolean; maxLength?: number; pattern?: string; title?: string } = {}) => <div className="inquiry-field"><label htmlFor={`${prefix}-${name}`}>{label}</label><input id={`${prefix}-${name}`} name={name} type={options.type || "text"} required={options.required} autoComplete={options.autoComplete} maxLength={options.maxLength || 100} pattern={options.pattern} title={options.title} /></div>;
  if (sent) return <div ref={thanksRef} className={`inquiry-form${light ? " inquiry-form-light" : ""}`} role="status" tabIndex={-1}><h3 className="text-2xl font-bold">Thanks. We usually reply within one business day.</h3></div>;
  return <form className={`inquiry-form${light ? " inquiry-form-light" : ""}`} onSubmit={submit} aria-label={company ? "Care company inquiry" : "Contact MyIntel"} aria-busy={busy}>
    <p className="mb-6">{company ? "Tell us about your team." : "Send us a note."} Fields marked “optional” can be left blank.</p>
    {error && <div className="inquiry-error"><p ref={errorRef} role="alert" tabIndex={-1}>{error}</p><a href={site.phoneHref}>Please call {site.phone}.</a></div>}
    <fieldset disabled={busy} className="inquiry-fields">
      {company && field("companyName", "Company name", { required: true, autoComplete: "organization", maxLength: 150 })}
      {field("name", company ? "Your name" : "Name", { required: true, autoComplete: "name" })}
      {company && field("role", "Your role", { required: true, autoComplete: "organization-title" })}
      {!company && <p id={`${prefix}-reach`}>Add your email or phone number, or both.</p>}
      <div className="inquiry-pair" aria-describedby={!company ? `${prefix}-reach` : undefined}>
        {field("email", company ? "Email" : "Email (or phone below)", { type: "email", required: company, autoComplete: "email", maxLength: 254 })}
        {field("phone", company ? "Phone (optional)" : "Phone (or email above)", { type: "tel", autoComplete: "tel", maxLength: 30 })}
      </div>
      {company ? <div className="inquiry-field"><label htmlFor={`${prefix}-clients`}>About how many clients? (optional)</label><select id={`${prefix}-clients`} name="clientCount" defaultValue=""><option value="">Choose if you know</option>{["1-10", "11-50", "51-200", "200+"].map(n => <option key={n}>{n}</option>)}</select></div> : <>
        <div className="inquiry-field"><label htmlFor={`${prefix}-relationship`}>Who is the help for?</label><select id={`${prefix}-relationship`} name="relationship" required defaultValue=""><option value="" disabled>Choose one</option><option value="myself">Myself</option><option value="parent_or_relative">A parent or relative</option><option value="someone_else">Someone else</option></select></div>
        {field("postalCode", "ZIP code (optional)", { autoComplete: "postal-code", maxLength: 5, pattern: "[0-9]{5}", title: "Use a 5-digit ZIP code." })}
      </>}
      <div className="inquiry-field"><label htmlFor={`${prefix}-message`}>{company ? "How can we help your team?" : "How can we help?"}</label><textarea id={`${prefix}-message`} name="message" rows={4} required maxLength={3000} /></div>
      <div className="inquiry-trap" aria-hidden="true"><label htmlFor={`${prefix}-website`}>Leave this blank</label><input id={`${prefix}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" maxLength={200} /></div>
      <label className="inquiry-consent"><input name="contactConsent" type="checkbox" required /><span>Yes, MyIntel may call or email me about this note.</span></label>
      <button type="submit" className={light ? "btn-light" : "btn-primary"} disabled={busy}>{busy ? "Sending..." : "Send your note"}</button>
    </fieldset>
    <noscript><p className="mt-5">Please call <a href={site.phoneHref}>{site.phone}</a> to reach us.</p></noscript>
  </form>;
}
