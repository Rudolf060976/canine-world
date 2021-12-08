import axios from 'axios'

export const fetchAllBreeds = async (): Promise<BreedsResponseType> => {

  const response = await axios.get('https://dog.ceo/api/breeds/list/all')

  return response.data

}
