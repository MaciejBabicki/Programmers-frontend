import React, { useEffect, useState } from 'react';
import { listRepositories } from '../service/GithubService';
import { useNavigate } from 'react-router-dom';

const RepositoriesListComponent = () => {

    const [repositories, setRepositories] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        listRepositories().then((response) => {
            setRepositories(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    function addNewRepository() {
        navigator('/add-repo')
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List of Repositories</h2>
            <button className='btn btn-primary mb-5' onClick={addNewRepository}>Add Repository</button>
            <table className='table table stripped table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Fork</th>
                        <th>Owner</th>
                        <th>url</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        repositories.map(repo =>
                            <tr key={repo.id}>
                                <td>{repo.id}</td>
                                <td>{repo.name}</td>
                                <td>{repo.fork}</td>
                                <td>{repo.owner}</td>
                                <td>{repo.url}</td>
                                
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default RepositoriesListComponent;