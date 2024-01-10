import React, { RefObject } from "react";

import styled from "styled-components";

import OrangeGrandChildComponent from "./OrangeGrandChildComponent";

interface Props {
  MainScrollContainerRef: RefObject<HTMLElement>;
}

const ContainsOrangeGrandChild: React.FC<Props> = ({
  MainScrollContainerRef,
}) => {
  return (
    <Container>
      <OrangeGrandChildComponent
        MainScrollContainerRef={MainScrollContainerRef}
      />
    </Container>
  );
};

export default ContainsOrangeGrandChild;

const Container = styled.div``;

// //0px
// ${breakpoint('minimum')`

// `}

// //320px
// ${breakpoint('mobileS')`

// `}

// //375px
// ${breakpoint('mobileM')`

// `}

// //425px
// ${breakpoint('mobileL')`

// `}

// //550px

// ${breakpoint('phablet')`

// `}

// //768px
// ${breakpoint('tablet')`

// `}

// //1024px
// ${breakpoint('laptop')`

// `}

// //1250px
// ${breakpoint('laptopM')`

// `}

// //1440px
// ${breakpoint('laptopL')`

// `}

// //2560px
// ${breakpoint('desktop')`

// `}
