import './App.css'
import Lanyard from './components/Lanyard/Lanyard'
import Header from './components/Header'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Navigation from './components/Navigation'

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
                    <div className='h-screen'></div>
                </div>
                <Navigation />
            </div>
        </div>
    )
}

export default App
