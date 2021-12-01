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
      <Wrap w={["container.xs", "container.sm", "46em"]}>
        {tableData.map((column) => (
          <WrapItem textAlign="left" flexWrap={"wrap"} key={column.head}>
            <VStack key={column.head}>
              <Box>
                <Heading color="teal.100" fontSize={18} as="h5" mb="10px">
                  {column.head}
                </Heading>
                {column.body.map((row) => (
                  <Box key={row.name}>
                    {row.link ? (
                      <p style={{ marginBottom: 12, width: 100 }}>
                        <Link href={row.link}>{row.name}</Link>
                      </p>
                    ) : (
                      row.name
                    )}
                  </Box>
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
