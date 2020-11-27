import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Footer from '../Footer'
import About from '../pages/About'

function Home () {
    return (
        <>
        <section id='heroSection'>
            <HeroSection />
        </section>
        <section id='about-section'>
            <About />
        </section>
        <section id='projects'>
            <Cards />
        </section>
        <section id='contact'>
            <Footer />
        </section>
        </>
    )
}

export default Home