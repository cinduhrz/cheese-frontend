import { Link } from "react-router-dom"

const Header = (props) => {
    return (<>
        <nav className="nav">
            <Link to="/cheeses">
                <div>Cheeses</div>
            </Link>
        </nav>
    </>)
}

export default Header