'use client'
import styles from "./globals.css"

function Saudacao({ nome = 'Visitante', dia = 'hoje' }) {
  return <h2>Olá, {nome}! Como vai {dia}?</h2>;
}



export default function Home() {

  const nome = 'Ana';
  const pontos = 2;
  const ativo = false;
  const estilo = { padding: '8px', borderRadius: '6px', };
  const url = 'https://react.dev';
  const contagem = 3;

  const nomes = ['Maria', 'João', 'Aline'];

  const Botao = ({ texto }) => <button>{texto}</button>;
  const BotaoGrande = ({ texto, ligado }) => {
    return <button className={ligado ? "btn btn-lg btn-primary" : "btn btn-lg btn-outline"}>{texto}</button>;
  }


  const Alerta = ({ tipo = 'info', children }) => {
    const classe = `alert alert-${tipo}`;
    return <div className={classe}>{children}</div>;
  };

  const BotaoAcao = ({ onAcao, children }) => (
    <button onClick={onAcao}>{children}</button>
  );

  const dizerOi = () => alert('Oi!');

  return (
    <>
      <div>
        {nome === 'Ana' && <p>Que bom ver você aqui!</p>}
      </div>
      <div>
        {pontos > 0 ? 'Você tem pontos' : null}
      </div>
      <div>
        <button style={estilo} className={ativo ? 'btn btn-primary' : 'btn btn-outline'}>
          Clique para morrer instantaneamente
        </button>
      </div>
      <div>
        <a href={url} target="_blank" rel="noreferrer">Site</a>
        <p>Você tem {contagem} novas mensagens.</p>
        <Botao texto="botão teste por função" />
        <Botao texto="teste função 2" />
      </div>
      <div>
        <BotaoGrande texto="Botão Grande" ligado={true} />
      </div>
      <div>
        <Alerta tipo="warning" id="aviso">Cuidado!</Alerta>
        <Alerta>Mensagem informativa</Alerta>
      </div>
      <div>
        <Saudacao nome="Maria" dia="essa manhã" />
        <Saudacao /> {/* Visitante, hoje */}
        {nomes.map(n => <Saudacao key={n} nome={n} dia="agora" />)}
      </div>
      <div>
        <BotaoAcao onAcao={dizerOi}>Clique</BotaoAcao>;
      </div>
    </>
  )
}