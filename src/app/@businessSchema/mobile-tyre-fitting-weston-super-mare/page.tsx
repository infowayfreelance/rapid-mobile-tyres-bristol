import { BUSINESS_ID, localBusinessSchema } from "@/lib/businessSchema";

const westonBusinessSchema = {
  ...localBusinessSchema,
  priceRange: undefined,
  sameAs: undefined,
  "@id": BUSINESS_ID,
};

export default function WestonBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(westonBusinessSchema).replace(/</g, "\\u003c") }}
    />
  );
}
