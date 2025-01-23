import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Profile =async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return (
        <div className="container mx-auto mt-10 ">
            <h1 className="text-3xl  font-bold">Welcome to your profile!</h1>
            <p className="mt-4 text-gray-600">Hello, {user?.given_name || "User"}!</p>

        </div>
    );
};

export default Profile;