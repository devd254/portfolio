import React from 'react'
import { Html } from '@react-three/drei';
import { Loader2 } from 'lucide-react';
import BubbleTransition from './BubbleTransition';

const Loader = () => {
  return (
    <Html>
        <div className='flex-col justify-center items-center relative top-[-5rem]'>
            <p className='relative left-3'>
                  Diving
            </p>
            <Loader2 
              color='#00FFFF'
              className='bg-red-200 w-20 h-20 border-2 border-opacity-50 border-blue-600 border-t-gray-600 rounded-full animate-spin'
            />
        </div>
        <BubbleTransition />
    </Html>
  )
}

export default Loader