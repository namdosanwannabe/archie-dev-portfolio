import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lanyard from './Lanyard/Lanyard'

function App() {
    return (
        <>
            <div>
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
        </>
    )
}

export default App
