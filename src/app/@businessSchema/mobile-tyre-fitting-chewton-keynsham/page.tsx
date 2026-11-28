import { BUSINESS_ID, localBusinessSchema } from "@/lib/businessSchema";

const chewtonKeynshamBusinessSchema = {
  ...localBusinessSchema,
  "@id": BUSINESS_ID,
};

export default function ChewtonKeynshamBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(chewtonKeynshamBusinessSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
