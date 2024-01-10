import colors from "@/app/utils/colors";
import { motion, useScroll, useSpring } from "framer-motion";
import { RefObject } from "react";
import { styled } from "styled-components";

interface ChildComponentProps {
  MainScrollContainerRef: RefObject<HTMLElement>;
}

const GreenChildComponentInside: React.FC<ChildComponentProps> = ({
  MainScrollContainerRef,
}) => {
  const { scrollYProgress } = useScroll({ container: MainScrollContainerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <AnimatedGreenProgressBar as={motion.div} style={{ scaleX }} />;
};

export default GreenChildComponentInside;

const AnimatedGreenProgressBar = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  height: 30px;
  background: ${colors.spotifyGreen};
  transform-origin: 0%;
  z-index: 2;
`;
