import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <div className=" max-w-7xl mx-auto  px-4  md:px-8  py-5  grid-cols-12 ">
        <div className=" col-span-6 flex md:col-span-3 ">
          <Link href="/">
            <h1 className=" text-3xl font-semibold">
              Aditya <span className="text-blue-500">Singh</span>
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
