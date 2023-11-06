import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateAssignment from './components/CreateAssignment.jsx';
import Home from './components/Home.jsx';
import Root from './components/Root.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Assignment from './Assignment.jsx';
import UpdateAssignment from './components/UpdateAssignment.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import AssignmentDetails from './AssignmentDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/assignment",
        element: <Assignment></Assignment>,
        loader: () => fetch('http://localhost:5000/assignment')
      },
      {
        path: "/createAssignment",
        element: <CreateAssignment></CreateAssignment>
      }
    ]
  },
  {
    path: 'assignment/detailsAssignments/:id',
    element: <AssignmentDetails></AssignmentDetails>,
    loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
  },
  {
    path: "assignment/updateAssignment/:id",
    element: <UpdateAssignment></UpdateAssignment>,
    loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "register",
    element: <Register></Register>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
