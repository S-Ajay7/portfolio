import developer from '../images/developer.png';
import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";


function Home(){
    return <section className='flex flex-col md:flex-row px-5 py-36 bg-primary justify-center' >
        <div className = 'md:w-1/2 flex-col'>
            <h1 className=' text-white text-6xl'>Hi, <br/>I'm Ajay.S
            <p className='text-2xl pt-5'>I am a Fullstack Developer</p>
            </h1>
            <div className='flex py-10 '>
                <a href="https://www.facebook.com/ajays.s.12979" target='_blank' rel="noreferrer" className='pr-5 hover:text-white'><FaFacebookSquare size={40}/></a>
                <a href="https://www.linkedin.com/in/ajay-s-b18828283/" target='_blank' rel="noreferrer" style={{target:"blank"}} className='pr-5  hover:text-white '><FaLinkedin size={40}/></a>
                <a href="https://github.com/S-Ajay7" target='_blank' rel="noreferrer" className=' hover:text-white'><FaGithub size={40}/></a>
            </div>
        </div>
        
        <img className='md:w-1/3' src={developer} alt='developer' />
    </section>
}

export default Home