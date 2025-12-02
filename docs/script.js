// Copiado de script.js para publicação em GitHub Pages (docs/)
const SUPABASE_BASE = 'https://tkexuycidlzsafjjzbpd.supabase.co/storage/v1/object/public/Grill%20Nota%20Mil/cardapio_fim_ano_midias/';
const SUPABASE_LOGO_URL = SUPABASE_BASE + 'Logo%20Centralizado.png';

const menuData = [
  { title: 'MATE A SUA FOME', subtitle: 'ESPECIAIS FIM DE ANO', items: [
    { name: 'LOMBO RECHEADO', price: '95,00', unit: 'Kg', imageUrl: '' },
    { name: 'PORQUETA PURURUCA', price: '95,00', unit: 'Kg', imageUrl: '' },
    { name: 'LAGARTO RECHEADO', price: '110,00', unit: 'Kg', imageUrl: '' },
    { name: 'MAMINHA RECHEADA', price: '130,00', unit: 'Kg', imageUrl: '' }
  ] },
  { title: 'MATE A SUA FOME', subtitle: 'CARNES DE BOI', items: [
    { name: 'COSTELA', description: ['DESOSSADA ASSADA NO BAFO'], price: '95,00', unit: 'Kg', imageUrl: '' },
    { name: 'FRALDINHA', description: ['ASSADA NO BAFO'], price: '95,00', unit: 'Kg', imageUrl: '' },
    { name: 'CUPIM', description: ['ASSADO NO BAFO'], price: '110,00', unit: 'Kg', imageUrl: '' }
  ] },
  { title: 'MATE A SUA FOME', subtitle: 'FRANGOS', items: [
    { name: 'FRANGO COM BATATAS', price: '60,00', unit: 'un.', imageUrl: '' },
    { name: 'COXA COM SOBRE COXA', price: '45,00', unit: 'Kg', imageUrl: '' }
  ] },
  { title: 'MATE A SUA FOME', subtitle: 'PORCOS PURURUCA', items: [
    { name: 'COSTELINHA', price: '80,00', unit: 'Kg', imageUrl: '' },
    { name: 'PANCETA', price: '80,00', unit: 'Kg', imageUrl: '' },
    { name: 'JOELHO', price: '80,00', unit: 'Kg', imageUrl: '' },
    { name: 'PERNIL', price: '80,00', unit: 'Kg', imageUrl: '' }
  ] },
  { title: 'MATE A SUA FOME', subtitle: 'ESPECIAIS FIM DE ANO', items: [
    { name: 'FRANGO RECHEADO', price: '75,00', unit: 'un.', imageUrl: '' },
    { name: 'CHESTER RECHEADO', price: '130,00', unit: 'un.', imageUrl: '' },
    { name: 'TENDER C/ MOLHO DE MARACUJÁ', price: '90,00', unit: 'un.', imageUrl: '' },
    { name: 'FAROFA NATALINA', price: '18,00', unit: 'pote 500 gr', imageUrl: '' }
  ] },
  { title: 'MATE A SUA FOME', subtitle: 'ACOMPANHAMENTOS', items: [
    { name: 'SALADA DE MAIONESE', price: '20,00', unit: 'pote 500 gr', imageUrl: '' },
    { name: 'SALPICÃO', price: '25,00', unit: 'pote 500 gr', imageUrl: '' },
    { name: 'FAROFA CASEIRA', price: '10,00', unit: 'pote 500 gr', imageUrl: '' },
    { name: 'FEIJÃO TROPEIRO', price: '15,00', unit: 'pote 500 gr', imageUrl: '' }
  ] },
  { title: 'MATE A SUA FOME', subtitle: 'MASSAS E MOLHOS', items: [
    { name: 'CANELONE', description: ['FRANGO C/ CREME DE QUEIJO', 'BRÓCOLIS E PARMESÃO', 'PRESUNTO E QUEIJO', '4 QUEIJOS'], price: '40,00', unit: '12 UNIDADES', imageUrl: '' },
    { name: 'CONCHIGLIONE', description: ['ESPINAFRE COM RICOTA', '4 QUEIJOS', 'ALHO PORÓ, BACON E QUEIJO'], price: '42,00', unit: '12 UNIDADES', imageUrl: '' },
    { name: 'SOFIOLI', description: ['CARNE SECA C/ CREME DE QUEIJO', 'PRESUNTO E QUEIJO'], price: '41,00', unit: '15 UNIDADES', imageUrl: '' },
    { name: 'PANQUECA', description: ['FRANGO E REQUEIJÃO', 'CARNE'], price: '38,00', unit: '7 UNIDADES', imageUrl: '' }
  ] },
  { title: 'MATE A SUA FOME', subtitle: 'MASSAS E MOLHOS', items: [
    { name: 'LASANHA', description: ['PRESUNTO E QUEIJO', 'BOLONHESA', '4 QUEIJOS', 'BERINGELA'], price: '38,00', unit: '500 GR', imageUrl: '' },
    { name: 'NHOQUE', description: ['BATATA'], price: '25,00', unit: '500 GR', imageUrl: '' },
    { name: 'NHOQUE', description: ['MANDIOCA'], price: '23,00', unit: '500 GR', imageUrl: '' },
    { name: 'NHOQUE', description: ['MANDIOQUINHA'], price: '30,00', unit: '500 GR', imageUrl: '' }
  ] },
  { title: 'MATE A SUA FOME', subtitle: 'MASSAS E MOLHOS', items: [
    { name: 'NHOCÃO RECHEADO', description: ['4 QUEIJOS'], price: '40,00', unit: '500 gr', imageUrl: '' },
    { name: 'MOLHOS', description: ['SUGO'], price: '15,00', unit: '500 ml', imageUrl: '' },
    { name: 'MOLHOS', description: ['BOLONHESA'], price: '20,00', unit: '500 ml', imageUrl: '' },
    { name: 'MOLHOS', description: ['BRANCO'], price: '18,00', unit: '500 ml', imageUrl: '' },
    { name: 'TORTAS', description: ['FRANGO/REQUEIJÃO'], price: '32,00', unit: '500 GR', imageUrl: '' },
    { name: 'TORTAS', description: ['PALMITO'], price: '36,00', unit: '500 GR', imageUrl: '' }
  ] },
  { title: 'MATE A SUA FOME', subtitle: 'REFRIGERANTES', items: [
    { name: 'REFRIGERANTES', description: ['2 LITROS'], price: '15,00', unit: '', imageUrl: '' },
    { name: 'REFRIGERANTES', description: ['600 ML'], price: '9,00', unit: '', imageUrl: '' },
    { name: 'REFRIGERANTES', description: ['LATA'], price: '6,00', unit: '', imageUrl: '' },
    { name: 'REFRIGERANTES', description: ['MINI'], price: '3,00', unit: '', imageUrl: '' }
  ] },
  { title: 'MATE A SUA FOME', subtitle: 'CERVEJAS', items: [
    { name: 'CERVEJAS', description: ['LONG NECK'], price: '12,00', unit: '', imageUrl: '' },
    { name: 'CERVEJAS LATA', description: ['SKOL E BRAHMA'], price: '6,00', unit: '', imageUrl: '' },
    { name: 'CERVEJAS LATA', description: ['ITAIPAVA'], price: '5,00', unit: '', imageUrl: '' },
    { name: 'CERVEJAS LATA', description: ['PURO MALTE'], price: '7,00', unit: '', imageUrl: '' }
  ] }
];

