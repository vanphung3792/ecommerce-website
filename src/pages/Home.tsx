import CTA from "../components/home/CTA"
import Categories from "../components/home/Categories"
import Gallery from "../components/home/Gallery"
import Header from "../components/home/Header"
import HomeBlog from "../components/home/HomeBlog"

const Home = () => {
  return (
    <>
      <Header />
      <Categories />
      <Gallery />
      <CTA />
      <HomeBlog />
    </>
  )
}
export default Home