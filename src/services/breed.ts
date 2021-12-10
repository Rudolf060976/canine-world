import axios from 'axios'

export const fetchAllBreeds = async (): Promise<BreedsResponseType> => {

  const response = await axios.get('https://dog.ceo/api/breeds/list/all')

  return response.data

}

export const fetchRandomImageByBreed = async (breed: string): Promise<SubBreedRandomImageResponseType> => {

  const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)

  return response.data

}

export const fetchAllImagesByBreed = async (breed: string): Promise<SubBreedImagesResponseType> => {

  const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images`)

  return response.data

}

