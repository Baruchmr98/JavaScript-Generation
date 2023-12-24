import './App.css'
//import '../node_modules/axios'. Esta no funciona gg
import axios from '../node_modules/axios' //"import axios from 'axios'" también jala y es la sintaxis de axios.

function App() {
  //Función async-await para consumir API
  const getUsers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(response.data[1].name);
    }
    catch(error) {
      console.log("Error! aaaa", error)
    }
  }

  //Función 
  const postUser = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const user = {
        userID: 1986,
        title: "Java Fullstack dev",
        body: "Baruch Moreno"
      }
      const response = await axios.post(url, user);
      console.log(response)
      //Para mostrar solamente la información en consola 
      console.log(response.data);
    }
    catch(error) {
      console.log("Error! noooOoo", error);
    }
  }

  return (
    <>
      <div>
        <h1 className="box">HTTP - Axios</h1>
      </div>
      <div className="card">
        <button onClick={getUsers}>
          Get Method
        </button>
        <button onClick={postUser}>
          Post Method
        </button>
      </div>
    </>
  )
}

export default App
