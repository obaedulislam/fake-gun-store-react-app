import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({increaseCount}) => {
    const [guns, setguns] = useState([]);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
        .then(res => res.json())
        .then(data => setguns(data))
    }, [])
 
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className="all-gun-heading max-w-[900px] mx-auto py-7">
                <h1 className='text-3xl font-semibold text-center'>Welcome to <span className='uppercase text-yellow-600 font-bold '>Fake Gun Store</span></h1>
                <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio eveniet quasi possimus consectetur. Magnam, cumque omnis? Minima aliquam repudiandae nemo iusto</p>
            </div>
            <div className="all-gun-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    guns.map( gun =>
                        <SingleGun key={gun.id} gun={gun} increaseCount = {increaseCount}></SingleGun>
                    )
                }
            </div>
        </div>
    );
};

export default AllGun;