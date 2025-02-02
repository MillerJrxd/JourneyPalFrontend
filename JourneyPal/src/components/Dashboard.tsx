import { useEffect, useState } from 'react'
import api from '../service/Interceptor'

const Dashboard = () => {
    const [data, setData] = useState<string>('')

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/protected')
                setData(response.data)
            }catch (error) {
                console.error('Failed to fetch data:', error)
            }
        }
        fetchData()
    }, [])
  return (
    <div>
        <h1>Dashboard</h1>
        <p>Protected Data: {data}</p>
    </div>
  )
}

export default Dashboard