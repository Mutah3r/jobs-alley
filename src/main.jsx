import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Statistics from './components/Statistics/Statistics'
import Blog from './components/Blog/Blog'
import { loadJobData } from './loaders/loadJobData'
import JobDetails from './components/JobDetails/JobDetails'
import ErrorPage from './components/ErrorPage/ErrorPage'
import { getAppliedJobs } from '../public/fakeDB'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: loadJobData,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs />,
        loader: getAppliedJobs
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/job/:id',
        element: <JobDetails />,
        loader: ( {params} ) => params.id
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
