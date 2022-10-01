import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header/Header";
import FirstSect from "../components/section01/FirstSect";
import SecondSect from "../components/section02/SecondSect";
import ThirdSect from "../components/section03/ThirdSect";
import FourthSect from "../components/section04/FourthSect";

const Home: NextPage = () => {
  return (
    <main className={"container"}>
      <Head>
        <link rel="canonical" href="https://raul-henrique-dev.vercel.app/" />
        <meta
          name="keywords"
          content="Front-End, Raul Henrique, Dev Raul Henrique, Desenvolvedor Raul Henrique, Desenvolvedor Front-End, Dev front, web design, raul, henrique"
        ></meta>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Estudante de Análise e Desenvolvimento de Sistemas no Instituto Federal de Ciência e Tecnologia de Pernambuco, (IFPE), tenho 22 anos, e sou um Desenvolvedor Front-End, bastante dedicado, anti-frágil, criativo e, com muito amor pelo que faço!, Vamos bater um papo?"
        />
        <meta name="google-site-verification" content="xRK8Fmlx2OrV0hN-K7k9lpxVBnamDLzWrUUXu0wPNxQ" />
        <link rel="icon" type="image/x-icon" href="/logotitle.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              name: "Raul Henrique - Desenvolvedor Front-End",
              description:
                "Estudante de Análise e Desenvolvimento de Sistemas no Instituto Federal de Ciência e Tecnologia de Pernambuco (IFPE), tenho 22 anos e sou um Desenvolvedor Front-End bastante dedicado, anti-frágil, criativo e com muito amor pelo que faço! Vamos bater um papo?",
              url: "https://raul-henrique-dev.vercel.app/",
              logo: "https://raul-henrique-dev.vercel.app/_next/image?url=%2FlogoRH.png&w=128&q=75",
            }),
          }}
        ></script>
        <title>Raul Henrique - Desenvolvedor Front-End</title>
      </Head>

      <Header />
      <FirstSect />
      <SecondSect />
      <ThirdSect />
      <FourthSect />
    </main>
  );
};

export default Home;
