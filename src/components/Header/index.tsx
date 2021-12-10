import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../../redux/hooks';
import { selectIsFetching } from '../../redux/slices/fetching';
import dogImage from '../../shared/images/dog3.png';
import { useLocation } from 'react-router-dom'
import {
  StyledLink,
  StyledImage,
  StyledHomeContainer,
  StyledHomeTitle
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
            <Typography
              variant="h3"
              noWrap
              component="div"
              sx={{ mr: 2, ml: 3, display: { md: 'flex' }, fontFamily: 'Fuzzy Bubbles, cursive', color: 'white' }}            
            >
              Mundo Canino
            </Typography>  
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
