import React, { useState } from 'react';
import './jennyStyle.css'; // Import your CSS files here
import logo from './Images/logo.jpg';
import c1 from './Images/2.jpg';
import user from './Images/user.png';

function Jack() {
    const [modalVisible, setModalVisible] = useState();

    const openModal = () => {
        setModalVisible(true);
        console.log('it works')
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        alert('Form submitted');
        closeModal();
    };

    return (
        <div>
            <div className="header">
                <div className="brandLogo">
                    <a href="home.html">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="heading">
                    <h1 style={{ color: 'rgb(255, 153, 0)' }}>Home Pets</h1>
                </div>
                <div className="user">
                    &nbsp; <a href=""><img src={user} alt="" /> </a>
                    <div>
                        <select name="" id="">
                            <option disabled>select</option>
                            <option value="">Profile</option>
                            <option value="">Requests</option>
                            <option value="">Liked pets</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="petImage">
                <img src={c1} alt="" />
            </div>
            <br />
            <main>
                <div className="container">
                    <table id="petTable">
                        <tbody>
                            <tr>
                                <th colSpan="2" style={{ textAlign: 'center' }}>Pet Information</th>
                            </tr>
                            <tr>
                                <td>Pet ID</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>Jack</td>
                            </tr>
                            <tr>
                                <td>Type</td>
                                <td>Dog</td>
                            </tr>
                            <tr>
                                <td>Breed</td>
                                <td>Labrador Retriever</td>
                            </tr>
                            <tr>
                                <td>Sex</td>
                                <td>male</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>3 years</td>
                            </tr>
                            <tr>
                                <td>Color</td>
                                <td>golden</td>
                            </tr>
                            <tr>
                                <td>Size</td>
                                <td>Medium</td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>Friendly and loyal dog.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <br />
            <section>
                <div>
                    <button className="button" style={{ fontSize: '22px' }} onClick={openModal}> Send Request </button>
                </div>
            </section>
            <br /> <br /><br />

            {/* Modal for the form */}
            {modalVisible && (
                <div id="requestModal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Send Request</h2>
                        <form id="requestForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="petId">Pet ID:</label>
                                <input type="text" id="petId" name="petId" defaultValue="123" autoComplete="off" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username:</label>
                                <input type="text" id="username" name="username" defaultValue="Please enter your username" required autoComplete="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="requestId">Request ID:</label>
                                <input type="text" id="requestId" name="requestId" defaultValue="123456" readOnly autoComplete="off" />
                            </div>
                            {/* Additional questions with checkboxes */}
                            <div className="form-group">
                                <label htmlFor="question1">Question 1: Have you ever grown the pet breed?</label><br />
                                <input type="radio" id="question1_yes" name="question1" />
                                <label htmlFor="question1_yes">Yes</label>
                                <input type="radio" id="question1_no" name="question1" />
                                <label htmlFor="question1_no">No</label>
                                <input type="checkbox" id="question1_checkbox" name="question1_checkbox" />
                                <label htmlFor="question1_checkbox">I'm not sure</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="question2">Question 2: Do you have the financial ability to afford food for the pet?</label><br />
                                <input type="radio" id="question2_yes" name="question2" />
                                <label htmlFor="question2_yes">Yes</label>
                                <input type="radio" id="question2_no" name="question2" />
                                <label htmlFor="question2_no">No</label>
                                <input type="checkbox" id="question2_checkbox" name="question2_checkbox" />
                                <label htmlFor="question2_checkbox">I'm not sure</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="question3">Question 3: Do you have enough time to spend time with your pet?</label><br />
                                <input type="radio" id="question3_yes" name="question3" />
                                <label htmlFor="question3_yes">Yes</label>
                                <input type="radio" id="question3_no" name="question3" />
                                <label htmlFor="question3_no">No</label>
                                <input type="checkbox" id="question3_checkbox" name="question3_checkbox" />
                                <label htmlFor="question3_checkbox">I'm not sure</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="question4">Question 4: Is your neighborhood safe for a pet?</label><br />
                                <input type="radio" id="question4_yes" name="question4" />
                                <label htmlFor="question4_yes">Yes</label>
                                <input type="radio" id="question4_no" name="question4" />
                                <label htmlFor="question4_no">No</label>
                                <input type="checkbox" id="question4_checkbox" name="question4_checkbox" />
                                <label htmlFor="question4_checkbox">I'm not sure</label>
                            </div>
                            {/* End of additional questions */}

                            <div className="button-container">
                                <button type="submit">Submit</button>
                                <button type="button" onClick={closeModal}>Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <footer>
                <div className="one">
                    <h1>About</h1>
                    <h1>Contact</h1>
                    <h1>Locate Us</h1>
                </div>
                <div className="two">
                    <img src="Images/logo.jpg" alt="" />
                </div>
                <div className="three">
                    <h1>Follow us: </h1>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <h3>Instagram</h3>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <h3>Twitter</h3>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <h3>Facebook</h3>
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Jack;
