import Link from 'next/link'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 100vw;
  min-height: 100px;
  gap: 50px;
  position: fixed;
  background-color: rgba(210, 112, 234, 0.31);
  top: 0;
  left: 0;
  right: 0;
  font-family: serif;

  @media screen and (max-width: 680px) {
    background-color: white;
  }
`

export const NavBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
  position: relative;
  width: 90%;

  @media screen and (max-width: 680px) {
    display: none;
  }
`

export const MobilNavBox = styled.div`
  background-color: white;
  color: black;
  position: fixed;
  right: 0;
  top: 0;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  @media screen and (min-width: 680px) {
    display: none;
  }
  
`

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 10px 10px 40px;
`

export const ToggleButton = styled.div<{ $active: boolean }>`
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 99;
  color: black;

  &:hover {
    cursor: pointer;
  }

  &:before {
    content: '';
    background-color: black;
    height: 1px;
    width: 30px;
    position: absolute;
    transform-origin: 50% 50%;
    top: ${({ $active }) => ($active ? '50%' : 'calc(50% - 5px)')};
    transform: ${({ $active }) => ($active ? 'rotateZ(45deg)' : undefined)};
  }

  &:after {
    content: '';
    background-color: black;
    height: 1px;
    width: 30px;
    position: absolute;
    transform-origin: 50% 50%;
    bottom: ${({ $active }) => ($active ? 'calc(50% - 1px)' : 'calc(50% - 5px)')};
    transform: ${({ $active }) => ($active ? 'rotateZ(-45deg)' : undefined)};
  }

  @media screen and (min-width: 680px) {
    display: none;
  }
`


export const RouteMobilNav = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  font-size: 25px;
  

`

export const Links = styled.div`
  &:hover {
    color: #29b3d3;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const Buttons = styled.button`
  background-color: #604e81;
  border-radius: 20px;
  padding: 10px;
  color: white;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
  }
`

export const EmailLink = styled(Link)`
  background-color: #604e81;
  border-radius: 20px;
  padding: 7px;
  width: 150px;
  text-align: center;
  color: white;
  border: none;
  cursor: pointer;
`
