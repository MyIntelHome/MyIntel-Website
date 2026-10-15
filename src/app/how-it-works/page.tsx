import { redirect } from "next/navigation";

// This page was retired; old links and search results land on the plans instead.
export default function HowItWorksPage() {
  redirect("/solutions");
}
