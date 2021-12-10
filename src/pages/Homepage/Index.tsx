import React, { useEffect } from 'react'

import FavoriteSubBreed from '../../components/FavoriteSubBreed'
import { selectIsFetching, selectFetchError, selectFetchErrorMessage } from '../../redux/slices/fetching'
import { selectBreedList } from '../../redux/slices/breeds'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  StyledContainer,
  StyledLeftArea,
  StyledRightArea
} from './styles'
import { actionFetchBreeds } from '../../redux/async-actions'
import BreedList from './BreedList'
import Loading from '../../components/Loaging'
import Layout from '../../components/Layout'

const Homepage: React.FC = () => {

  const isFetching = useAppSelector(selectIsFetching)

  const isError = useAppSelector(selectFetchError)

  const errorMessage = useAppSelector(selectFetchErrorMessage)

  const breedList = useAppSelector(selectBreedList)

  const dispatch = useAppDispatch()

  const noBreedsLoaded = Object.keys(breedList).length === 0

  useEffect(() => {
    if (noBreedsLoaded) {  
      dispatch(actionFetchBreeds())
    }    
  }, [])

  if (isFetching) return <Loading />

  if (isError) {
    return <h1>{`Error: ${errorMessage}`}</h1>
  }

  
  return (
    <Layout>
      <StyledContainer>
        <StyledLeftArea>
          <BreedList list={breedList} />
        </StyledLeftArea>
        <StyledRightArea>
          <FavoriteSubBreed />
        </StyledRightArea>    
      </StyledContainer>
    </Layout>
    
  )
}

export default Homepage