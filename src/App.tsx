import { Provider } from 'react-redux';
import './App.css';
import TextButton from './store/shared/components/TextButton';
import configureAppStore from './store/store';

const store = configureAppStore();

function App() {
  return (
    <Provider store={store}>
      <TextButton text="aaaaaaaaaaaaa"></TextButton>
    </Provider>
  );
}

export default App;
