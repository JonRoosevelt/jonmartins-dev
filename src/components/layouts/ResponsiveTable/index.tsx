import { Wrap, WrapItem, VStack, Box, Heading, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import { TableDataItem } from "./types.d";

const WrapItems = styled.div`
  ul {
    justify-content: space-between;
  }
`;

type Props = {
  tableData: Array<TableDataItem>;
};

const ResponsiveTable = ({ tableData }: Props): ReactElement => {
  return (
    <WrapItems>
      <Wrap spacing={2} w={["container.xs", "container.sm", "46em"]}>
        {tableData.map((column) => (
          <WrapItem textAlign="left" flexWrap={"wrap"} key={column.head}>
            <VStack spacing={4} align="stretch" key={column.head}>
              <Box w="container.xs">
                <Heading color="teal.100" fontSize={18} as="h5" mb="10px">
                  {column.head}
                </Heading>
                {column.body.map((row) => (
                  <p key={row.name}>
                    {row.link ? (
                      <Link href={row.link}>{row.name}</Link>
                    ) : (
                      row.name
                    )}
                  </p>
                ))}
              </Box>
            </VStack>
          </WrapItem>
        ))}
      </Wrap>
    </WrapItems>
  );
};

export default ResponsiveTable;
