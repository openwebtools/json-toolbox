import React, { useState } from "react";
import dynamic from "next/dynamic";
import Layout from "../src/components/Layout";
import {
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  useColorMode,
  Text,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const DynamicComponent = dynamic(() => import("../src/components/JsonEditor"), {
  ssr: false,
});

export default function Home() {
  const { colorMode } = useColorMode();
  const [srcText, setSrcText] = useState<string>();
  const [jsonValid, setJsonValid] = useState<boolean>(false);
  const onChange = (value) => {
    setJsonValid(validateJson(value));
    setSrcText(value);
  };

  const validateJson = (jsonString: string) => {
    try {
      var o = JSON.parse(jsonString);
      if (o && typeof o === "object") {
        return o;
      }
    } catch (e) {}

    return false;
  };
  return (
    <Layout
      title="JSON Toolkit | Open Web Tools"
      p={4}
      justify="center"
      align="top"
      direction="column"
      pt={0}
      pb={2}
    >
      <Text align="center">A simple online JSON editor</Text>
      <Stack direction="column" w="100%" h="100%" pb={4} spacing={0}>
        <Flex
          h="40px"
          w="100%"
          bg={colorMode === "dark" ? "dark.800" : "light.400"}
          borderTopRadius={8}
          alignItems="center"
          pl={1}
          justify="space-between"
        >
          <HStack spacing={2} p={1} display={{ base: "none", sm: "flex" }}>
            <Button variant="outline" size="xs">
              Prettify
            </Button>
            <Button variant="outline" size="xs">
              Minify
            </Button>
            <Button variant="outline" size="xs">
              Escape
            </Button>
            <Button variant="outline" size="xs">
              Unescape
            </Button>
            <Divider orientation="vertical" />
            <Button variant="outline" size="xs">
              Copy
            </Button>
            <Menu size="xs">
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                size="xs"
                variant="outline"
              >
                Download
              </MenuButton>
              <MenuList>
                <MenuItem fontSize="xs">JSON</MenuItem>
                <MenuItem fontSize="xs">XML</MenuItem>
                <MenuItem fontSize="xs">YAML</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <HStack spacing={2} p={1} display={{ base: "flex", sm: "none" }}>
            <Menu size="xs">
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                size="xs"
                variant="outline"
              >
                Actions
              </MenuButton>
              <MenuList sx={{ zIndex: 9999 }}>
                <MenuItem fontSize="xs">Prettify</MenuItem>
                <MenuItem fontSize="xs">Minify</MenuItem>
                <MenuItem fontSize="xs">Escape</MenuItem>
                <MenuItem fontSize="xs">Unescape</MenuItem>
              </MenuList>
            </Menu>
            <Menu size="xs">
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                size="xs"
                variant="outline"
              >
                Download
              </MenuButton>
              <MenuList>
                <MenuItem fontSize="xs">JSON</MenuItem>
                <MenuItem fontSize="xs">XML</MenuItem>
                <MenuItem fontSize="xs">YAML</MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          <Box>
            <Alert
              status={jsonValid ? "success" : "error"}
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="40px"
              borderTopRightRadius={8}
            >
              <AlertIcon />
              <Text fontSize="xs" display={{ base: "none", sm: "flex" }}>
                {jsonValid ? "Valid" : "Invalid"} JSON
              </Text>
            </Alert>
          </Box>
        </Flex>
        <DynamicComponent
          h="100%"
          w="100%"
          m={0}
          border="1px"
          borderTopWidth="0px"
          borderColor={colorMode === "dark" ? "dark.800" : "light.400"}
          borderBottomRadius={8}
          onChange={onChange}
        ></DynamicComponent>
      </Stack>
    </Layout>
  );
}
