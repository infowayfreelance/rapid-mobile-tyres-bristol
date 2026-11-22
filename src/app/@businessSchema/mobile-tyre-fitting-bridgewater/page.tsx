import { BUSINESS_ID, localBusinessSchema } from "@/lib/businessSchema";

const bridgwaterBusinessSchema = {
  ...localBusinessSchema,
  "@id": BUSINESS_ID,
};

export default function BridgwaterBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(bridgwaterBusinessSchema).replace(/</g, "\\u003c") }}
    />
  );
}
