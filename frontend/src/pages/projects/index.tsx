import Head from 'next/head';
import { loadPages } from '@/helpers/load-pages';

const ProjectsPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <h1 className="mx-auto max-w-sm text-center font-bold text-4xl">
        Projects
      </h1>
    </>
  );
}

export default ProjectsPage;

export const getStaticProps = async () => {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const dataPage = await loadPages(1);

  return {
    props: {
      page: dataPage,
    },
    revalidate: 10, // In seconds
  };
};
