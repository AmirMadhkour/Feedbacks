import {Navigate , useNavigate , Routes , Router , Route } from 'react-router-dom'
import Card from './shared/Card'

function Post() {

    const navigate = useNavigate()
    const onClick = () => {
       
        console.log('hello')
        navigate('/about')
    }
    const status = 200 


    if (status === 404){
        return <Navigate to ='/notfound' />
    }

  return (
    <>
    <h2>
        Post    
    </h2>
    <center><button onClick ={ onClick }>Click</button></center>
    <Routes>
    <Route path='/show' element={<h1>Hello World</h1>} />
    </Routes>
  
  </>
  )
}

export default Post