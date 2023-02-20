import { useState, useEffect } from 'react';
import './App.css';

function Translate() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dog-api.kinduff.com/api/facts")
      .then(response => response.json())
      .then(data => setData(data.facts))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="quote">{data}</h1>
    </div>
  );
}

export default Translate;