import React from 'react'

const SidebarItem = (item) => {
    


    return (
        <div className='sidebar_item'>
            <img src={item.item.url} alt="" />
            <p className="sidebar_text">{item.item.text}</p>
        </div>
    )
}

export default SidebarItem