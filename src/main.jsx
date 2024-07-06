import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import './index.css'
import Overview from './Tabs/Overview/Overview.jsx'
import Transactions from './Tabs/Transactions/Transactions.jsx';
import Settings from './Tabs/Settings/Settings.jsx';
import ChangeUN from './Tabs/Settings/Tabs/ChangeUN.jsx';
import SignIn from './Authentication/SignIn.jsx';

const router = createBrowserRouter([
  {path: "/", element: <SignIn/>},
  {path: "/home", element: <Overview/>},
  {path: "/transactions", element: <Transactions/>},
  {path: "/settings", element: <Settings/>},
  {path: "/settings/change-un", element: <ChangeUN/>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
