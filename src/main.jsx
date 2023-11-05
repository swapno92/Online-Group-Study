import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddAssignment from './components/AddAssignment.jsx';
import UpdateAssignment from './components/UpdateAssignment.jsx';
import Home from './components/Home.jsx';
import Root from './components/Root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addAssignment",
        element: <AddAssignment></AddAssignment>
      },
      {
        path: "/updateAssignment",
        element: <UpdateAssignment></UpdateAssignment>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
