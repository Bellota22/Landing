import { useEffect, useState } from 'react'
import Home from '../components/Home'
import Card from '../components/Card'
import CardList from '../components/CardList'
import TrendingCard from '../components/TrendingCard'
import TrendingList from '../components/TrendingList'
import FAQs from '../components/FAQs'
import Footer from '../components/Footer'
import TabBar from '../components/TabBar'
import NavBar from '../components/NavBar'


function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  return (
    <>
    {
      isMobile ? null : <NavBar />
    }
      <Home />
      <CardList>
        <Card />
        <Card />
        <Card />

      </CardList>
      <TrendingList>
        <TrendingCard />
      </TrendingList>
      <FAQs />
      <Footer />
      <TabBar />
    </>
  )
}

export default App
