import {Link} from "react-router-dom";

export default function MainPage() {

    return (
        <div className="main">
            <Link to="/about" >About Page</Link>
        </div>
    );
};