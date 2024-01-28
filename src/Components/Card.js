import React from 'react'
import profileimg from '../Assets/IMG_20230120_085318_186.jpg'
import overlayimg from '../Assets/1706441122303.png'

function Card() {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10 mb-10">    
    <div class="p-4 opacity-50 hover:transition-transform transition-opacity ease-linear hover:opacity-10 hover:border-2 rounded-md hover:translate-2 hover:border-green-400 ">        
        <img src = {profileimg} loading='lazy' className='rounded-md'/>        
    </div>
    
</div>
  )
}

export default Card