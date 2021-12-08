import axios from 'axios'

export const fetchAllSubBreedsByBreed = async (breed: string): Promise<SubBreedsResponseType> => {

  const response = await axios.get(`https://dog.ceo/api/breed/${breed}/list`)

  return response.data

}

export const fetchRandomImageBySubBreed = async (breed: string, subBreed: string): Promise<SubBreedRandomImageResponseType> => {

  const response = await axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`)

  return response.data

}

export const fetchAllImagesBySubBreed = async (breed: string, subBreed: string): Promise<SubBreedImagesResponseType> => {

  const response = await axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images`)

  return response.data

}


