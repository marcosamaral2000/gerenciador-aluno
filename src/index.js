import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import PushStudentPage from "./components/PushStudentPage";
import StudentDetailsPage from "./components/StudentDetailsPage";
import StudentPage from "./components/StudentPage";
import ModalPage from "./components/ModalPage";
import AppPage from './components/AppPage';
import LogarPage from './components/LogarPage';
import LoginPage from './components/LoginPage';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <AppPage />,
      children: [
      
    {
      index: true,
    element: <App />
  },
  {
path: "/logarPage",
element: <LogarPage />
  },
  {
path: "/loginPage",
element: <LoginPage />
  },
  {
path: "/studentPage",
element: <StudentPage />
  },
  {
path: "/pushStudentPage",
element: <PushStudentPage />
  },
  {
path: "/modalPage",
element: <ModalPage />
  },
{
  path: "/studentDetailsPage",
  element: <StudentDetailsPage />
}
      ]
}
]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
