import { Provider, connect, useDispatch } from 'react-redux';
import store from './redux/store';
import { useEffect } from 'react';
import { get_loteos, get_medidores } from './redux/actions'
import Navigation from './components/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

  

export default function App() {
  

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation/>
      </SafeAreaProvider>
    </Provider>
  );
}

