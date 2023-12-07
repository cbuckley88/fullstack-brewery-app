import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios';




function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    refreshList();

    console.log('data', data)
  }, []);

  const refreshList = () => {
    axios
      .get("/api/beer/")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };


  return (
    <>
      <h1 className="text-red-400">This is a test</h1>
      <h3>hello</h3>
    </>
  )
}

export default App
