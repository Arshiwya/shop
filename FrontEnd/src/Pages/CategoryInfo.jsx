// import React, { useEffect, useState } from "react";
// import Navbar from "../Components/Header/Navbar";
// import Footer from "../Components/Footer/Footer";
// import { useParams } from "react-router-dom";

// export default function CategoryInfo() {
//   // const [productDetail, setProductsDetail] = useEffect([])
//   const { categoriesName } = useParams();

//   useEffect(() => {
//     fetch(`http://127.0.0.1:8000/api/products/${categoriesName}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//     })
//   }, []);

//   return (
//     <>
//       <Navbar />
//       {/* {
//         productDetail.map()
//       } */}

//       <Footer />
//     </>
//   );
// }

import React from 'react'

export default function CategoryInfo() {
  return (
    <div>CategoryInfo</div>
  )
}
