import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router";
import React,{useContext} from "react";
import BreadCrum from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";


const Product=()=>{
    const{all_product}=useContext(ShopContext);
    const{productId}=useParams();
    const product=all_product.find((e)=>e.id === Number(productId));

    return(
        <div>
            <BreadCrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    )
}

export default Product;