import Hero from '../components/Hero';

function Home() {
  return (
    /* We add inline styles here to force the background over any hidden layout variables */
    <div style={{ width: '100%', backgroundColor: '#05070c', minHeight: '100vh' }}>
      <Hero />
    </div>
  );
}

export default Home;