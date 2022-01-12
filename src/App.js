import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import SaladShop from './components/saladShop';
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     {/* <CakeContainer />
     <HooksCakeContainer />
     <IceCreamContainer />
     <NewCakeContainer />
     <SaladShop /> */}
     <UserContainer />
    </div>
    </Provider>
  );
}

export default App;
