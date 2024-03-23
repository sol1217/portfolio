import Link from 'next/link'
import { FaGithubAlt } from 'react-icons/fa'
import { FaLongArrowAltRight } from 'react-icons/fa'

import chat from '@assets/chat.png'
import mobilApp from '@assets/mobil-app.png'
import segway from '@assets/segway.png'

import {
  Images,
  ItemBox,
  ViewBox,
  ProjectText,
  ViewProject,
  TitleProject,
  DescriptionBox,
  ItemProjectBox,
  DescriptionText,
  ProjectContainer,
} from './Projects.elements'

export const Projects = () => {
  return (
    <ProjectContainer>
      <ProjectText>Projects Created</ProjectText>
      <ItemProjectBox>
        <ItemBox>
          <Images src={segway} alt="Project Segway" width={500} height={300} />
          <FaLongArrowAltRight fontSize={500} />
          <DescriptionBox>
            <ViewBox>
              <TitleProject>Segway powersports</TitleProject>
              <Link href="https://github.com/sol1217/segway-powersports">
                <FaGithubAlt fontSize={30} style={{ color: 'deeppink' }} />
              </Link>
              <Link href="https://www.segwaypowersportscr.com/">
                <ViewProject fontSize={30} />
              </Link>
            </ViewBox>
            <DescriptionText>
              Simple Page designed using modern frontend technologies like Next js, Vercel,
              Typescript, Javascript, HTML, CSS, a solid framework for building modern websites. A
              responsive design is implemented to ensure that the page is accessible and adapts
              correctly to different devices. Features: Show vehicle catalog, Vehicle quote,
              Shopping Cart, Company information and Contact Form.
            </DescriptionText>
          </DescriptionBox>
        </ItemBox>

        <ItemBox>
          <Images src={mobilApp} alt="Project Segway" width={500} height={300} />
          <FaLongArrowAltRight fontSize={500} />
          <DescriptionBox>
            <ViewBox>
              <TitleProject>Bar Management App</TitleProject>
              <Link href="https://github.com/sol1217/Bar-Management-App-client.git">
                <FaGithubAlt fontSize={30} style={{ color: 'deeppink' }} />
              </Link>
            </ViewBox>
            <DescriptionText>
              Is an innovative mobile application developed with React Native, javascript, node js,
              express, Reservation Management: Allows users to manage table and event reservations
              efficiently. Simplifies the operational management of bars and similar establishments.
              With its extensive feature set and intuitive interface, this application becomes an
              indispensable ally for owners and managers seeking to optimize efficiency and maximize
              the success of their businesses in the hospitality industry.
            </DescriptionText>
          </DescriptionBox>
        </ItemBox>

        <ItemBox>
          <Images src={chat} alt="Project Segway" width={500} height={300} />
          <FaLongArrowAltRight fontSize={500} />
          <DescriptionBox>
            <ViewBox>
              <TitleProject>Virtual Chat page</TitleProject>
              <Link href="https://github.com/sol1217/chat-phone-client">
                <FaGithubAlt fontSize={30} style={{ color: 'deeppink' }} />
              </Link>
              <Link href="https://github.com/sol1217/chat-phone-server.git">
                <ViewProject fontSize={30} />
              </Link>
            </ViewBox>
            <DescriptionText>
              A page with a simple chat version. This application allows users to communicate
              instantly and in real time with other users through an integrated chat system.
              Facilitates quick and effective communication between participants. Messages are
              delivered to the recipient in real time, ensuring a smooth and lag-free chat
              experience. created with React js, Typescript, websockets, frontend side and server
              side.
            </DescriptionText>
          </DescriptionBox>
        </ItemBox>
      </ItemProjectBox>
    </ProjectContainer>
  )
}
