import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import {
  StyledContainer
} from './styles';

const Loading: React.FC = () => {

  return (
    <StyledContainer>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </StyledContainer>
  );
}

export default Loading;
