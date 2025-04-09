import Index from "./Pages/Index";
import CategoryInfo from "./Pages/CategoryInfo";
import Product from "./Pages/Product";
import Order from "./Pages/Faq/Order";
import Faq from "./Pages/Faq/Faq";
import FaqIndex from "./Pages/Faq/FaqIndex";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/category-info/:categoryName", element: <CategoryInfo /> },
  { path: "/product-info/:producName", element: <Product /> },
  {
    path: "/faq",
    element: <FaqIndex />,
    children: [
      { path: "/faq", element: <Faq /> },
      { path: "order", element: <Order /> },
    ],
  },
];

export default routes;

// http://127.0.0.1:8000/api/products/
