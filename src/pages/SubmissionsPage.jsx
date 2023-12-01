import { Helmet } from 'react-helmet-async';

import { Submissions } from 'src/sections/products/view';

// ----------------------------------------------------------------------

export default function SubmissionsPage() {
  return (
    <>
      <Helmet>
        <title> Products | Minimal UI </title>
      </Helmet>

      <Submissions />
    </>
  );
}
