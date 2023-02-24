import Head from 'next/head';
import {hourly_sales, hours, replies} from '../data';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReportTable from '../components/ReportTable';
import CreateForm from "@/components/CreateForm";


export default function Home() {
    const [createdCookieStands, setCreatedCookieStands] = useState([]);

    function locationCreationHandler(createStand) {
        //this is to get the list of replies from data for location data (replace random reply variable in both const's
        //to reflect the Location key with of City, State, Country data.js info)
        const standLocations = replies[Math.floor(Math.random() * replies.length)];

        const createdCookieStand = {
            location: createStand,
            //this is the spot for the location data from locationInputHandler
            reply: standLocations,
            locationHourlySales: hourly_sales,
            id: createdCookieStands.length,
        };
        setCreatedCookieStands( [...createdCookieStands, createdCookieStand]);
    }

    function getLatestCookieStand() {
        if (createdCookieStands.length === 0) {
            return <h2>No Cookie Stands Available</h2>;
        } else {
            return createdCookieStands[createdCookieStands.length - 1].reply;
        }
    }

    function get_grand_totals() {

        const hourly_totals = new Array(hours.length).fill(0)
        for (const created_cookie_stand of createdCookieStands) {
            created_cookie_stand.locationHourlySales.forEach((hour, index) => {
                hourly_totals[index] += hour


            })
        }
        return hourly_totals
    }

    // function max_totals() {
    //
    //     const max_array = new Array(hourly_sales.length).fill(0)
    //     for (const created_cookie_stand of createdCookieStands) {
    //         created_cookie_stand.locationHourlySales.forEach((hour, index) => {
    //         var max_array[index] += hour
    //     })
    //     }
    //     return max_array
    // }



  return(
      <div>
          <Head>
            <title>Cookie Stand Admin</title>
          </Head>
          <div>
            <Header />
        <main>
            <div className="flex item-center p-4 justify-center text-dark-gray">
                <div className="box-border rounded bg-green-300 w-9/12 text-sm px-3 pd-2 relative">
                    <CreateForm createStand = { locationCreationHandler }/>

                </div>
            </div>
            <div className="flex item-center p-4 justify-center text-dark-gray">
                <ReportTable standsReport = { createdCookieStands } grand_total_sales = { get_grand_totals() }/>
            </div>
        </main>
          </div>
          <Footer createdCookieStands = { createdCookieStands.length }/>
        </div>
  )
}