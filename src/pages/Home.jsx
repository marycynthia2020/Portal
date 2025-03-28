import React from 'react'
// import Blackbutton from '../components/ui/Blackbutton'
// import Whitebutton from '../components/ui/Whitebutton'
import Hero from '../components/Hero'
import Herocards from '../components/Herocards'
import Joinsection from '../components/Joinsection'
import Footer from '../components/layout/Footer'
import Keysection from '../components/Keysection'
import Tapsection from '../components/Tapsection'


const Home = () => {
  return (
    <div>
      <Hero />
      <Herocards />
      <Tapsection />
      <Joinsection />
      <Keysection />
      {/* <Footer />       */}

    </div>

  )
}

export default Home