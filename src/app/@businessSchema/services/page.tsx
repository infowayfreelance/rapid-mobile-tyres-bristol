import { BUSINESS_ID, localBusinessSchema } from "@/lib/businessSchema";

const servicesBusinessSchema = {
  ...localBusinessSchema,
  "@id": BUSINESS_ID,
};

export default function ServicesBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(servicesBusinessSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
