import React, { useState, useEffect } from "react";
import axios from "axios";
import './UserList.css';


const UserList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            const posts = response.data;
            setList(posts);
        })
        .catch((err) => {
            console.error(err);
        });
    }, []);
    return (
        <table>
            <thead>
                <tr>
                    <th className="">NAME</th>
                    <th className="">USER NAME</th>
                    <th className="">EMAIL</th>
                </tr>
            </thead>
            <tbody>
                {list.map((user, index) => (
                    <tr key={user.id}>
                        <td className="data">{user.name}</td>
                        <td className="data">{user.username}</td>
                        <td className="data">{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserList;