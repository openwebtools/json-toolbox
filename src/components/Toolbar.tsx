import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NextLink from "next/link";

const Toolbar = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleColorModeClick = () => {
    toggleColorMode();
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      px={4}
      py={2}
      {...props}
      justify="space-between"
      direction={["column", "column", "row", "row"]}
      w="100%"
    >
      <Flex
        align="center"
        justify="space-between"
        w={["100%", "100%", "auto", "auto"]}
      >
        <NextLink href="/" passHref>
          <Link>
            <Heading as="h1" size="md">
              JSON Toolkit
            </Heading>
          </Link>
        </NextLink>
        <IconButton
          onClick={toggleMenu}
          aria-label="Open Menu"
          display={{ base: "block", md: "none" }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
        />
      </Flex>
      <Spacer />
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <NextLink href="/diff" passHref>
            <Link>
              <Button aria-label="JSON Difference Checker" variant="ghost">
                JSON Converter
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/diff" passHref>
            <Link>
              <Button aria-label="JSON Difference Checker" variant="ghost">
                JSON Diff Checker
              </Button>
            </Link>
          </NextLink>
          <IconButton
            onClick={handleColorModeClick}
            aria-label="Toggle Color Mode"
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            variant="ghost"
          />
        </Stack>
      </Box>
    </Flex>
  );
};

export default Toolbar;
