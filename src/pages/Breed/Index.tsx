import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectBreedList } from '../../redux/slices/breeds';
import { actionFetchAndStoreSubBreeds, actionFetchBreeds } from '../../redux/async-actions'
import { selectIsFetching, selectFetchError, selectFetchErrorMessage } from '../../redux/slices/fetching'
import { useNavigate } from 'react-router-dom'
import {
  StyledContainer,
  StyledTitle,
  StyledBreedName,
  StyledCenterArea
} from './styles'
import Loading from '../../components/Loaging';
import SubBreedList from './SubBreedList';
import Layout from '../../components/Layout';

const BreedPage: React.FC = () => {

  const { breedName } = useParams()

  const breedList = useAppSelector(selectBreedList)

  const isFetching = useAppSelector(selectIsFetching)

  const isError = useAppSelector(selectFetchError)

  const errorMessage = useAppSelector(selectFetchErrorMessage)

  const dispatch = useAppDispatch()

  const navigate = useNavigate()


  const noBreedsLoaded = Object.keys(breedList).length === 0
  // THE FOLLOWING useEffect PERMITS TO LOAD Breeds IF THE USER REFRESHES THIS PAGE..
  useEffect(() => {

    const fetch = async () => {

      if (noBreedsLoaded) {  
        await dispatch(actionFetchBreeds())
        await dispatch(actionFetchAndStoreSubBreeds(breedName as string))
        return
      }    

      await dispatch(actionFetchAndStoreSubBreeds(breedName as string))

    }

    fetch();
    
  }, [])

  
  if (isFetching || noBreedsLoaded) return <Loading />

  if (isError) {
    return <h1>{`Error: ${errorMessage}`}</h1>
  }

  const subBreeds = breedList[breedName as string]
  // IF THE USER LOADS THE PAGE WITH A NON EXISTING BREED NAME, WE REDIRECT TO 404 PAGE
  if (!subBreeds) {
    navigate('/404')  
    return null  
  }   
  

  return (
    <Layout>
      <StyledContainer>
        <StyledCenterArea>
          <StyledTitle>
            Conoce a la Familia Canina:
            <StyledBreedName>
              {breedName}
            </StyledBreedName>
          </StyledTitle>
          <SubBreedList />
        </StyledCenterArea>        
      </StyledContainer>
    </Layout>    
  )
}

export default BreedPage