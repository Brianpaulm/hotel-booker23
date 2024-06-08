import React from 'react'; // Importing React to use JSX
import './Home.css'; // Importing the CSS file for styling the Home component
import Banner from './Banner'; // Importing the Banner component to be used in the Home component

// Home component definition
function Home() {
    return (
        <div className='home'> {/* Main container for the home page */}
            <h1>Home Page</h1> {/* Header text for the home page */}
            <Banner /> {/* Including the Banner component */}
        </div>
    );
}

export default Home; // Exporting the Home component to be used in other parts of the application