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

export const fetchOneImageForEverySubBreed = async (breed: string, subBreeds: string[]): Promise<SubBreedRandomImageResponseType[]> => {

  const endpointsArray = subBreeds.map(subBreed => `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`)

  const responseArray = await axios.all(endpointsArray.map(async endpoint => {

    return await axios.get(endpoint);

  })) as {
    data: SubBreedRandomImageResponseType
  }[];

  const cleanedResponse = responseArray.map(response => response.data)

  return cleanedResponse

}


