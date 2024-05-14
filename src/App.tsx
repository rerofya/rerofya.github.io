import React from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Price from './components/Price'
import WhyChoose from './components/WhyChoose'
import Loading from './components/Loading'
import $ from 'jquery'
import Framework from './components/Framework'

function App() {
  const [isLoading, setLoading] = React.useState<boolean>(true)

  $(function() {
    setLoading(false)
  })

  return (
    isLoading ? (<Loading />) : (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <WhyChoose />
        <Price />
        <Framework />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
    )
  )
}

export default App
