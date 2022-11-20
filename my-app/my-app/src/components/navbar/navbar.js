import { NavLink } from 'react-router-dom';
import s from './navbar.module.scss';

const backgroundNavGreen = "active-three";
let activeLinkOne = ({ isActive }) => isActive ? "active-linkOne" : "menu__link";
let activeLinkTwo = ({ isActive }) => isActive ? "active-linkTwo" : "menu__link";
let activeLinkThree = ({ isActive }) => isActive ? "active-linkThree" : "menu__link";
let activeLinkFour = ({ isActive }) => isActive ? "active-linkOneFour" : "menu__link" ;
let activeLinkFive = ({ isActive }) => isActive ? "active-linkOneFive" : "menu__link";


const Navbar = () => {
    return (
        <nav className={s.menu}>
            <ul className={s.menu__list}>
                <li className={s.menu__item}>
                    <NavLink to="/profile" className={activeLinkOne}>Profile</NavLink>
                </li>
                <li className={s.menu__item}>
                    <NavLink to="/dialogs" className={activeLinkTwo}>Messages</NavLink>
                </li>
                <li className={s.menu__item}>
                    <NavLink to="/news" className={activeLinkThree}>News</NavLink></li>
                <li className={s.menu__item}>
                    <NavLink to="/music" className={activeLinkFour}>Music</NavLink>
                </li>
                <li className={s.menu__item}>
                    <NavLink to="/settings" className={activeLinkFive}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;