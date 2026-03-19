// ── HAMBURGER ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ── HERO BACKGROUND ──
const heroBg = document.getElementById('heroBg');
const imgs = [
  'photo-1558618666-fcd25c85cd64','photo-1556905055-8f358a7a47b2','photo-1503341455253-b2e723bb3dbb',
  'photo-1490481651871-ab68de25d43d','photo-1512436991641-6745cdb1723f','photo-1483985988355-763728e1935b',
  'photo-1558769132-cb1aea458c5e','photo-1547996160-81dfa63595aa','photo-1523381210434-271e8be1f52b',
  'photo-1532453288672-3a17f2e980ca','photo-1469334031218-e382a71b716b','photo-1505022610485-0249ba5b3675'
];
imgs.forEach(id => {
  const img = document.createElement('img');
  img.src = `https://images.unsplash.com/${id}?w=300&q=60`;
  img.alt = '';
  heroBg.appendChild(img);
});

// ── FACT TICKER ──
const facts = [
  'A cotton T-shirt requires 2,700 litres of water — enough to drink for 2.5 years',
  'The fashion industry emits more CO₂ than all international flights and shipping combined',
  'Only 1% of clothing is recycled back into new clothing globally',
  'A pair of jeans uses 7,000 litres of water during production',
  'Textile dyeing is the world\'s 2nd largest polluter of clean water after agriculture',
  '500,000 tonnes of plastic microfibres enter the ocean every year from washing clothes',
  'The average garment is worn just 7 times before being discarded',
  '85% of all textiles end up in landfill or are incinerated each year',
  'Fashion accounts for 10% of global carbon dioxide output — more than aviation and shipping',
  'It takes 10,000 litres of water to produce 1 kg of cotton — as much as a person drinks in 10 years',
  'Extending the life of clothes by just 9 months would reduce carbon, water and waste footprints by 20–30%',
  'The Aral Sea, once the world\'s 4th largest lake, was nearly destroyed by cotton irrigation demand',
  'Fast fashion brands produce 52 "micro-seasons" per year — up from 2 per year in the 1990s',
  '20% of global industrial water pollution comes from textile dyeing and treatment',
];
const doubled = [...facts, ...facts];
const track = document.getElementById('tickerTrack');
doubled.forEach(f => {
  const el = document.createElement('span');
  el.className = 'ticker-item';
  el.innerHTML = `<span class="ticker-dot"></span>${f}`;
  track.appendChild(el);
});

// ── JOURNEY ──
const stages = [
  { name:'Cotton Farming', impact:'hi', dot:'#dc503c',
    inputs:['20,000 L water/kg','Fertilizers','Pesticides','Arable land'],
    outputs:['GHG emissions','Soil degradation','Pesticide runoff'] },
  { name:'Fiber Processing', impact:'hi', dot:'#dc6040',
    inputs:['Energy','Chemicals','Water'],
    outputs:['Toxic wastewater','Air pollutants'] },
  { name:'Fabric Production & Dyeing', impact:'hi', dot:'#dc8040',
    inputs:['Synthetic dyes','Finishing agents','Energy'],
    outputs:['Chemical effluents','Microplastics'] },
  { name:'Clothing Manufacturing', impact:'md', dot:'#dca040',
    inputs:['Electricity','Labour','Trims & threads'],
    outputs:['Cutting waste','Solid waste'] },
  { name:'Transport & Retail', impact:'md', dot:'#a0a040',
    inputs:['Fossil fuels','Packaging material'],
    outputs:['CO₂ shipping emissions','Packaging waste'] },
  { name:'Consumer Use & Washing', impact:'md', dot:'#70a050',
    inputs:['Water','Detergent','Electricity (dryer)'],
    outputs:['Microfibre pollution','Wastewater'] },
  { name:'Disposal / Landfill', impact:'hi', dot:'#dc503c',
    inputs:['Landfill space','Incineration energy'],
    outputs:['Methane gas','Leachate & soil toxins'] },
];
const jWrap = document.getElementById('journeyWrap');
stages.forEach((s, i) => {
  const label = s.impact==='hi' ? 'High Impact' : s.impact==='md' ? 'Medium' : 'Low';
  jWrap.innerHTML += `
  <div class="j-row fade-in">
    <div class="j-label">Stage ${i+1}</div>
    <div class="j-axis">
      <div class="j-dot" style="background:${s.dot}"></div>
      ${i < stages.length-1 ? '<div class="j-line"></div>' : ''}
    </div>
    <div class="j-card">
      <div class="j-head">
        <span class="j-name">${s.name}</span>
        <span class="j-badge ${s.impact}">${label}</span>
      </div>
      <div class="j-grid">
        <div class="j-io"><div class="j-io-label">Inputs</div><div class="j-io-list">${s.inputs.join('<br>')}</div></div>
        <div class="j-io"><div class="j-io-label">Outputs / Emissions</div><div class="j-io-list">${s.outputs.join('<br>')}</div></div>
      </div>
    </div>
  </div>`;
});

