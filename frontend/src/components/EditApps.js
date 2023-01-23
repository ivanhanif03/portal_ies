import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditApp = () => {
    const [nama, setNama] = useState('');
    const [hostname, setHostname] = useState('');
    const [ip_address, setIpAddress] = useState('');
    const [os, setOs] = useState('');
    const [jenis, setJenis] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const updateApp = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:8080/apps/${id}`, {
            nama: nama,
            hostname: hostname,
            ip_address: ip_address,
            os: os,
            jenis: jenis,
        });
        navigate('/');
    }

    useEffect(() => {
        getAppById();
    }, []);

    const getAppById = async () => {
        const response = await axios.get(`http://localhost:8080/apps/${id}`);
        setNama(response.data.nama);
        setHostname(response.data.hostname);
        setIpAddress(response.data.ip_address);
        setOs(response.data.os);
        setJenis(response.data.jenis);
    }

    return (
        <div className='mt-3'>
            <form onSubmit={updateApp}>
                <div className='mb-3'>
                    <label className='form-label'>Nama</label>
                    <input type="text" id='nama' className='form-control' value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama App" />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Hostname</label>
                    <input type="text" id='hostname' className='form-control' value={hostname} onChange={(e) => setHostname(e.target.value)} placeholder="Hostname" />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>IP Address</label>
                    <input type="text" id='ip_address' className='form-control' value={ip_address} onChange={(e) => setIpAddress(e.target.value)} placeholder="IP Address" />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Operating System</label>
                    <input type="text" id='os' className='form-control' value={os} onChange={(e) => setOs(e.target.value)} placeholder="Operating System" />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Jenis</label>
                    <input type="text" id='jenis' className='form-control' value={jenis} onChange={(e) => setJenis(e.target.value)} placeholder="Jenis" />
                </div>
                <div className="mb-3">
                    <Link to="/" className="btn btn-secondary me-1">Cancel</Link>
                    <button className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditApp;