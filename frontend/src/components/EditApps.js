import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';

const EditApp = () => {
    const [nama, setNama] = useState('');
    const [hostname, setHostname] = useState('');
    const [ip_address, setIpAddress] = useState('');
    const [os, setOs] = useState('');
    const [jenis, setJenis] = useState('');
    const history = useHistory();
    const {id} = useParams();

    const updateApp = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:8080/apps/${id}`, {
            nama: nama,
            hostname: hostname,
            ip_address: ip_address,
            os: os,
            jenis: jenis,
        });
        history.push("/");
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
        <div>
            <form onSubmit={ updateApp }>
                <div className='field'>
                    <label className='label'>Nama</label>
                    <input type="text" className='input' value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" />
                </div>
                <div className='field'>
                    <label className='label'>Hostname</label>
                    <input type="text" className='input' value={hostname} onChange={(e) => setHostname(e.target.value)} placeholder="Hostname" />
                </div>
                <div className='field'>
                    <label className='label'>IP Address</label>
                    <input type="text" className='input' value={ip_address} onChange={(e) => setIpAddress(e.target.value)} placeholder="IP Address" />
                </div>
                <div className='field'>
                    <label className='label'>Operating System</label>
                    <input type="text" className='input' value={os} onChange={(e) => setOs(e.target.value)} placeholder="Operating System" />
                </div>
                <div className='field'>
                    <label className='label'>Jenis</label>
                    <input type="text" className='input' value={jenis} onChange={(e) => setJenis(e.target.value)} placeholder="Jenis" />
                </div>
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditApp