import React, { useState } from 'react';
import MenuListItems from '../MenuListItems/MenuListItems';

const Category = ({menuList,showItems,setShowIndex}) => {
    const accordionClick = () => {
        setShowIndex();
    }
  return (
   
  <div className=" my-3 p-3 bg-gray-50 w-6/12 mx-auto shadow-lg ">
    <h2 className="flex justify-between">
      <button className="font-bold text-lg" type="button" onClick={accordionClick}>
        {menuList?.title}({menuList?.itemCards?.length})
      </button>
      <span>arrow</span>
    </h2>
    <div className="text-left">
        {showItems &&
      <div>
        {menuList.itemCards?.length !== 0 ?
        <MenuListItems items={menuList?.itemCards}/>
        :'No items'}
        </div>
}
    </div>
  </div>
  )
}

export default Category