import React, { useState } from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import {
  StyledContainer,
  StyledListTitle,
  StyledImage
} from './styles'

import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { selectSelectedBreed, setSelectedSubBreed } from '../../../redux/slices/breeds'
import SubBreedPopup from '../../../components/SubBreedsPopup';
import { fetchAllImagesByBreed } from '../../../services/breed';
import { fetchAllImagesBySubBreed } from '../../../services/subBreeds';

const SubBreedList: React.FC = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  
  const selectedBreed = useAppSelector(selectSelectedBreed);

  const dispatch = useAppDispatch();

  const hasNoSubBreeds = selectedBreed.subBreeds.length === 0

  const getSubBreeds = () => {

    if (hasNoSubBreeds) {

      return [{ name: selectedBreed.breedName, image: selectedBreed.breedImage }]

    }

    return selectedBreed.subBreeds

  }

  const getTitle = () => {

    if (hasNoSubBreeds) return 'Esta familia tiene una Raza única:'

    return 'Estas son todas sus Razas:'

  }

  const handleListItemClick = async (index: number, subBreedName: string) => {

    setIsFetching(true);

    if (hasNoSubBreeds) {
      const response = await fetchAllImagesByBreed(subBreedName);

      const imagesArray = response.message;

      dispatch(setSelectedSubBreed({
        name: subBreedName,
        breedName: selectedBreed.breedName,
        images: imagesArray,
        isBreed: true
      }));
    } else {

      const response = await fetchAllImagesBySubBreed(selectedBreed.breedName, subBreedName);

      const imagesArray = response.message;

      dispatch(setSelectedSubBreed({
        name: subBreedName,
        breedName: selectedBreed.breedName,
        images: imagesArray,
        isBreed: false
      }));

    }

    setSelectedIndex(index);

    setIsFetching(false);
    
    setIsPopupOpen(true);    
    
  };

  const handleClosePopup = () => {

    setIsPopupOpen(false);

  }


  return (
    <StyledContainer>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: 2, boxShadow: '0px 0px 10px gray', margin: '0 auto' }}>
        <StyledListTitle>{getTitle()}</StyledListTitle>
        <List component="nav" aria-label="main mailbox folders">
          {
            getSubBreeds().map((subBreed, index) => {

              return (
                <>
                  <ListItemButton
                  key={subBreed.name}
                  selected={selectedIndex === index }
                  onClick={(e: React.MouseEvent) => handleListItemClick(index, subBreed.name)}
                  >
                    <ListItemIcon>
                    <StyledImage src={subBreed.image} alt={subBreed.name} />
                  </ListItemIcon>
                  <ListItemText primary={subBreed.name} sx={{ textTransform: 'capitalize'}} />
                  </ListItemButton>
                  <Divider />
                </>
                
              )

            })
          }
        </List>
      </Box>
      <SubBreedPopup isOpen={isPopupOpen} handleClose={handleClosePopup}  />
    </StyledContainer>
  )
}

export default SubBreedList