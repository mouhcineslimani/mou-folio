
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
function Home() {
    return (
        <div className='home-part'>
            <header className='home-header'>
                <div className='home-left-part'>
                    <h1 className='title'>Portfolio.</h1>
                </div>
                <div className="home-right-part">
                    <div className='contact-me'>
                        <span>Contact me</span>
                        <FaGithub size={20} />
                        <FaLinkedin size={20} />
                        <FaEnvelope size={20} />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home
