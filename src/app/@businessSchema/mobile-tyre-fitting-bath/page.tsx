import { BUSINESS_ID, localBusinessSchema } from "@/lib/businessSchema";

const bathBusinessSchema = {
  ...localBusinessSchema,
  priceRange: undefined,
  sameAs: undefined,
  "@id": BUSINESS_ID,
};

export default function BathBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(bathBusinessSchema).replace(/</g, "\\u003c") }}
    />
  );
}
