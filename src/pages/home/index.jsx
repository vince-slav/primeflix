import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './index.css';

function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadfilmes(){
            const resp = await api.get("movie/now_playing", {
                params:{
                    api_key: '039d5075b751e99e3ff9e704813708b0',
                    language: 'pt-BR',
                    page: 1,
                }
            })
            setFilmes(resp.data.results.slice(0, 10));
        }
        loadfilmes();
    }, []);

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;