import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import ProductsPage from "./ProductsPage";
import ProductPage from "./pages/ProductPage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:slug",
        element: <ProductPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
