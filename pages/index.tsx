import type { NextPage } from "next";
import Head from "next/head";
import Header from "../src/components/header/Header";
import FirstSect from "../src/components/section01/FirstSect";
import SecondSect from "../src/components/section02/SecondSect";
import ThirdSect from "../src/components/section03/ThirdSect";
import FifthSect from "../src/components/section05/FifthSect";
import Seo from "../src/components/Seo/Seo";
import FourthSect from "../src/components/section04/FourthSect";
import Footer from "../src/components/footer/Footer";

const Home: NextPage = () => {
  return (
    <main className={"container"}>
      <Head>
        <Seo />
        <link rel="icon" type="image/x-icon" href="/R.svg" />
        <title>Raul Henrique - Desenvolvedor Front-End</title>
      </Head>

      <Header />
      <FirstSect />
      <SecondSect />
      <ThirdSect />
      <FourthSect />
      <FifthSect />
      <Footer />
    </main>
  );
};

export default Home;
