import {  Link } from 'react-router-dom';
import './index.css';

function Error(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Página não encontrada :(</h2>
            <Link to='/'> Ver todos o s filmes </Link>
        </div>
    );
}

export default Error;