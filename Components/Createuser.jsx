import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./home.module.css"
const Createuser=()=>{
   let[name,setName]=useState("")
   let[salary,setSalary]=useState("")
   let[company,setCompany]=useState("")

   let navigator=useNavigate()
   
   let nameData=(e)=>{
    setName(e.target.value)
   }
   let salaryData=(e)=>{
    setSalary(e.target.value)
   }
   let companyData=(e)=>{
    setCompany(e.target.value)
   }
   let formHandle=(e)=>{
       e.preventDefault()
       let payload={name,salary,company}
       axios.post("http://localhost:3000/users",payload)
       .then(()=>{
        console.log("Data has been added")
       })
       .catch(()=>{
        console.log("something is fishy");
       })
       navigator("/user")
   }
     return(
         <div id={style.myForm}>
            <form action="">
                <tr>
                    <th colSpan="2"><h4>User Details</h4></th>
                </tr>
         <tr> 
            <td> <label htmlFor="">Name</label></td>
            <td>:<input type="text" value={name} onChange={nameData}/></td>
         </tr>

        <tr>
            <td> <label htmlFor="">Salary</label></td>
            <td>:<input type ="text" value={salary} onChange={salaryData}/></td>
        </tr>

        <tr>
        <td><label htmlFor="">Company</label></td>
        <td>:<input type ="text"  value={company}onChange={companyData}/></td>
        </tr>

            <tr>
            <td> <button onClick={formHandle}>Submit</button></td>
            </tr>
            </form>
         </div>
     )
}
export default Createuser