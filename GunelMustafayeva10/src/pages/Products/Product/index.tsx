import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Product.module.css'


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
    const { id } = useParams();
    const [product, setProduct] = React.useState<IProduct | null>(null)
    
    const getProduct = async () => {
        try {
            const data = await fetch(`https://fakestoreapi.com/products/${id}`)
            const product = await data.json()
            setProduct(product)
        }
        catch (e) {
            return null
        }
    }
    React.useEffect(() => {
        getProduct()
    }, [])
    return (

        <div className={styles.detailedPro}>
            <img height='200' width='200' src={product?.image} alt="" />
            <span> <span>Price</span> : {product?.price}</span>
            <span>Rating : {product?.rating.count}</span>
            <span>Title : {product?.title}</span>
            <button className={styles.addToCardBtn}>Add to card</button>
        </div>
    )
}
export default Index
