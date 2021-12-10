import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface FavoriteStateType {
  favoriteName: string;
  favoriteImage: string;
  breedName: string;  
}

const initialState: FavoriteStateType = {
  favoriteName: '',
  favoriteImage: '',
  breedName: ''
};

export const favoriteSubBreedSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ name: string, image: string, breedName: string}>) => {      
      state.favoriteName = action.payload.name;
      state.favoriteImage = action.payload.image;
      state.breedName = action.payload.breedName;
    },
    clearFavorite: (state) => {
      state.favoriteName = '';
      state.favoriteImage = '';
      state.breedName = '';
    }
  }
});


export const { addFavorite, clearFavorite } = favoriteSubBreedSlice.actions

export const selectFavorite = (state: RootState): FavoriteStateType => state.favorite

export default favoriteSubBreedSlice.reducer

