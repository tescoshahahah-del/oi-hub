import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Headphones, Search, ShoppingCart, ShieldCheck, Truck, X } from "lucide-react";
import "./creative.css";

export const Route = createFileRoute("/creative")({ component: Creative });

const categories = [
  ["Blox Fruits","Veja os itens disponíveis desta categoria.","BF","blox"],
  ["Gamepass","Veja os itens disponíveis desta categoria.","GP","gamepass"],
  ["Murder Mystery 2","Veja os itens disponíveis desta categoria.","MM2","mm2"],
  ["Roube um Brainrot","Veja os itens disponíveis desta categoria.","RB","brainrot"],
  ["Roube um ovo","Veja os itens disponíveis desta categoria.","OVO","egg"],
  ["Brookhaven RP","Veja os itens disponíveis desta categoria.","RP","brook"],
  ["Grow A Garden 2","Veja os itens disponíveis desta categoria.","GAG","garden"],
  ["RIVAIS","Veja os itens disponíveis desta categoria.","R","rivals"],
  ["Adopt Me!","Veja os itens disponíveis desta categoria.","AM","adopt"],
];

function Creative(){
  const [search,setSearch]=useState("");
  const [faq,setFaq]=useState<number|null>(null);
  const [slide,setSlide]=useState(1);
  const visible=categories.filter(c=>c[0].toLowerCase().includes(search.toLowerCase()));
  const faqs=[
    ["Como recebo meu produto?","Após a confirmação do pedido, as instruções aparecem na tela e também podem ser enviadas pelo suporte."],
    ["Quanto tempo demora para receber?","A maioria dos pedidos é processada rapidamente após a confirmação do pagamento."],
    ["Posso falar com o suporte?","Sim. Use o botão de suporte no topo do site para pedir ajuda."],
    ["A compra é segura?","Utilizamos uma experiência de checkout com proteção de dados e confirmação do pedido."]
  ];
  return <div className="shop">
    <header className="shop-header"><div className="shop-head-inner">
      <a className="brand" href="#top"><span>BLUE</span>BANANA<small>✓</small></a>
      <div className="head-support"><Headphones size={18}/><div><b>Suporte</b><span>Estamos online</span></div></div>
      <label className="search"><Search size={17}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Pesquise por jogos, produtos..."/><kbd>⌘ K</kbd></label>
      <a className="login" href="#login">Entrar</a><a className="cart" href="#cart"><ShoppingCart size={18}/><span>Carrinho</span></a>
    </div></header>
    <main id="top">
      <section className="promo-wrap">
        <button className="promo-arrow left" onClick={()=>setSlide(Math.max(0,slide-1))}><ChevronLeft/></button>
        <div className="promo-grid">
          {[["Blox Fruits","OFERTA ESPECIAL","Itens selecionados com desconto.","BF","-50%","p-one"],["Murder Mystery 2","MAIS VENDIDO","Escolha seu próximo item.","MM2","-35%","p-two"],["Roube um Brainrot","NOVO DROP","Novidades disponíveis agora.","RB","-25%","p-three"]].map(([name,label,desc,tag,discount,cls])=><article className={"promo "+cls} key={name}><div className="promo-art"><div className="cube">{tag}</div></div><div className="promo-copy"><span>{label}</span><h2>{name}</h2><p>{desc}</p><button>Ver produtos <ArrowRight size={15}/></button></div><b className="discount">{discount}</b></article>)}
        </div>
        <button className="promo-arrow right" onClick={()=>setSlide(Math.min(2,slide+1))}><ChevronRight/></button><div className="dots"><i className={slide===0?"on":""}/><i className={slide===1?"on":""}/><i className={slide===2?"on":""}/></div>
      </section>
      <section className="shop-content">
        <div className="section-heading"><div className="heading-pill"><span/> JOGOS DISPONÍVEIS</div><p>Encontre os melhores produtos para seus jogos favoritos.</p></div>
        <div className="category-grid">{visible.map(([name,desc,tag,slug])=><article className={"category-card c-"+slug} key={name}>
          <div className="category-image"><div className="image-frame"><strong>{tag}</strong><span>✦</span></div></div>
          <div className="category-info"><h3>{name}</h3><p>{desc}</p><button>Ver produtos <ArrowRight size={16}/></button></div>
        </article>)}</div>
        <section className="benefits"><div><span className="benefit-icon"><Truck/></span><div><b>Envio imediato</b><p>Receba seus produtos rapidamente.</p></div></div><div><span className="benefit-icon"><Headphones/></span><div><b>Suporte eficiente</b><p>Estamos prontos para ajudar.</p></div></div><div><span className="benefit-icon"><ShieldCheck/></span><div><b>Compra segura</b><p>Seus dados protegidos.</p></div></div></section>
        <section className="reviews"><div className="section-title"><span>AVALIAÇÕES</span><h2>Quem compra, recomenda.</h2></div><div className="review-grid">{["Compra rápida e tudo certinho. O atendimento também foi muito bom.","Gostei muito do site, é simples de usar e recebi o pedido rapidinho.","Já comprei algumas vezes e a experiência sempre foi tranquila."].map(t=><article key={t}><div className="stars">★★★★★</div><p>“{t}”</p><b>Cliente verificado</b></article>)}</div></section>
        <section className="faq"><div className="section-title"><span>FAQ</span><h2>Perguntas frequentes</h2></div>{faqs.map(([q,a],i)=><div className={"faq-item "+(faq===i?"open":"")} key={q}><button onClick={()=>setFaq(faq===i?null:i)}><span>{q}</span><ChevronDown size={17}/></button>{faq===i&&<p>{a}</p>}</div>)}</section>
      </section>
    </main>
    <div className="chat"><div className="chat-top"><span className="online"/> Suporte online <button><X size={14}/></button></div><div className="chat-body"><div className="avatar">B</div><div><b>Olá! 👋</b><p>Como podemos ajudar você hoje?</p></div></div><button className="chat-input">Digite sua mensagem... <ArrowRight size={14}/></button></div>
    <footer className="shop-footer"><div className="footer-inner"><a className="brand" href="#top"><span>BLUE</span>BANANA<small>✓</small></a><p>Produtos digitais para seus jogos favoritos.</p><div>© 2026 BlueBanana</div></div></footer>
  </div>;
}
