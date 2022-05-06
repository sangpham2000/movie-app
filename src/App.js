// import { Swiper, SwiperSlide } from 'swiper/react';

import '../node_modules/boxicons/css/boxicons.min.css';

import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MyRoutes from './router/MyRouter';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/*"
                    element={
                        <div>
                            <Header />
                            <MyRoutes />
                            <Footer />
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
