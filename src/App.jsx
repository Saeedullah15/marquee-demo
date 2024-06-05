import Marquee from 'react-fast-marquee'
import './App.css'
import MyMarquee from './components/MyMarquee'

function App() {

    return (
        <>
            <Marquee className='py-4'>
                <MyMarquee></MyMarquee>
            </Marquee>
            <h1 className='text-5xl font-bold text-green-700 text-center mt-3'>Okay Bye</h1>
        </>
    )
}

export default App
