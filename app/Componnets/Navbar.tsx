import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className=" max-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12">
        <div className=" col-span-6 flex md:col-span-3">
          <Link href="/">
            <h1 className=" text-2xl font-semibold ">
              {" "}
              <span className="text-blue-500"> Aditya </span>{" "}
              <span className="text-pink-500 "> Singh</span>
            </h1>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
