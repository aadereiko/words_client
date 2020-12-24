import { Provider } from 'react-redux';
import './App.css';
import { Main } from './components/Main/Main';
import configureAppStore from './store/store';

const store = configureAppStore();

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
