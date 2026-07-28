import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart , getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart' >
      <p className='order-details' >Order details</p>
      <div className="cart-items">
        <div className="cart-items-title">
          <p></p>
          <p className='name-title'>Name</p>
          <p className='price-title'>Price</p>
          <p className='quantity-title'>Quantity</p>
          <p className='total-title'>Total</p>
          <p></p>
        </div>
        <br />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title-bottom cart-items-item' >
                  <img className='image' src={item.image} alt="" />
                  <p className='name' >{item.name}</p>
                  <p className='price' >{item.price}€</p>
                  <p className='quantity' >{cartItems[item._id]}</p>
                  <p className='total' >{item.price * cartItems[item._id]}€</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
              </div>
            )
          }
        })}
      </div>


      <div className="cart-bottom">

        <div className="cart-total">
          <h2>Cart Total</h2>

          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}€</p>
            </div>

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}€</p>
            </div>

            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()+2}€</b>
            </div>
          </div>

          <button onClick={()=>navigate('/order')}>Place My Order</button>
        </div>


        <div className="cart-promocode">
          <div>
            <h2>Promo Code</h2>
            <p>Enter promo code here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart




