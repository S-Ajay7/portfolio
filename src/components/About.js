import about from '../images/profile.png'


function About(){
    return <section className='flex flex-col md:flex-row bg-secondary px-5 md:h-[730px]' id='about'>
        <div className='md:w-[709px] py-5'>
            <img src={about}  alt='about'/>
        </div>
        <div className='md:w-1/2 flex justify-center '>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl text-white border-b-4 border-[#2eac80] mb-5 w-[170px] font-bold about-font'>About Me</h1>
                <p className='pb-4 pl-2 about-font'  >Hi, My Name is Ajay S. I am a full stack web developer.</p>
                <p className='pb-4 about-font' >&nbsp; Dynamic computer science student with leadership, problem-solving, and decision-making skills, eager to excel in web development. Seeking opportunities to contribute innovative solutions to projects while fostering personal growth in a collaborative environment. Committed to making a meaningful impact and continuously expanding knowledge in computer science.</p>
            </div>
        </div>
    </section>
}


export default About