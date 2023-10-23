import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer";
import {Provider} from "react-redux";
import { store } from './Store/Store';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Header/>
            <Main/>
            <Footer/>
        </Provider>
    </div>
  );
}

export default App;
