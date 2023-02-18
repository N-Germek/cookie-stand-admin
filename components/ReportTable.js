// ------------------------------ lab requirements:
// If reports is not empty then render a table with thead,tbody and tfoot components.
//

export default function ReportTable( { standsReport: createdCookieStand } ) {

        if (createdCookieStand.length === 0) {
            return (
                <h2>No Cookie Stands Available</h2>
            );
        } else {
            return (
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
                    {createdCookieStand.map(item => (
                        <tr key={item.id}>
                            <td className="p-2 border border-black">{item.id}</td>
                            <td className="p-2 border border-black">{item.location}</td>
                            <td className="p-2 border border-black">{item.locationHourlySales}</td>
                            {/*<td className="p-2 border border-black">{item.total_sales}</td>*/}
                            {/*the below should be the location event handler*/}
                            <td className="p-2 border border-black">{item.reply}</td>
                        </tr>
                    ))}
                </tbody>
                    <tfoot>
                    {/*<td className="p-2 border border-black">{item.grandTotals}</td>*/}
                    </tfoot>
            </table>
            );
    };
}
