import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronRight, Gamepad2, Search, ShoppingBag, Sparkles, Star, Zap } from "lucide-react";
import "./creative.css";

export const Route = createFileRoute("/creative")({ component: Creative });

const games = [
  ["NEXUS FRUITS","Coleção lendária","NF","9.8"],
  ["VOID ARENA","Pacote competitivo","VA","9.7"],
  ["PIXEL CITY","Itens exclusivos","PC","9.6"],
  ["GALAXY PETS","Pets raros","GP","9.9"],
  ["RUSH WORLD","Boosts especiais","RW","9.5"],
  ["DREAM FARM","Coleção premium","DF","9.8"],
];

function Creative(){
  const [query,setQuery] = useState("");
  const filtered = games.filter(g => g[0].toLowerCase().includes(query.toLowerCase()));

  return <div className="creative">
    <header className="creative-nav">
      <div className="creative-logo"><span>◈</span> NOVA<span>HUB</span></div>
      <nav><a href="#home">Início</a><a href="#games">Jogos</a><a href="#drops">Drops</a><a href="#about">Sobre</a></nav>
      <div className="creative-actions">
        <label><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar"/></label>
        <button className="bag"><ShoppingBag size={17}/><span>2</span></button>
      </div>
    </header>

    <main>
      <section id="home" className="creative-hero">
        <div className="hero-grid"/>
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14}/> NOVA DROP 2026</div>
          <h1>O próximo nível<br/><em>começa aqui.</em></h1>
          <p>Uma nova experiência para descobrir itens, coleções e ofertas especiais dos seus jogos favoritos.</p>
          <div className="hero-buttons"><a href="#games" className="primary">Explorar loja <ArrowRight size={17}/></a><a href="#drops" className="secondary">Ver novidades</a></div>
          <div className="hero-stats"><div><b>12K+</b><span>clientes</span></div><div><b>99.8%</b><span>entrega</span></div><div><b>24/7</b><span>suporte</span></div></div>
        </div>
        <div className="hero-orbit"><div className="orbit-ring ring-one"/><div className="orbit-ring ring-two"/><div className="core"><Gamepad2 size={58}/><span>NOVA</span></div><div className="float-card one">⚡ <b>DROP</b><small>LIMITADO</small></div><div className="float-card two"><Star size={14}/> 4.9/5</div></div>
      </section>

      <section id="games" className="creative-section">
        <div className="section-top"><div><span className="eyebrow">ESCOLHA SEU UNIVERSO</span><h2>Jogos em destaque</h2></div><a href="#games">Ver todos <ChevronRight size={16}/></a></div>
        <div className="creative-grid">{filtered.map(([name,desc,tag,rating])=><article className="creative-card" key={name}>
          <div className={"card-visual v-"+tag}><span>{tag}</span><i>✦</i><b>{rating}</b></div>
          <div className="card-body"><div><span>{desc}</span><h3>{name}</h3></div><button><ArrowRight size={18}/></button></div>
        </article>)}</div>
      </section>

      <section id="drops" className="drop-banner"><div><span className="eyebrow"><Zap size={14}/> DROP DA SEMANA</span><h2>Ative seu modo<br/><em>ultra.</em></h2><p>Ofertas rotativas, bônus e coleções que desaparecem quando o cronômetro zerar.</p><button>Ver drop <ArrowRight size={17}/></button></div><div className="timer"><small>TERMINA EM</small><b>08 : 42 : 17</b><span>HORAS &nbsp;&nbsp; MIN &nbsp;&nbsp; SEG</span></div></section>

      <section id="about" className="creative-about"><div><span className="eyebrow">POR QUE NOVAHUB?</span><h2>Menos espera.<br/><em>Mais jogo.</em></h2></div><div className="about-points"><div><strong>01</strong><h3>Entrega instantânea</h3><p>Seu pedido é processado rapidamente após a confirmação.</p></div><div><strong>02</strong><h3>Experiência premium</h3><p>Uma loja feita para ser simples, rápida e bonita.</p></div><div><strong>03</strong><h3>Suporte humano</h3><p>Ajuda de verdade quando você precisar.</p></div></div></section>
    </main>

    <footer className="creative-footer"><div className="creative-logo"><span>◈</span> NOVA<span>HUB</span></div><p>O futuro da sua experiência gamer.</p><div>© 2026 NOVAHUB</div></footer>
  </div>
}
