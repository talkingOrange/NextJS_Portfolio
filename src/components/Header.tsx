import DarkModeBtn from "./DarkModeBtn";
import NavBar from "./NavBar";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/about" class="flex items-center mb-4 md:mb-0">
            <Image
              src="/profileImg.jpg"
              alt="Picture of the author"
              width={40} //automatically provided
              height={40} //automatically provided
              class="rounded-full"
            />
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavBar />
          </nav>
          <DarkModeBtn />
        </div>
      </header>
    </>
  );
}
