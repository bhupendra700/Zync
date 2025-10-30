import '../CSS/header.css'
import logo from '../assets/logo.png'
import my from '../assets/My.jpg'
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { ImProfile } from "react-icons/im";
import { GrInfo } from "react-icons/gr";
import { useEffect, useRef, useState } from 'react';
import useDetails from '../CustomeHook/useDetails';


const Header = () => {
    const detailsRef = useRef(null);
    useDetails(detailsRef)

    const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark" ? true : false);

    useEffect(() => {
        if (!document.body.hasAttribute("class")) {
            document.body.setAttribute("class", localStorage.getItem("theme") === "dark" ? "dark" : "");
        }else{
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
    </header>
}

export default Header