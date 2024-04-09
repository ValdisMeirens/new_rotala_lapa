import classes from "./NavLinks.module.css";
import Link from "next/link";

const NavLinks = (props) => {
  return (
    <nav className={classes.container}>
      <ul onMouseLeave={props.onMouseLeave}>
        <Link href="/">
          <li>Jaunumi</li>
        </Link>
        <Link href="/albumi">
          <li>Galerija</li>
        </Link>
        <Link href="/vadiba">
          <li>Vadība</li>
        </Link>
        <Link href="/dejotaji">
          <li>Dejotāji</li>
        </Link>
        <Link href="/vesture">
          <li>Vēsture</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavLinks;
