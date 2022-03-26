import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Userstore from "./store/Userstore";
import BookStore from "./store/BookStore";

export const context = createContext(null)

ReactDOM.render(
    <context.Provider value={{
        user: new Userstore(),
        book: new BookStore(),
    }}>
        <App />
    </context.Provider>,
  document.getElementById('root')
);