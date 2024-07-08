import styles from './Header.module.css'
import {increment, decrement, reset} from '@/redux/feature/Counter/CounterSlice'
import { useAppDispatch } from '@/redux/store'
import {Link} from 'react-router-dom'
import {Urls } from '@/shared/constants/Urls'
import { useAppSelector } from '@/redux/store'

const Index =()=>{

    const products  = useAppSelector(state=> state.Basket.basket)

const dispatch=useAppDispatch()

    return (
      <div className={styles.head} >
        
        <ul className={styles.navbar}>
            <>
            <Link to={Urls.PRODUCTS} className={styles.noneDecoration}>
            <li className={styles.link}>Products</li>
            </Link>
            <Link to={Urls.BASKET} className={styles.noneDecoration}>
            <li className={styles.link}>Basket {products.length}</li>
            </Link>
            
            <button onClick={()=>{dispatch(increment(5))}} className={styles.btn}>Increase</button>
            <button onClick={()=>{dispatch(decrement(5))}}className={styles.btn}>Decrease</button>
            <button onClick={()=>{dispatch(reset())}} className={styles.btn}>Reset</button>
           
            </>
        </ul>

      </div>
    )
  }
  
  export default Index