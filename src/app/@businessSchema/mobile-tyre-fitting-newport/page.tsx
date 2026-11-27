import { BUSINESS_ID, localBusinessSchema } from "@/lib/businessSchema";

const newportBusinessSchema = {
  ...localBusinessSchema,
  "@id": BUSINESS_ID,
};

export default function NewportBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(newportBusinessSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
