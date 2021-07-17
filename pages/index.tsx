import React, { useState } from "react";
import dynamic from "next/dynamic";
import Layout from "../src/components/Layout";
import { Stack, VStack } from "@chakra-ui/react";
const DynamicComponent = dynamic(() => import("../src/components/JsonEditor"), {
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
      <Stack
        direction={["column", "column", "row", "row"]}
        w="100%"
        h="100%"
        pb={4}
        spacing={["40px", "40px", "20px", "20px"]}
      >
        <DynamicComponent h="100%" w="100%"></DynamicComponent>
      </Stack>
    </Layout>
  );
}
