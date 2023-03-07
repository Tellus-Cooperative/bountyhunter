import React from 'react'

const Filterbutton = ({data}) => {
    return ( 
        <div className="filterbutton">
            <button className='bg-lightgrey w-24 lg:w-36 h-9 flex items-center justify-center rounded-2xl shadow-2xl'>
                <p className='text-[12px] lg:text-base'>{data} <i className="lg:ml-2 -mt-1 fas fa-sort-down text-xl"></i></p>
            </button>
        </div>
     );
}
 
export default Filterbutton;