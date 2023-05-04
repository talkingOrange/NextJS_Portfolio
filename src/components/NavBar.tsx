import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className="my-5">
      <Link href="/about" legacyBehavior>
        <a className={router.pathname === "/about" ? "active" : ""}>ABOUT</a>
      </Link>
      <Link href="/" legacyBehavior>
        <a className={router.pathname === "/" ? "active" : ""}>PROJECT</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a className={router.pathname === "/contact" ? "active" : ""}>
          CONTACT
        </a>
      </Link>
    </nav>
  );
}
