// Copiado de script.js para publicação em GitHub Pages (docs/)
const SUPABASE_BASE = 'https://tkexuycidlzsafjjzbpd.supabase.co/storage/v1/object/public/Grill%20Nota%20Mil/cardapio_fim_ano_midias/';
const SUPABASE_LOGO_URL = SUPABASE_BASE + 'Logo%20Centralizado.png';
const LOCAL_BASE = 'img/';

const menuData = [
  { title: 'MATE A SUA FOME', subtitle: 'ESPECIAIS FIM DE ANO', items: [
    { name: 'LOMBO RECHEADO', price: '95,00', unit: 'Kg', imageUrl: '' },
    { name: 'PORQUETA PURURUCA', price: '95,00', unit: 'Kg', imageUrl: '' },
    { name: 'LAGARTO RECHEADO', price: '110,00', unit: 'Kg', imageUrl: '' },
    { name: 'MAMINHA RECHEADA', price: '110,00', unit: 'Kg', imageUrl: '' }
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

function getFileStem(item) {
  const n = normalize(item.name);
  const fileByName = {
    'canelone': 'Canelone',
    'chester recheado': 'Chester Recheado',
    'conchiglione': 'Conchiglione',
    'costela desossada': 'Costela Desossada',
    'costela': 'Costela Desossada',
    'costelinha': 'Costelinha Suina',
    'costelinha suina': 'Costelinha Suina',
    'coxa com sobre coxa': 'Coxa com Sobre Coxa',
    'cupim': 'Cupin',
    'farofa caseira': 'Farofa Caseira',
    'farofa natalina': 'Farofa Natalina',
    'feijao tropeiro': 'Feijao Tropeiro',
    'frango recheado': 'Frango Recheado',
    'frango com batatas': 'Frango com Batatas',
    'fraldinha': 'Fraudinha Assada',
    'fraudinha assada': 'Fraudinha Assada',
    'joelho': 'Joelho de Porco',
    'joelho de porco': 'Joelho de Porco',
    'lagarto recheado': 'Lagarto Recheado',
    'lombo recheado': 'Lombo Recheado',
    'maionese': 'Maionese',
    'salada de maionese': 'Maionese',
    'maminha recheada': 'Maminha Recheada',
    'porqueta': 'Porqueta',
    'porqueta pururuca': 'Porqueta',
    'panceta': 'Panceta',
    'panqueca': 'Panqueca',
    'pernil': 'Pernil',
    'salpicao': 'Salpicao',
    'sofili': 'Sofili',
    'sofioli': 'Sofili',
    'tender c/ molho de maracuja': 'Tender com Molho de Maracuja',
    'tender com molho de maracuja': 'Tender com Molho de Maracuja',
    'torta franco requeijao': 'Torta Franco Requeijao',
    'torta palmito': 'Torta Palmito',
    'nhocao recheado': 'Nhocao Recheadp'
  };

  if (n === 'cervejas' && item.description && item.description.length) {
    const d = normalize(item.description[0]);
    if (d.includes('long neck')) return 'Cerveja Long';
  }
  if (n === 'cervejas lata' && item.description && item.description.length) {
    const d = normalize(item.description[0]);
    if (d.includes('itaipava')) return 'Cerveja Lata Itaipava';
    if (d.includes('puro malte')) return 'Cerveja Lata Puro malte';
    if (d.includes('skol') && d.includes('brahma')) return 'Ceveja Lata Skol e Brahama';
  }
  if (n === 'refrigerantes' && item.description && item.description.length) {
    const d = normalize(item.description[0]);
    if (d.includes('2 litros') || d.includes('2l') || d.includes('2 l')) return 'Refrigerantes 2l';
    if (d.includes('600 ml') || d.includes('600ml')) return 'Refriferante 600ml';
    if (d.includes('mini')) return 'Refrigerene Mini';
    if (d.includes('lata')) return 'Latas';
  }

  if (n === 'molhos' && item.description && item.description.length) {
    const d = normalize(item.description[0]);
    if (d.includes('sugo')) return 'Molho ao Sugo';
    if (d.includes('bolonhesa') || d.includes('bolhonhesa')) return 'Molho a Bolhonhesa';
    if (d.includes('branco')) return 'Molho a Branco';
  }

  if (n === 'tortas' && item.description && item.description.length) {
    const d = normalize(item.description[0]);
    if (d.includes('palmito')) return 'Torta Palmito';
    if (d.includes('frango') || d.includes('requeijao')) return 'Torta Franco Requeijao';
  }

  if (n === 'nhoque' && item.description && item.description.length) {
    const d = normalize(item.description[0]);
    if (d.includes('mandioca')) return 'Nhoque de Madioca';
    if (d.includes('mandioquinha')) return 'Nhoque de Madioquinha';
    if (d.includes('batata')) return 'Nhoque';
  }

  const extra = { 'logo centralizado': 'Logo Centralizado', 'lazanha': 'Lazanha', 'lasanha': 'Lazanha' };
  return fileByName[n] || extra[n] || null;
}

function resolveLocalUrl(item) {
  const stem = getFileStem(item);
  return stem ? (LOCAL_BASE + stem + '.webp') : SUPABASE_LOGO_URL;
}

function resolveSupabaseUrl(item) {
  const stem = getFileStem(item);
  return stem ? (SUPABASE_BASE + stem + '.png') : SUPABASE_LOGO_URL;
}

function buildWhatsAppLink(item) {
  if (item.whatsappLink) return item.whatsappLink;
  const base = 'https://wa.me/5535997723632?text=';
  const msg = `Gostaria de reservar o produto ${item.name}, a quantidade é ...`;
  return base + encodeURIComponent(msg);
}

function slugify(s) {
  if (!s) return '';
  return s.toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,'-').replace(/[^\w\-]/g,'').replace(/\-+/g,'-');
}

function computeCategoryTitle(subtitle) {
  if (!subtitle) return 'Cardápio';
  const s = subtitle.toLowerCase();
  if (s.includes('porc')) return 'Opções de Porco';
  if (s.includes('boi') || s.includes('bov')) return 'Opções Bovinas';
  if (s.includes('frang')) return 'Opções de Frango';
  if (s.includes('espec') || s.includes('fim')) return 'Especiais de Fim de Ano';
  if (s.includes('acompanh')) return 'Acompanhamentos';
  if (s.includes('massa') || s.includes('molh')) return 'Massas e Molhos';
  if (s.includes('cervej') || s.includes('cerveja')) return 'Bebidas Alcoólicas';
  if (s.includes('refriger')) return 'Bebidas Não Alcoólicas';
  return subtitle;
}

function buildCategoryIndex() {
  const heroInner = document.querySelector('.hero-inner');
  if (!heroInner) return;
  const data = getProcessedMenuData();

  // collect unique labels in document order
  const seen = new Set();
  const labels = [];
  data.forEach(cat => {
    const label = computeCategoryTitle(cat.subtitle);
    if (!seen.has(label)) { seen.add(label); labels.push(label); }
  });

  // preferred ordering (if present)
  const preferred = ['Especiais de Fim de Ano','Opções Bovinas','Opções de Porco','Opções de Frango','Acompanhamentos','Massas e Molhos','Bebidas Alcoólicas','Bebidas Não Alcoólicas'];
  const ordered = [];
  preferred.forEach(p => { const i = labels.indexOf(p); if (i !== -1) { ordered.push(p); labels.splice(i,1); } });
  labels.forEach(l => ordered.push(l));

  // reuse placeholder if exists
  let container = document.getElementById('category-index');
  if (!container) { container = document.createElement('div'); heroInner.appendChild(container); }
  container.className = 'category-index';
  container.innerHTML = '';

  const copy = document.createElement('p');
  copy.className = 'category-index-copy';
  copy.textContent = 'Escolha uma das opções ou role a página';

  const sub = document.createElement('p');
  sub.className = 'category-index-sub';
  sub.textContent = 'Toque para ir direto ao que deseja reservar.';

  const list = document.createElement('div');
  list.className = 'category-index-list';

  ordered.forEach(label => {
    const a = document.createElement('a');
    a.className = 'category-pill';
    a.href = '#' + slugify(label);
    a.textContent = label;
    a.setAttribute('aria-label', 'Ir para ' + label);
    list.appendChild(a);
  });

  container.append(copy, sub, list);
}

function getProcessedMenuData() {
  const res = [];
  const isMassas = s => !!s && s.toLowerCase().includes('massa') && s.toLowerCase().includes('molh');
  let massas = null;
  menuData.forEach(cat => {
    if (isMassas(cat.subtitle)) {
      if (!massas) { massas = { title: cat.title, subtitle: cat.subtitle, items: [] }; res.push(massas); }
      if (cat.items && cat.items.length) massas.items = massas.items.concat(cat.items);
    } else {
      res.push(cat);
    }
  });
  return res;
}

function renderCategories() {
  const el = document.getElementById('categories');
  const frag = document.createDocumentFragment();
  const data = getProcessedMenuData();
  data.forEach(category => {
    const wrap = document.createElement('div');
    wrap.className = 'category';
    wrap.id = slugify(computeCategoryTitle(category.subtitle));
    const header = document.createElement('div');
    header.className = 'category-header';
    const h2 = document.createElement('h2'); h2.className = 'category-title'; h2.textContent = computeCategoryTitle(category.subtitle);
    const h3 = document.createElement('h3'); h3.className = 'category-subtitle'; h3.textContent = category.subtitle;
    header.append(h2, h3); wrap.appendChild(header);
    category.items.forEach(item => {
      // make the whole card the clickable link
      const card = document.createElement('a');
      card.className = 'item';
      card.href = buildWhatsAppLink(item);
      card.target = '_blank';
      card.rel = 'noopener';
      card.setAttribute('aria-label', 'Reservar ' + item.name);

      const media = document.createElement('div'); media.className = 'item-media';
      const img = document.createElement('img'); img.className = 'item-img'; img.alt = item.name; img.loading = 'lazy'; img.decoding = 'async';
      const stem = getFileStem(item);
      const localPrimary = stem ? (LOCAL_BASE + stem + '.webp') : SUPABASE_LOGO_URL;
      const localAlt = stem ? (LOCAL_BASE + stem.replace(/ /g, '_') + '.webp') : SUPABASE_LOGO_URL;
      const supSrc = resolveSupabaseUrl(item);
      img.src = localPrimary;
      img.onerror = () => {
        if (!img.dataset.tryAlt && localAlt !== localPrimary) { img.dataset.tryAlt = '1'; img.src = localAlt; return; }
        if (!img.dataset.fb) { img.dataset.fb = '1'; img.src = supSrc; return; }
        img.src = SUPABASE_LOGO_URL;
      };
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
      // keep visual button but not as an <a> to avoid nested anchors
      const btn = document.createElement('span'); btn.className = 'reserve-btn'; btn.textContent = 'clique aqui e reserve';
      reserve.appendChild(btn); info.appendChild(reserve);
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

document.addEventListener('DOMContentLoaded', () => { initLogos(); renderCategories(); buildCategoryIndex(); });
