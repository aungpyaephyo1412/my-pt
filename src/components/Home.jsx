import Heropic from '../assets/img/photo_2023-03-22_15-46-00.jpg'
import {BiMouse} from 'react-icons/bi'
import GIT from '../assets/img/icon/icons8-github-120.png'
import FACEBOOK from '../assets/img/icon/facebook.png'
import YOUTUBE from '../assets/img/icon/youtube.png'
import INSTAGRAM from '../assets/img/icon/logo-ig-png-32464.png'
import { motion } from "framer-motion"
import {easeIn} from "framer-motion/dom";
import ReactTypingEffect from 'react-typing-effect';
import {AiOutlineArrowDown} from 'react-icons/ai'


    // Create Ref element.

const Home = () => {
    return(
        <section className='bg-white dark:bg-gray-900 pt-[80px] lg:p-0' id='home'>
            <div className='container mx-auto relative'>
                <div className="min-h-screen flex flex-col justify-start md:justify-center items-center flex-wrap">
                    <div className='w-full flex justify-center items-center flex-wrap'>
                        <div className="w-full lg:w-2/4 px-3 pt-3">
                            <div className='flex justify-start items-start mx-auto gap-x-[0.1rem] md:gap-x-4'>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                                    <div className='w-1 h-80 violet-gradient' />
                                </div>
                                <div className='mt-5'>
                                    <motion.h1
                                        initial={{ opacity: 0,y:50}}
                                        transition={{ duration: 0.5,velocity:easeIn }}
                                        whileInView={{ opacity: 1,y:0  }}
                                        className='text-gray-700 dark:text-gray-300 text-4xl font-bold tracking-wide mb-5'>Hi, I'm <span className='text-blue-500'>Typle</span> </motion.h1>
                                    <motion.div
                                        initial={{ opacity: 0,y:50}}
                                        transition={{ duration: 0.5,delay:0.4,velocity:easeIn }}
                                        whileInView={{ opacity: 1,y:0  }}
                                        className='text-gray-700 dark:text-gray-300 text-xl md:text-2xl tracking-wide leading-9 mb-3 '>I am a <ReactTypingEffect
                                        speed={90}
                                        eraseDelay={90}
                                        typingDelay={90}
                                        text={["Frontend developer.", "Youtuber."]}
                                    />
                                        <br/> I develop my portfolio , user <br className='hidden lg:block'/>
                                        interfaces and web applications</motion.div>
                                    <motion.div
                                        initial={{ opacity: 0,y:50}}
                                        transition={{ duration: 0.5,delay:0.6,velocity:easeIn }}
                                        whileInView={{ opacity: 1,y:0  }}
                                        className='flex flex-row items-center mb-5 gap-x-5'>
                                        <a href="https://github.com/typle445" target='_blank'>
                                            <img src={GIT} alt="github" className='w-9 h-9 rounded-full'/>
                                        </a>
                                        <a href="https://www.facebook.com/aung.pyae.phyo.1412" target='_blank'>
                                            <img src={FACEBOOK} alt="Facebook" className='w-8 h-8 rounded-full'/>
                                        </a>
                                        <a href="https://www.youtube.com/channel/UCyOuFpk3FQe1E1fNI3ad4tg" target='_blank'>
                                            <img src={YOUTUBE} alt="github" className='w-8 h-8 rounded-full'/>
                                        </a>
                                        <a href="https://www.instagram.com/typle_x_x/" target='_blank'>
                                            <img src={INSTAGRAM} alt="github" className='w-8 h-8 rounded-full'/>
                                        </a>
                                    </motion.div>
                                    <motion.a
                                        initial={{ opacity: 0,y:50}}
                                        transition={{ duration: 0.5,delay:0.8,velocity:easeIn }}
                                        whileInView={{ opacity: 1,y:0  }}
                                        href='../assets/aungpyaephyocv.pdf' download='' className=' text-white bg-blue-500 py-2 rounded flex items-center justify-center w-52 hover:bg-blue-900'> Download cv <AiOutlineArrowDown className='ml-1'/></motion.a>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0,y:50}}
                            transition={{ duration: 0.5,delay:0.2,velocity:easeIn }}
                            whileInView={{ opacity: 1,y:0  }}
                            className="w-full lg:w-2/4 flex flex-col lg:flex-row justify-center items-center gap-5 p-3">
                            <div className='flex-1'>
                                <img src={Heropic} className='w-full lg:w-[80%] lg:mx-auto h-auto object-cover obj-p lg:h-96 rounded-xl' alt=""/>
                            </div>
                        </motion.div>
                    </div>
                    <div className='h-3 text-center absolute bottom-20'>
                        <a href="#about" className='text-gray-700 dark:text-white animate-bounce hidden lg:block'>
                            <div className='flex flex-col justify-center items-center gap-y-2'>
                                <p>Scroll Down</p>
                                <BiMouse className='text-3xl'/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home