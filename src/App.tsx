
import React from "react";
import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router";
import ProductsView from "./components/ProductsView";
import ProductDetailsView from "./components/ProductDetailsView";
import CartView from "./components/CartView";

// Root layout component that includes the navigation
const Layout = () => {
  return (
    <div>
      <nav style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "20px" }} role="link">Products</Link>
        <Link to="/cart" role="link">Cart</Link>
      </nav>
      <Outlet />
    </div>
  );
};

// Create the router using React Router v7 data mode
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductsView />,
      },
      {
        path: "products/:id",
        element: <ProductDetailsView />,
      },
      {
        path: "cart",
        element: <CartView />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;