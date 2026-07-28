
import React from 'react'
import './Horizontal.css'
import { menu_list } from '../../assets/assets'

const Horizontal = ({category,setCategory}) => {
  
  return (
    <div className='horizontal' id='horizontal'>

      <div className="horizontal-list" >
        
        {menu_list.map((item,index)=>{ 
            return (
              <div  className={category===item.menu_name?"active":""}>
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="horizontal-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p className={category===item.menu_name?"active":""}>{item.menu_name}</p>
                  </div>
              </div>
            )
        })}

      </div>

    </div>
  )
}

export default Horizontal



