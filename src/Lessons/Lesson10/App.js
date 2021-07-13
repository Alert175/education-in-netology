import Counter from './components/Counter';

import { Provider } from 'react-redux';
import store from './store';

const Lesson10 = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Lesson10;
