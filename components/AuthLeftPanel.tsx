import Image from 'next/image'
import React from 'react'

const AuthLeftPanel = () => {
  return (
    <div className='bg-red-700 hidden md:block md:w-1/2 '>
        <Image src="/bidcart-logo.webp" alt='bidcart-logo' width={200} height={200} />
    </div>
  )
}

export default AuthLeftPanel