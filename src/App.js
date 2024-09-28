import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import mainStore from './constants/mainStore';

function App() {
  return (
      <Provider store={mainStore}>
        <Body/>
      </Provider>
  );
}

export default App;
