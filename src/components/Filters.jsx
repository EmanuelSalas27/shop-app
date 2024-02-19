import { useState } from "react"
import { useFilters } from "../hooks/useFilters";

export default function Filters(){
    

    const {filters,setFilters} = useFilters()
    
    function handleChangeMinPrice(e){
        setFilters(prevState=>({
            ...prevState,
            minPrice:e.target.value
        }))
    }

    function handleChangeCategory(e){
        setFilters(prevState=>({
            ...prevState,
            category:e.target.value
        }))
    }


    return(
        <section>
            <div>
                <label htmlFor="price">Price</label>
                <input type="range"id="price" min="0" max="1000" onChange={handleChangeMinPrice} />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value="all">all</option>
                    <option value="laptops">laptops</option>
                    <option value="smartphones">smartphones</option>
                </select>
            </div>
        </section>
    )
}