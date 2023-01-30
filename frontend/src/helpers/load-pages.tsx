// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory

export async function loadPages(id: number) {
  // Call an external API endpoint to get pages
  const {NEXT_PUBLIC_STRAPI_URL} = process.env;

  const pagesResult = await fetch(`${NEXT_PUBLIC_STRAPI_URL}/api/pages/${id}?populate=deep`);
  const dataPage = await pagesResult.json();

  return dataPage;
}
