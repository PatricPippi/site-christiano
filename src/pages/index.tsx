import Head from 'next/head'

import Image from 'next/image'
import Button from '../components/Button';
import { Container } from '../styles/global';

import { Header, Search, HeaderImage, HeaderLeft } from './styles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Christiano Brum</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <Header>

        <HeaderLeft>

          <h2>logo</h2>
          <h1>Melhor escolha de imobiliaria para você.</h1>

          <Search>
            <h3>Busque o melhor negócio.</h3>
            <input type="text" />
            <span>ou</span>
            <input type="text" />
            <input type="text" />
          </Search>

          <Button buttonColor="secondary" text="Ver imóveis"/>
        </HeaderLeft>

          <HeaderImage>
            <Image
              src="/header-image.jpg"
              width={500}
              height={400}
              layout="responsive"
            />
          </HeaderImage>
      </Header>
    </>
  )
}