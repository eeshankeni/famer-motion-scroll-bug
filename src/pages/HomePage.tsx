import styled from "styled-components";

import { motion, useScroll, useSpring } from "framer-motion";
import colors from "@/app/utils/colors";

import { RefObject, useRef } from "react";

import ContainsOrangeGrandChild from "./ContainsAnotherChild";
import GreenChildComponentInside from "./GreenChildComponent";

export default function HomePage() {
  const MainScrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ container: MainScrollContainerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <AnimatedPurpleProgressBar as={motion.div} style={{ scaleX }} />

      {/* in global.css i have prevented the body from being scrolled */}

      <ScrollableContainer ref={MainScrollContainerRef} as={motion.div}>
        <div style={{ height: "1100vh", background: "white", width: "100vw" }}>
          {/* React component containing another component which contains animated div declared outside of homepage.tsx */}
          {/* does not animate in production */}

          <ContainsOrangeGrandChild
            MainScrollContainerRef={MainScrollContainerRef}
          />
        </div>
      </ScrollableContainer>

      {/* React component containing animated div declared outside of homepage.tsx */}
      <GreenChildComponentInside
        MainScrollContainerRef={MainScrollContainerRef}
      />

      {/* React component containing animated div declared within homepage.tsx */}
      <RedChildComponent MainScrollContainerRef={MainScrollContainerRef} />

      <div style={{ position: "fixed", top: 150 }}>
        <text style={{ color: "black" }}>
          Environment : {process.env.NODE_ENV}
        </text>
      </div>

      <div style={{ position: "fixed", top: 400 }}>
        <text style={{ color: "black" }}>
          Notice how every other color animates except orange, which is two
          levels down the component tree. This bug only happens in production.
        </text>
      </div>
    </>
  );
}

interface ChildComponentProps {
  MainScrollContainerRef: RefObject<HTMLElement>;
}

const RedChildComponent: React.FC<ChildComponentProps> = ({
  MainScrollContainerRef,
}) => {
  const { scrollYProgress } = useScroll({ container: MainScrollContainerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  {
    /* returns a styled component */
  }
  return <AnimatedRedProgressBar as={motion.div} style={{ scaleX }} />;
};

const ScrollableContainer = styled.div`
  height: 100%;
  overflow-y: scroll; // This enables scrolling in the y-axis of Container instead of global.css body
`;

const AnimatedPurpleProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: ${colors.velociPurple};
  transform-origin: 0%;
`;

const AnimatedRedProgressBar = styled.div`
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  height: 30px;
  background: ${colors.crimson};
  transform-origin: 0%;
  z-index: 2;
`;
