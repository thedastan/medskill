"use client";

import Script from "next/script";

interface StructuredDataProps {
  data: object;
  id?: string;
}

const StructuredData = ({ data, id }: StructuredDataProps) => (
  <Script
    type="application/ld+json"
    id={id}
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default StructuredData;