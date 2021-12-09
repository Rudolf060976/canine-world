import React, { ReactNode } from 'react';

import {
  StyledContainer
} from './Styles';

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {

  return (
    <StyledContainer>
      {props.children}
    </StyledContainer>
  );
}

export default Layout;
