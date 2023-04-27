import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Homepage from "./pages/homepage/Homepage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;