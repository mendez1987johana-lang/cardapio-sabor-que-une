/* =====================================================
   SABOR QUE UNE — BANCO DE DADOS DO CARDÁPIO
   Este arquivo é a fonte de dados usada pelo site (index.html)
   e pelo painel administrativo (admin.html).

   Para atualizar o cardápio permanentemente para TODOS os
   visitantes, edite os produtos pelo painel admin.html e
   clique em "Baixar products-data.js atualizado", depois
   envie (substitua) este arquivo no seu servidor/hospedagem.
   ===================================================== */

window.CATEGORIES = [
  {id:'destaques', pt:'Especial da Casa', es:'Especial de la Casa'},
  {id:'arepas', pt:'Arepas & Empanadas', es:'Arepas y Empanadas'},
  {id:'cachapa', pt:'Cachapa & Patacón', es:'Cachapa y Patacón'},
  {id:'hamburguesas', pt:'Hambúrgueres & Cachorro-Quente', es:'Hamburguesas y Perros'},
  {id:'pastas', pt:'Massas', es:'Pastas'},
  {id:'porcoes', pt:'Porções & Entradas', es:'Porciones y Entradas'},
  {id:'pratos', pt:'Pratos Brasileiros', es:'Platos Brasileños'},
  {id:'salgados', pt:'Salgados', es:'Salgados'},
  {id:'postres', pt:'Sobremesas', es:'Postres'},
  {id:'bebidas', pt:'Bebidas', es:'Bebidas'},
  {id:'alcool', pt:'Bebidas Alcoólicas', es:'Bebidas Alcohólicas'}
];

let _id = 0;
const P = (cat, namePt, nameEs, opts={}) => {
  _id++;
  return Object.assign({
    id: 'p'+_id, category: cat, namePt, nameEs,
    descPt:'', descEs:'', price:null, variants:null, needsConfirm:false
  }, opts);
};

