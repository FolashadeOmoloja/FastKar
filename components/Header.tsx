import Navbar from './Navbar'
import Herosection from './Herosection'
import Floater from './Floater'

const Header = () => {
  return (
    <header className="relative bg-[url('/background.png')] bg-cover">
        <Navbar/>
        <Herosection/>
        <Floater/>
</header>
  )
}

export default Header