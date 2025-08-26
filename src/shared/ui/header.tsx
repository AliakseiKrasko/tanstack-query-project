import type {ReactNode} from "react";
import {Link} from "@tanstack/react-router";
import styles from "./header.module.css";



type Props = {
    renderAccountBar: () => ReactNode
}

export const Header = ({renderAccountBar}: Props) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.linksBlock}>
                    <Link to="/">
                        Playlists
                    </Link>
                    <Link to="/my-playlists">
                        My Playlists
                    </Link>
                    <Link to="/oauth/callback">
                        temp page
                    </Link>
                </div>


                <div>{renderAccountBar()}</div>
            </div>
        </header>

    );
};

export default Header;