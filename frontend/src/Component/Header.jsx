import '../CSS/header.css'
import logo from '../assets/logo.png'
import my from '../assets/My.jpg'
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { ImProfile } from "react-icons/im";
import { GrInfo } from "react-icons/gr";
import { useEffect, useRef, useState } from 'react';
import useDetails from '../CustomeHook/useDetails';
import { motion } from "framer-motion";
import { FaEdit } from "react-icons/fa";
import { FaRegImages } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
    const detailsRef = useRef(null);
    useDetails(detailsRef)

    const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark" ? true : false);

    useEffect(() => {
        if (!document.body.hasAttribute("class")) {
            document.body.setAttribute("class", localStorage.getItem("theme") === "dark" ? "dark" : "");
        } else {
            document.body.classList.toggle("dark");
        }
    }, [theme]);

    return <header>
        <section>
            <div className="left">
                <div>
                    <img src={logo} alt="logo" height={100} />
                </div>
                <div>Zync</div>
            </div>
            <div className='right'>
                <div><MdOutlineQrCodeScanner /></div>
                <details ref={detailsRef}>
                    <summary>
                        <CiMenuKebab />
                    </summary>
                    <div>
                        <div><img src={my} alt="profile pic" height={100} /></div>
                        <div>
                            <button><ImProfile /> Edit Profile</button>
                            <button><GrInfo /> About</button>
                            <button>
                                <label htmlFor={"theme"}>
                                    <input type="checkbox" onChange={() => {
                                        setTheme(!theme);
                                        localStorage.setItem("theme", theme ? "light" : "dark");
                                    }} checked={theme} id='theme' />
                                </label>
                            </button>
                        </div>
                    </div>
                </details>
            </div>
        </section>
        {true && <div className='profile'>
            <motion.div>
                <div>
                    <img src={my} alt="profile pic" height={20} />
                </div>
                <button><FaRegImages /> Edit</button>
                {true ? <div>
                    <div><ImProfile /> Name</div>
                    <div>Bhupendra Yadav <FaEdit className='name-edit-btn'/></div>
                </div> :
                    <div>
                        <div><ImProfile /> Name</div>
                        <div>
                            <input type='text' placeholder='Enter name here' /> <IoIosArrowForward />
                        </div>
                    </div>}
                {true ? <div>
                    <div><FaPhoneAlt /> Phone number</div>
                    <div>8999013942 <FaEdit className='name-edit-btn'/></div>
                </div> :
                    <div>
                        <div><FaPhoneAlt /> Phone number</div>
                        <div>
                            <input type='number' placeholder='Enter name here' /> <IoIosArrowForward />
                        </div>
                    </div>}
            </motion.div>
        </div>}
    </header>
}

export default Header