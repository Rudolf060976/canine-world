import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../../redux/hooks'
import { selectIsFetching } from '../../redux/slices/fetching'

import {
  StyledLink
} from './styles';

const Header: React.FC = () => {

  const isFetching = useAppSelector(selectIsFetching);
  
  if (isFetching) return null;

  return (
    <AppBar position='sticky' sx={{ background: '#325A73', padding: '10px 0'}}>
      <Container maxWidth='xl'>
        <StyledLink to="/">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between'}}>
            <Typography
              variant="h3"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'Fuzzy Bubbles, cursive', color: 'white' }}            
            >
              Mundo Canino
            </Typography>                          
          </Toolbar>
        </StyledLink>
      </Container>   
    </AppBar>
  );
}

export default Header;
