import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import NotFound from "./pages/NotFound";
import Tool from "./pages/Tool";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "",
          element: <Tool />,
        },
        // {
        //   path: "trace",
        //   element: <Tool />,
        // },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
