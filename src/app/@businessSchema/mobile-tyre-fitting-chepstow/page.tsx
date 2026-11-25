import { BUSINESS_ID, localBusinessSchema } from "@/lib/businessSchema";

const chepstowBusinessSchema = {
  ...localBusinessSchema,
  "@id": BUSINESS_ID,
};

export default function ChepstowBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(chepstowBusinessSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
