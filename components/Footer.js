export default function Footer( {createdCookieStands} ) {
    return(
        <footer className="w-screen p-4 mt-8 bg-green-400 text-dark-gray-500">
            <p>{createdCookieStands} Locations World Wide</p>
        </footer>
    );

}

// code for cookie shop handling of cookie stand defaults update index.js
//createdCookieStands={createdCookieStands.length}
