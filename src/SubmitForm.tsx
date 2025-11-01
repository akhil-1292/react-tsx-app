import React, { useState } from 'react'
interface formdata {
    username:string;
    password:string;
}
function SubmitForm() {
    const [form,setform] = useState<formdata>({username:"",password:""});
    const handleChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=event.target;
        setform({...form,[name]:value});
    };
    const handleSubmit = (event:React.FormEvent)=>{
        event.preventDefault();
        console.log(form);
    };

  return (
    <form onSubmit={handleSubmit}>
        <input
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="password"
      />
      <button type="submit">Save</button>
      <button type ="button">text click</button>

    </form>
  )
}

export default SubmitForm