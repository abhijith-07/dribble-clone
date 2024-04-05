export default function GetStarted() {
    return(
        <div className="flex h-lvh align-middle">
            <div className="basis-1/3">
                logo
            </div>
            <div className="basis-2/3 m-auto">
                <h1 className="text-4xl font-bold">Welcome! Let's create your profile</h1>
                <p className="text-darkGrey font-normal">Let others get to know your better! You can do these later</p>
                <form action="">
                    <div>
                        <h2 className="text-xl font-bold" >Add an avatar</h2>
                        <div className="flex">
                            <div className="w-40 h-40 border-2 border-dashed rounded-full flex align-middle justify-center hover:cursor-pointer">
                                <img src="/icons/camera.svg" alt="" className="w-6" />
                            </div>
                            <div className="mt-4 ml-8">
                                <button className="border-2 rounded-md p-2" >Choose Image</button>
                                <p className="text-darkGrey hover:cursor-pointer"> &gt; Or choose one of our defaults </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold" >Add your location</h2>
                        <input type="text" placeholder="Enter a location" className="outline-none border-b-2 size-full" />
                    </div>
                    <button type="submit" className="bg-pink text-white px-24 py-2 rounded-lg" >Next</button>
                    <div className="active">or Press RETURN</div>
                </form>
            </div>
        </div>
    )
}