// ── MATERIAL COMPARISON CHART ──
const matCompare = {
  water: [
    { name:'Conventional Cotton', val:10000, color:'#5ba0d0' },
    { name:'Wool',                val:12000, color:'#8a70b0' },
    { name:'Cotton–Poly Blend',   val:5500,  color:'#a0a850' },
    { name:'Linen / Hemp',        val:3000,  color:'#70b870' },
    { name:'Organic Cotton',      val:4000,  color:'#5a9a6a' },
    { name:'Polyester (Virgin)',  val:200,   color:'#d08050' },
    { name:'Recycled Polyester',  val:800,   color:'#80c080' },
  ],
  co2: [
    { name:'Conventional Cotton', val:5.5,  color:'#5ba0d0' },
    { name:'Wool',                val:6.0,  color:'#8a70b0' },
    { name:'Cotton–Poly Blend',   val:7.2,  color:'#a0a850' },
    { name:'Linen / Hemp',        val:2.8,  color:'#70b870' },
    { name:'Organic Cotton',      val:3.8,  color:'#5a9a6a' },
    { name:'Polyester (Virgin)',  val:9.5,  color:'#d08050' },
    { name:'Recycled Polyester',  val:1.5,  color:'#80c080' },
  ],
  chem: [
    { name:'Conventional Cotton', val:80, color:'#5ba0d0' },
    { name:'Wool',                val:50, color:'#8a70b0' },
    { name:'Cotton–Poly Blend',   val:70, color:'#a0a850' },
    { name:'Linen / Hemp',        val:20, color:'#70b870' },
    { name:'Organic Cotton',      val:28, color:'#5a9a6a' },
    { name:'Polyester (Virgin)',  val:65, color:'#d08050' },
    { name:'Recycled Polyester',  val:14, color:'#80c080' },
  ],
};
const chartUnits = { water:'L/kg', co2:'kg CO₂/kg', chem:'index /100' };
let currentChart = 'water';

function showChart(type) {
  currentChart = type;
  document.querySelectorAll('.ctab').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  renderChart();
}

function renderChart() {
  const data = [...matCompare[currentChart]].sort((a,b) => b.val - a.val);
  const max = Math.max(...data.map(d => d.val));
  const unit = chartUnits[currentChart];
  const el = document.getElementById('compareChart');
  el.innerHTML = data.map(d => {
    const pct = (d.val / max * 100).toFixed(1);
    const displayVal = currentChart === 'water' ? d.val.toLocaleString() + ' ' + unit
                     : currentChart === 'co2'   ? d.val + ' ' + unit
                     : d.val + '/100';
    return `<div class="cbar-row">
      <div class="cbar-name">${d.name}</div>
      <div class="cbar-track">
        <div class="cbar-fill" data-pct="${pct}" style="background:${d.color};width:0%">
          <span class="cbar-val">${displayVal}</span>
        </div>
      </div>
    </div>`;
  }).join('');
  setTimeout(() => {
    el.querySelectorAll('.cbar-fill').forEach(b => { b.style.width = b.dataset.pct + '%'; });
  }, 80);

  // Legend
  const legend = document.getElementById('compareLegend');
  legend.innerHTML = data.map(d =>
    `<div class="legend-item"><div class="legend-dot" style="background:${d.color}"></div>${d.name}</div>`
  ).join('');
}
renderChart();

