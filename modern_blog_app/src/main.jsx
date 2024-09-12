import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import Services from "./pages/Services/Services.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import SingleBlog from "./pages/SingleBlog/SingleBlog.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogs/${params.id}`),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
