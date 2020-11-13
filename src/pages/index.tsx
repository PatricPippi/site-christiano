import Head from 'next/head'

import { Header, Search, HeaderImage } from './styles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Christiano Brum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
          <h2>logo</h2>
          <h1>Melhor escolha de imobiliaria para você.</h1>
          <button>Ver imóveis</button>


          <Search>
            <h3>Busque o melhor negócio.</h3>
            <input type="text" />
            <span>ou</span>
            <input type="text" />
            <input type="text" />
          </Search>

          <HeaderImage>
            <img alt="headerimage"/>
          </HeaderImage>

      </Header>
    </>
  )
}