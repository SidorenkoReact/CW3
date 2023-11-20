import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import { store } from './Store/Store';
import {AppRouter} from "./Components/AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
