import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav id="primary-nav">
        <div className="logo">
                Sync Exim
        </div>
        <ul className="navigation">
            <li>
                <Link className="link" to="/sync-exim">Home</Link>
            </li>
            <li>
                <Link className="link" to="/sync-exim/about">About</Link>
            </li>
            <li>
                <Link className="link" to="/sync-exim/contact">Contact</Link>
            </li>
            <li>
                <Link className="link" to="/sync-exim/products">Products</Link>
            </li>
            <li>
                <Link className="link" to="/sync-exim/certificates">Certificates</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar