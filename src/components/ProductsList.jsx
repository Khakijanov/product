import { useEffect, useState } from "react"
// component
import Product from "./Product";

// redux
import { useDispatch, useSelector } from "react-redux";
import { addAllDesserts } from "../features/dessertSlice";

function ProductsList() {
  const dispatch = useDispatch()
  const {allDesserts} = useSelector((state)=>state.order)
  

    useEffect(()=>{
        fetch("https://online-json-server-api.up.railway.app/project/66a0efd91d2cd3eb114435fc/desserts")
        .then((data)=> data.json())
        .then((desserts)=>dispatch(addAllDesserts(desserts.data)))
    }, [dispatch])
  return (
    <div className="lg:w-[70%] md:w-full w-full  px-0 ">
      <h1 className="text-primaryColor font-bold text-left mb-[32px] text-[28px]">Desserts</h1>

     <div className="flex items-start flex-wrap gap-5 ">
     {allDesserts && allDesserts.map((dessert)=>{
        
        return <Product key={dessert.id} dessert={dessert}/>
       })}
     </div>
    </div>
  )
}

export default ProductsList