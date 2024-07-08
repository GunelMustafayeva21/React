import React, { useContext } from 'react'
import styles from './Products.module.css'
import { Link} from 'react-router-dom'
import { ThemeContext } from '@/shared/context/Theme'


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

    const {theme} = useContext(ThemeContext)
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
    
    <div className={styles.products} style={{backgroundColor:theme}}>
            {
                products?.length && products?.map((pro)=>(
              
                   <React.Fragment>
                  
                    <div className={styles.product} key={pro?.id}>
                        <img height='100' width='100' src={pro.image} alt="" />
                        <span> <span>Price</span> : {pro.price}</span>
                        <span>Rating : {pro.rating.count}</span>
                        <span>Title : {pro.title}</span>
                        <button className={styles.addToCardBtn}>Add to card</button>
                        <Link  to={`${pro.id}`}><button className={styles.showBtn}>Show product</button></Link>
                    </div>
                   
                    </React.Fragment>
                ))
            }
          
    </div>
  )
}
export default Index
