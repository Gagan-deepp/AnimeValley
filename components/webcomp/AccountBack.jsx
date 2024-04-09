import React from 'react'
import { BackBtn } from '../extras/MotionDiv'

const AccountBack = ({ title }) => {
  return (
    <div className='w-full flex items-center bg-glassmorphism3 py-3 md:hidden fixed inset-x-0 top-0 z-40' >
      <div>
        <BackBtn />
      </div>

      <div className='flex-1 flex-center' >
        <h3 className='font-ui-text-4 text-2xl text-light-2 ' >
          {title}
        </h3>
      </div>

    </div>
  )
}

export default AccountBack