// <ReportTable> details…
// If reports is empty then render <h2>No Cookie Stands Available</h2>
// If reports is not empty then render a table with thead,tbody and tfoot components.
// link from data.js
// created_cookie_stands={0} footer
export default function ReportTable() {
    return(
        <form className="static" onSubmit={locationInputHandler}>
            <h1 className="text-2xl flex item-center content justify-center my-4">Create a Cookie Stand</h1>
            <span>
                                <p className="flex flex-nowrap mt-5 p-2">Location
                                    <input className="flew flex-auto mx-3 w-5/6" type='search' className="form-input"/>
                                </p>
                            </span>
            <div className="flex flex-nowrap p-2">
                            <span className="flex block">
                            <div className="w-1/4 p-2 mx-1 my-2">
                                <label className="block mx-auto">Minimum Customers per Hour</label>
                                <input className="w-full" type='number' className="form-input"/>
                            </div>
                            <div className="w-1/4 p-2 mx-1 my-2">
                                <label className="block mx-auto">Maximum Customers per Hour</label>
                                <input className="w-full" type='number' className="form-input"/>
                            </div>
                            <div className="w-1/4 p-2 mx-1 my-2">
                                <label className="block mx-auto">Average Cookies per Sale</label>
                                <input className="w-full" type='number' className="form-input"/>
                            </div>
                                <div>
                            <button className="box-border bg-green-600 p-9">Create</button>
                                </div>
                            </span>
            </div>
        </form>

    );
}