import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {
  
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

    return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {!cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={assets.plus} alt=''/>
            :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.minus} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.plus} alt="" />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <p className="food-item-star"><img className='star' src={assets.star} alt=""/>4.5</p>  
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">{price}€</p>
      </div>
    </div>
  )

}

export default FoodItem