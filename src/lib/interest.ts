export const INTEREST_EVENT = "vordane:interest";

/** Pre-selects the "service of interest" in the contact form (anchor navigation is handled by the link itself). */
export function chooseInterest(value: string) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem("vordane:interest", value);
  window.dispatchEvent(new CustomEvent(INTEREST_EVENT, { detail: value }));
}
