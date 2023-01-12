import React from "react";
import { Inter } from "@next/font/google";
import {
  Card,
  CardHeader,
  CardFooter,
  Heading,
  Text,
  VStack,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import NextLink from "next/link";
const inter = Inter({ subsets: ["latin"] });

const CardAlbum = (props) => {
  const { albumId, amount, nameAlbum, username } = props;
  return (
    <LinkBox>
      <Card
        w="full"
        h="full"
        display="flex"
        alignItems="start"
        justifyContent="space-between"
        borderRadius="3xl"
        bgGradient="linear(to-t, teal.200, teal.500)"
        _hover={{
          bgGradient: "linear(to-t, teal.500, teal.200)",
        }}
      >
        <CardHeader mb={8}>
          <Heading size="2xl">
            {amount < 10 ? "0" : ""}
            {amount}
          </Heading>
        </CardHeader>

        <CardFooter>
          <VStack align="start" justify="center">
            <Heading fontSize="md" noOfLines={3}>
              <NextLink href={`/${albumId}`} passHref legacyBehavior>
                <LinkOverlay>{nameAlbum}</LinkOverlay>
              </NextLink>
            </Heading>
            <Text fontSize="sm" fontWeight="bold" color="teal.500">
              @{username}
            </Text>
          </VStack>
        </CardFooter>
      </Card>
    </LinkBox>
  );
};

export default CardAlbum;
