import axios from 'axios';
import { useEffect, useState } from 'react';

function App(){
  const[post,setPost] = useState([]);

  const[startdate,setStartdate] = useState();
  const[enddate,setEnddate] = useState();
  const[cost,setCost] = useState();
  const[description,setDescription] = useState();

  useEffect(() => {
    axios.get("https://te-backend.vercel.app/posts")
    .then((posts) => setPost(posts.data))
    .catch((err) => console.log(err));
  },[post]);

  const submit = () => {
    axios.post("https://te-backend.vercel.app/posts",{startdate,enddate,cost,description})
  }
  return(
    <>
      <center>
        <h1>Travel Experience</h1>
      </center>
      {
        post.map((postt) => {
          return(
            <>
              <tr>
                <td>{postt.startdate}</td>
                <td>{postt.enddate}</td>
                <td>{postt.cost}</td>
              </tr>
              <tr>
                <td>{postt.description}</td>
              </tr>
              <br></br>
              <br></br>
              {/* <h1>Start Date:{postt.startdate}</h1>
              <h1>End Date:{postt.enddate}</h1>
              <h1>Overal Cost :{postt.cost}</h1>
              <h1>Description: {postt.description}</h1> */}
            </>
          )
        })
      }
      <input type='date' placeholder='Start Date' onChange={(e) => setStartdate(e.target.value)}></input>
      <input type='date' placeholder='End Date' onChange={(e) => setEnddate(e.target.value)}></input>
      <input type='number' placeholder='Cost' onChange={(e) => setCost(e.target.value)}></input>
      <input type='text' placeholder='Description' onChange={(e) => setDescription(e.target.value)}></input>
      <button onClick={submit}>Submit</button>

    </>
  )
}

export default App;
