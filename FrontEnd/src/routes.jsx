import Index from "./Pages/Index";
import CategoryInfo from "./Pages/CategoryInfo";
import ProductInfo from "./Pages/ProductInfo";
import Order from "./Pages/Faq/Order";
import Faq from "./Pages/Faq/Faq";
import FaqIndex from "./Pages/Faq/FaqIndex";
import Delivery from "./Pages/Faq/Delivery";
import Return from "./Pages/Faq/Return";
import Chance from "./Pages/Faq/Chance";
import Guarantee from "./Pages/Faq/Guarantee";
import OrderEdit from "./Pages/Faq/OrderEdit";
import TrackOrder from "./Pages/Faq/TrackOrder";
import CommentsRules from "./Pages/Faq/CommentsRules";
import Peyment from "./Pages/Faq/Peyment";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/categories/:categoriesName", element: <CategoryInfo /> },
  { path: "/products/:productsName", element: <ProductInfo /> },
  {
    path: "/faq",
    element: <FaqIndex />,
    children: [
      { path: "/faq", element: <Faq /> },
      { path: "order", element: <Order /> },
      { path: "delivery", element: <Delivery /> },
      { path: "return", element: <Return /> },
      { path: "chance", element: <Chance /> },
      { path: "guarantee", element: <Guarantee /> },
      { path: "edit-order", element: <OrderEdit /> },
      { path: "track-order", element: <TrackOrder /> },
      { path: "comments", element: <CommentsRules /> },
      { path: "payment", element: <Peyment /> },
    ],
  },
];

export default routes;

// http://127.0.0.1:8000/api/products/
