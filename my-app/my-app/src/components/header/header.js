import s from  './header.module.scss';



const Header = () => {
    return(
    <header className={s.header}>
        <img  cclassName="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="Logo"></img>
    </header>
    );
}
export default Header;