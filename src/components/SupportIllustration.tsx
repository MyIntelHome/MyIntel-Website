type Kind = "aware" | "protect" | "complete";
export function SupportIllustration({ kind = "aware", className = "" }: { kind?: Kind; className?: string }) {
  return <svg viewBox="0 0 360 240" fill="none" aria-hidden="true" className={className}>
    <rect x="12" y="14" width="336" height="212" rx="36" fill="#e1eef8"/>
    <circle cx="286" cy="57" r="22" fill="#efd497"/>
    <path d="M32 205H329" stroke="#a9cbe4" strokeWidth="5" strokeLinecap="round"/>
    <path d="M55 114L173 42L292 114" stroke="#1e3357" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M76 111V204H273V111" fill="#faf8f4" stroke="#1e3357" strokeWidth="5" strokeLinejoin="round"/>
    <rect x="106" y="129" width="49" height="43" rx="8" fill="#a9cbe4" stroke="#1e3357" strokeWidth="4"/>
    <path d="M130 131V170M108 150H152" stroke="#faf8f4" strokeWidth="4"/>
    <rect x="184" y="134" width="47" height="70" rx="12" fill="#d9a441"/>
    <circle cx="218" cy="173" r="3" fill="#1e3357"/>
    <path d="M40 203V172M40 184L26 175M40 179L53 162" stroke="#608375" strokeWidth="5" strokeLinecap="round"/>
    <circle cx="40" cy="157" r="18" fill="#a5c8af"/>
    {kind === "aware" ? <g>
      <rect x="244" y="132" width="84" height="64" rx="18" fill="#fff" stroke="#1e3357" strokeWidth="4"/>
      <path d="M256 166H270L278 151L288 178L299 160H316" stroke="#237aad" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="245" cy="124" r="21" fill="#1e3357"/>
      <path d="M236 124L242 130L255 117" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </g> : kind === "protect" ? <g>
      <path d="M277 120L318 137V160C318 184 297 198 277 205C257 198 236 184 236 160V137L277 120Z" fill="#1e3357" stroke="#fff" strokeWidth="5"/>
      <path d="M257 160L271 174L297 148" stroke="#faf8f4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    </g> : <g>
      <rect x="238" y="125" width="86" height="79" rx="19" fill="#fff" stroke="#1e3357" strokeWidth="4"/>
      <path d="M255 146L261 152L271 140M255 168L261 174L271 162M283 148H307M283 170H307" stroke="#237aad" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M250 193H311" stroke="#d9a441" strokeWidth="5" strokeLinecap="round"/>
    </g>}
  </svg>;
}
