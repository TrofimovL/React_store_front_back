import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";

export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Context.Provider value={{
          userStore: new UserStore(),
          deviceStore: new DeviceStore()
      }}>
          <App />
      </Context.Provider>
  </React.StrictMode>
);

