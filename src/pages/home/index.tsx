import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import PreviewImg from '../../assets/app_preview.png'
import Image from 'next/image'
import { ClaimUserName } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUserName />
      </Hero>
      <Preview>
        <Image
          src={PreviewImg}
          height={400}
          quality={100}
          priority
          alt="Calendario"
        />
      </Preview>
    </Container>
  )
}
