import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import { useAppSelector } from '../../redux/hooks';
import { selectIsFetching } from '../../redux/slices/fetching';
import dogImage from '../../shared/images/dog3.png';
import { useLocation } from 'react-router-dom'
import {
  StyledLink,
  StyledImage,
  StyledHomeContainer,
  StyledHomeTitle,
  StyledMainTitle
} from './styles';

const Header: React.FC = () => {

  const isFetching = useAppSelector(selectIsFetching);

  const location = useLocation();
  
  if (isFetching) return null;

  return (
    <AppBar position='sticky' sx={{ background: '#325A73', padding: '10px 0'}}>
      <Container maxWidth='xl'>
        <StyledLink to="/">
          <Toolbar disableGutters >
            <StyledImage src={dogImage} alt="dog-image" />     
            <StyledMainTitle>Mundo Canino</StyledMainTitle>  
            <StyledHomeContainer>
              {
                location.pathname !== '/' &&
                <StyledLink to="/">
                  <StyledHomeTitle>HOME</StyledHomeTitle>  
                </StyledLink>          
              }               
            </StyledHomeContainer>          
          </Toolbar>
        </StyledLink>
      </Container>   
    </AppBar>
  );
}

export default Header;
