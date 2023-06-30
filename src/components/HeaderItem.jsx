import React from 'react'

function HeaderItem({name,Icon}) {
  return (
    <div className='text-white flex items-center gap-3
    text-[15px] font-semibold cursor-pointer hover:underline
    underline-offset-8 mb-2'>
        <Icon/>

        <h2 className='dropmenu_txt text-xs tracking-normal'>{name}</h2>
    </div>
  )
}

export default HeaderItem

