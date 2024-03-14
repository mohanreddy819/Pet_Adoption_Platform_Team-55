import React, { useState } from 'react';
import './style.css'; // Import the CSS file
import logo from './Images/logo.jpg';
import user from './Images/user.png'; // Import the logo image
import { Link } from 'react-router-dom';
import c1 from './Images/1.jpg';
import c2 from './Images/2.jpg';
import c3 from './Images/3.jpg';
import c4 from './Images/4.jpg';
import c5 from './Images/5.jpg';
import c6 from './Images/6.jpg';
import c7 from './Images/7.jpg';
import c8 from './Images/8.jpg';

function PetAdoptionPlatform() {
    const [filter, setFilter] = useState('All');

    // Function to handle filter change
    const handleFilterChange = (type) => {
        setFilter(type);
    };

    // Sample pet data
    const petData = [
        { id: 1, name: 'Minny', type: 'Cat', image: c1, link: '/jen' },
        { id: 2, name: 'Jack', type: 'Dog', image: c2, link: '/ja' },
        { id: 3, name: 'Fighter', type: 'Fish', image: c3, link: '/fi' },
        { id: 4, name: 'Harold', type: 'Rabbit', image: c4, link: '/ha' },
        { id: 5, name: 'Nemo', type: 'Fish', image: c5, link: '/ne' },
        { id: 6, name: 'Lucy', type: 'Cat', image: c6, link: '/lu' },
        { id: 7, name: 'Jenny', type: 'Dog', image: c7, link: '/je' },
        { id: 8, name: 'Kathie', type: 'Cat', image: c8, link: '/ka' }
    ];

    return (
        <div>
            <div className="header">
                <div className="brandLogo">
                    <a href="home.html">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="search">
                    <input type="search" id="query" name="q" placeholder="Search for pet..." />
                    <button>Search</button>
                </div>
                <div className="city">
                    <select name="cityList" id="cityList">
                        <option value="">Bangalore</option>
                        <option value="">Mangalore</option>
                        <option value="">Madikeri</option>
                        <option value="">Hosadurga</option>
                        <option value="">Hassan</option>
                    </select>
                </div>
                <div className="user">
                    &nbsp;
                    <a href="#">
                        <img src={user} alt="" />
                    </a>
                    <div>
                        <select name="">
                            <option disabled>select</option>
                            <option value="">Profile</option>
                            <option value="">Detailss</option>
                            <option value="">Liked pets</option>
                        </select>
                    </div>
                </div>
            </div>
            <br />

            {/* Slider starts */}
            <div className="slideshow">
                <div className="slider">
                    <a href="#"><img src={c1} alt="" /></a>
                    <a href="#"><img src={c2} alt="" /></a>
                    <a href="#"><img src={c3} alt="" /></a>
                    <a href="#"><img src={c4} alt="" /></a>
                </div>
            </div>
            <br /><br />
            {/* Slider ends */}

            {/* Filter starts */}
            <div className="filter">
                <br />
                <h1 className="filterHead"><u><i>Filter Your Search</i></u></h1>
                <br />
                <div className="filterBody">
                    <div className="genre">
                        <label className="genreHeading"><b>Type:</b> </label>
                        <span className="genreButtons">
                            <button onClick={() => handleFilterChange('All')} className={filter === 'All' ? 'active' : ''}>All</button>
                            <button onClick={() => handleFilterChange('Dog')} className={filter === 'Dog' ? 'active' : ''}>Dogs</button>
                            <button onClick={() => handleFilterChange('Cat')} className={filter === 'Cat' ? 'active' : ''}>Cats</button>
                            <button onClick={() => handleFilterChange('Fish')} className={filter === 'Fish' ? 'active' : ''}>Fish</button>
                            <button onClick={() => handleFilterChange('Rabbit')} className={filter === 'Rabbit' ? 'active' : ''}>Rabbit</button>
                            <button onClick={() => handleFilterChange('Birds')} className={filter === 'Birds' ? 'active' : ''}>Birds</button>
                        </span>
                    </div>
                </div>
            </div>
            <br /><br />
            {/* Filter ends */}

            {/* Gallery starts */}
            <div className="gallery">
                {petData.map((pet, index) => {
                    // Check if the pet matches the selected filter or if the filter is set to 'All'
                    if (filter === 'All' || pet.type === filter) {
                        return (
                            <div key={index} className="a" data-type={pet.type}>
                                <img src={pet.image} alt="" /> <br />
                                <h3>{pet.name}</h3>
                                <h4>({pet.type})</h4> <br />
                                {/* Manually defined link */}
                                <Link to={pet.link}><button>Details</button></Link>
                            </div>
                        );
                    } else {
                        return null; // If the pet does not match the filter, don't render it
                    }
                })}
            </div>
            <br /><br />
            {/* Gallery ends */}

            {/* Footer starts */}
            <footer>
                <div className="one">
                    <h1>About</h1>
                    <h1>Contact</h1>
                    <h1>Locate Us</h1>
                </div>
                <div className="two">
                    <img src={logo} alt="" />
                </div>
                <div className="three">
                    <h1>Follow us: </h1>
                    <a href="https://www.instagram.com" target="_blank">
                        <h3>Instagram</h3>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                        <h3>Twitter</h3>
                    </a>
                    <a href="https://facebook.com" target="_blank">
                        <h3>Facebook</h3>
                    </a>
                </div>
            </footer>
            {/* Footer ends */}
        </div>
    );
}

export default PetAdoptionPlatform;
