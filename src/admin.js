import React, { useState, useEffect } from 'react';
import './adminStyle.css'; // Import the CSS file
import logo from './Images/logo.jpg';

function AdminPage() {
    const [pets, setPets] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch pets and users data when the component mounts
        fetchPets();
        fetchUsers();
    }, []);

    const fetchPets = async () => {
        try {
            const response = await fetch('http://localhost/New%20folder/backend/getPets.php');
            if (!response.ok) {
                throw new Error('Failed to fetch pets');
            }
            const petsData = await response.json();
            setPets(petsData);
        } catch (error) {
            console.error('Error fetching pets:', error.message);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost/New%20folder/backend/getUser.php');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const usersData = await response.json();
            setUsers(usersData);
        } catch (error) {
            console.error('Error fetching users:', error.message);
        }
    };

    return (
        <div>
            {/* Header starts */}
            <div className="header">
                <div className="brandLogo">
                    <a href="admin.html">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="admin-actions">
                    <button>Add New Pet</button>
                </div>
            </div>
            {/* Header ends */}

            {/* Display pets */}
            <div className="section">
                <h2>Pets</h2>
                <div className="pet-container">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Sex</th>
                                <th>Age</th>
                                <th>Color</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pets.map((pet, index) => (
                                <tr key={index}>
                                    <td>{pet.petid}</td>
                                    <td>{pet.petName}</td>
                                    <td>{pet.type}</td>
                                    <td>{pet.sex}</td>
                                    <td>{pet.age}</td>
                                    <td>{pet.color}</td>
                                    <td>{pet.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Display users */}
            <div className="section">
                <h2>Users</h2>
                <div className="user-container">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>DOB</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.dob}</td>
                                    <td>{user.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminPage;
