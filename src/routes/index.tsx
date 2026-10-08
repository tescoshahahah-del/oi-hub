import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, Headphones, Search, ShieldCheck, ShoppingCart, Zap, UserRound, MessageCircle, ArrowRight, ChevronLeft, ChevronRight, Star, PlayCircle, List, CircleHelp } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const categories = [
  ["Blox Fruits","Veja os itens disponíveis desta categoria.","🎮","blox"],
  ["Gamepass Blox Fruits","Veja os itens disponíveis desta categoria.","🎟️","gamepass"],
  ["Murder Mystery 2","Veja os itens disponíveis desta categoria.","🔪","mm2"],
  ["Roube um Brainrot","Veja os itens disponíveis desta categoria.","🧠","brainrot"],
  ["Roube um ovo","Veja os itens disponíveis desta categoria.","🥚","egg"],
  ["Brookhaven 🏠 RP","Veja os itens disponíveis desta categoria.","🏠","brook"],
  ["Grow A Garden 2","Veja os itens disponíveis desta categoria.","🌱","garden"],
  ["+1 Teclado de Fuga de Velocidade","Veja os itens disponíveis desta categoria.","⌨️","keyboard"],
  ["RIVAIS","Veja os itens disponíveis desta categoria.","🎯","rivals"],
  ["Adopt Me!","Veja os itens disponíveis desta categoria.","🐾","adopt"],
  ["Servidores Privados+","Veja os itens disponíveis desta categoria.","🖥️","server"],
];

const banners = [
  ["🔥","OFERTA ESPECIAL","TIGER NO INVENTÁRIO","Até 50% OFF"],
  ["⚡","NÍVEL MÁXIMO","LVL 2800 + GHM","Até 50% OFF"],
  ["❓","FRUTAS MÍTICAS","FRUTAS MÍTICAS ALEATÓRIAS","Até 50% OFF"],
];

const reviews = [
  ["MR","Mylena Silva Rodrigues","Muito bom.","2x DINHEIRO [450 ROBUX]"],
  ["PB","Pedro Biazzi","Voltei a comprar.","[⚔] Icepiercer"],
  ["JD","Josue Dias","Confiável.","[⚔] Icepiercer"],
  ["DC","Davi Lucas Brito Caldeira","Entrega rápida. Muito bom.","RAÇA V4 CYBORG FULL + GHM"],
  ["MR","Mylena Silva Rodrigues","Muito bom.","[🔥] Set Hallow"],
  ["PB","Pedro Biazzi","Voltei a comprar.","2x DINHEIRO [450 ROBUX]"],
];

function Index() {
  const [query,setQuery]=useState("");
  const [banner,setBanner]=useState(0);
  const [faq,setFaq]=useState<number|null>(null);
  const filtered=useMemo(()=>categories.filter(c=>c[0].toLowerCase().includes(query.toLowerCase())),[query]);

  return <main className="store">
    <header className="store-header">
      <a className="logo" href="#"><span className="logo-box">B</span><b>Blue<span>Banana</span></b><span className="verified">✓</span></a>
      <button className="support-icon"><Headphones size={17}/></button>
      <div className="header-spacer"/>
      <div className="header-search"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar produto"/></div>
      <button className="login"><UserRound size={16}/> Entrar</button>
      <button className="cart-btn"><ShoppingCart size={17}/> Carrinho</button>
    </header>

    <section className="banner-wrap">
      <button className="slider-arrow left" onClick={()=>setBanner((banner+2)%3)}><ChevronLeft/></button>
      <div className="banner-grid">
        {[0,1,2].map((offset)=><article className={"promo promo-"+((banner+offset)%3)} key={offset}>
          <span className="discount">50%<small>DESCONTO</small></span>
          <div className="promo-art">{banners[(banner+offset)%3][0]}</div>
          <div className="promo-overlay"/>
          <div className="promo-copy"><strong>{banners[(banner+offset)%3][2]}</strong><button>Comprar agora <ArrowRight size={13}/></button></div>
        </article>)}
      </div>
      <button className="slider-arrow right" onClick={()=>setBanner((banner+1)%3)}><ChevronRight/></button>
    </section>

    <section className="content">
      <div className="section-pill"><List size={14}/> Jogos disponíveis</div>
      <div className="category-grid">
        {filtered.map(([name,desc,icon])=><article className="game-card" key={name}>
          <div className="game-art"><span>{icon}</span></div>
          <div className="game-info"><h3>{name}</h3><p>{desc}</p><button>Ver produtos <ArrowRight size={15}/></button></div>
        </article>)}
      </div>

      <section className="benefits">
        {[
          [<Zap/>,"Envio imediato","Receba pelo pacote que comprou em poucos segundos após a confirmação do pagamento."],
          [<Headphones/>,"Suporte eficiente","Em caso de dúvidas, entre em contato com o nosso suporte."],
          [<ShieldCheck/>,"Compra segura","Seus dados são protegidos e processados com segurança."],
        ].map(([icon,title,text])=><article className="benefit" key={String(title)}><div className="benefit-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}
      </section>

      <section className="reviews-section">
        <div className="center-heading"><span className="gold-pill blue-pill"><Star size={14}/> Avaliações</span><h2>O que nossos clientes dizem</h2><p>Veja o feedback de quem já comprou com a gente.</p></div>
        <div className="reviews-grid">{reviews.map(([initials,name,text,product])=><article className="review-card" key={name+text+product}><div className="review-user"><span>{initials}</span><div><b>{name}</b><small>▣ 05 de outubro de 2026</small></div></div><p>“{text}”</p><div className="stars">★★★★★</div><div className="review-product"><span>🎮</span><b>{product}</b><a>Ver ›</a></div></article>)}</div>
      </section>

      <section className="faq-section">
        <div className="center-heading"><span className="gold-pill blue-pill"><CircleHelp size={14}/> FAQ</span><h2>Perguntas frequentes</h2><p>Veja as perguntas mais comuns e suas respostas.</p></div>
        <div className="faq-layout"><div className="faq-list">
          {["Como posso fazer um pedido?","Qual o prazo de entrega?","Como funciona o suporte?"].map((q,i)=><div className={"faq-row "+(faq===i?"active":"")} key={q}><button onClick={()=>setFaq(faq===i?null:i)}><span>{q}</span><ChevronDown size={18}/></button>{faq===i&&<p>{i===0?"Escolha um produto, adicione ao carrinho e siga as etapas do checkout.":i===1?"Após a confirmação do pagamento, o pedido é processado rapidamente.":"Entre em contato pelo canal de suporte disponível no site."}</p>}</div>)}
        </div><article className="tutorial"><div className="tutorial-title"><PlayCircle size={17}/> Tutorial de compra</div><p>Assista ao passo a passo em vídeo.</p><div className="video"><span>▶</span><b>Vídeo tutorial</b><small>Aprenda a realizar sua compra.</small></div></article></div>
      </section>
    </section>

    <div className="chat"><div className="chat-avatar">B</div><b>Dúvidas? Fale conosco!</b><span className="online">● Nossa equipe está online.</span><button><MessageCircle size={15}/> Converse com a equipe</button><div className="chat-round"><MessageCircle/></div></div>

    <footer><div><a className="logo"><span className="logo-box">B</span><b>Blue<span>Banana</span></b></a><p>Loja gamer com entrega rápida e suporte eficiente.</p></div><div><b>Acesse:</b><a>Início</a><a>Loja</a><a>FAQ</a></div><div><b>Atendimento:</b><a>Suporte</a><a>Discord</a></div></footer>
  </main>
}
