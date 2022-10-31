import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/forecast">Forecast</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>

        </div>
    )
}