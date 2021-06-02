import { Provider } from 'react-redux';
import store from './store';

import TasksContainer from './components/TasksContainer';

const App = () => {
  return (
    <Provider store={store}>
      <TasksContainer />
    </Provider>
  );
};

export default App;
