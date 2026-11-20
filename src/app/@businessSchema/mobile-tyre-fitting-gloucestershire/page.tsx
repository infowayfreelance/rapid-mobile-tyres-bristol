import { BUSINESS_ID, localBusinessSchema } from "@/lib/businessSchema";

const gloucestershireBusinessSchema = {
  ...localBusinessSchema,
  priceRange: undefined,
  sameAs: undefined,
  "@id": BUSINESS_ID,
};

export default function GloucestershireBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(gloucestershireBusinessSchema).replace(/</g, "\\u003c") }}
    />
  );
}
