import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import {
  StyledContainer
} from './styles'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { clearFavorite, selectFavorite } from '../../redux/slices/favoriteSubBreed';
import { titleCase } from '../../utils/stringFunctions';
import SubBreedPopup from '../SubBreedsPopup';


const FavoriteSubBreed: React.FC = () => {

  const dispatch = useAppDispatch();

  const favorite = useAppSelector(selectFavorite);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const getTitle = () => {

    if (!favorite.favoriteName) return 'No tienes una Raza Favorita';

    return `${titleCase(favorite.favoriteName)} es tu Raza Favorita!`

  }

  const getSubtitle = () => {

    return `Perteneciente a la Familia: ${titleCase(favorite.breedName)}`;

  };

  const handleRemoveFavorite = () => {
    dispatch(clearFavorite())
  }

  const handleSeePictures = () => {

    setIsPopupOpen(true);

  };

  const handleClosePopup = () => {

    setIsPopupOpen(false);

  }
    
  const displayImage = () => {

    if (!favorite.favoriteName) {
      return (
        <Stack spacing={1} alignContent='center'>
          <Skeleton variant="text" animation="wave" />        
          <Skeleton variant="rectangular" width={350} height={250} animation="wave" />
        </Stack>
      );
    }

    return (
      <CardMedia
        component="img"
        height="250"
        image={favorite.favoriteImage}
        alt={favorite.favoriteName}
      />
    );

  }
  
  return (
    <StyledContainer>
      <Card sx={{ maxWidth: 345, height: 440, boxShadow: '0px 0px 10px gray' }}>
          <CardActionArea>         
            {displayImage()}
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', color: '#1D2F40' }}>
                {getTitle()}
              </Typography>
              {favorite.favoriteName &&
                <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', color: '#468BA6', fontSize: 14 }}>
                  {getSubtitle()}
                </Typography>
              }              
              <Typography variant="body2" color="text.secondary">
                Selecciona una Familia y luego una Raza para guardarla como Favorita.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ justifyContent: 'space-between'}}>
            {
              favorite.favoriteName &&
              <>
                <Button
                  size="small"
                  color="primary"
                  onClick={handleRemoveFavorite}
                >
                  Quitar Favorita
                </Button>
                <Button
                  size="small"
                  color="primary"
                  onClick={handleSeePictures}
                >
                  Ver Fotos
                </Button>
              </>
            }            
          </CardActions>
        </Card>
        <SubBreedPopup isOpen={isPopupOpen} handleClose={handleClosePopup} showOnly />
    </StyledContainer>
  )
}

export default FavoriteSubBreed