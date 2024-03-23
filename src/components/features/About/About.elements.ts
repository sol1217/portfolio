import Image from 'next/image'
import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 75px;
`

export const ImageProfile = styled(Image)`
  border-radius: 50%;
`

export const ProfessionalInformationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const InformationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 40em;
  padding: 5px;
`

export const ExperienceText = styled.span`
  border-bottom: 2px solid blueviolet;
  font-size: 30px;
  padding: 10px 10px 10px 0;
`

export const ExperienceBox = styled.span`
  font-size: 20px;
  margin-top: 15px;
`
