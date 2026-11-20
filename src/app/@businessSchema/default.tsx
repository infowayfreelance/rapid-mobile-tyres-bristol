import { localBusinessSchema } from "@/lib/businessSchema";

export default function BusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c") }}
    />
  );
}
