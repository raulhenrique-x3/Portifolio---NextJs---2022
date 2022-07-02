import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/Header'
import FirstSect from '../components/section01/FirstSect'
import SecondSect from '../components/section02/SecondSect'
import ThirdSect from '../components/section03/ThirdSect'
import FourthSect from '../components/section04/FourthSect'

const Home: NextPage = () => {
  return (
    <main className={'container'}>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Front-End Developer Website" />
        <link rel='icon' type='image/x-icon' href='/logotitle.png'/>
        <title>Raul Henrique - Desenvolvedor Front-End</title>
      </Head>

      <Header/>
      <FirstSect/>
      <SecondSect/>
      <ThirdSect/>
      <FourthSect/>
    </main>
  )
}

export default Home
