import Hello from './components/Hello';

const nome = 'Guilherme';

function Home() {
  return (
    <div>
      <Hello nome={nome} />
      {nome === 'Guilherme' && <p>Que bom ver você aqui!</p>}
    </div>
  );
}

export default Home;

