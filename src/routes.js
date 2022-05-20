import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Filme from './pages/filme';
import Header from './components/header';
import Error from './pages/error';
import Favoritos from './pages/favoritos';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/filme/:id' element={ <Filme/> } />
                <Route path='/favoritos' element={ <Favoritos/> } />
                <Route path='*' element={ <Error/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp; 