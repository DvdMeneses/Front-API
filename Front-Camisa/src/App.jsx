import NavBar from "./components/NavBar"
import Home from './pages/Home'
import Login from './pages/Login'
import Produto from './pages/ProdutoCadastro'
import Produtos from './pages/ProdutoList'

import {Routes, Route} from 'react-router-dom'
const App = () =>{

    return(
        <>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/produto' element={<Produto/>}/>
                <Route path='/produtos' element={<Produtos/>}/>
            </Routes>
            
        </>
    )
}

export default App