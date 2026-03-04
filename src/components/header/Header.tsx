import {Link} from "react-router";
import './Header.css'
import {UserInfo} from "../user-info/UserInfo.tsx";
import {SearchComponent} from "../search-component/SearchComponent.tsx";

export const Header = () => {
    return (
        <header>
            <div className="menu">
                <div className="menu-link"><Link to={'/'}>Homepage</Link></div>
                <div className="menu-link"><Link to={'#'}>About</Link></div>
            </div>
            <SearchComponent/>
            <UserInfo/>
        </header>
    );
};