import Link from "next/link";
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Stockholm Gator</div>
            <nav>
                <ul>
                    <li>
                        <Link href={'/'}>STREETS</Link>
                    </li>
                    <li>
                        <Link href={'/new-streets'}>ADD</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;
