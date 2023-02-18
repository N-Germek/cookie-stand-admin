import Head from 'next/head';
import {hours, replies} from '../data';
import { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReportTable from '../components/ReportTable'
import CreateForm from "@/components/CreateForm";


export default function Home() {
    const [createdCookieStands, setCreatedCookieStand] = useState([]);

    function locationCreationHandler(Question) {
        //this is to get the list of replies from data for location data (replace random reply variable in both const's
        //to reflect the Location key with of City, State, Country data.js info)
        const standLocations = replies[Math.floor(Math.random() * replies.length)];

        const createdCookieStand = {
            location: Question,
            //this is the spot for the location data from locationInputHandler
            reply: standLocations,
            locationHourlySales: hours,
            id: createdCookieStands.length,
        };
        setCreatedCookieStand( [...createdCookieStands, createdCookieStand]);
    }

    function getLatestCookieStand() {
        if (createdCookieStands.length === 0) {
            return <h2>No Cookie Stands Available</h2>;
        } else {
            return createdCookieStands[createdCookieStands.length - 1].reply;
        }
    }


  return(
      <div>
{/*          // update index.js home function for logic*/}
{/*// const [worldwide_locations, create_new_stand_location] = useState([]);*/}
          <Head>
            <title>Cookie Stand Admin</title>
          </Head>
          <div>
            <Header />
        <main>
            <div className="flex item-center p-4 justify-center text-dark-gray">
                <div className="box-border rounded bg-green-300 w-9/12 text-sm px-3 pd-2 relative">
                    <CreateForm createStand = { locationCreationHandler }/>
                    {/*<ReportTable standsReport = { createdCookieStands }/>*/}
                </div>
            </div>
            <div className="flex item-center p-4 justify-center text-dark-gray">
                <p> <ReportTable standsReport = { getLatestCookieStand() }/> </p>
                <p> Report Table Coming Soon... </p>
            </div>
        </main>
          </div>
          <Footer createdCookieStands = { createdCookieStands.length }/>
        </div>
  )
}