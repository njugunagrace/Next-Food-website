import Image from 'next/image'
import Navbar from './components/navbar/page'
import Footer from './components/footer/Footer'
import Foodle from './components/foodle/Foodle'
import Food from './components/foodList/FoodList'
import Discount from './components/discount/discount'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Foodle/>
      <Food/>
      <Discount/>
      <Footer/>



    </main>
  )
}
