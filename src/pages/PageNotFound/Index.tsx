import React from 'react'
import Layout from '../../components/Layout'
import image404 from '../../shared/images/404.jpeg'
import {
  StyledContainer,
  StyledImage
} from './styles'

const PageNotFound: React.FC = () => {
  return (
    <Layout>
      <StyledContainer>
        <StyledImage src={image404} alt='Dog-Image' />
      </StyledContainer>
    </Layout>  
  )
}

export default PageNotFound