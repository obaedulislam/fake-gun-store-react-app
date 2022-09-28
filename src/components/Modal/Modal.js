import React from 'react';

const Modal = ({data, setModalData}) => {
    const{id, name, img, bullet, capacity, action, price, category} = data;
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() =>setModalData(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="modal-content grid md:grid-cols-2 grid-cols-1   bg-white p-3">
                        <div className="img-sec border-r-2 ">
                            <img className='h-[200px] w-full' src={img} alt="" />
                        </div>
                        <div className="details-de pl-3">
                            <h3 className="text-lg font-bold">{name}</h3>
                            <h5 className='font-semibold text-zinc-900 text-[13px]'>Category: {category}</h5>
                            <h4 className='font-semibold text-yellow-700 mt-0'>{action}</h4>
                            <div className="card-actions  py-2">
                                <div className="badge badge-outline text-[14px] bg-yellow-50 ">{bullet}: Bullet</div> 
                                <div className="badge badge-outline text-[14px] bg-yellow-50 ">{capacity}: Capacity</div>
                            </div>
                            <h3 className='text-2xl font-semibold'>Price: <span className='text-yellow-700'> ${price}</span></h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Modal;