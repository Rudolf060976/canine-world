import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface SelectedBreedType {  
  breedName: string;
  breedImage: string;
  subBreeds: {
    name: string;
    image: string;
  }[]  
}

interface SelectedSubBreedType {
  name: string;
  breedName: string;
  images: string[];
  isBreed: boolean;
}

interface BreedsStateType {
  list: Record<string, string[]>;
  selectedBreed: SelectedBreedType;
  selectedSubBreed: SelectedSubBreedType;
}

const initialState: BreedsStateType = {
  list: {},
  selectedBreed: {
    breedName: '',
    breedImage: '',
    subBreeds: []
  },
  selectedSubBreed: {
    name: '',
    breedName: '',
    images: [],
    isBreed: false
  }
};

export const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    setBreeds: (state, action: PayloadAction<Record<string, string[]>>) => {
      state.list = action.payload    
    },    
    setSelectedBreed: (state, action: PayloadAction<SelectedBreedType>) => {
      state.selectedBreed = action.payload
    },
    clearSelectedBreed: (state) => {
      state.selectedBreed = {
        breedName: '',
        breedImage: '',
        subBreeds: []
      } 
    },
    setSelectedSubBreed: (state, action: PayloadAction<SelectedSubBreedType>) => {
      state.selectedSubBreed = action.payload
    },
    clearSelectedSubBreed: (state) => {
      state.selectedSubBreed = {
        name: '',
        breedName: '',
        images: [],
        isBreed: false
      }
    }
  }
});


export const { setBreeds, setSelectedBreed, clearSelectedBreed, setSelectedSubBreed, clearSelectedSubBreed } = breedsSlice.actions

export const selectBreedList = (state: RootState): Record<string, string[]> => state.breeds.list

export const selectSelectedBreed = (state: RootState): SelectedBreedType => state.breeds.selectedBreed

export const selectSelectedSubBreed = (state: RootState): SelectedSubBreedType => state.breeds.selectedSubBreed

export default breedsSlice.reducer

