import { Link } from "react-router-dom"

export default function Signup() {
    return(
        <div className="flex h-lvh">
        <div className="basis-1/3 bg-orangeBrown">
            Logo
        </div>
        <div className="basis-2/3 m-4">
            <div className="flex justify-end">
                Already a member? &nbsp; <Link className="text-linkBlue"> Sign In </Link>
            </div>
            <div className="flex justify-center">
                <div className="w-[500px]">
                    <h1 className="text-2xl font-bold"> Sign up to Dribble </h1>
                    <div className="text-red-500">
                        <li>Username has already been taken</li>
                    </div>
                    <form action="" method="post" className="grid grid-cols-2 gap-4">
                        <div className="w-full">
                            <label htmlFor="name" className="font-bold">Name</label>
                            <input type="text" placeholder="John" id="name" className="bg-lightGrey w-full rounded-md py-2 px-4" />
                        </div>
                        <div>
                            <label htmlFor="username" className="font-bold">Username</label>
                            <input type="text" placeholder="John" id="username" className="bg-lightGrey w-full rounded-md py-2 px-4" />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="email" className="font-bold">Email</label>
                            <input type="email" name="" id="email" placeholder="account@refero.design" className="bg-lightGrey w-full rounded-md py-2 px-4" />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="password" className="font-bold">Password</label>
                            <input type="password" name="" id="password" placeholder="6+ characters" className="bg-lightGrey w-full rounded-md py-2 px-4" />
                        </div>
                        <div className="col-span-2 flex gap-2">
                            <div>
                                <input type="checkbox" name="terms" id="" className="w-5 h-5 mt-1" />
                            </div>
                            <p>Creating an account means you're okay with our
                            <Link to="#" className="text-linkBlue"> Terms of Service</Link>, <Link className="text-linkBlue">Privacy policy</Link>, and our default <Link className="text-linkBlue">Notification</Link> Settings.
                            </p>
                        </div>
                        <button type="submit" className="bg-pink text-white p-2 rounded-lg" >Create Account</button>
                    </form>
                    <p>This site is protected by reCAPTCHA and the Google <Link className="text-linkBlue"> Privacy Policy </Link> and <Link className="text-linkBlue"> Terms of Service </Link> apply</p>
                </div>
            </div>
        </div>
        </div>
    )
}