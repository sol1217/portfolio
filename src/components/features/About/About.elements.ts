import Image from 'next/image'
import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;

  @media (max-width: 800px) {
    height: 600px;
  }
`

export const ImageProfile = styled(Image)`
  border-radius: 50%;

  @media (max-width: 1040px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 440px) {
    width: 160px;
    height: 160px;
  }
`

export const ProfessionalInformationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  
  @media (max-width: 920px) {
    width: 90vw;
    padding: 20px;
  }

  @media (max-width: 720px) {
    flex-direction: column;
  }
`

export const InformationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 40em;
  padding: 5px;

  @media (max-width: 920px) {
    width: 90%;
  }

  @media (max-width: 720px) {
    align-items: center;
    width: inherit;
  }

  
  
`

export const ExperienceText = styled.span`
  border-bottom: 2px solid blueviolet;
  font-size: 30px;
  padding: 10px 10px 10px 0;


  @media (max-width: 1040px) {
   font-size: 25px;
  }

  @media (max-width: 920px) {
    font-size: 20px;
  }

  @media (max-width: 440px) {

    font-size: 15px;
  }
`

export const WhoIamText = styled.p`
  @media (max-width: 440px) {
    font-size: 12px;
  }
`

export const ExperienceBox = styled.span`
  font-size: 20px;
  margin-top: 15px;
  font-size: 21px;


  @media (max-width: 1040px) {
    font-size: 17px;
  }

  @media (max-width: 920px) {
    font-size: 15px;
    width: 80%;
  }

  @media (max-width: 440px) {
    font-size: 12px;
  }

  @media (max-width: 320px) {
    text-align: center;
  }
 
`
