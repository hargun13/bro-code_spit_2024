import React from 'react'
import SearchnFilter from './SearchnFilter'
import Card from './Card'

const ComplyFinder = () => {
  return (
    <div>
        <div className='bg-gradient-to-r from-blue-600 to-blue-200 text-white font-extrabold'>
            <p className="text-4xl px-10 pb-5 pt-5 text-center">ComplyFinder</p>
            <p className="text-normal italic px-10 pb-5 text-center">Look Up your compliances and ask anything</p>
        </div>

        <SearchnFilter />
        <Card />
    </div>
  )
}

export default ComplyFinder