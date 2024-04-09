import React from 'react'
import RootSearch from '../forms/RootSearch'

const MobileSearch = () => {
    return (
        <div className='w-full h-full' >
            <div className='w-full flex sm:hidden bg-green-400' >
                <RootSearch />
            </div>

            <div>
                <h3 className='text-base sm:text-3xl font-ui-text-3 font-bold text-light-2' > Discover Your Interest </h3>
            </div>
        </div>
    )
}

export default MobileSearch