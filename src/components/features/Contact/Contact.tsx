import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { BiLogoTelegram } from 'react-icons/bi'
import { MdOutlineMailOutline } from 'react-icons/md'

import {
  FormBox,
  EmailBox,
  InputBox,
  SendButton,
  TextContact,
  TextAreatBox,
  TitleContact,
  ContactButton,
  InformationBox,
  ContactContainer,
  ContactInformation,
} from '@features/Contact/Contact.elements'

export const Contact: React.FC<{ id: string }> = ({ id}) => {
  const form = useRef<HTMLFormElement>(null)
  const [isSent, setIsSent] = useState<boolean>(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current !== null) {
      emailjs
        .sendForm('service_f9t2hhg', 'template_u9k0m5t', form.current, {
          publicKey: 'eVV5LaeW7q_SV6WCE',
        })
        .then(
          () => {
            console.log('SUCCESS!')
            setIsSent(true)
          },
          (error) => {
            console.log('FAILED...', error.text)
          },
        )
    }
  }

  return (
    <ContactContainer id={id}>
      <TitleContact>You can contact me in this section</TitleContact>
      <InformationBox>
        <ContactInformation>
          <TextContact>Do not hesitate to contact me</TextContact>
          <ContactButton>
            <a href="https://t.me/solci29">Contact me</a>
          </ContactButton>
          <p>
            If you want to contact me you can do so by filling out the form <br />
            or visit the links below, thank you!! ☺️
          </p>
          <EmailBox>
            <MdOutlineMailOutline style={{ color: 'gray' }} fontSize={25} />
            solc0275@gmail.com
          </EmailBox>
        </ContactInformation>
        <FormBox ref={form} onSubmit={sendEmail}>
          <InputBox type="text" placeholder="Name" name="from_name" required />
          <InputBox type="email" placeholder="Email" name="from_email" required />
          <InputBox type="text" placeholder="Email subject" name="from_asunto" />
          <TextAreatBox placeholder="Text" required name="message" />
          {isSent ? (
            <SendButton type="button" disabled>
              Enviado <BiLogoTelegram />
            </SendButton>
          ) : (
            <SendButton type="submit">
              Send Message <BiLogoTelegram />
            </SendButton>
          )}
        </FormBox>
      </InformationBox>
    </ContactContainer>
  )
}
