import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import { store } from './Store/Store';
import {AppRouter} from "./Components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./HOC/AuthProvider";

function App() {
  return (
    <div className="App">
        <AuthProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </Provider>
        </AuthProvider>
    </div>
  );
}

export default App;
