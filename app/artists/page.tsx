'use client';

import { useEffect, useState } from 'react';
import ArtistCard from '../../components/ArtistCard'; //cards formed seperately to increase readability
import Header from '../../components/header';    //navbar
import styles from '../../styles/ArtistListing.module.css';

interface Artist {
  id: number;
  name: string;
  category: string;
  priceRange: string;
  location: string;
  image: string;
}
//useState()
export default function ArtistListingPage() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>([]);

  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  // Load artist data from JSON
  useEffect(() => {
    fetch('/data/artists.json')
      .then((res) => res.json())
      .then((data) => {
        setArtists(data);
        setFilteredArtists(data);
      });
  }, []);

  // Apply filters
  useEffect(() => {
    let filtered = artists;

    if (category) {
      filtered = filtered.filter(a => a.category === category);
    }

    if (location) {
      filtered = filtered.filter(a => a.location === location);
    }

    if (priceRange) {
      filtered = filtered.filter(a => a.priceRange === priceRange);
    }

    setFilteredArtists(filtered);
  }, [category, location, priceRange, artists]);

  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <h2 className={styles.heading}>Explore Artists</h2>

        {/* Filter Toggle Button */}
        <div className={styles.filterToggleBar}>
          <button onClick={() => setShowFilterPanel(!showFilterPanel)}>
            🧩 {showFilterPanel ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {/* Filter Controls Panel */}
        {showFilterPanel && (
          <div className={styles.filters}>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">All Categories</option>
              <option value="Singer">Singer</option>
              <option value="Dancer">Dancer</option>
              <option value="Speaker">Speaker</option>
              <option value="DJ">DJ</option>
            </select>

            <select value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="">All Locations</option>
              {Array.from(new Set(artists.map(a => a.location))).map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>

            <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
              <option value="">All Price Ranges</option>
              {Array.from(new Set(artists.map(a => a.priceRange))).map((price) => (
                <option key={price} value={price}>{price}</option>
              ))}
            </select>
          </div>
        )}

        {/* Artist Cards */}
        <div className={styles.cards}>
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}

          {filteredArtists.length === 0 && (
            <p>No artists found matching your filters.</p>
          )}
        </div>
      </div>
    </>
  );
}
