import Image from 'next/image'
import styled from 'styled-components'
import { HiMiniViewfinderCircle } from 'react-icons/hi2'
import { FaLongArrowAltRight } from 'react-icons/fa'


export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 980px) {
    gap: 20px;
    margin-top: 140px;
  }
`

export const ProjectText = styled.h2`
  font-size: 40px;
  background: linear-gradient(45deg, #bd609b, #8782b7, #29b3d3, #29becd);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  
  @media (max-width: 520px) {
    font-size: 30px;
  }
`

export const ItemProjectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`

export const ItemBox = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border-radius: 10px;
  width: 60em;
  height: 460px;
  overflow: hidden;

  @media (max-width: 980px) {
    flex-direction: column;
    height: 620px;
    padding: 20px;
  }
`

export const Images = styled(Image)`
  border-radius: 20px;

  @media (max-width: 980px) {
    width: 400px;
    height: 200px;
  }
  
  @media (max-width: 520px) {
    width: 350px;
    height: 200px;
  }

  @media (max-width: 430px) {
    width: 300px;
  }

  @media (max-width: 350px) {
    width: 200px;
  }
`

export const TitleProject = styled.span`
  font-size: 30px;
  border-bottom: 2px solid blueviolet;
  padding: 10px 10px 10px 0;
  text-align: center;

  @media (max-width: 980px) {
    margin-bottom: 10px;
  }

  @media (max-width: 430px) {
    font-size: 20px;
  }
  
`

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 980px) {
    width: 500px;
    padding: 10px;
  }

  @media (max-width: 520px) {
    justify-content: center;
    align-items: center;
  }
`

export const ViewBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;

  @media (max-width: 980px) {
   justify-content: center;
    align-items: center;
  }
`

export const DescriptionText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  @media (max-width: 980px) {
    -webkit-box-shadow: inset 0px 0px 12px 0px rgba(0,0,0,0.82);
    -moz-box-shadow: inset 0px 0px 12px 0px rgba(0,0,0,0.82);
    box-shadow: inset 0px 0px 12px 0px rgba(0,0,0,0.82);
    padding: 10px;
  }

  @media (max-width: 560px) {
    font-size: 15px;
  }

  @media (max-width: 520px) {
    width: 400px;
  }

  @media (max-width: 430px) {
    width: 300px;
  }

  @media (max-width: 350px) {
    width: 270px;
    font-size: 12px;
  }
`

export const FaLongArrow = styled(FaLongArrowAltRight)`
  @media (max-width: 980px) {
    display: none;
  }
`

export const ViewProject = styled(HiMiniViewfinderCircle)`
  color: darkturquoise;
`
