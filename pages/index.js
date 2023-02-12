import Head from 'next/head';
import { replies } from '../data';
import { useState } from 'react';
// import Header from '../components/Header'
// import Footer from '../components/Footer'


export default function Home() {
    const [reply, setReply] = useState('Location');

    function locationInputHandler(event) {
        event.preventDefault();
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        setReply(randomReply)
    }
  return(
      <div>
        <Head>
          <title>Cookie Stand Admin</title>
        </Head>
          <div>
        <header className="flex items-center text-4xl-grey p-4 justify-left bg-green-400">
            <h1>Cookie Stand Admin</h1>
        </header>
        <main>
            <div className="flex item-center p-4 justify-center text-dark-gray">
                <div className="box-border rounded bg-green-300 w-9/12 text-sm px-3 pd-2 relative">
                    <form className="static" onSubmit={locationInputHandler}>
                        <h1 className="text-2xl flex item-center content justify-center my-4">Create a Cookie Stand</h1>
                            <span>
                                <p className="flex flex-nowrap mt-5 p-2">Location
                                    <input className="flew flex-auto mx-3 w-5/6" type='search' class="form-input"/>
                                </p>
                            </span>
                        <div className="flex flex-nowrap p-2">
                            <span className="flex block">
                            <div className="w-1/4 p-2 mx-1 my-2">
                                <label className="block mx-auto">Minimum Customers per Hour</label>
                                <input  className="w-full" type='number' class="form-input"/>
                            </div>
                            <div className="w-1/4 p-2 mx-1 my-2">
                                <label className="block mx-auto">Maximum Customers per Hour</label>
                                <input className="w-full" type='number' class="form-input"/>
                            </div>
                            <div className="w-1/4 p-2 mx-1 my-2">
                                <label className="block mx-auto">Average Cookies per Sale</label>
                                <input className="w-full" type='number' class="form-input"/>
                            </div>
                                <div>
                            <button className="box-border bg-green-600 p-9">Create</button>
                                </div>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex item-center p-4 justify-center text-dark-gray">
                <p> Report Table Coming Soon... </p>
            </div>
        </main>
          </div>
            <footer className="w-screen p-4 mt-8 bg-green-400 text-dark-gray-500">
             <p>&copy; 2023</p>
            </footer>
        </div>
  )
}