import React from 'react'
import './ProductCard.css'

const ProductCard = ({product}) => {
    return(
        <div className="product-card w-[18rem] h-[20rem] m-3 transition-all cursor-pointer">
            <div className='h-[15rem]'>
                <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="" />
            </div>
            <div className="textPart bg-white p-3">
                <div>
                    <p className='font-bold opacity-60'>{product.brand}</p>
                    <p className=''>{product.title}</p>
                </div>
                <div className='flex items-center space-x-3'>
                    <p className='font-semibold'>&#8377;{product.discountedPrice}</p>
                    <p className='line-through opacity-50'>&#8377;{product.price}</p>
                    <p className='text-green-600 font-semibold'>{product.discountPercent}% off</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard