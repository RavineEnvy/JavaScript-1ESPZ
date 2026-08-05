import Hello from './components/Hello';

function Home() {
  return (
    <div>
      <Hello nome="Maria" />
      <Hello nome="João" />
      <Hello nome="Eric" />
    </div>
  );
}

export default Home;