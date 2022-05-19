import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import api from '../../services/api';
import './index.css'


function Filme(){
    const { id } = useParams();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '039d5075b751e99e3ff9e704813708b0',
                    language: 'pt-BR',
                }
            })
            .then((resp) => {
                setFilme(resp.data);
                setLoading(false);
            })
            .catch(() => {
                console.log("errorrrrrrrr");
            });
        }

        loadFilme();

        return () => {
            console.log("Componente desmontado");
        }
    }, []);

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        );
    }


    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className='area-buttons'>
                <button>Salvar</button>
                <button>
                    <a href='#'>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Filme;