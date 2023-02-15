// import Head from 'next/head';
import { replies } from '../data';
import { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from '../components/Head'
import ReportTable from '../components/ReportTable'


export default function Home() {
    // const [reply, setReply] = useState('Location');
    const [createdCookieStands, setCreatedCookieStand] = useState([]);

    function locationInputHandler(event) {
        event.preventDefault();
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        // setReply(randomReply)

        const createdCookieStand = {
            question: event.target. question.value,
            reply: randomReply,
            id: createdCookieStands.length,
        };
        setCreatedCookieStand( [...createdCookieStands, createdCookieStand]);
    }

    function getLatestCookieStand() {
        if (createdCookieStands.length === 0) {
            return <ReportTable />
            return 'No Cookie Stands Available'
        } else {
            return <ReportTable createdCookieStands={[createdCookieStands.length - 1].reply}/>;

        }
    }


  return(
      <div>
        <Head/>
          <div>
            <Header />
        <main>
            <div className="flex item-center p-4 justify-center text-dark-gray">
                <div className="box-border rounded bg-green-300 w-9/12 text-sm px-3 pd-2 relative">
                    <ReportTable />
                </div>
            </div>
            <div className="flex item-center p-4 justify-center text-dark-gray">
                <p> { getLatestCookieStand() }</p>
                <p> Report Table Coming Soon... </p>
            </div>
        </main>
          </div>
          <Footer created_cookie_stands={0}/>
        </div>
  )
}