import React from 'react'
import { headerdiv, navStyles, dentacare, menudiv, ulDiv, liDiv, buttonDiv } from './headerStyles'

const Header = () => {
const headerItems = ['Home', 'About', 'Services', 'Doctors', 'Blog', 'Contact']
    return (
        <>
            {/* Main div */}
            <div className={headerdiv}>
                <nav className={navStyles}>
                <div className={dentacare}>DENTACARE</div>
                <div className={menudiv}>
                    <ul className={ulDiv}>
                    {headerItems.map((item, index) =>(
                        <li>
                            <a key={index} href='#' className={liDiv}>{item}</a>
                        </li>
                    ))}
                    </ul>
                    <button className={buttonDiv}>
                        Book Appointment
                    </button>
                </div>

                </nav>
            </div>
        </>
    )
}

export default Header