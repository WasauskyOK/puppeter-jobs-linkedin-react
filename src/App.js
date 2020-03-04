import React from 'react';
import './App.css';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
const List=gql`
{
  Jobs{
    cargo
    logo
    empresa
  	status
  }
}
`

function App() {
  const {data,loading,error}=useQuery(List)
  if(loading)return<p>Loading ...</p>
  if(error)return <p>Error xd</p>
  return( 
    <div>
      <table className="table table-striped table-dark">
        <thead className="thead-dark">
          <tr>
            <th>Empresa</th>
            <th>Cargo</th>
            <th>Logo</th>
            <th>Status</th>
          </tr>     

        </thead>
        <tbody>
          {
            data.Jobs.map(({empresa,cargo,logo,status,_id},i)=><tr key={i}>
              <td >{empresa}</td>
              <td >{cargo}</td>
          <td ><a  href={logo} target='_blank'>{logo}</a></td>
              <td >{status}</td>
            </tr>)
          }
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
      
    </div>);
  
  
}

export default App;
