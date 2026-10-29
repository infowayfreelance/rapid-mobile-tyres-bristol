"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/data";

// Matches a GB number written as "0XXXX XXXXXX" / "0XXX XXXXXXX" (an 11-digit
// landline or mobile, with or without a space) so any such variant gets
// corrected, not just one specific wrong number.
const PHONE_TEXT_PATTERN = /\b0\d{3,4}[\s-]?\d{5,7}\b/g;

function enforcePhoneNumber() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]').forEach((link) => {
    if (link.getAttribute("href") !== siteConfig.phoneHref) {
      link.setAttribute("href", siteConfig.phoneHref);
    }

    link.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent) {
        const replaced = node.textContent.replace(PHONE_TEXT_PATTERN, siteConfig.phone);
        if (replaced !== node.textContent) {
          node.textContent = replaced;
        }
      }
    });
  });
}

// Third-party scripts loaded via Google Tag Manager can rewrite the phone
// number/tel: link client-side after the page has rendered (dynamic number
// insertion). This keeps the real business number locked in place no matter
// what a GTM tag injects later, without needing to touch the GTM container.
export default function PhoneNumberGuard() {
  useEffect(() => {
    enforcePhoneNumber();

    const observer = new MutationObserver(() => enforcePhoneNumber());
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["href"],
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
