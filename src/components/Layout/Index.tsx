import React, { ReactNode } from 'react';
import Header from '../Header';

import {
  StyledContainer
} from './styles';

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {

  return (
    <StyledContainer>
      <Header />
      {props.children}
    </StyledContainer>
  );
}

export default Layout;
