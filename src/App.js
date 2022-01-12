import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import SaladShop from './components/saladShop';
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <CakeContainer />
     <HooksCakeContainer />
     <IceCreamContainer />
     <NewCakeContainer />
     <SaladShop />
    </div>
    </Provider>
  );
}

export default App;
