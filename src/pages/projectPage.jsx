import { Helmet } from 'react-helmet-async';

import { ProjectView } from 'src/sections/products/view';

// ----------------------------------------------------------------------

export default function projectPage() {
  return (
    <>
      <Helmet>
        <title> Products | Minimal UI </title>
      </Helmet>

      <ProjectView />
    </>
  );
}
