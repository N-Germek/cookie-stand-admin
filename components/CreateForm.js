// link from data.js

// <CreateForm> component details…
// hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

export default function CreateForm( { createStand } ) {

    function handleSubmit(event) {
        event.preventDefault();
        createStand(event.target.location.value);
        event.target.reset();
    }

    return(
        <form className="static" onSubmit={ handleSubmit }>
            <h1 className="text-2xl flex item-center content justify-center my-4">Create a Cookie Stand</h1>
            <span>
                                <p className="flex flex-nowrap mt-5 p-2">Location
                                    <input className="flew flex-auto mx-3 w-5/6" type='search'/>
                                </p>
                            </span>
            <div className="flex flex-nowrap p-2">
                            <span className="flex block">
                            <div className="w-1/4 p-2 mx-1 my-2">
                                <label className="block mx-auto">Minimum Customers per Hour</label>
                                <input className="w-full" type='number'/>
                            </div>
                            <div className="w-1/4 p-2 mx-1 my-2">
                                <label className="block mx-auto">Maximum Customers per Hour</label>
                                <input className="w-full" type='number'/>
                            </div>
                            <div className="w-1/4 p-2 mx-1 my-2">
                                <label className="block mx-auto">Average Cookies per Sale</label>
                                <input className="w-full" type='number'/>
                            </div>
                                <div>
                            <button className="box-border bg-green-600 p-9">Create</button>
                                </div>
                            </span>
            </div>
        </form>
    );
}