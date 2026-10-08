import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, Headphones, Search, ShieldCheck, ShoppingCart, Zap, Menu, X, Star, Gamepad2 } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const categories = [
  ["Blox Fruits", "Frutas, passes e itens para Blox Fruits.", "🍌"],
  ["Gamepass", "Gamepasses e vantagens para seus jogos.", "🎟️"],
  ["Murder Mystery 2", "Itens e colecionáveis de MM2.", "🔪"],
  ["Roube um Brainrot", "Itens e recursos para sua coleção.", "🧠"],
  ["Brookhaven RP", "Produtos para personalizar sua experiência.", "🏡"],
  ["Grow A Garden", "Itens e recursos para sua fazenda.", "🌱"],
  ["Adopt Me!", "Pets e itens para Adopt Me!", "🐾"],
  ["Servidores Privados", "Servidores para jogar com seus amigos.", "🛡️"],
];

const products = [
  { name: "Fruta Mítica", game: "Blox Fruits", price: "R$ 4,90", icon: "🍎" },
  { name: "Gamepass Especial", game: "Blox Fruits", price: "R$ 9,90", icon: "⚡" },
  { name: "Item Raro", game: "Murder Mystery 2", price: "R$ 7,90", icon: "💎" },
  { name: "Pack Brainrot", game: "Roube um Brainrot", price: "R$ 5,90", icon: "🧠" },
  { name: "Servidor Privado", game: "Roblox", price: "R$ 3,90", icon: "🌐" },
  { name: "Pack Garden", game: "Grow A Garden", price: "R$ 6,90", icon: "🌱" },
];

const reviews = [
  ["S", "Sergio", "Muito bom. Entrega rápida e suporte excelente."],
  ["PR", "Pietro Rodrigues", "Confiável, preço bom e atendimento rápido."],
  ["M", "Maria", "Gostei bastante da compra. Voltarei a comprar."],
  ["JD", "Josue Dias", "Tudo certo e atendimento muito bom."],
];

function Index() {
  const [query, setQuery] = useState("");
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filtered = useMemo(
    () => products.filter(p => (p.name + p.game).toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <main className="blue-site">
      <div className="top-strip">⚡ Entrega rápida • Compra segura • Suporte eficiente</div>

      <header className="navbar">
        <a href="#" className="brand"><span className="brand-mark">B</span><span>Blue<span>Hub</span></span></a>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          <a href="#inicio" onClick={() => setMenu(false)}>Início</a>
          <a href="#loja" onClick={() => setMenu(false)}>Nossa Loja</a>
          <a href="#categorias" onClick={() => setMenu(false)}>Categorias</a>
          <a href="#faq" onClick={() => setMenu(false)}>FAQ</a>
          <a href="#suporte" onClick={() => setMenu(false)}>Suporte</a>
        </nav>
        <div className="nav-actions">
          <div className="search"><Search size={17}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Pesquisar..." /></div>
          <button className="cart"><ShoppingCart size={19}/><span>0</span></button>
          <button className="menu-btn" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span>●</span> A sua loja gamer</div>
          <h1>Itens para seus jogos.<br/><em>Rápido e seguro.</em></h1>
          <p>Encontre produtos para seus jogos favoritos com entrega ágil, pagamento seguro e suporte quando precisar.</p>
          <div className="hero-buttons">
            <a href="#loja" className="primary-btn">Ver produtos <Zap size={17}/></a>
            <a href="#categorias" className="secondary-btn">Explorar categorias</a>
          </div>
          <div className="mini-stats"><span><strong>100%</strong> seguro</span><span><strong>24/7</strong> suporte</span><span><strong>Rápido</strong> envio</span></div>
        </div>
        <div className="hero-card">
          <div className="orb orb-one"/><div className="orb orb-two"/>
          <div className="hero-card-top"><span>OFERTA EM DESTAQUE</span><span className="live-dot">● DISPONÍVEL</span></div>
          <div className="hero-product">🎮</div>
          <h3>Produtos para Blox Fruits</h3>
          <p>Escolha seus itens e receba após a confirmação do pagamento.</p>
          <div className="hero-price"><small>A partir de</small><strong>R$ 4,90</strong></div>
          <a href="#loja" className="card-btn">Comprar agora</a>
        </div>
      </section>

      <section className="benefits">
        {[
          [<Zap/>, "Envio imediato", "Receba seu pedido rapidamente após a confirmação."],
          [<Headphones/>, "Suporte eficiente", "Nossa equipe está pronta para ajudar."],
          [<ShieldCheck/>, "Compra segura", "Seus dados são protegidos durante a compra."],
        ].map(([icon, title, text]) => <div className="benefit" key={String(title)}><div className="benefit-icon">{icon}</div><div><h3>{title}</h3><p>{text}</p></div></div>)}
      </section>

      <section id="categorias" className="section">
        <div className="section-head"><div><span className="section-kicker">EXPLORE</span><h2>Jogos disponíveis</h2><p>Escolha uma categoria e encontre o que procura.</p></div><a href="#loja">Ver todos →</a></div>
        <div className="category-grid">
          {categories.map(([name, desc, icon]) => <a className="category-card" href="#loja" key={name}><span className="category-icon">{icon}</span><div><h3>{name}</h3><p>{desc}</p></div><span className="arrow">→</span></a>)}
        </div>
      </section>

      <section id="loja" className="section products-section">
        <div className="section-head"><div><span className="section-kicker">NOSSA LOJA</span><h2>Produtos em destaque</h2><p>Confira alguns dos produtos disponíveis.</p></div></div>
        <div className="product-grid">
          {filtered.map(p => <article className="product-card" key={p.name}><div className="product-image">{p.icon}<span>DISPONÍVEL</span></div><div className="product-body"><small>{p.game}</small><h3>{p.name}</h3><div className="product-bottom"><strong>{p.price}</strong><button>Comprar</button></div></div></article>)}
        </div>
        {!filtered.length && <div className="empty">Nenhum produto encontrado.</div>}
      </section>

      <section className="reviews section">
        <div className="section-head"><div><span className="section-kicker">AVALIAÇÕES</span><h2>O que nossos clientes dizem</h2><p>Veja o feedback de quem já comprou com a gente.</p></div></div>
        <div className="review-grid">{reviews.map(([initials, name, text]) => <article className="review" key={name}><div className="review-top"><span className="avatar">{initials}</span><div><h3>{name}</h3><div className="stars"><Star/><Star/><Star/><Star/><Star/></div></div></div><p>“{text}”</p></article>)}</div>
      </section>

      <section id="faq" className="section faq-section">
        <div className="section-head"><div><span className="section-kicker">FAQ</span><h2>Perguntas frequentes</h2><p>Veja as perguntas mais comuns e suas respostas.</p></div></div>
        <div className="faq-list">
          {[
            ["Como posso fazer um pedido?", "Basta escolher o produto desejado, adicionar ao carrinho e seguir para o checkout."],
            ["Qual o prazo de entrega?", "O pedido é processado rapidamente após a confirmação do pagamento."],
            ["A compra é segura?", "Sim. Utilizamos boas práticas de segurança para proteger seus dados durante a compra."],
            ["Como funciona o suporte?", "Você pode entrar em contato pelos canais de atendimento disponíveis no site."],
          ].map(([q,a], i) => <div className={"faq-item " + (openFaq === i ? "active" : "")} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{q}</span><ChevronDown/></button>{openFaq === i && <p>{a}</p>}</div>)}
        </div>
      </section>

      <footer id="suporte">
        <div className="footer-main"><div><a href="#" className="brand footer-brand"><span className="brand-mark">B</span><span>Blue<span>Hub</span></span></a><p>Uma loja gamer com qualidade, preços acessíveis, entrega rápida e suporte eficiente.</p></div><div><h4>Acesse</h4><a href="#inicio">Página Inicial</a><a href="#loja">Nossa Loja</a><a href="#faq">FAQ</a></div><div><h4>Atendimento</h4><a href="#">Discord</a><a href="#">Instagram</a><a href="#">Suporte</a></div></div>
        <div className="footer-bottom"><span>© 2026 BlueHub. Todos os direitos reservados.</span><span>Feito para gamers.</span></div>
      </footer>
    </main>
  );
}