function normalize(s) { return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim(); }

function resolveImageUrl(item) {
  const n = normalize(item.name);
  const fileByName = {
    'canelone': 'Canelone.png',
    'chester recheado': 'Chester Recheado.png',
    'conchiglione': 'Conchiglione.png',
    'costela desossada': 'Costela Desossada.png',
    'costela': 'Costela Desossada.png',
    'costelinha': 'Costelinha Suina.png',
    'costelinha suina': 'Costelinha Suina.png',
    'coxa com sobre coxa': 'Coxa com Sobre Coxa.png',
    'cupim': 'Cupin.png',
    'farofa caseira': 'Farofa Caseira.png',
    'farofa natalina': 'Farofa Natalina.png',
    'feijao tropeiro': 'Feijao Tropeiro.png',
    'frango recheado': 'Frango Recheado.png',
    'frango com batatas': 'Frango com Batatas.png',
    'fraldinha': 'Fraudinha Assada.png',
    'fraudinha assada': 'Fraudinha Assada.png',
    'joelho': 'Joelho de Porco.png',
    'joelho de porco': 'Joelho de Porco.png',
    'lagarto recheado': 'Lagarto Recheado.png',
    'lombo recheado': 'Lombo Recheado.png',
    'maionese': 'Maionese.png',
    'salada de maionese': 'Maionese.png',
    'maminha recheada': 'Maminha Recheada.png',
    'porqueta': 'Porqueta.png',
    'porqueta pururuca': 'Porqueta.png',
    'panceta': 'Panceta.png',
    'panqueca': 'Panqueca.png',
    'pernil': 'Pernil.png',
    'salpicao': 'Salpicao.png',
    'sofili': 'Sofili.png',
    'sofioli': 'Sofili.png',
    'tender c/ molho de maracuja': 'Tender com Molho de Maracuja.png',
    'tender com molho de maracuja': 'Tender com Molho de Maracuja.png',
    'torta franco requeijao': 'Torta Franco Requeijao.png',
    'torta palmito': 'Torta Palmito.png',
    'nhocao recheado': 'Nhocao Recheadp.png'
  };

  if (n === 'cervejas' && item.description && item.description.length) {
    const d = normalize(item.description[0]);
    if (d.includes('long neck')) return SUPABASE_BASE + 'Cerveja Long.png';
  }
  if (n === 'cervejas lata' && item.description && item.description.length) {
    const d = normalize(item.description[0]);
    if (d.includes('itaipava')) return SUPABASE_BASE + 'Cerveja Lata Itaipava.png';
    if (d.includes('puro malte')) return SUPABASE_BASE + 'Cerveja Lata Puro malte.png';
    if (d.includes('skol') && d.includes('brahma')) return SUPABASE_BASE + 'Ceveja Lata Skol e Brahama.png';
  }
  if (n === 'refrigerantes' && item.description && item.description.length) {
    const d = normalize(item.description[0]);
    if (d.includes('2 litros') || d.includes('2l') || d.includes('2 l')) return SUPABASE_BASE + 'Refrigerantes 2l.png';
    if (d.includes('600 ml') || d.includes('600ml')) return SUPABASE_BASE + 'Refriferante 600ml.png';
    if (d.includes('mini')) return SUPABASE_BASE + 'Refrigerene Mini.png';
    if (d.includes('lata')) return SUPABASE_BASE + 'Latas.png';
  }

  if (n === 'molhos' && item.description && item.description.length) {
    const d = normalize(item.description[0]);
    if (d.includes('sugo')) return SUPABASE_BASE + 'Molho ao Sugo.png';
    if (d.includes('bolonhesa') || d.includes('bolhonhesa')) return SUPABASE_BASE + 'Molho a Bolhonhesa.png';
    if (d.includes('branco')) return SUPABASE_BASE + 'Molho a Branco.png';
  }

  if (n === 'nhoque' && item.description && item.description.length) {
    const d = normalize(item.description[0]);
    if (d.includes('mandioca')) return SUPABASE_BASE + 'Nhoque de Madioca.png';
    if (d.includes('mandioquinha')) return SUPABASE_BASE + 'Nhoque de Madioquinha.png';
    if (d.includes('batata')) return SUPABASE_BASE + 'Nhoque.png';
  }

  const extra = { 'logo centralizado': 'Logo Centralizado.png', 'lazanha': 'Lazanha.png', 'lasanha': 'Lazanha.png' };
  const file = fileByName[n] || extra[n];
  return file ? (SUPABASE_BASE + file) : SUPABASE_LOGO_URL;
}

function buildWhatsAppLink(item) {
  if (item.whatsappLink) return item.whatsappLink;
  const base = 'https://wa.me/5535997723632?text=';
  const msg = `Gostaria de reservar o produto ${item.name}, a quantidade é ...`;
  return base + encodeURIComponent(msg);
}

function renderCategories() {
  const el = document.getElementById('categories');
  const frag = document.createDocumentFragment();
  menuData.forEach(category => {
    const wrap = document.createElement('div');
    wrap.className = 'category';
    const header = document.createElement('div');
    header.className = 'category-header';
    const h2 = document.createElement('h2'); h2.className = 'category-title'; h2.textContent = category.title;
    const h3 = document.createElement('h3'); h3.className = 'category-subtitle'; h3.textContent = category.subtitle;
    header.append(h2, h3); wrap.appendChild(header);
    category.items.forEach(item => {
      const card = document.createElement('div'); card.className = 'item';
      const media = document.createElement('div'); media.className = 'item-media';
      const img = document.createElement('img'); img.className = 'item-img'; img.alt = item.name; img.src = resolveImageUrl(item); img.onerror = () => { img.src = SUPABASE_LOGO_URL; };
      media.appendChild(img);
      const main = document.createElement('div'); main.className = 'item-main';
      const info = document.createElement('div'); info.className = 'item-info';
      const name = document.createElement('h4'); name.className = 'item-name'; name.textContent = item.name; info.appendChild(name);
      if (item.description && item.description.length) {
        const desc = document.createElement('div'); desc.className = 'item-desc';
        item.description.forEach(d => { const p = document.createElement('p'); p.textContent = d; desc.appendChild(p); });
        info.appendChild(desc);
      }
      const reserve = document.createElement('div');
      const a = document.createElement('a'); a.className = 'reserve-btn'; a.href = buildWhatsAppLink(item); a.target = '_blank'; a.rel = 'noopener'; a.textContent = 'clique aqui e reserve';
      reserve.appendChild(a); info.appendChild(reserve);
      const price = document.createElement('div'); price.className = 'price';
      const cur = document.createElement('span'); cur.className = 'price-cur'; cur.textContent = 'R$';
      const value = document.createElement('span'); value.className = 'price-value'; value.textContent = item.price;
      const unit = document.createElement('span'); unit.className = 'price-unit'; unit.textContent = item.unit;
      price.append(cur, value, unit);
      main.append(info, price); card.append(media, main); wrap.appendChild(card);
    });
    frag.appendChild(wrap);
  });
  el.appendChild(frag);
}

function initLogos() {
  const headerLogo = document.getElementById('header-logo'); if (headerLogo) { headerLogo.src = SUPABASE_LOGO_URL; headerLogo.onerror = () => { headerLogo.src = SUPABASE_LOGO_URL; } }
  const footerLogo = document.getElementById('footer-logo'); if (footerLogo) { footerLogo.src = SUPABASE_LOGO_URL; footerLogo.onerror = () => { footerLogo.src = SUPABASE_LOGO_URL; } }
}

document.addEventListener('DOMContentLoaded', () => { initLogos(); renderCategories(); });

