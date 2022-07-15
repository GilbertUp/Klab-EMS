import React from 'react'
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { CSVLink } from "react-csv";
import { employeesData } from '../data/index'

function Header({ setIsAdding }) {
    const exportToPdfHandler = () => {
        console.log(employeesData)
        const data = [];
        employeesData.forEach((element) => {
          data.push([
            element.id,
            element.firstName,
            element.lastName,
            element.email,
            element.position,
          ]);
        });
        const doc = new jsPDF();
        console.log(data);
    
        // const title = "Klab employees Report";
        // doc.text(title)
        autoTable(doc, {
          head: [["ID.", "First Name", "Last Name", "Email", "Position"]],
          body: data, // Must be arrays instead of objects!! that's the reason for Foreach to structure all elements
        });
    
        doc.save("klabEmployees.pdf");
      };

      const fileHeaders = [
        { label: "ID", key: "id"},
        { label: "First Name", key: "firstName" },
        { label: "Last Name", key: "lastName" },
        { label: "Email", key: "email" },
        { label: "Position", key: "position" },
      ];

    const csvReport = {
        data: employeesData,
        headers: fileHeaders,
        filename: "Klab_employees_list.csv",
      };
      console.log(csvReport);
    return (
        <header>
            <h1>Klab-EMS</h1>
            
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Button</button>
                <button onClick={exportToPdfHandler} className='round-button'>export to pdf</button>
                <CSVLink {...csvReport}><button className='round-button'>export to csv</button></CSVLink>
                < a href="/login" className='round-button'>Logout</a>
            </div>
        </header>
    )
}

export default Header