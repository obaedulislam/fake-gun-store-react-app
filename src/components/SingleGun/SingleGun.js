import React from 'react';


const SingleGun = ({gun, increaseCount}) => {
    const{id, name, img, bullet, capacity, action, price, category} = gun;
    return (
        <div className=''>
            <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className='h-[250px] w-full' src={img} alt="Gun" /></figure>
            <div className="card-body p-4">
                <div className="gun-name flex justify-between mb-0">
                    <h2 className=" text-[16px] font-bold">{name}</h2>
                    <div className="badge bg-yellow-600 text-black font-semibold">NEW</div>
                </div>
                <h5 className='font-semibold text-zinc-900 text-[13px]'>Category: {category}</h5>
                <h4 className='font-semibold text-yellow-700 mt-0'>{action}</h4>
                <div className="card-actions  py-2">
                    <div className="badge badge-outline text-[14px] bg-yellow-50 ">{bullet}: Bullet</div> 
                    <div className="badge badge-outline text-[14px] bg-yellow-50 ">{capacity}: Capacity</div>
                </div>
                <h3 className='text-2xl font-semibold'>Price: <span className='text-yellow-700'> ${price}</span></h3>

                <div className="two-btn flex justify-between">
                    <div className="cart">
                        <button onClick={() => increaseCount()} className="btn btn-warning btn-sm">Add To Cart</button>
                    </div>
                    <div className="details">
                        <button className="btn btn-active btn-sm">Details</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleGun;