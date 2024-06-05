import Navbar from "./components/Navbar/Navbar";
import "./layout.scss";
import HomePage from "./routes/Home/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/ListPage/ListPage";
import Layout from "./routes/layout/Layout";
import Login from "./routes/Login/Login";
import SingePage from "./routes/SinglePage/SingePage";
import ProfilePage from "./routes/ProfilePage/ProfilePage";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Layout />,
         children: [
            {
               path: "/",
               element: <HomePage />,
            },
            {
               path: "/list",
               element: <ListPage />,
            },
            {
               path: "/:id",
               element: <SingePage />,
            },
            {
               path: "/login",
               element: <Login />,
            },
            {
               path: "/profile",
               element: <ProfilePage />,
            },
         ],
      },
      {
         path: "/",
         element: <ListPage />,
      },
   ]);

   return <RouterProvider router={router} />;
}

export default App;
