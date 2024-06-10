import React, {useEffect, useState} from 'react'
import { deleteProgrammer, listProgrammers, updateProgrammer } from '../service/ProgrammerService'
import { Link, useNavigate } from 'react-router-dom'

const ListProgrammerComponent = () => {
   
   const [programmers, setProgrammers] = useState([])
   const navigator = useNavigate();

   useEffect(() => {
    getAllProgrammers();
    }, []) 

    function addNewProgrammer(){
        navigator('/add-programmer')
    }
    const getAllProgrammers = () =>{
        listProgrammers().then((response) => {
            setProgrammers(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    const DeleteProgrammer = (programmerId) => {
        deleteProgrammer(programmerId).then((response) =>{
            listProgrammers();

        }).catch(error => {
            console.log(error);
        })
    }
  return (
    <div className='container'>
        <h2 className='text-center'>List of Programmers</h2>
        <button className='btn btn-primary mb-5'onClick={addNewProgrammer}>Add Programmer</button>
        <table className='table table stripped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Repo Name</th>
                    <th>Actions</th>

                </tr>
            </thead>
            <tbody>
                {
                    programmers.map(programmer =>
                        <tr key = {programmer.id}>
                            <td>{programmer.id}</td>
                            <td>{programmer.firstName}</td>
                            <td>{programmer.lastName}</td>
                            <td>{programmer.repoName}</td>
                            <td>
                                <Link className="btn btn-info" to={`/edit-programmer/${programmer.id}`}>Update</Link>
                                <button className="btn btn-danger" onClick={() => deleteProgrammer(programmer.id)}
                                    style={{marginLeft:"10px"}}>Delete</button>
                                
                            </td>
                        </tr> )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListProgrammerComponent