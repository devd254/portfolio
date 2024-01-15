import React from 'react'
import { Html } from '@react-three/drei';
import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <Html>
        <div className='flex justify-center items-center'>
            <Loader2 
              color='#00FFFF'
              className='bg-blue-200 w-20 h-20 border-2 border-opacity-50 border-blue-600 border-t-gray-600 rounded-full animate-spin'
            />
        </div>
    </Html>
  )
}

export default Loader