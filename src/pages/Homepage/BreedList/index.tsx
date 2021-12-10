import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PetsIcon from '@mui/icons-material/Pets';
import { useNavigate } from 'react-router-dom';

import {
  StyledContainer,
  StyledListTitle
} from './styles'

interface BreedListProps {
  list: Record<string, string[]>
}

const BreedList: React.FC<BreedListProps> = (props: BreedListProps) => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  
  const navigate = useNavigate()

  const breedList = Object.keys(props.list);

  const sortedBreedList = breedList.sort();

  const getNumberOfSubBreeds = (breedName: string) => {

    return props.list[breedName].length

  };

  const handleListItemClick = (index: number, breedName: string) => {

    setSelectedIndex(index);
    
    navigate(`/breed/${breedName}`)

  };

  const getListItemDescription = (breedName: string) => {

    const numberOfSubBreeds = getNumberOfSubBreeds(breedName);

    const subBreedsDescription = numberOfSubBreeds === 0 ? '1' : `${numberOfSubBreeds}`

    return `${breedName} - (${subBreedsDescription})`

  };


  return (
    <StyledContainer>     
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: 2, boxShadow: '0px 0px 10px gray' }}>
        <StyledListTitle>Selecciona La Familia Canina</StyledListTitle>
        <List component="nav" aria-label="main mailbox folders">
          {
            sortedBreedList.map((breedName: string, index) => {

              return (
                <>
                  <ListItemButton
                  key={breedName}
                  selected={selectedIndex === index }
                  onClick={(e: React.MouseEvent) => handleListItemClick(index, breedName)}
                  >
                    <ListItemIcon>
                    <PetsIcon />
                  </ListItemIcon>
                  <ListItemText primary={getListItemDescription(breedName)} sx={{ textTransform: 'capitalize' }} />
                  </ListItemButton>
                  <Divider />
                </>                
              )
            })
          }
        </List>
      </Box>
    </StyledContainer>
  )
}

export default BreedList