
import "../styles/nav.css"
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavBar= () =>{
    return(
        <nav className='Nav'>
            <Link to='/' className='logo'>Alma.G.Store</Link>
            <ul className="">
                <MeuLink to='/'>Home</MeuLink>

                <li className='dropdown'>
                    <span className="menu-label" color="#fff">Opções</span>
                    <ul className="dropdown-menu">

                        <MeuLink to='/produto'>Cadastrar Produto</MeuLink>
                        <MeuLink to='/produtos'>Produtos</MeuLink>
                    </ul>
                </li>
                <MeuLink to='/login'>Login</MeuLink>
            </ul>
        </nav>
    )
}

export default NavBar 

function MeuLink({ to, children, ...props }){
    const resolvedPath = useResolvedPath( to )
    const estaAtivo = useMatch({ path: resolvedPath.pathname, end: true })

    return(
        <li className={ estaAtivo ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}


