import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

export const Nav = (props) => {
    return (
        <ul className="nav">
            <li className="nav__item active">
                <Link className="nav__link" to="/">A</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/B">B</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/C">C</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/D">D</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/E">E</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/F">F</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/G">G</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/H">H</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/I">I</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/J">J</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/K">K</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/L">L</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/M">M</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/N">N</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/O">0</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/P">P</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/Q">Q</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/R">R</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/S">S</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/T">T</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/U">U</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/V">V</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/W">W</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/X">X</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/Y">Y</Link>
            </li>
            <li className="nav__item active">
                <Link className="nav__link" to="/Z">Z</Link>
            </li>
        </ul>
    )
}