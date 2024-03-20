import resume from '../images/Resume.png'

function Resume(){
    return <section className='flex flex-col md:flex-row bg-primary px-5 md:h-[730px]' id='resume'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img className='w-[600px] ' src={resume} alt='resume.png'/>
        </div>
        <div className='md:w-1/2 flex justify-center '>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl text-white border-b-4 border-[#0c835a] mb-5 w-[135px] font-bold'>Resume</h1>
                <p className='pb-5' >You can view my resume <a className='btn blank ' href="https://drive.google.com/file/d/17_HjCXQ6fFyLYH5fixXdRhBoIepzFaVb/view?usp=drive_link" target='_blank' rel='noreferrer' >Download</a></p>
               
            </div>
            
        </div>
    </section>
}


export default Resume