window.PRODUCTS = [
  // ---- DESTAQUES ----
  P('destaques','Arroz Chino Mixto','Arroz Chino Mixto',{descPt:'Frango, camarão, presunto e lombo salgado.',descEs:'Pollo, camarón, jamón y cochino.',variants:[{label:'P',price:25},{label:'G',price:45}],descPt2:'servings2'}),
  P('destaques','Arroz Chino Frango & Presunto','Arroz Chino Pollo & Jamón',{descPt:'Arroz chinês com frango e presunto.',descEs:'Arroz chino con pollo y jamón.',variants:[{label:'P',price:25},{label:'G',price:45}]}),
  P('destaques','Arroz Chino Frango & Camarão','Arroz Chino Pollo & Camarón',{descPt:'Arroz chinês com frango e camarão.',descEs:'Arroz chino con pollo y camarón.',variants:[{label:'P',price:25},{label:'G',price:45}]}),
  P('destaques','Tallarines','Tallarines',{descPt:'Macarrão oriental. Opção com camarão.',descEs:'Tallarines orientales. Opción con camarones.',variants:[{label:'Tradicional',price:30},{label:'Com camarão',price:35}]}),
  P('destaques','Prato do Dia — Arroz Misto','Plato del Día — Arroz Mixto',{descPt:'Arroz mixto com costela ou frango agridoce, acompanha chop suey ou batata frita.',descEs:'Arroz mixto con costilla o pollo agridulce, acompaña chop suey o papas fritas.',price:50,tag:'destaque'}),
  P('destaques','Costeleta Defumada com Laranja','Chuleta Ahumada a la Naranja',{descPt:'Com arroz, salada, banana da terra e abacate.',descEs:'Con arroz, ensalada, tajada y aguacate.',price:40}),
  P('destaques','Costeleta Fresca','Chuleta Fresca',{price:25}),
  P('destaques','Bife com Cebola','Bistec Encebollado',{price:30}),
  P('destaques','Pabellón Criollo','Pabellón Criollo',{descPt:'Arroz, carne desfiada, feijão preto, ovo e banana da terra.',descEs:'Arroz, carne mechada, caraota, huevo y tajada.',price:45}),
  P('destaques','Filé à Milanesa','Milanesa Empanizada',{price:35}),
  P('destaques','Cordon Bleu','Cordon Bleu',{price:45}),
  P('destaques','Peixe Frito (Filé de Merluza)','Pescado Frito (Filete de Merluza)',{price:50}),

  // ---- PASTAS ----
  P('pastas','Pasta Alfredo','Pasta Alfredo',{descPt:'Frango, bacon e creme de leite. Opção com camarão.',descEs:'Pollo, tocineta y crema de leche. Opción con camarones.',variants:[{label:'Tradicional',price:30},{label:'Com camarão',price:35}]}),
  P('pastas','Bolonhesa','Boloñesa',{price:30}),
  P('pastas','Pasticho','Pasticho',{descPt:'Lasanha venezuelana.',descEs:'Lasaña venezolana.',variants:[{label:'P',price:25},{label:'G',price:45}]}),

  // ---- AREPAS & EMPANADAS ----
  P('arepas','Arepa de Carne Desfiada','Arepa de Carne Mechada',{price:25}),
  P('arepas','Arepa de Frango','Arepa de Pollo',{price:20}),
  P('arepas','Arepa de Presunto & Queijo','Arepa de Jamón y Queso',{price:20,needsConfirm:true}),
  P('arepas','Arepa Pelua','Arepa Pelua',{descPt:'Carne desfiada com queijo derretido.',descEs:'Carne mechada con queso derretido.',price:30,needsConfirm:true}),
  P('arepas','Arepa Reina Pepeada','Arepa Reina Pepeada',{descPt:'Frango desfiado, abacate e maionese.',descEs:'Pollo desmenuzado, aguacate y mayonesa.',price:30,needsConfirm:true}),
  P('arepas','Arepa Full Equipo','Arepa Full Equipo',{descPt:'Recheio completo com todos os ingredientes.',descEs:'Relleno completo con todos los ingredientes.',price:30,needsConfirm:true}),
  P('arepas','Arepa Burguer','Arepa Burguer',{descPt:'Arepa recheada estilo hambúrguer.',descEs:'Arepa rellena estilo hamburguesa.',price:30,needsConfirm:true}),
  P('arepas','Empanada de Presunto & Queijo','Empanada de Jamón y Queso',{price:15,needsConfirm:true}),
  P('arepas','Empanada de Queijo','Empanada de Queso',{price:15,needsConfirm:true}),
  P('arepas','Empanada de Frango','Empanada de Pollo',{price:15,needsConfirm:true}),
  P('arepas','Empanada de Carne Desfiada','Empanada de Carne Mechada',{price:18}),
  P('arepas','Empanada de Carne com Queijo','Empanada de Carne con Queso',{price:20,needsConfirm:true}),
  P('arepas','Empanada de Frango com Queijo','Empanada de Pollo con Queso',{price:20,needsConfirm:true}),
  P('arepas','Empanada Full Equipo','Empanada Full Equipo',{price:22}),
  P('arepas','Empanada "Operada"','Empanada "Operada"',{descPt:'[CONFIRMAR INFORMAÇÃO] Preço base não informado — cada adicional R$3.',descEs:'[CONFIRMAR INFORMACIÓN] Precio base no informado — cada adicional R$3.',price:null,needsConfirm:true}),
  P('arepas','Café da Manhã Crioulo','Desayuno Criollo',{descPt:'2 arepas, feijão, queijo, ovo e abacate.',descEs:'2 arepas, caraota, queso, huevo y aguacate.',price:35}),
  P('arepas','Cachito (Recheio de Presunto)','Cachito (Relleno de Jamón)',{price:20}),
  P('arepas','Pastelitos Andinos','Pastelitos Andinos',{price:15}),
  P('arepas','Tequeño Grande (unidade)','Tequeño Grande (unidad)',{price:15}),
  P('arepas','Prato Natalino — Hallaca com Salada','Plato Navideño — Hallaca con Ensalada',{price:30}),

  // ---- CACHAPA & PATACÓN ----
  P('cachapa','Cachapa Queijo de Mão','Cachapa Queso de Mano',{price:50,descPt:'Adicional de abacate: +R$5.',descEs:'Adicional de aguacate: +R$5.'}),
  P('cachapa','Cachapa Queijo e Porco','Cachapa Queso y Cochino',{price:60}),
  P('cachapa','Cachapa Queijo Llanero','Cachapa Queso Llanero',{price:40}),
  P('cachapa','Cachapa Queijo Llanero e Porco','Cachapa Queso Llanero y Cochino',{price:50}),
  P('cachapa','Patacón Frango com Tampa','Patacón Pollo con Tapa',{price:35}),
  P('cachapa','Patacón Carne com Tampa','Patacón Carne con Tapa',{price:40}),
  P('cachapa','Patacón Misto com Tampa','Patacón Mixto con Tapa',{price:45}),

  // ---- HAMBURGUESAS & PERROS ----
  P('hamburguesas','Hambúrguer Misto','Hamburguesa Mixta',{price:35}),
  P('hamburguesas','Hambúrguer Chuletón','Hamburguesa Chuletón',{price:40}),
  P('hamburguesas','Hambúrguer de Carne','Hamburguesa de Carne',{price:30,needsConfirm:true}),
  P('hamburguesas','Hambúrguer de Frango','Hamburguesa de Pollo',{price:30,needsConfirm:true}),
  P('hamburguesas','Cachorro-Quente Normal','Perro Caliente Normal',{price:20}),
  P('hamburguesas','Cachorro-Quente Especial','Perro Caliente Especial',{price:30}),
  P('hamburguesas','Mini Pepito','Mini Pepito',{price:35}),
  P('hamburguesas','Pepito Grande','Pepito Grande',{price:60}),

  // ---- PORÇÕES & ENTRADAS ----
  P('porcoes','Frango Frito Crocante (4 un.)','Pollo Frito Crocante (4 pzs)',{descPt:'Estilo Broaster, com batata frita e salada.',descEs:'Estilo Broaster, con papas fritas y ensalada.',price:45}),
  P('porcoes','Frango Frito Crocante (8 un.)','Pollo Frito Crocante (8 pzs)',{price:80}),
  P('porcoes','Frango Frito Crocante (12 un.)','Pollo Frito Crocante (12 pzs)',{price:120}),
  P('porcoes','Frango na Brasa','Pollo en Brasa',{price:60}),
  P('porcoes','Parrilla Mixta','Parrilla Mixta',{descPt:'Com salada, mandioca, bolinhos, batata frita ou arepitas.',descEs:'Con ensalada, yuca, bollitos, papas fritas o arepitas.',variants:[{label:'P',price:45},{label:'M',price:80},{label:'G (familiar)',price:120}]}),
  P('porcoes','Salchipapas','Salchipapas',{variants:[{label:'Pequeña',price:20},{label:'Grande',price:40}]}),
  P('porcoes','Salchimixcarnes','Salchimixcarnes',{descPt:'Carne, frango, salsicha, batata, queijo e molhos.',descEs:'Carne, pollo, salchicha, papas, queso y salsas.',variants:[{label:'P',price:30},{label:'G',price:50}]}),
  P('porcoes','Tequeños Médio (6un)','Tequeños Medio (6un)',{price:18}),
  P('porcoes','Tequeños Grande (15un)','Tequeños Grande (15un)',{price:40}),
  P('porcoes','Tajadas com Queijo','Tajadas con Queso',{price:20}),
  P('porcoes','Mini Pastel (6un)','Mini Pastel (6un)',{price:25}),
  P('porcoes','Mini Pastel (12un)','Mini Pastel (12un)',{price:45}),
  P('porcoes','Batata Frita','Papas Fritas',{variants:[{label:'P',price:10},{label:'G',price:20}]}),
  P('porcoes','Lumpia (2 unidades)','Lumpia (2 unidades)',{price:30}),
  P('porcoes','Chop Suey','Chop Suey',{price:30,needsConfirm:true}),
  P('porcoes','Frango Agridoce','Pollo Agridulce',{price:30,needsConfirm:true}),
  P('porcoes','Costelinhas','Costillitas',{price:30}),
  P('porcoes','Contorno — Arroz','Acompañamiento — Arroz',{price:5}),
  P('porcoes','Contorno — Batata','Acompañamiento — Papas',{price:10}),
  P('porcoes','Contorno — Ovos','Acompañamiento — Huevos',{price:4}),
  P('porcoes','Contorno — Salada Mixta','Acompañamiento — Ensalada Mixta',{price:5}),
  P('porcoes','Contorno — Salada Cozida','Acompañamiento — Ensalada Cocida',{price:8}),
  P('porcoes','Contorno — Salada Ralada','Acompañamiento — Ensalada Rayada',{price:7}),
  P('porcoes','Contorno — Salada César','Acompañamiento — Ensalada César',{price:25,needsConfirm:true}),

  // ---- PRATOS BRASILEIROS ----
  P('pratos','Marmitex — Calabresa com Cebola','Marmitex — Calabresa Encebollada',{price:20}),
  P('pratos','Marmitex — Fígado de Boi','Marmitex — Hígado de Res',{price:20}),
  P('pratos','Marmitex — Filé de Frango','Marmitex — Filete de Pollo',{price:20}),
  P('pratos','Marmitex — Frango Frito','Marmitex — Pollo Frito',{price:20}),
  P('pratos','Feijoada','Feijoada',{variants:[{label:'M',price:40},{label:'G',price:70}]}),
  P('pratos','Parmegiana','Parmegiana',{price:30}),
  P('pratos','Strogonoff','Strogonoff',{price:30}),
  P('pratos','Sopa (aos domingos)','Sopa (los domingos)',{price:30}),

  // ---- SALGADOS ----
  P('salgados','Pastel (Frango/Carne/Pizza)','Pastel (Pollo/Carne/Pizza)',{price:15}),
  P('salgados','Beiru','Beiru',{price:12}),
  P('salgados','Coxinha de Frango','Coxinha de Pollo',{price:6}),
  P('salgados','Quibe','Quibe',{price:6}),
  P('salgados','Risoles','Risoles',{price:6}),

  // ---- POSTRES ----
  P('postres','Morangos com Creme','Fresas con Crema',{price:20,needsConfirm:true}),
  P('postres','Pêssego com Creme','Melocotón con Crema',{price:20,needsConfirm:true}),
  P('postres','Golfeados','Golfeados',{price:20,needsConfirm:true}),
  P('postres','Milhojas','Milhojas',{price:25}),
  P('postres','Iogurte Natural','Yogurt Natural',{price:15,needsConfirm:true}),
  P('postres','Palmeritas','Palmeritas',{price:15,needsConfirm:true}),
  P('postres','Torta de Abacaxi','Torta de Piña',{price:15,needsConfirm:true}),
  P('postres','Quesillo','Quesillo',{variants:[{label:'P',price:10},{label:'G',price:15}]}),
  P('postres','Arroz com Coco','Arroz con Coco',{price:15,needsConfirm:true}),
  P('postres','Majarete','Majarete',{price:15,needsConfirm:true}),
  P('postres','Arroz com Leite','Arroz con Leche',{price:15,needsConfirm:true}),
  P('postres','Salada de Frutas','Ensalada de Frutas',{price:15,needsConfirm:true}),
  P('postres','Tizana','Tizana',{price:20}),
  P('postres','Torta Arequipe','Torta Arequipe',{price:15}),
  P('postres','Torta Três Leches','Torta Tres Leches',{price:20}),

  // ---- BEBIDAS ----
  P('bebidas','Suco — Papelón con Limón','Jugo — Papelón con Limón',{price:12}),
  P('bebidas','Suco — Goiaba','Jugo — Guayaba',{price:10,needsConfirm:true}),
  P('bebidas','Suco — Abacaxi','Jugo — Piña',{price:10,needsConfirm:true}),
  P('bebidas','Suco — Laranja','Jugo — Naranja',{price:10,needsConfirm:true}),
  P('bebidas','Limonada','Limonada',{price:10,needsConfirm:true}),
  P('bebidas','Suco — Maracujá (Parchita)','Jugo — Parchita',{price:12}),
  P('bebidas','Suco — Morango','Jugo — Fresa',{price:15,needsConfirm:true}),
  P('bebidas','Suco — Graviola (Guanábana)','Jugo — Guanábana',{price:15,needsConfirm:true}),
  P('bebidas','Refrigerante Lata (Coca-Cola/Sprite/Fanta)','Refresco en Lata (Cocacola/Sprite/Fanta)',{price:7,needsConfirm:true,descPt:'[CONFIRMAR] Também aparece "P R$5" — possível tamanho pequeno.',descEs:'[CONFIRMAR] También aparece "P R$5" — posible tamaño pequeño.'}),
  P('bebidas','Coca-Cola 2L','Cocacola 2L',{price:20}),
  P('bebidas','Jugo del Valle','Jugo del Valle',{variants:[{label:'Lata',price:7},{label:'1L',price:15}]}),
  P('bebidas','Água Mineral','Agua Mineral',{variants:[{label:'Sem gás',price:4},{label:'Com gás',price:5}]}),
  P('bebidas','Malta Polar','Malta Polar',{price:12}),

  // ---- ALCOOL ----
  P('alcool','Balde Corona (5 un.)','Balde Corona (5 un.)',{descPt:'Unidade avulsa: R$12.',descEs:'Unidad individual: R$12.',price:55}),
  P('alcool','Balde Budweiser (5 un.)','Balde Budweiser (5 un.)',{price:55}),
  P('alcool','Balde Heineken (5 un.)','Balde Heineken (5 un.)',{price:55}),
  P('alcool','Balde Império (8 un.)','Balde Império (8 un.)',{descPt:'Unidade avulsa: R$6.',descEs:'Unidad individual: R$6.',price:45}),
  P('alcool','Balde Brahma Duplo Malte (8 un.)','Balde Brahma Duplo Malte (8 un.)',{price:45}),
  P('alcool','Balde Original (8 un.)','Balde Original (8 un.)',{price:45}),
  P('alcool','Balde Antarctica (8 un.)','Balde Antarctica (8 un.)',{price:45}),
  P('alcool','Balde Skol (8 un.)','Balde Skol (8 un.)',{price:45}),
  P('alcool','Whisky Buchanan\'s (garrafa)','Whisky Buchanan\'s (botella)',{descPt:'Dose individual: R$40.',descEs:'Trago individual: R$40.',price:380}),
  P('alcool','Whisky Red Label (garrafa)','Whisky Red Label (botella)',{descPt:'Dose individual: R$30.',descEs:'Trago individual: R$30.',price:300}),
  P('alcool','Whisky Jack Daniels (garrafa)','Whisky Jack Daniels (botella)',{descPt:'[CONFIRMAR] Preço assumido igual ao Red Label.',descEs:'[CONFIRMAR] Precio asumido igual al Red Label.',price:300,needsConfirm:true}),
  P('alcool','Whisky Old Parr (garrafa)','Whisky Old Parr (botella)',{descPt:'[CONFIRMAR] Preço assumido igual ao Red Label.',descEs:'[CONFIRMAR] Precio asumido igual al Red Label.',price:300,needsConfirm:true}),
  P('alcool','Whisky Passport (garrafa)','Whisky Passport (botella)',{descPt:'Dose individual: R$20.',descEs:'Trago individual: R$20.',price:200}),
  P('alcool','Vinho e Espumantes','Vino y Espumosos',{descPt:'Preços a consultar.',descEs:'Precios a consultar.',price:null}),
];
