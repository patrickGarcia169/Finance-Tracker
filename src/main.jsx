import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from './Header/Header.jsx'
import './index.css'
import Overview from './Tabs/Overview/Overview.jsx'
import Transactions from './Tabs/Transactions/Transactions.jsx';
import Settings from './Tabs/Settings/Settings.jsx';

const router = createBrowserRouter([
  {path: "/", element: <Overview/>},
  {path: "/home", element: <Overview/>},
  {path: "/transactions", element: <Transactions/>},
  {path: "/settings", element: <Settings/>},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