// ── CALCULATOR ──
const matData = {
  cotton:    { water:10000, co2:5.5, chem:80 },
  organic:   { water:4000,  co2:3.8, chem:28 },
  polyester: { water:200,   co2:9.5, chem:65 },
  blend:     { water:5500,  co2:7.2, chem:70 },
  wool:      { water:12000, co2:6.0, chem:50 },
  linen:     { water:3000,  co2:2.8, chem:20 },
  recycled:  { water:800,   co2:1.5, chem:14 },
};
const gWeight  = { tshirt:200, jeans:800, jacket:1200, dress:350, underwear:80 };
const rFactor  = { asia:1.3, europe:0.85, americas:1.05 };
const dFactor  = { landfill:1.2, donate:0.55, recycle:0.38 };
const gradeDesc = {
  A:'Excellent — minimal environmental impact',
  B:'Good — below-average footprint',
  C:'Average — room for improvement',
  D:'High impact — consider sustainable alternatives',
  E:'Very high impact — significant environmental burden'
};

function calcScore(mat, gType, region, washes, years, disposal) {
  const md = matData[mat], gw = gWeight[gType]/1000;
  const rf = rFactor[region], df = dFactor[disposal];
  const tw = washes * 12 * years;
  const water = Math.round((md.water * gw + tw * 60) * rf);
  const co2   = +((md.co2 * gw * rf) + (tw * 0.55) + (disposal==='landfill' ? 2.5 : 0.4)).toFixed(1);
  const chem  = Math.round(md.chem * gw * 100);
  const waste = disposal==='landfill' ? Math.round(gw*1000) : disposal==='donate' ? 0 : Math.round(gw*180);
  const raw   = (water/280)*0.35 + (co2/0.45)*0.35 + (chem/120)*0.3*df;
  const score = Math.min(100, Math.round(raw));
  const grade = score<14?'A':score<25?'B':score<42?'C':score<62?'D':'E';
  return { water, co2, chem, waste, grade };
}

function calculate() {
  const r = calcScore(
    document.getElementById('material').value,
    document.getElementById('garmentType').value,
    document.getElementById('region').value,
    +document.getElementById('washes').value,
    +document.getElementById('years').value,
    document.getElementById('disposal').value
  );
  const mat = document.getElementById('material').value;
  const washes = +document.getElementById('washes').value;
  const years = +document.getElementById('years').value;
  const disposal = document.getElementById('disposal').value;

  const tips = [];
  if (mat==='cotton')    tips.push('Organic cotton saves ~60% water vs conventional');
  if (mat==='polyester') tips.push('Recycled polyester cuts CO₂ emissions by ~75%');
  if (washes>8)          tips.push('Wash in cold water and air-dry to cut use-phase footprint');
  if (disposal==='landfill') tips.push('Donate or recycle — reduces disposal impact by 50–70%');
  if (years<3)           tips.push('Wearing a garment 3× longer reduces total footprint by ~65%');
  if (tips.length===0)   tips.push('Great choices — your garment already has a low footprint!');

  const wPct   = Math.min(100, Math.round(r.water/280));
  const cPct   = Math.min(100, Math.round(r.co2*3));
  const chemPct= Math.min(100, r.chem);
  const wstPct = Math.min(100, Math.round(r.waste/9));

  document.getElementById('calcResults').innerHTML = `
    <div class="result-grade-wrap">
      <div class="result-grade-label">Overall LCA Grade</div>
      <div class="result-grade g${r.grade}">${r.grade}</div>
      <div class="result-grade-desc">${gradeDesc[r.grade]}</div>
    </div>
    <div class="result-metrics">
      ${met('Water Usage', r.water.toLocaleString()+' L', wPct, '#5ba0d0')}
      ${met('Carbon Emissions', r.co2+' kg CO₂', cPct, '#d08050')}
      ${met('Chemical Load', r.chem+' pts', chemPct, '#b870d0')}
      ${met('Textile Waste', r.waste+' g', wstPct, '#d05060')}
    </div>
    <div>
      <div class="tips-title">Suggestions to reduce impact</div>
      ${tips.map(t=>`<div class="tip">${t}</div>`).join('')}
    </div>`;
  setTimeout(() => {
    document.querySelectorAll('.metric-fill').forEach(b => { b.style.width = b.dataset.pct+'%'; });
  }, 80);
}

