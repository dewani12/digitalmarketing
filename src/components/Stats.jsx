import React from 'react'
import statpng from '/statpng.png'

function Stats() {
    return (
        <div className='w-full h-screen py-6'>
            <hr />
            <div className='flex items-center justify-center'>
                <div className='capitalize text-2xl'>analytics & statistics</div>
                <div className='h-16 w-16'><img src={statpng} alt="" /></div>
            </div>
        </div>
    )
}

export default Stats
