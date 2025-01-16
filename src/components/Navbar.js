import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>

            <nav>
                <Link to="/"><img src="https://th.bing.com/th/id/R.770b805d5c99c7931366c2e84e88f251?rik=khgO%2bY1Hh3BT9w&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png&ehk=6msbAydV7X6D4bO8zvLC664aXwKOdBU17dwrHcKxaAg%3d&risl=&pid=ImgRaw&r=0" /></Link>

                <div className="links">
                    <Link to="/">Weather</Link>
                    <Link to="/history">History</Link>
                </div>

            </nav>

        </>
    )
}

export default Navbar