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
                    <h1>logo</h1>
                </div>
                <div className="flex gap-6">
                    <Link href={'/'}>Home</Link>
                    {user ? (
                        <Link href={'/profile'}>Profile</Link> // Go to profile if user is authenticated
                    ) : (
                        <LoginLink className="btn">Profile</LoginLink> // Trigger Kinde login flow if not authenticated
                    )}
                </div>
                {user ? (
                    <LogoutLink className="btn border border-gray-400 p-2 rounded-md">Logout</LogoutLink>
                ) : (
                    <div className="flex gap-6">
                        <LoginLink className="btn border border-gray-400 p-2 rounded-md">Sign in</LoginLink>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
