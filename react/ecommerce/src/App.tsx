import { createBrowserRouter, RouterProvider } from "react-router";
import "@/App.css";
import ProductsPage from "@/pages/ProductsPage";
import ProductPage from "@/pages/ProductPage";
import Layout from "@/components/Layout";
import GeneralError from "./components/GeneralError";
import PageNotFound from "./pages/PageNotFound";
import AdminLoginPage from "./pages/AdminLoginPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <GeneralError />,
    children: [
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:slug",
        element: <ProductPage />,
      },
      {
        path: "/*",
        element: <PageNotFound />,
      },
    ],
  },
  {
    children: [
      {
        path: "/admin/login",
        element: <AdminLoginPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
