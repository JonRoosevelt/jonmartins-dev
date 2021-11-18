import { Box } from "@chakra-ui/layout";
import { ReactElement } from "react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import FullLogo from "./FullLogo";
import CondensedLogo from "./CondensedLogo";
import { keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const Logo = (): ReactElement => {
  const fullLogo = useBreakpointValue({ base: false, md: true });
  const logo = (
    <Box>{fullLogo ? <FullLogo /> : <CondensedLogo fill="teal" />}</Box>
  );
  return (
    <Container>
      <div style={{ ...styles.stack }}>
        <Stack>
          <StackSpan style={{ ...styles.indexes.index0 }}>STACK</StackSpan>
          <StackSpan style={{ ...styles.indexes.index1 }}>STACK</StackSpan>
          <StackSpan style={{ ...styles.indexes.index2 }}>STACK</StackSpan>
        </Stack>
      </div>
    </Container>
  );
};

export default Logo;

const COLOR = "teal";
const STACKS = 3;
const keyFrameStack = keyframes`
  0% { opacity: 0; transform: translateX(-50%); textShadow: "-2px 3px 0 red, 2px -3px 0 blue"; }
  60% { opacity: 0.5; transform: translateX(50%) }
  80% { transform: none; opacity: 1; textShadow: "2px -3px 0 red, -2px 3px 0 blue"; }
  100% { textShadow: "none" }
`;

const keyFrameGlitch = keyframes`
  0% { textShadow: "-2px 3px 0 red, 2px -3px 0 blue"; transform: translate(var(--glitch-translate)); }
  2% { textShadow: "2px -3px 0 red, -2px 3px 0 blue" }
  4%, 100%": { textShadow: "none"; transform: "none" }
`;

const Container = styled.div`
  color: ${COLOR};
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Stack = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const StackSpan = styled.span`
  font-weight: bold;
  grid-row-start: 1;
  grid-column-start: 1;
  font-size: 4rem;
  --stack-height: calc(100% / ${STACKS} - 1px);
  --inverse-index: calc(calc(${STACKS} - 1) - var(--index));
  --clip-top: calc(var(--stack-height) * var(--index));
  --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
  clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
  animation-name: ${keyFrameGlitch};
  animation-duration: 340ms;

  span:nth-child(odd) {
    --glitch-translate: 8px;
  }
  span:nth-child(even) {
    --glitch-translate: -8px;
  }
`;

const styles = {
  indexes: {
    index0: { "--index": 0 } as React.CSSProperties,
    index1: { "--index": 1 } as React.CSSProperties,
    index2: { "--index": 2 } as React.CSSProperties,
  },
  stack: { display: "grid", gridTemplateColumns: "1fr" },

  oddStackSpan: { "--glitch-translate": "-8px" },
  evenStackSpan: { "--glitch-translate": "8px" },
};
