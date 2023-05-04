import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className="my-5">
      <Link href="/" legacyBehavior>
        <div className={router.pathname === "/" ? "active" : ""}>ABOUT</div>
      </Link>
      <Link href="/project" legacyBehavior>
        <div className={router.pathname === "/project" ? "active" : ""}>
          PROJECT
        </div>
      </Link>
      <Link href="/contact" legacyBehavior>
        <div className={router.pathname === "/contact" ? "active" : ""}>
          CONTACT
        </div>
      </Link>
    </nav>
  );
}
