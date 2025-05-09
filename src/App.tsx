import { data } from 'react-router';
import './App.css'
import EmployeeCard from './components/EmployeeCard';
import { useState } from 'react';



const sampleEmployee = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};


function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  <div className='App'>
    <EmployeeCard employee={sampleEmployee} />
  </div>

  const getEmployee = () => {
    // Send the request
    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.results[0]);
      });
    console.log(data);
  };



  return (
    <>
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>

    </>
  )

}

export default App
