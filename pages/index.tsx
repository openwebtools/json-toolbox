import React, { useState } from "react";
import dynamic from "next/dynamic";
import Layout from "../src/components/Layout";
const DynamicComponent = dynamic(() => import("../src/components/JsonViewer"), {
  ssr: false,
});

export default function Home() {
  const [srcText, setSrcText] = useState<any>({});
  return (
    <Layout
      title="JSON Toolkit | Open Web Tools"
      p={4}
      justify="center"
      align="top"
    >
      <DynamicComponent></DynamicComponent>
    </Layout>
  );
}
