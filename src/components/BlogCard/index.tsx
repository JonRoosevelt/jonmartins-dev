import { Avatar, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

import { Box, Stack, Text, Heading } from "@chakra-ui/layout";
import React, { ReactElement } from "react";
import { PostType } from "../../types/blogs";
import Link from "next/link";

type Path = {
  path: string;
};

const Index = (post: PostType & Path): ReactElement => {
  return (
    <Link key={post.path} href={post.path} passHref>
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
            layout={"fill"}
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
    </Link>
  );
};

export default Index;
