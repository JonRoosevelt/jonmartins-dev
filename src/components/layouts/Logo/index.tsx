import { Box } from "@chakra-ui/layout";
import { ReactElement } from "react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import FullLogo from "./FullLogo";
import CondensedLogo from "./CondensedLogo";
import { keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";

const COLOR = "teal";
const STACKS = 3;

const Logo = (): ReactElement => {
  const fullLogo = useBreakpointValue({ base: false, md: true });
  const logo = (
    <Box>{fullLogo ? <FullLogo /> : <CondensedLogo fill={COLOR} />}</Box>
  );
  return (
    <Container>
      <div style={{ ...styles.stack }}>
        <StackSpan style={{ ...styles.stack }}>
          <span style={{ ...styles.indexes.index0 }}>{logo}</span>
          <span style={{ ...styles.indexes.index1 }}>{logo}</span>
          <span style={{ ...styles.indexes.index2 }}>{logo}</span>
        </StackSpan>
      </div>
    </Container>
  );
};

export default Logo;

const keyFrameStack = keyframes`
   0% {
    opacity: 0;
    transform: translateX(-50%);
    filter: drop-shadow(-2px 3px 0 red) drop-shadow(2px -3px 0 blue);
  };
  60% {
    opacity: 0.5;
    transform: translateX(50%);
  }
  80% {
    transform: none;
    opacity: 1;
    filter: drop-shadow(2px -3px 0 red) drop-shadow(-2px 3px 0 blue);
  }
  100% {
    filter: drop-shadow(none);
  } 
`;

const keyFrameGlitch = keyframes`
  0% {
    filter: drop-shadow(-2px 3px 0 red) drop-shadow(2px -3px 0 blue);
    transform: translate(var(--glitch-translate));
  }
  2% {
    filter: drop-shadow(2px -2px 0 red) drop-shadow(-2px 2px 0 blue);
  }
  4%, 100% {  filter: drop-shadow(none); transform: none; }
`;

const Container = styled.div`
  color: ${COLOR};
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const StackSpan = styled.div`
  span {
    font-weight: bold;
    grid-row-start: 1;
    grid-column-start: 1;
    font-size: 4rem;
    --stack-height: calc(100% / ${STACKS} - 1px);
    --inverse-index: calc(calc(${STACKS} - 1) - var(--index));
    --clip-top: calc(var(--stack-height) * var(--index));
    --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
    clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
    animation: ${keyFrameStack} 340ms cubic-bezier(0.46, 0.29, 0, 1.24) 1
        backwards calc(var(--index) * 120ms),
      ${keyFrameGlitch} 1s ease infinite 1s alternate-reverse;
  }
  span:nth-of-type(odd) {
    --glitch-translate: 18px;
  }
  span:nth-of-type(even) {
    --glitch-translate: -16px;
  }
`;

const styles = {
  indexes: {
    index0: { "--index": 0 } as React.CSSProperties,
    index1: { "--index": 1 } as React.CSSProperties,
    index2: { "--index": 2 } as React.CSSProperties,
  },
  stack: {
    display: "grid",
    gridTemplateColumns: "1fr",
  },
};
