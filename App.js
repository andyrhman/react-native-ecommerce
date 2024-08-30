import Main from './Main';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { StripeProvider } from "@stripe/stripe-react-native";
import { SERVER_ENDPOINT, STRIPE_API_PUB_KEY } from '@env';

axios.defaults.baseURL = SERVER_ENDPOINT;
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5,
      }}
      merchantIdentifier="tataran"
      publishableKey={STRIPE_API_PUB_KEY}
    >
      <Provider store={store}>
        <Main />
      </Provider>
    </StripeProvider>
  );
}
