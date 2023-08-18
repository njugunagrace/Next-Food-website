import React from "react"
import Image from "next/image";

const Foodle = () => {
    return(
        <div>

          <div className="container">

            <div>

                <div className="dottedFood">
                <h1>All Fast Food is Available at Foodle</h1>
                <Image src="/dotted.png" alt="dotted image" width={200} height={20} className="img"/>

                </div>

                <div className="fastFood">
                <img className="person" src="/person1.jpeg" alt="a person"/> 
               <p>We Are Just A Click Away When You Crave For Delicious Fast Food</p>
                </div>


               

                <button>Buy Now</button>
                 <span>  How to order</span>

            </div>

            <div className="contImage">
                <img src="/burger.png" alt="burger"/>
            </div>
            </div>


            <div className="delivery">
                <div>
                <h2>Fast Delivery</h2> 
                <p>The food will be delivered within 1-2 hours of your ordering</p>
                </div>

              <div>
                <h2>Fresh Food</h2>
                <p>Your food will be delivered 100% fresh to your home. We do not deliver stale food </p>
                </div>

                <div>
                <h2>Free Delivery</h2>
                <p>Your food delivery is absolutely free , no cost just order and enjoy</p>
                </div>
            </div>

            <div className="reg">
                <h1>Best <span className="regular">Delivered</span> Categories</h1>
                <p>Here are some of our best distributed categories. If you want you can order from here.</p>
            </div>



           <div className="foodle">
            <div>
                <img src="/burger2.png" alt="burger" width={90} height={90}/> 
                <h2>Chicken Burger</h2>
                <p>Order Now</p>
            </div>

            <div>
                <img src="pizza.png" alt="pizza"/> 
                <h2>Chicken Pizza</h2>
                <p>Order Now</p>
            </div>

            <div>
                <img src="/fries.png" alt="fries"/> 
                <h2>French Fries</h2>
                <p>Order Now</p>
            </div>
            </div>
        </div>
    )
}
export default Foodle;