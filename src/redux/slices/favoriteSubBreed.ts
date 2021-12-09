import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface FavoriteStateType {
  favoriteName: string
  favoriteImage: string
}

const initialState: FavoriteStateType = {
  favoriteName: '',
  favoriteImage: ''
};

export const favoriteSubBreedSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ name: string, image: string}>) => {
      state = {
        favoriteName: action.payload.name,
        favoriteImage: action.payload.image
      }      
    },
    clearFavorite: (state) => {
      state = {
        favoriteName: '',
        favoriteImage: ''
      }
    }
  }
});


export const { addFavorite, clearFavorite } = favoriteSubBreedSlice.actions

export const selectFavorite = (state: RootState): FavoriteStateType => state.favorite

export default favoriteSubBreedSlice.reducer

