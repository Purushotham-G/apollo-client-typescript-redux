import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Demo from './component/Demo';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { client } from './Graphql/client';
import { CustomFields } from './component/CustomFields';
import store from './Redux/store';
import Test from './React-Hook/Test';

function App() {
  return (
   <>
    <Provider store= {store}>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Routes>
            <Route path='/' element={<Demo />} />
            <Route path='/1' element={<CustomFields />} />
            <Route path='/2' element={<Test />} />
          </Routes>
        </ApolloProvider>
      </BrowserRouter>
      </Provider>
   </>
  );
}

export default App;