function met(name, val, pct, color) {
  return `<div>
    <div class="metric-row"><span class="metric-name">${name}</span><span class="metric-val">${val}</span></div>
    <div class="metric-bar"><div class="metric-fill" data-pct="${pct}" style="background:${color}"></div></div>
  </div>`;
}

function setCalcMode(mode, btn) {
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('singleMode').style.display  = mode==='single'  ? '' : 'none';
  document.getElementById('compareMode').style.display = mode==='compare' ? '' : 'none';
}

function compareGarments() {
  const A = calcScore(
    document.getElementById('matA').value, document.getElementById('typeA').value,
    'asia', 4, +document.getElementById('yearsA').value, document.getElementById('disposalA').value
  );
  const B = calcScore(
    document.getElementById('matB').value, document.getElementById('typeB').value,
    'asia', 4, +document.getElementById('yearsB').value, document.getElementById('disposalB').value
  );

  const metrics = [
    { name:'Water Usage',    a:A.water, b:B.water, unit:'L',    color:'#5ba0d0', fmt:v=>v.toLocaleString()+' L' },
    { name:'CO₂ Emissions',  a:A.co2,   b:B.co2,   unit:'kg',   color:'#d08050', fmt:v=>v+' kg' },
    { name:'Chemical Load',  a:A.chem,  b:B.chem,  unit:'pts',  color:'#b870d0', fmt:v=>v+' pts' },
    { name:'Textile Waste',  a:A.waste, b:B.waste, unit:'g',    color:'#d05060', fmt:v=>v+' g' },
  ];

  const rows = document.getElementById('compareRows');
  rows.innerHTML = metrics.map(m => {
    const max  = Math.max(m.a, m.b, 1);
    const aW   = (m.a/max*100).toFixed(0), bW = (m.b/max*100).toFixed(0);
    const aWin = m.a <= m.b, bWin = m.b <= m.a;
    return `<div class="compare-metric-row">
      <div class="compare-metric-name">${m.name}</div>
      <div class="compare-metric-cell">
        <div class="compare-metric-val">${m.fmt(m.a)}</div>
        <div class="compare-bar-outer"><div class="compare-bar-inner" data-pct="${aW}" style="background:${m.color};width:0%"></div></div>
        ${aWin ? '<div class="winner-badge">✓ Lower</div>' : ''}
      </div>
      <div class="compare-metric-cell">
        <div class="compare-metric-val">${m.fmt(m.b)}</div>
        <div class="compare-bar-outer"><div class="compare-bar-inner" data-pct="${bW}" style="background:${m.color};width:0%"></div></div>
        ${bWin ? '<div class="winner-badge">✓ Lower</div>' : ''}
      </div>
    </div>`;
  }).join('');

  document.getElementById('gradeA').innerHTML = `<span class="g${A.grade}">${A.grade}</span>`;
  document.getElementById('gradeB').innerHTML = `<span class="g${B.grade}">${B.grade}</span>`;
  document.getElementById('compareResultsWrap').classList.add('visible');

  setTimeout(() => {
    document.querySelectorAll('.compare-bar-inner').forEach(b => { b.style.width = b.dataset.pct+'%'; });
  }, 80);
}

