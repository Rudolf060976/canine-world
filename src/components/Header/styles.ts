import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const StyledContainer = styled.div`

  width: 100%;
  height: 150px;
  
`;

export const StyledLink = styled(Link)`

  text-decoration: none;
  color: white;

`;

export const StyledImage = styled.img`

  width: 130px;

`;

export const StyledHomeContainer = styled.div`

  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const StyledHomeTitle = styled.h3`

  color: white;
  font-family: Fuzzy Bubbles, cursive;
  color: 'white';
  font-size: 20px;  
  min-width: 50px;
  transition: all .3s linear;

  &:hover {
    color: #EAC9FF;
    transform: scaleX(1.2);
  }

`;

export const StyledMainTitle = styled.h1`

  font-family: Fuzzy Bubbles, cursive;
  color: 'white';
  font-size: 42px;
  margin-left: 50px;
  min-width: 350px;
  transition: all .3s linear;
  
  &:hover {
    color: #EAC9FF;
    transform: scaleX(1.2);
  }
`;