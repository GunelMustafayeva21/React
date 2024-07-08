import React from 'react'
import useFetch from '@/shared/hooks/useFetch'
import RenderIf from '@/shared/components/RenderIf'
import styles from './Services.module.css'

const Index:React.FC=()=>{
    const { isLoading, isError, data } = useFetch({ link: "https://jsonplaceholder.org/posts/1" })
    const post:any=[data]
    return (
        <div className={styles.services}>
        
          <RenderIf condition={isLoading}>
            <p>Loading...</p>
          </RenderIf>
          <RenderIf condition={isError}>
            <p>Error...</p>
          </RenderIf>
          <RenderIf condition={!isError ?? !isLoading }>
            {
              
                <p>
                  {post?.[0].title} 
                </p>
           
            }
          </RenderIf>
        </div>
      )
}
export default Index