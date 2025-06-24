import styles from '../styles/ArtistCard.module.css';

interface Artist {
  id: number;
  name: string;
  category: string;
  priceRange: string;
  location: string;
  image: string;
}

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className={styles.card}>
      <img src={artist.image } alt={artist.name} />
      <h3>{artist.name}</h3>
      <p><strong>Category:</strong> {artist.category}</p>
      <p><strong>Location:</strong> {artist.location}</p>
      <p><strong>Price:</strong> {artist.priceRange}</p>
      <button className={styles.button}>Ask for Quote</button>
    </div>
  );
}
