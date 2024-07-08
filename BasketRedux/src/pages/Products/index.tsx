import styles from './Products.module.css'
import React from 'react'
import { useAppDispatch } from '@/redux/store'
import { addProduct } from '@/redux/feature/Basket/BasketSlice'


export interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
  }
  export interface Rating {
    rate: number
    count: number
  }
const Index = () => {

   const dispatch=useAppDispatch()
    const [products,setProducts] = React.useState<IProduct[]>([])
    const getProducts = async ()=>{
        try{
          const data = await fetch('https://fakestoreapi.com/products')
          const products = await data.json()
           setProducts(products)
        }
        catch(e){
            return null
        }
    }
    React.useEffect(()=>{
        getProducts()
    },[])
  return (
    
    <div className={styles.products} >
            {
                products?.length && products?.map((product)=>(
              
                   <React.Fragment>
                  
                    <div className={styles.product} key={product?.id}>
                        <img height='100' width='100' src={product.image} alt="" />
                        <span> <span>Price</span> : {product.price}</span>
                        <span>Rating : {product.rating.count}</span>
                        <span>Title : {product.title}</span>
                        <button onClick={()=>{dispatch((addProduct(product)))}} className={styles.addToCardBtn}>Add to card</button>
                        
                    </div>
                   
                    </React.Fragment>
                ))
            }
          
    </div>
  )
}
export default Index
