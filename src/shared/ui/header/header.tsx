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
                </div>


                <div>{renderAccountBar()}</div>
            </div>
        </header>

    );
};

export default Header;