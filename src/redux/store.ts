import { configureStore } from '@reduxjs/toolkit'
import breedsReducer from './slices/breeds'
import favoriteSubBreedReducer from './slices/favoriteSubBreed'
import fetchingReducer from './slices/fetching'

export const store = configureStore({
  reducer: {
    breeds: breedsReducer,
    favorite: favoriteSubBreedReducer,
    fetching: fetchingReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch