import Menu from "./Menu"
import Link from "next/link";

const Navbar = () => {
    return (
     <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
        <div className="h-full flex intems-center justify-between"> 

        {/*mobile*/}
        <Link href='/'>
        <div className="text-2x1 tracking-wide">Lama</div>
        </Link>
        <Menu/>
        </div>
    </div>
    );
};

export default Navbar