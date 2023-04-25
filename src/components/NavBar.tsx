import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={router.pathname === "/about" ? "active" : ""}>about</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a className={router.pathname === "/contact" ? "active" : ""}>
          contact
        </a>
      </Link>
      <style jsx>
        {`
          a {
            color: black;
            text-decoration: none;
          }
          .active {
            color: tomato;
            text-decoration: none;
          }
        `}
      </style>
    </nav>
  );
}
