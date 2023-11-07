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
import AuthProvider from './Providers/AuthProvider.jsx';
import MyAssignment from './components/MyAssignment.jsx';
// import Separet from './components/Separet.jsx';

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
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: 'myAssignments/:email',
        element: <MyAssignment></MyAssignment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignment/${params.email}`),
      }

      // {
      //   path:"separet/level",
      //   element: <Separet></Separet>,
      //   loader: ({ params }) =>
      //     fetch(`https://assignment-ten-server-obv1rxclj-swapno92.vercel.app/products/${params.name}`),
      // }

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
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
