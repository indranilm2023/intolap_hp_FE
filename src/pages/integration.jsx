import { Helmet } from 'react-helmet-async';

import { IntegrationView } from 'src/sections/Integration/views';

// ----------------------------------------------------------------------

export default function IntegrationPage() {
  return (
    <>
      <Helmet>
        <title> Integration | Minimal UI </title>
      </Helmet>

      <IntegrationView />
    </>
  );
}
