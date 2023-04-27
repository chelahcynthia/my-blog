import Link from "next/link";
import { FaLinkedIn, FaTwitter, FaGithub, FaLaptop} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div
        className="prose prose-xl mx-auto
    flex justify-between flex-col sm:flex-row
    ">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
      <Link href="/" className="text-white/90 no-underline hover:text-white">Cynthia Chelah</Link>
      </h1>
      </div>
    </nav>
  );
}

export default Navbar;
