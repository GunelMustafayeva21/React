import React, { useState } from 'react'

interface IUrl{
  link:string
}

const useFetch = ({link}:IUrl) => {

    const [data, setData] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)

    
    React.useEffect(() => {
        setIsLoading(true);
        fetch(link)
        .then(data => data.json())
        .then(data=>setData(data))
        .catch(()=>setIsError(true))
        .finally(()=>setIsLoading(false))
        console.log(data);
    }, [])

    return {isLoading, isError, data}
}

export default useFetch