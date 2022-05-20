import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './index.css';

function Favoritos(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);
    }, [])

    function handleExcluirFilme(id) {
        const filtroFilme = filmes.filter((filme) => {
            return (filme.id !== id)
        })
        setFilmes(filtroFilme);
        localStorage.setItem('@primeflix', JSON.stringify(filtroFilme));
        toast.success("Filme removido com sucesso")
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus filmes</h1>

            {filmes.length === 0 && <span>Você ainda não possui filmes salvos :(</span>}

            <ul>
                {filmes.map((filme) => {
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                <button onClick={() => handleExcluirFilme(filme.id)}>Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}


export default Favoritos;