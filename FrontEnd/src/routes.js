import Index from "./Pages/Index"
import CategoryInfo from "./Pages/CategoryInfo"
import Product from "./Pages/Product"

const routes = [
    {path:'/' , element: <Index/>},
    {path:'/category-info/:categoryName' , element: <CategoryInfo/>},
    {path:'/product-info/:producName' , element: <Product/>},


]

export default routes