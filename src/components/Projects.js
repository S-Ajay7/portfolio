import Attendance from '../images/Attendance-Management-System.png'
import digit from '../images/Digit_to_Text.jpeg'



function projects(){
    return <section className="flex flex-col py-20 px-5 justify-center bg-secondary text-white md:h-[730px]" id='projects' > 
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
            <h1 className='text-4xl text-white border-b-4 border-[#2eac80] mb-5 w-[140px] font-bold'>Projects</h1>
            <p className='projects-font'>These are some of My projects</p>
            </div>
        </div>
        <div className="w-full">
            <div className= 'flex flex-col md:flex-row px-10 gap-5'>
                <div className='relative'>
                <p className='projects-font'>Attendance Management System</p>
                    <img className='h-[285px] md:h-[400px] w-[600px]' src={Attendance} alt='attendance'/>
                    <div className='project'>
                        <p className='text-center px-5 py-5 '>The Attendance Management System is a software application designed to 
                            automate and streamline the process of managing and tracking attendance 
                            records in an organization. The system is developed using the Java programming 
                            language and utilizes the MySQL database for storing and managing the 
                            attendance data.
                            The system provides a user-friendly interface for administrators, teachers, 
                            and students to access and interact with the attendance information. It offers 
                            features such as user authentication, attendance marking, and data management.
                            In the system, administrators have the ability to create and manage user 
                            accounts, including teachers and students. Teachers can mark attendance for 
                            their respective classes using the system. They can view and update attendance 
                            records.
                        </p>
                    </div>
                </div>
                <div className='relative'>
                <p className='projects-font'>Digit to Text Converter</p>
                    <img className='h-[285px] md:h-[400px] w-[600px]' src={digit} alt='digit-to-text'/>
                    <div className='project'>
                        <p className='flex text-center px-5 py-5'>The main objective of the project is to convert a digit to text using java. There are n number of library 
                            functions for square root, factorial, exponent etc., There is no default library function in any 
                            programming language that convert digit to text. So, the project is about to convert digit to text. It can 
                            handle up to 900 trillion. In future,it can be used in the area where number is needed to converted into 
                            words. In banking numbering system, atm machines etc., Moreover there is no in-built library function 
                            in any programming language to convert number into text.</p>
                    </div>
                </div>
                
                
            </div>
            
        </div>
    </section>


}

export default projects