import { createContext, useEffect, useState } from "react"
import { products } from "../assets/assets"
import { toast } from "react-toastify"

export const Shopcontext = createContext()

const Shopcontextprovider = (props)=>{
    const currency = '$'
    const delivery_fee = 10
    const [search, setsearch] = useState("")
    const [showsearch, setshowsearch] = useState(false)
    const [cartItems, setcartItems] = useState({})

    const addtoCart = async (itemId,size)=>{
        let cartdata = {...cartItems}
        if (!size) {
            toast.error("Please select a size")
            return
        }
        if (cartdata[itemId]) {
            if (cartdata[itemId][size]) {
                cartdata[itemId][size] += 1
                toast("Product is added")
            } else {
                cartdata[itemId][size] = 1
                toast("Product is added")
            }
        } else {
            cartdata[itemId] ={}
            cartdata[itemId][size] =1
            toast("Product is added")
        }
        setcartItems(cartdata)
    }

    const cartCount = ()=>{
        let totalcount = 0
        for (let item in cartItems) {
            for (let size in cartItems[item]) {
                totalcount += cartItems[item][size]
            } 
        }
        return totalcount
    }
    
    const updateQuantity =(itemId, size,quantity)=>{
        let cartdata = {...cartItems}
        cartdata[itemId][size] = quantity
        setcartItems(cartdata)
    }

    const getcartamount = ()=>{
        let totalamount = 0
        for (let items in cartItems) {
            let iteminfo = products.find((products)=>products._id === items)
            for (let item in cartItems[items]) {
                if (cartItems[items][item] > 0 ){
                    totalamount +=iteminfo.price * cartItems[items][item]
                }
            } 
        }
        return totalamount 
    }

    useEffect(()=>{
        // console.log(cartItems);
    },[cartItems])

    const value ={products,currency,delivery_fee,search, setshowsearch, setsearch,showsearch,cartItems,addtoCart,cartCount,updateQuantity, getcartamount }

    return (
        <Shopcontext.Provider value={value}>{props.children}</Shopcontext.Provider>
    )
}

export default Shopcontextprovider