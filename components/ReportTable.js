// ------------------------------ lab requirements:
// If reports is not empty then render a table with thead,tbody and tfoot components.
//

export default function ReportTable({standsReport: createdCookieStand, grand_total_sales}) {

    if (createdCookieStand.length === 0) {
        return (
            <h2>No Cookie Stands Available</h2>
        );
    } else {
        return (
            <div className="flex item-center p-4 justify-center text-dark-gray">
                <table className="w-1/2 mx-auto my-4 border">
                    <thead>
                    <tr>
                        <th className="border border-black">Location</th>
                        <th className="border border-black">6am</th>
                        <th className="border border-black">7am</th>
                        <th className="border border-black">8am</th>
                        <th className="border border-black">9am</th>
                        <th className="border border-black">10am</th>
                        <th className="border border-black">11am</th>
                        <th className="border border-black">12pm</th>
                        <th className="border border-black">1pm</th>
                        <th className="border border-black">2pm</th>
                        <th className="border border-black">3pm</th>
                        <th className="border border-black">4pm</th>
                        <th className="border border-black">5pm</th>
                        <th className="border border-black">6pm</th>
                        <th className="border border-black">7pm</th>
                        <th className="border border-black">Totals</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.values(createdCookieStand).map(item => (
                        <tr key={item.id}>
                            <td className="p-2 border border-black">{item.location}</td>
                            {/*<td className="p-2 border border-black">{item.locationHourlySales}</td>*/}
                            {item.locationHourlySales.map((location_sales, sold) => (
                                <td key={sold}>
                                    {location_sales}
                                </td>
                            ))}
                            <td>
                                {item.locationHourlySales.reduce((accumulator, current) => accumulator + current)}
                            </td>
                            <td>
                                {/*{item.locationHourlySales.reduce(())}*/}
                            </td>
                        </tr>

                    ))}
                    </tbody>
                    <tfoot>
                    <tr className="p-2 border border-black">
                        <td>Totals</td>
                        {grand_total_sales.map((total, index) => (
                            <td key={index}>
                                {total}
                            </td>
                        ))}
                    </tr>
                    </tfoot>
                </table>
            </div>
        );
    }

}
