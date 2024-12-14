import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function SignUp() {
  const navigate = useNavigate();
    const [credentials,setcredentials] = useState({name:"",email:"",password:"",location:""})

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(JSON.stringify({name:credentials.name,email:credentials.email, password:credentials.password,location:credentials.location}));
        try{
        const response = await fetch("http://localhost:8000/api/createuser", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              name: credentials.name,
              email: credentials.email,
              password: credentials.password,
              location: credentials.location
          })
      });
      
      if (!response.ok) {
          const errorText = await response.text();
          console.error("Error response from server:", errorText);
          alert("Error with the request: " + errorText);
          return;
      }
    
      
      const json = await response.json();
      console.log(json);
      if (!json.success) {
          alert("Enter Valid Credentials");
      }else{
        navigate('/'); 
      }
    }catch(error){
      console.error('There was a problem with the fetch operation:', error);
    }
        
    }

    const onChange = (event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
   
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor ="name" className="form-label">name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
   
  </div>
  <div className="mb-3">
    <label htmlFor ="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor ="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' value={credentials.password} onChange={onChange} className="form-control" />
  </div>
  <div className="mb-3">
    <label htmlFor ="exampleInputPassword1" className="form-label">Addresss</label>
    <input type="text" name='location' value={credentials.location} onChange={onChange} className="form-control" id="exampleInputPassword1"/>
  </div>    
  <button type="submit" className=" m-3 btn btn-success">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
</form>
</div>
    </>
  )  
}
