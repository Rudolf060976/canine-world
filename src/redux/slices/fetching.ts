import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface FetchingStateType {
  isFetching: boolean;
  fetchError: boolean;
  fetchErrorMessage: string;
}

const initialState: FetchingStateType = {
  isFetching: false,
  fetchError: false,
  fetchErrorMessage: ''
};

export const fetchingSlice = createSlice({
  name: 'fetching',
  initialState,
  reducers: {
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload    
    },    
    setFetchError: (state, action: PayloadAction<boolean>) => {
      state.fetchError = action.payload
    },
    setFetchErrorMessage: (state, action: PayloadAction<string>) => {
      state.fetchErrorMessage = action.payload
    },
  }
});

export const { setIsFetching, setFetchError, setFetchErrorMessage } = fetchingSlice.actions

export const selectIsFetching = (state: RootState): boolean => state.fetching.isFetching

export const selectFetchError = (state: RootState): boolean => state.fetching.fetchError

export const selectFetchErrorMessage = (state: RootState): string => state.fetching.fetchErrorMessage

export default fetchingSlice.reducer

