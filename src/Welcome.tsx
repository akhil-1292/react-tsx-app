import React, { useEffect, useState } from 'react'
type Props = {
    Name:string,
    Age:number,
}
interface getusers{
    id:number,
    name:string,
    email:string
}
const welcome = ({Name,Age}:Props) => {
    const[count,SettingCount] = useState<number>(0);
    const[users,setusers]=useState<getusers[]>([]);
    useEffect(()=>
        {fetch("https://jsonplaceholder.typicode.com/users")
       .then((res) =>res.json())
       .then((data:getusers[])=>setusers(data))},[]);
  return (
    <div>
        welcome {Name} and his Age is {Age} years.
        <p>the count is {count}</p>
        <button onClick={()=>SettingCount(count+1)}>Increase +</button>
        <button onClick={()=>SettingCount(count-1)}>Decrease -</button>
        <button onClick={()=>SettingCount(0)}>Reset Button</button>
        <div>
            {users.map((getusers) => (
        <div key={getusers.id}>
          <strong>{getusers.name}</strong>
          <p>{getusers.email}</p>
        </div>
      ))}
        </div>
    </div>
  )
}

export default welcome