import { GetServerSideProps } from "next";
import Head from "next/head";
import { Header, Hero, Row } from "src/components";
import { IMovie } from "src/interfaces/app.interface";
import { API_REQUEST } from "src/services/api.service";

export default function Home({ trending }: HomeProps): JSX.Element {
  return (
    <div className="relative h-[200vh]">
      <Head>
        <title>Home - Sammi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Hero trending={trending} />
        <section>
          {/* Row */}
          {/* BigRow */}
          {/* Row */}
          {/* BigRow */}
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const trending = await fetch(API_REQUEST.trending).then((res) => res.json());

  return {
    props: {
      trending: trending.results,
    },
  };
};

interface HomeProps {
  trending: IMovie[];
}
