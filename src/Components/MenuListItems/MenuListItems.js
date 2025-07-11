import React from 'react'
import { cdn_url } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../Utils/store/cartSlice';

const MenuListItems = ({items}) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }
  return (
    <div>
        
            {items.map(item =>(
            <div key={item?.card.info.id} className='p-2 m-2 border-black-200 border-b-2 text-left flex justify-between'>
                <div className='w-9/12'>
                    <div className='py-2'>
                        <span className='gray font-medium'>{item?.card.info.name}</span>
                        <span>-Rs.{item?.card.info.price/100}</span>
                    </div>
                    <p className='px-1 text-xs'>{item?.card.info.description }
                    </p>
                </div>
                <div className='w-3/12 p-4'>
                    <img src={cdn_url+item?.card.info.imageId} className='w-full'/>
                    <button className='p-2 bg-white shadow-lg absolute m-auto'
                    onClick={()=>handleAddItem(item)}>Add +</button>
                </div>

                </div>) )}
            
      
    </div>
  )
}

export default MenuListItems