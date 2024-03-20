import java from '../images/java.png'
import python from '../images/python.png'
import c from '../images/c.png'
import css from '../images/css.png'
import html from '../images/html.png'
import MongoDB from '../images/MongoDB.png'
import sql from '../images/MySQL.png'
import js from '../images/js.png'
import rjs from '../images/R-js.png'

function Skill(){
    return <section className='flex flex-col md:flex-row bg-primary px-5 md:h-[730px]' id='Skills'>
        <div className='md:pl-[80px] pt-[50px] md:pt-[100px]'>
        <h1 className='text-4xl text-white border-b-4 border-[#0c835a] mb-5 w-[100px] font-bold'>Skills</h1>
                <div className='flex flex-row md:px-[300px] py-5'>
                    <div>
                        <img className='w-[70px] h-[70px] mr-10 md:mr-[100px]' src={java} alt='java'/>
                        <h2 className='pl-[17px] logo' >Java</h2>
                    </div>
                    <div>
                        <img className='w-[70px] h-[70px] mr-10 md:mr-[100px]' src={python} alt='python' />
                        <h2 className='pl-[10px] logo' >python</h2>
                    </div>
                    <div>
                        <img className='w-[70px] h-[70px] mr-10 md:mr-[100px]' src={c} alt='c'/>
                        <h2 className='pl-[29px] logo' >c</h2>
                    </div>
                   
                </div>
                <div className='flex flex-row md:px-[300px]  py-5'>
                <div>
                        <img className='w-[70px] h-[70px] mr-10 md:mr-[100px]' src={html} alt='html'/>
                        <h2 className='pl-[15px] logo' >html</h2>
                    </div>
                    <div>
                        <img className='w-[70px] h-[70px] mr-10 md:mr-[100px]' src={css} alt='css'/>
                        <h2 className='pl-[20px] logo' >css</h2>
                    </div>
                    <div>
                        <img className='w-[70px] h-[70px] mr-10 md:mr-[100px]' src={js} alt='js'/>
                        <h2 className=' logo' >JavaScript</h2>
                    </div>
                    
                    
                    
                </div>
                <div className='flex flex-row md:px-[300px]  py-5'>
                <div>
                        <img className='w-[70px] h-[70px] mr-10 md:mr-[100px]' src={sql} alt='MySQL'/>
                        <h2 className='pl-[10px] logo' >MySQL</h2>
                    </div>
                    
                    <div>
                        <img className='w-[70px] h-[70px] mr-10 md:mr-[100px]' src={rjs} alt='Reactjs'/>
                        <h2 className='pl-[4px] logo' >Reactjs</h2>
                    </div>
                    <div>
                        <img className=' h-[70px] mr-10 md:mr-[100px]' src={MongoDB} alt='MongoDB'/>
                        <h2 className='pl-[10px] logo' >MongoDB</h2>
                    </div>
                </div>
        </div>
         
    </section>

}

export default Skill