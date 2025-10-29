import '../CSS/header.css'
import logo from '../assets/logo.png'
import my from '../assets/My.jpg'
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";


const Header = () => {
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
                <div><img src={my} alt="profile pic" height={100} /></div>
                <details>
                    <summary>
                        <CiMenuKebab />
                    </summary>
                    <div>
                        <div>Edit profile</div>
                    </div>
                </details>
                <div></div>
            </div>
        </section>
    </header>
}

export default Header