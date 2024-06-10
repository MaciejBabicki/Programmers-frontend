import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createProgrammer, getProgrammer, updateProgrammer } from '../service/ProgrammerService';

const ProgrammerComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [repoName, setRepoName] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }

    function handleLastName(e) {
        setLastName(e.target.value);
    }

    function handleRepoName(e) {
        setRepoName(e.target.value);
    }

    function saveProgrammer(e) {
        e.preventDefault();

        const programmer = { firstName, lastName, repoName };
        console.log(programmer);

        if (id) {
            // Update existing programmer
            updateProgrammer(id, programmer).then((response) => {
                console.log(response.data);
                navigate('/programmers');
                setFirstName('');
                setLastName('');
                setRepoName('');
            })
            .catch(error => {
                console.error(error);
            });
        } else {
            // Create new programmer
            createProgrammer(programmer).then((response) => {
                console.log(response.data);
                navigate('/programmers');
                setFirstName('');
                setLastName('');
                setRepoName('');
            })
            .catch(error => {
                console.error(error);
            });
        }
    }

    useEffect(() => {
        if (id) {
            getProgrammer(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setRepoName(response.data.repoName);
            }).catch(error => {
                console.log(error);
            });
        }
    }, [id]);

    const title = () => {
        if (id) {
            return <h2 className='text-center'>Update Programmer</h2>;
        } else {
            return <h2 className='text-center'>Add Programmer</h2>;
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {title()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-5'>
                                <label className='form-label'>First Name: </label>
                                <input
                                    type='text'
                                    placeholder='Enter Programmer First Name'
                                    name='firstName'
                                    value={firstName}
                                    className='form-control'
                                    onChange={handleFirstName}
                                />
                            </div>
                            <div className='form-group mb-5'>
                                <label className='form-label'>Last Name: </label>
                                <input
                                    type='text'
                                    placeholder='Enter Programmer Last Name'
                                    name='lastName'
                                    value={lastName}
                                    className='form-control'
                                    onChange={handleLastName}
                                />
                            </div>
                            <div className='form-group mb-5'>
                                <label className='form-label'>Main Repository Name: </label>
                                <input
                                    type='text'
                                    placeholder='Enter name of the main repository'
                                    name='repoName'
                                    value={repoName}
                                    className='form-control'
                                    onChange={handleRepoName}
                                />
                            </div>
                            <button className='btn btn-success' onClick={saveProgrammer}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgrammerComponent;