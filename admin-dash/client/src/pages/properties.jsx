import { Helmet } from 'react-helmet-async';
import { PropertyView } from '../sections/properties/view';

// ----------------------------------------------------------------------

export default function PropertyPage() {
  return (
    <>
      <Helmet>
        <title> Properties | Leo Glamping</title>
      </Helmet>

      <PropertyView />
    </>
  );
}

