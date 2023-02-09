import Head from 'next/head';
import { replies } from '../data';
import { useState } from 'react';

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
        <header className="flex items-center p-4 justify-between bg-green-500 text-dark-gray">
          Cookie Stand Admin
            <h1 className="text-4xl">Create Cookie Stand</h1>
        </header>
        <main>
            <h1>Create a Cookie Stand</h1>
            <form onSubmit={locationInputHandler}>
                <p>Location

                <input type='search' class="form-input"/>
                </p>
                <p>
                   Minimum Customers per Hour
                   <input type='number' class="form-input"/>
                </p>
                <p>
                   Maximum Customers per Hour
                    <input type='number' className="form-input"/>
                </p>
                <p>
                   Average Cookies per Sale
                    <input type='number' className="form-input"/>
                </p>
            </form>

            <button>Create</button>
          <p> Report Table Coming Soon... </p>
        </main>
              </div>

        <footer className="p-4 mt-8 bg-green-500 text-dark-gray-50">
            <p>&:copy 2023</p>
        </footer>
      </div>
  )
}