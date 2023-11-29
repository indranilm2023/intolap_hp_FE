import { Helmet } from 'react-helmet-async';

import { CreateProjectView } from 'src/sections/create_project';

// ----------------------------------------------------------------------

export default function CreateProjectPage() {
  return (
    <>
      <Helmet>
        <title> Create Your Project | Minimal UI </title>
      </Helmet>

      <CreateProjectView />
      
    </>
  );
}
