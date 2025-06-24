'use client';

import Header from '../../components/header';
import styles from '../../styles/Dashboard.module.css';
import { useEffect, useState } from 'react';

interface Artist {
  id: number;
  name: string;
  category: string;
  location: string;
  priceRange: string;
}
// existing data from artists.json file 
export default function DashboardPage() {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    fetch('/data/artists.json')
      .then(res => res.json())
      .then(data => setArtists(data));
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.heading}>🎯 Artist Submissions</h2>
<div className={styles.tableWrapper}>
  <table className={styles.table}>
 
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Location</th>
              <th>Fee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {artists.map((artist) => (
              <tr key={artist.id}>
                <td>{artist.name}</td>
                <td>{artist.category}</td>
                <td>{artist.location}</td>
                <td>{artist.priceRange}</td>
                <td>
                <button className={styles.button}>View</button>  {/*currently non functional can be extended to view status*/}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        {artists.length === 0 && <p>No artist submissions found.</p>}
      </div>
    </>
  );
}
