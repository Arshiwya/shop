import Index from "./Pages/Index";
import CategoryInfo from "./Pages/CategoryInfo";
import Product from "./Pages/Product";
import Faq from "./Pages/Faq";
import Order from "./Pages/Faq/Order";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/category-info/:categoryName", element: <CategoryInfo /> },
  { path: "/product-info/:producName", element: <Product /> },
  { path: "/faq", element: <Faq /> },
  { path: "/order", element: <Order /> },
];

export default routes;
// http://127.0.0.1:8000/api/products/
