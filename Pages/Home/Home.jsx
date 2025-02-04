import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { Helmet } from 'react-helmet';
const Home = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/login');
    }
    return (
        <>
            <Helmet>
                <title>Fresh Cart</title>
            </Helmet>
            <div className="flex justify-center items-center h-[60vh] text-white text-center p-5 bg-cover bg-center" >
                <div className="max-w-2xl">
                    <h1 className="text-6xl font-bold mb-5 animate-slide-in bg-gradient-to-r from-[#A4DE02] to-[#7FFF00] bg-clip-text text-transparent">
                        Welcome To Fresh Cart
                    </h1>
                    <p className="text-black text-3xl mb-8 animate-fade-in bg-gradient-to-r from-[#7FFF00] to-[#ADFF2F]  bg-clip-text text-transparent">
                        Shop easily and get the best products at competitive prices
                    </p>
                    <button
                        onClick={handleButtonClick}
                        className="bg-[#5bed5b] text-black border-none py-4 px-8 text-lg rounded-full cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gradient-to-r from-[#A4DE02] to-[#7FFF00] animate-bounce">
                        Start Shopping Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home;