// ── REDUCE TABS ──
function showPanel(id) {
  document.querySelectorAll('.reduce-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.rtab').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-'+id).classList.add('active');
  event.target.classList.add('active');
}

// ── PLEDGE ──
const pledgeItems = [
  'Buy organic or recycled materials','Buy secondhand before new',
  'Wash clothes in cold water','Air-dry instead of tumble dry',
  'Wash less — spot clean where possible','Use a microfibre filter bag',
  'Repair instead of replacing','Donate clothes I no longer wear',
  'Use textile recycling bins','Avoid fast fashion brands',
];
const pl = document.getElementById('pledgeList');
pledgeItems.forEach(item => {
  const div = document.createElement('div');
  div.className = 'pledge-item';
  div.innerHTML = `<div class="pledge-check"></div><span>${item}</span>`;
  div.onclick = () => {
    div.classList.toggle('checked');
    document.getElementById('pledgeNum').textContent = document.querySelectorAll('.pledge-item.checked').length;
  };
  pl.appendChild(div);
});

// ── WORLD MAP ──
const hotspots = [
  { x:640, y:145, name:'Aral Sea, Kazakhstan', color:'#dc503c',
    body:'Once the world\'s 4th largest lake. Soviet cotton irrigation diverted its two main rivers — by 2007 it had lost 90% of its volume, leaving behind a toxic salt desert.',
    stat:'90% water loss from cotton irrigation' },
  { x:690, y:190, name:'Pearl River Delta, China', color:'#dc8040',
    body:'The world\'s largest textile and garment manufacturing hub. Rivers in Guangdong province carry dye effluents and heavy metals from thousands of dyeing factories.',
    stat:'20% of global industrial water pollution' },
  { x:660, y:195, name:'Bangladesh — Dhaka', color:'#f5c060',
    body:'Home to 4,500+ garment factories employing 4 million workers. The Buriganga River is biologically dead from tannery and dyeing effluents dumped daily.',
    stat:'4,500 factories · river declared biologically dead' },
  { x:630, y:195, name:'Tirupur, India', color:'#d08050',
    body:'India\'s knitwear capital. Dyeing units along the Noyyal River released chromium and other toxins until a 2011 Supreme Court closure order. Groundwater remains contaminated.',
    stat:'Noyyal River — heavily contaminated' },
  { x:330, y:320, name:'Atacama Desert, Chile', color:'#b870d0',
    body:'Thousands of tonnes of unsold fast fashion from around the world are dumped in this desert every year — creating visible mountains of clothing visible from space.',
    stat:'~39,000 tonnes of clothes dumped annually' },
  { x:480, y:220, name:'Aral Region, Uzbekistan', color:'#dc6040',
    body:'Uzbekistan is the world\'s 6th largest cotton producer. Intensive cotton farming consumes 90% of the country\'s water, devastating local ecosystems and communities.',
    stat:'90% of water resources used for cotton' },
  { x:200, y:190, name:'North Atlantic — Microplastics', color:'#5ba0d0',
    body:'Microfibre pollution from synthetic clothing concentrates in ocean gyres. Over 1.5 million trillion synthetic fibres are estimated to be in the world\'s oceans.',
    stat:'1.5M trillion synthetic fibres in oceans' },
];

