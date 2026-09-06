import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
        path: "/",
        element: <Login />,
    },
    {
        path:"/register",
        element: <Register />,
    }
  ]
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
