import Main from './Main';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { SERVER_ENDPOINT } from '@env';

axios.defaults.baseURL = SERVER_ENDPOINT;
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
