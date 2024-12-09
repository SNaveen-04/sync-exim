import { Link } from "react-router-dom"
import "./NavBar.css"
import { useState } from "react"

const NavBar = () => {

    const [right,setRight] = useState('100%');

    const handleClick = () => {
        if(right === '0%'){
            setRight('100%');
        }
        else{
            setRight('0%');
        }
    }

  return (
    <>
    <nav id="primary-nav" style={{right:right}}>
        <div className="logo">
                Sync Exim
        </div>
        <ul className="navigation">
            <li onClick={handleClick}>
                <Link to="/sync-exim">Home</Link>
            </li>
            <li onClick={handleClick}>
                <Link to="/sync-exim/about">About</Link>
            </li>
            <li onClick={handleClick}>
                <Link to="/sync-exim/contact">Contact</Link>
            </li>
            <li onClick={handleClick}>
                <Link to="/sync-exim/products">Products</Link>
            </li>
            <li onClick={handleClick}>
                <Link to="/sync-exim/certificates">Certificates</Link>
            </li>
        </ul>
    </nav>
    <nav id="secondary-nav">
        <div className="logo">
            Sync Exim
        </div>
        <div className="menu" onClick={handleClick}>
            Menu
        </div>
    </nav>
    </>
  )
}

export default NavBar