// Simple world map paths (simplified continents)
const worldSVG = document.getElementById('worldMap');
worldSVG.innerHTML = `
<rect width="900" height="440" fill="rgba(13,26,15,0.5)" rx="12"/>
<!-- Simplified continent outlines -->
<path class="map-country" d="M70,120 Q90,90 130,85 Q180,80 200,95 Q220,105 210,130 Q190,155 160,160 Q120,155 90,145 Z"/>
<path class="map-country" d="M85,165 Q100,155 140,158 Q170,162 175,185 Q170,215 145,230 Q115,240 90,225 Q70,205 75,185 Z"/>
<path class="map-country" d="M240,120 Q280,100 360,105 Q420,110 450,130 Q460,155 440,175 Q400,195 350,190 Q280,185 250,165 Q230,145 240,120 Z"/>
<path class="map-country" d="M255,190 Q290,188 340,195 Q370,200 375,230 Q370,280 340,310 Q305,330 270,320 Q245,300 240,265 Q240,220 255,190 Z"/>
<path class="map-country" d="M460,100 Q520,80 600,85 Q680,90 730,115 Q760,140 755,175 Q740,210 700,225 Q640,235 580,225 Q520,210 485,180 Q455,150 460,100 Z"/>
<path class="map-country" d="M490,235 Q530,225 570,235 Q595,245 595,275 Q590,310 560,325 Q530,330 505,315 Q485,295 490,265 Z"/>
<path class="map-country" d="M680,135 Q720,125 760,130 Q800,140 820,165 Q825,195 810,220 Q790,245 755,250 Q715,248 690,225 Q668,198 672,168 Z"/>
<path class="map-country" d="M730,265 Q760,255 790,265 Q820,280 825,305 Q820,340 795,360 Q765,375 740,360 Q715,340 715,310 Q718,280 730,265 Z"/>
<path class="map-country" d="M800,110 Q830,100 860,110 Q880,125 878,150 Q870,170 848,175 Q820,170 806,152 Q795,133 800,110 Z"/>
`;

// Add hotspot markers
hotspots.forEach((h, i) => {
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttribute('class','map-hotspot');
  g.setAttribute('data-index', i);
  g.innerHTML = `
    <circle class="outer" cx="${h.x}" cy="${h.y}" r="14" fill="${h.color}" opacity="0.15"/>
    <circle cx="${h.x}" cy="${h.y}" r="7" fill="${h.color}" opacity="0.85"/>
    <circle cx="${h.x}" cy="${h.y}" r="3" fill="white" opacity="0.9"/>
  `;
  g.addEventListener('mouseenter', (e) => showMapTooltip(e, h));
  g.addEventListener('mouseleave', hideMapTooltip);
  g.addEventListener('click', (e) => showMapTooltip(e, h));
  worldSVG.appendChild(g);
  // Pulse animation via JS
  const outer = g.querySelector('.outer');
  let r = 14, growing = true;
  setInterval(() => {
    r = growing ? r + 0.3 : r - 0.3;
    if (r > 18) growing = false;
    if (r < 12) growing = true;
    outer.setAttribute('r', r.toFixed(1));
  }, 50 + i * 7);
});

function showMapTooltip(e, h) {
  const tt = document.getElementById('mapTooltip');
  const mapRect = worldSVG.closest('.map-wrap').getBoundingClientRect();
  const svgRect = worldSVG.getBoundingClientRect();
  const scaleX = svgRect.width / 900;
  const scaleY = svgRect.height / 440;
  let tx = (h.x * scaleX) - (svgRect.left - mapRect.left) + 10;
  let ty = (h.y * scaleY) - (svgRect.top - mapRect.top) + 10;
  if (tx + 230 > mapRect.width) tx = tx - 240;
  tt.innerHTML = `<div class="map-tooltip-title">📍 ${h.name}</div><div class="map-tooltip-body">${h.body}</div><div class="map-tooltip-stat">${h.stat}</div>`;
  tt.style.left = tx + 'px';
  tt.style.top  = ty + 'px';
  tt.style.display = 'block';
}

function hideMapTooltip() {
  document.getElementById('mapTooltip').style.display = 'none';
}

// ── SCROLL ANIMATIONS ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

// Animate comparison bars when section scrolls in
const compObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(() => {
        e.target.querySelectorAll('.cbar-fill').forEach(b => { b.style.width = b.dataset.pct+'%'; });
      }, 200);
    }
  });
}, { threshold: 0.2 });
const compSection = document.getElementById('comparison');
if (compSection) compObs.observe(compSection);