import { AppDispatch } from '../store'
import {
  setBreeds,
} from '../slices/breeds'
import {
  setIsFetching,
  setFetchError,
  setFetchErrorMessage
} from '../slices/fetching'
import services from '../../services'


export const actionFetchBreeds = () => async (dispatch: AppDispatch): Promise<void> => {

  setIsFetching(true)

  try {
    const response = await services.fetchAllBreeds()

    dispatch(setFetchError(false))
    dispatch(setFetchErrorMessage(''))
    dispatch(setIsFetching(false))

    dispatch(setBreeds(response.message))
    
  } catch (error: any) {
    dispatch(setIsFetching(false))
    dispatch(setFetchError(true))
    if (error.message) dispatch(setFetchErrorMessage(error.message))
  }
} 

