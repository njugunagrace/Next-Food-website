import Image from 'next/image'
import Navbar from './components/navbar/page'
import Footer from './components/footer/Footer'
import Foodle from './components/foodle/Foodle'
import Food from './components/foodList/FoodList'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Foodle/>
      <Food/>
      <Footer/>



    </main>
  )
}
