import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();


    return (
        <div className="shadow-md">
            <nav className="container mx-auto flex justify-between items-center py-5">
                <div>
               <h2 className="font-serif md:text-2xl ml-4 md:ml-0 font-extrabold">My Blog</h2>
                </div>
                <div className="flex gap-1 md:gap-3">
                    <Link className="btn border border-gray-400 px-2 py-1 rounded-md" href={'/'}>Home</Link>
                    {user ? (
                        <Link className="btn border border-gray-400 px-2 py-1 rounded-md" href={'/profile'}>Profile</Link> 
                    ) : (
                        <LoginLink className="btn border border-gray-400 px-2 py-1 rounded-md">Profile</LoginLink> 
                    )}
                </div>
                {user ? (
                    <LogoutLink className="btn    bg-gray-700 text-white p-2 rounded-md mr-4 md:mr-0">Logout</LogoutLink>
                ) : (
                    <div >
                        <LoginLink className="btn   bg-gray-700 text-white p-2 rounded-md mr-4 md:mr-0">Login</LoginLink>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
