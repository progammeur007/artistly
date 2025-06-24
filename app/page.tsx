// app/page.tsx 
//HOME PAGE
import Link from 'next/link';
import Header from '../components/header';
import styles from "../styles/home.module.css";
export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
<div className={styles.introSection}>
  <h1 className={styles.title}>Welcome to Artistly</h1>

  <p className={styles.subtitle}>
    <strong>Your one-stop platform to connect event planners with talented performing artists.</strong>
  </p>

  <p className={styles.description}>
    Artistly.com is a modern platform that simplifies how event planners discover, connect, and book performing artists across India.
    Whether you're organizing a wedding, corporate show, or cultural event, Artistly lets you browse top performers—
    from singers and dancers to DJs and speakers—and request availability directly from their managers.
  </p>

<Link href="/artists">
            <button className={styles.ctaButton}>Explore Artists</button>
          </Link>
          <br />
  <div className={styles.scrollPrompt}>
    <span> Scroll to see the categories we offer!</span>
  </div>
</div>
        </div>
      </section>

      {/* Category Section */}
      <section className={styles.categorySection}>
        <h2>Artist Categories</h2>
        <div className={styles.categoryCards}>
          <div className={styles.categoryCard}>
            <Link href="/artists">
            <img src="https://plus.unsplash.com/premium_photo-1682920140924-d8b5db318d97?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Singer" />
            <h3>Singers</h3>
</Link>
          </div>
          <div className={styles.categoryCard}>
            <Link href="/artists">
            <img src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRhbmNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Dancer" />
            <h3>Dancers</h3>
            </Link>
          </div>
          <div className={styles.categoryCard}>
            <Link href="/artists">
            <img src="https://images.unsplash.com/photo-1560439514-e960a3ef5019?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Speaker" />
            <h3>Speakers</h3>
            </Link>
          </div>
          <div className={styles.categoryCard}>
            <Link href="/artists">
            <img src="https://images.unsplash.com/photo-1541126274323-dbac58d14741?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGp8ZW58MHx8MHx8fDA%3D" alt="DJ" />
            <h3>DJs</h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
