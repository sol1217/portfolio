import Image from 'next/image'
import styled from 'styled-components'
import { HiMiniViewfinderCircle } from 'react-icons/hi2'

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`

export const ProjectText = styled.h2`
  font-size: 40px;
  background: linear-gradient(45deg, #bd609b, #8782b7, #29b3d3, #29becd);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
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
`

export const Images = styled(Image)`
  border-radius: 20px;
`

export const TitleProject = styled.span`
  font-size: 30px;
  border-bottom: 2px solid blueviolet;
  padding: 10px 10px 10px 0;
  text-align: center;
`

export const DescriptionBox = styled.div`
  display: flex;

  flex-direction: column;
`

export const ViewBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
`

export const DescriptionText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`

export const ViewProject = styled(HiMiniViewfinderCircle)`
  color: darkturquoise;
`
