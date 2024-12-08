import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomeDisplayCard = ({product}) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/product/${product.id}`,{state: {product}});
    }
    return (
        <div onClick={handleNavigate} className='cursor-pointer flex flex-col items-center bg-white shadow-lg overflow-hidden w-[15rem] mx-3 border'>
            <div className='h-[15rem] w-[12rem]'>
                <img className='object-cover object-top w-full h-full' src={product.imageUrl} alt="" />
            </div>
            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
                <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
            </div>
        </div>
    )
}

export default HomeDisplayCard;