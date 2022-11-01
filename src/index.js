import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/Reducer/configStore'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BaiTapVePhim from './BaiTapVePhim/BaiTapVePhim';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 <BrowserRouter>
  <Routes>
    <Route path='baitapvephim' element={<BaiTapVePhim/>}></Route>
  </Routes>
  </BrowserRouter>
  </Provider>
 
);

