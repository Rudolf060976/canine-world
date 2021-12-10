import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

import {
  StyledContainer,
  StyledImageContainer,
  StyledImage
} from './styles'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectSelectedSubBreed } from '../../redux/slices/breeds';
import { addFavorite } from '../../redux/slices/favoriteSubBreed';


interface SubBreedPopupProps {
  isOpen: boolean;
  handleClose: () => void;
  showOnly?: boolean;
}


const SubBreedPopup: React.FC<SubBreedPopupProps> = (props: SubBreedPopupProps) => {

  const [openConfirm, setOpenConfirm] = useState(false);

  const theme = useTheme();

  const dispatch = useAppDispatch();

  const selectedSubBreed = useAppSelector(selectSelectedSubBreed);
    
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
 

  if (!selectedSubBreed.name) return null;

  const itemData = selectedSubBreed.images.map((image, index) => {
    return {
      img: image,
      title: `Image-${index + 1}`
    }
  })

  const filteredItemData = [itemData[0], itemData[1], itemData[2]];

  const handleFavoriteClick = async () => {
    
    await dispatch(addFavorite({
      name: selectedSubBreed.name,
      breedName: selectedSubBreed.breedName,
      image: selectedSubBreed.images[0] || ''
    }))
    
    setOpenConfirm(true);

  };

  return (
    <StyledContainer>
      <Dialog
        fullScreen={fullScreen}        
        open={props.isOpen}
        onClose={props.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          sx={{ textTransform: 'capitalize', textAlign: 'center'}}
        >
          {selectedSubBreed.name}
        </DialogTitle>
        <DialogContent>
          <StyledImageContainer>
            {filteredItemData.map(image => {
              return (
                <StyledImage key={image.title} src={image.img} alt={image.title} />
              )
            })}
          </StyledImageContainer>
        </DialogContent>
        <DialogActions>
          {
            !props.showOnly &&
              <Button autoFocus onClick={() => handleFavoriteClick()}>
                Esta será mi Raza Favorita!
              </Button>
          }          
          <Button onClick={() => props.handleClose()}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
        open={openConfirm} autoHideDuration={1000}
        onClose={() => setOpenConfirm(false)}
      >
        <Alert
          onClose={() => setOpenConfirm(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Has guardado tu Raza Favorita!
        </Alert>
      </Snackbar>
    </StyledContainer>
  )
}

export default SubBreedPopup;
