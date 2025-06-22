import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MenuListItems from '../MenuListItems/MenuListItems';
import { clearCart } from '../Utils/store/cartSlice';

const Cart = () => {
    const itemsCart=useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    const deleteCart = () =>{
       dispatch(clearCart())
    }
  return (
    <div>
    <div className='text-center font-bold text-2xl'>Cart</div>
    <div className='w-6/12 m-auto'>
        <button className='m-2 text-white bg-black p-3'
        onClick={deleteCart}>Delete Cart</button>
        {itemsCart.length === 0 ? <h1>Cart is empty .Please add items</h1>:'' }
        <MenuListItems items={itemsCart}/>
    </div>
    </div>
  )
}

export default Cart