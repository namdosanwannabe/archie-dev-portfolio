import './App.css'
import Lanyard from './components/Lanyard/Lanyard'
import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
    return (
        <div className='bg-white relative'>
            <div className='hidden lg:block absolute inset-0'>
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
            <div className='mx-auto max-w-[700px] py-10 sm:py-24 text-black'>
                <div className='relative z-10 backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-lg p-6 xs:p-4'>
                    <Header />
                    <About />
                    <WorkExperience />
                    <Education />
                    <Skills />
                    <Projects />
                    <div className='h-screen'></div>
                </div>
                <Navigation />
            </div>
        </div>
    )
}

export default App
