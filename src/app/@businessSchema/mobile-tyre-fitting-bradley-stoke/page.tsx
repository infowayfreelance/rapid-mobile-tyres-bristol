import { BUSINESS_ID, localBusinessSchema } from "@/lib/businessSchema";

const bradleyStokeBusinessSchema = {
  ...localBusinessSchema,
  "@id": BUSINESS_ID,
};

export default function BradleyStokeBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(bradleyStokeBusinessSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
