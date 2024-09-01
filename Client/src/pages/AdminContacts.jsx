import { useEffect, useState } from "react"

export const AdminContacts=()=>{

    const[contactData,setContactData]=useState([]);
    const getContacts= async()=>{
        try {
            const response=await fetch('http://localhost:3000/user/getData/contact',{
                method:"GET",
            })

            const data=await response.json();
            if(response.ok){
                setContactData(data);
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const deleteContact=async (id)=>{
        const response =await fetch(`http://localhost:3000/user/getData/contact/${id}`,{
          method:"DELETE",
      })
      if(response.ok){
        alert("Contact deleted ")
        getContacts();
      }else{
        console.log("some error occured in delete");
        
      }
    }
     
    useEffect(()=>{
        getContacts();
    },[]);

    return ( <>
           <section className="admin-users-section">
    <div className="container">
       <h1>Admin Contacs Data</h1>
    </div>
    <div className="container  admin-users">

      <table>
         <thead>
          <tr>
             <th>Name</th>
             <th>Email</th>
             <th>Message</th>
          </tr>
         </thead>
         <tbody>
               {contactData.map((curContactData,index)=>{
                return <tr key={index}>
                   <td>{curContactData.name}</td>
                   <td>{curContactData.email}</td>
                   <td>{curContactData.message}</td>
                   <td>
                      <button className="normal"onClick={()=>deleteContact(curContactData._id)}>Delete</button>
                   </td>
                </tr> 
               })}
         </tbody>
      </table>

     
     </div>
     </section>
    </>
    )
}

