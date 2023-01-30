import Head from 'next/head';
import { loadPages } from '@/helpers/load-pages';
import Image from 'next/image';

const AboutPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <h1 className="mx-auto max-w-sm text-center font-bold text-4xl">
        {props.page.data.attributes.title}
      </h1>

      <section className="px-11">
        <p className="py-8">{props.page.data.attributes.intro}</p>

        <Image
            alt="Next.js logo"
            src={`${props.imagePageIntro}`}
            width={1200}
            height={400}
            className="w-full shadow-md"
          />
      </section>
    </>
  );
}

export default AboutPage;

export const getStaticProps = async () => {
  const {NEXT_PUBLIC_STRAPI_URL} = process.env;
  
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const dataPage = await loadPages(2);

  const imagePageIntro = `${NEXT_PUBLIC_STRAPI_URL}`+ dataPage.data.attributes.image.data.attributes.formats.medium.url;

  return {
    props: {
      page: dataPage,
      imagePageIntro,
    },
    revalidate: 10, // In seconds
  };
};
