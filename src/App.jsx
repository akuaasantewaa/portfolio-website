import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { future } from "./pages/portfolio/data-placeholder";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PortfolioLayout from "./layouts/portfolioLayout";
import Portfolio from "./pages/portfolio";
import { UserProvider } from "./contexts/UserContext";
import NotFound from "./pages/NotFound";

function App() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = future;
    if (storedUser) {
      // const parsedUser = JSON.parse(storedUser);
      setUser(storedUser);
      console.log("User---->", storedUser);
      dispatch({
        type: "LOGGED_IN_USER",
        payload: storedUser,
      });
    }
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <UserProvider>
          <PortfolioLayout />
        </UserProvider>
      ),
      children: [
        { index: true, element: <Portfolio /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
