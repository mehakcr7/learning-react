import React, { useState } from 'react'
import StateButton from './StateButton'
import NavbarDrill from './navbarDrill'
import ProductDetails from './ProductDetails'

function StateDrilling() {
    function stepper(){
        console.log("Hi, How r u")
    }
    const [num,setNum] = useState(0)
    function addToCart(){
        setNum(num + 1)

    }
    function RemoveFromCart() {
        setNum(num-1)
    }
  return (
    <div>
        <StateButton stepper={stepper}/>
        <NavbarDrill num={num}/>
        <ProductDetails addToCart={addToCart} RemoveFromCart={RemoveFromCart}/>
      
    </div>
  )
}

export default StateDrilling
