import styles from './Basket.module.css'
import { useAppSelector } from '@/redux/store'
import { useAppDispatch } from '@/redux/store'
import { deleteProductById } from '@/redux/feature/Basket/BasketSlice'

const Index = () => {
  const dispatch=useAppDispatch()
    const { basket, totalPrice } = useAppSelector(state => state.Basket)
    return (
        <div className={styles.card}>
            <div className={styles.basket} >
                {
                    basket?.length && basket?.map((product) => (

                        <div className={styles.product} key={product?.id}>
                            <img height='100' width='100' src={product.image} alt="" />
                            <span> <span>Price</span> : {product.price}</span>
                            <span>Rating : {product.rating.count}</span>
                            <span>Title : {product.title}</span>
                            <button onClick={()=>{dispatch(deleteProductById(product.id))}} className={styles.removeBtn}>Remove Product</button>

                        </div>
                    ))
                }
            </div>
            <h2 className={styles.price}> Total price of your products is {totalPrice.toFixed(2)}</h2>
        </div>
    )
}
export default Index