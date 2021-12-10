import { AppDispatch } from '../store'
import {
  setBreeds,
  setSelectedBreed
} from '../slices/breeds'
import {
  setIsFetching,
  setFetchError,
  setFetchErrorMessage
} from '../slices/fetching'
import services from '../../services'


export const actionFetchBreeds = () => async (dispatch: AppDispatch): Promise<void> => {

  dispatch(setIsFetching(true))

  try {
    const response = await services.fetchAllBreeds()

    dispatch(setFetchError(false))
    dispatch(setFetchErrorMessage(''))
    dispatch(setBreeds(response.message))

    setTimeout(() => {
      dispatch(setIsFetching(false))
    }, 200);    
    
  } catch (error: any) {
    dispatch(setIsFetching(false))
    dispatch(setFetchError(true))
    if (error.message) dispatch(setFetchErrorMessage(error.message))
  }
} 
// THIS ASYNC ACTION CREATOR FETCHES SUB-BREEDS AND STORE THEM IN REDUX WITH THEIR IMAGE.
export const actionFetchAndStoreSubBreeds = (breedName: string) => async (dispatch: AppDispatch): Promise<void> => {

  dispatch(setIsFetching(true))

  try {
    const subBreedsResponse = await services.fetchAllSubBreedsByBreed(breedName)

    const subBreedsArray = subBreedsResponse.message

    if (subBreedsArray.length === 0) {

      const breedImageResponse = await services.fetchRandomImageByBreed(breedName)

      const breedImage = breedImageResponse.message

      dispatch(setSelectedBreed({
        breedName,
        breedImage,
        subBreeds: []
      }))

    } else {

      const subBreedsImagesResponse = await services.fetchOneImageForEverySubBreed(breedName, subBreedsArray)

      const subBreedsImagesArray = subBreedsImagesResponse.map(response => response.message)

      const subBreeds = subBreedsArray.map((subBreedName, index) => {

        return {
          name: subBreedName,
          image: subBreedsImagesArray[index]
        }

      })

      dispatch(setSelectedBreed({
        breedName,
        breedImage: '',
        subBreeds
      }))

    }

    dispatch(setFetchError(false))
    dispatch(setFetchErrorMessage(''))
    
    setTimeout(() => {
      dispatch(setIsFetching(false))
    }, 200);    
    
  } catch (error: any) {
    dispatch(setIsFetching(false))
    dispatch(setFetchError(true))
    if (error.message) dispatch(setFetchErrorMessage(error.message))
  }
} 
