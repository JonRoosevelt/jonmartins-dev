import { Avatar, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

import {
  Box,
  Stack,
  Text,
  Heading,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import React, { ReactElement } from "react";
import { PostType } from "../../types/blogs";

type Path = {
  path: string;
};

const Index = (post: PostType & Path): ReactElement => {
  return (
    <LinkBox as="article" key={post.path}>
      <LinkOverlay href={post.path}>
        <Box
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={[4, 6]}
          overflow={"hidden"}
        >
          <Box
            h={["200px", "210px"]}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image
              alt={post.data.imageDescription}
              src={post.data.coverImage}
              objectFit="cover"
              width={"350em"}
              height={"225vh"}
            />
          </Box>
          <Stack>
            <Text
              color={"teal.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={["xs", "sm"]}
              letterSpacing={1.1}
            >
              Blog
            </Text>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={["l", "2xl"]}
              fontFamily={"body"}
            >
              {post.data.title}
            </Heading>
            <Text
              fontSize={["x-small", "md"]}
              overflow="hidden !important"
              lineHeight={["base", "tall"]}
              maxH={["4rem", "8rem"]}
              display="block"
              textOverflow="ellipsis"
              webkitorient="vertical"
              color={"gray.500"}
            >
              {post.data.previewText}
            </Text>
          </Stack>
          <Stack mt={[3, 6]} direction={"row"} spacing={4} align={"center"}>
            <Avatar
              w={["2rem", "4rem"]}
              h={["2rem", "4rem"]}
              src={"jon.jpeg"}
              alt={"Author"}
            />
            <Stack direction={"column"} spacing={0} fontSize={["xs", "sm"]}>
              <Text fontWeight={600}>{post.data.author}</Text>
              <Text color={"gray.500"}>{post.data.date}</Text>
            </Stack>
          </Stack>
        </Box>
      </LinkOverlay>
    </LinkBox>
  );
};

export default Index;
