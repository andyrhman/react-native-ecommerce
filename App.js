import Main from './Main';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './redux/store';

axios.defaults.baseURL = 'http://10.0.2.2:5000/api/v1/';
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
