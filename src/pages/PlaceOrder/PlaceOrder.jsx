import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>

        <div className="success">
        <img src={assets.success} alt="" />
        </div>

        <div className="tekst2">
          <p className="naslov2">Thank You!</p>
          <p className="podnaslov2">Order Completed</p>
          <p className="sivi-tekst">Please rate your last driver</p>
        </div>

        <div className="rate-driver">
        <img src={assets.rate_driver} alt="" />
        </div>

        <div className="cart-bottom2">
          <div className="cart-total2">
          <h2>Cart Total</h2>

          <div>
            <div className="cart-total-details2">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}€</p>
            </div>

            <div className="cart-total-details2">
              <p>Delivery Fee</p>
              <p>{2}€</p>
            </div>

            <div className="cart-total-details2">
              <b>Total</b>
              <b>{getTotalCartAmount()+2}€</b>
            </div>
          </div>
          </div>
        </div>

    </form>
  )
}

export default PlaceOrder
