import Stars from './Films/Components/Stars';

import Listing from './Listing/Components/Listing';
import jsonData from './Listing/JSON/data.json';

const App = () => {
  return (
    <>
      {/* <Stars count={5} /> */}
      <Listing items={jsonData} />
    </>
  );
};

export default App;
