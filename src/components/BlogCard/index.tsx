import { Avatar, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

import { Center, Box, Stack, Text, Heading } from "@chakra-ui/layout";
import React, { ReactElement } from "react";
import { PostType } from "../../types/blogs";
import Link from "next/link";

type Path = {
  path: string;
};

const Index = (post: PostType & Path): ReactElement => {
  return (
    <>
      <Link key={post.path} href={post.path} passHref>
        <Center py={6}>
          <Box
            maxW={"350px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              h={"210px"}
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
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                Blog
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                {post.data.title}
              </Heading>
              <Text
                overflow="hidden !important"
                lineHeight="2rem"
                maxH="8rem"
                display="block"
                textOverflow="ellipsis"
                webkitLineClamp={4}
                webKitOrient="vertical"
                color={"gray.500"}
              >
                {post.data.previewText}
              </Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar src={"jon.jpeg"} alt={"Author"} />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>{post.data.author}</Text>
                <Text color={"gray.500"}>{post.data.date}</Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
      </Link>
    </>
  );
};

export default Index;
