import React from 'react';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface Beer {
  id: number;
  title: string;
}

interface ApiResponse {
  data: Beer[];
}

const OurBeers: React.FC = () => {
  const apiUrl = 'http://127.0.0.1:8000/api/beer/';

  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    async function fetchBeers(): Promise<void> {
      try {
        const response: AxiosResponse<ApiResponse> = await axios.get(apiUrl);

        if (response.status === 200) {
          setBeers(response.data);
        } else {
          console.error('Error:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }

    fetchBeers();
  }, []);

  return (
    <>
      <h1 className="text-red-400">This is a test</h1>
      <h3>hello</h3>

      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>{beer.title}</li>
        ))}
      </ul>
    </>
  );
};

export default OurBeers;