export default function Describe() {
    return(
        <div>
            <div>
                logo
                <button>&lt;</button>
            </div>
            <div className="flex h-lvh">
                <div className="m-auto text-center">
                    <h1 className="text-3xl font-bold" >What brings you to Dribble?</h1>
                    <p className="text-darkGrey">Select the options that best describe you. Don't worry, you can explore other options later.</p>
                    <div className="flex gap-6">
                        <div className="card">
                            <img src="images/i.png" alt="" />
                            <p>I'm a designer looking to share my work</p>
                            <input type="checkbox" name="" id=""  className="w-4 h-4"/>
                        </div>
                        <div className="card">
                            <img src="images/ii.png" alt="" />
                            <p>I'm looking to hire a designer</p>
                            <input type="checkbox" name="" id=""  className="w-4 h-4"/>
                        </div>
                        <div className="card">
                            <img src="images/iii.png" alt="" />
                            <p>I'm looking for design inspiration</p>
                            <input type="checkbox" name="" id="" className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="w-full">
                        <p>Anythng else? You can select multiple</p>
                        <button className="bg-pink text-white px-24 py-2 rounded-lg">Finish</button>
                        <p className="active">or Press RETURN</p>
                    </div>
                </div>
            </div>
        </div>
    )
}