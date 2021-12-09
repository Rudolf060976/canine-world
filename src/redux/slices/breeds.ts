import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface BreedsStateType {
  list: Record<string, string[]>;
  selectedBreed: string
}

const initialState: BreedsStateType = {
  list: {},
  selectedBreed: ''
};

export const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    setBreeds: (state, action: PayloadAction<Record<string, string[]>>) => {
      state.list = action.payload    
    },    
    setSelectedBreed: (state, action: PayloadAction<string>) => {
      state.selectedBreed = action.payload
    },
    clearSelectedBreed: (state) => {
      state.selectedBreed = ''
    }
  }
});


export const { setBreeds, setSelectedBreed, clearSelectedBreed } = breedsSlice.actions

export const selectBreedList = (state: RootState): Record<string, string[]> => state.breeds.list

export const selectSelectedBreed = (state: RootState): string => state.breeds.selectedBreed

export default breedsSlice.reducer

