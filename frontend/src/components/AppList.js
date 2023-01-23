import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const AppList = () => {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        getApps();
    }, []);

    const getApps = async () => {
        const apps = await axios.get('http://localhost:8080/apps');
        setApps(apps.data);
    }

    const deleteApp = async (id) => {
        await axios.delete(`http://localhost:8080/apps/${id}`);
        getApps();
    }

    return (
        <div>
            <Link to="/add" className="btn btn-primary mt-5">Add New</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Hostname</th>
                        <th>IP Address</th>
                        <th>OS</th>
                        <th>Jenis</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apps.map((app, index) => (
                            <tr key={app.id}>
                                <td>{index + 1}</td>
                                <td>{app.nama}</td>
                                <td>{app.hostname}</td>
                                <td>{app.ip_address}</td>
                                <td>{app.os}</td>
                                <td>{app.jenis}</td>
                                <td>
                                    <Link to={`/edit/${app.id}`} className="btn btn-sm btn-secondary me-1">Edit</Link>
                                    <button onClick={() => deleteApp(app.id)} className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AppList;