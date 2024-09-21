import GetInspired from "./components/GetInspired"
import Header from "./components/Header"
import Hero from "./components/Hero"
import NewArrivals from "./components/NewArrivals"
import ProductCategories from "./components/ProductCategories"
import Services from "./components/Services"
import StorySection from "./components/StorySection"
import SuperSaleSection from "./components/SuperSaleSection"
import Testimonials from "./components/Testimonials"
import TopSellingProducts from "./components/TopSellingProducts"

function App(){
  return(
    <>
    <Header/>
    <Hero/>
    <ProductCategories/>
    <NewArrivals/>
    <TopSellingProducts/>
    <SuperSaleSection/>
    <GetInspired/>
    <StorySection/>
    <Services/>
    <Testimonials/>
    </>
  )
}
export default App