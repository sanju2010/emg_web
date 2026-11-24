export interface ProductCategory {
  id: string
  nameEn: string
  nameTe: string
  shortDescEn: string
  shortDescTe: string
  image: string
  group: 'sweets' | 'snacks' | 'millets' | 'podis' | 'pickles' | 'catering'
  featured?: boolean
}

export const categories: ProductCategory[] = [
  {
    id: 'traditional-sweets',
    nameEn: 'Traditional Sweets',
    nameTe: 'సాంప్రదాయ మిఠాయిలు',
    shortDescEn: 'Heritage recipes with pure cow ghee, jaggery, and time-honoured techniques.',
    shortDescTe: 'స్వచ్ఛమైన ఆవు నెయ్యి, బెల్లం మరియు సాంప్రదాయ పద్ధతులతో చేసిన మిఠాయిలు.',
    image: '/images/mysore-pak.jpeg',
    group: 'sweets',
    featured: true,
  },
  {
    id: 'laddus',
    nameEn: 'Handmade Laddus',
    nameTe: 'చేతితో చేసిన లడ్డూలు',
    shortDescEn: 'Aromatic Boondi, Sunnundalu, Ragi, and wholesome Dry Fruit laddus.',
    shortDescTe: 'సువాసనాభరిత బూందీ, సున్నుండలు, రాగి మరియు బలవర్ధకమైన డ్రై ఫ్రూట్ లడ్డూలు.',
    image: '/images/boondi-laddu.jpeg',
    group: 'sweets',
    featured: true,
  },
  {
    id: 'ragi-millet',
    nameEn: 'Ragi & Millet Snacks',
    nameTe: 'రాగి & చిరుధాన్యాల పిండివంటలు',
    shortDescEn: 'Wholesome South Indian snacks made with nutrient-rich finger millet.',
    shortDescTe: 'పోషకాలతో కూడిన రాగులతో ఇంటివద్ద ప్రేమతో చేసిన రుచికరమైన స్నాక్స్.',
    image: '/images/ragi-laddu.jpeg',
    group: 'millets',
    featured: true,
  },
  {
    id: 'traditional-savouries',
    nameEn: 'Traditional Savouries',
    nameTe: 'సాంప్రదాయ పిండివంటలు',
    shortDescEn: 'Crunchy murukulu, savoury chekkalu, and aromatic besan mixtures.',
    shortDescTe: 'కరకరలాడే మురుకులు, కమ్మని చెక్కలు మరియు మసాలా మిక్స్చర్లు.',
    image: '/images/murukulu.jpeg',
    group: 'snacks',
    featured: true,
  },
  {
    id: 'chekkalu-crisps',
    nameEn: 'Chekkalu & Crackers',
    nameTe: 'చెక్కలు & కారప్పూస',
    shortDescEn: 'Crispy Pappu Chekkalu with soaked chana dal and fresh curry leaves.',
    shortDescTe: 'నానబెట్టిన పచ్చిశనగపప్పు, కరివేపాకుతో గుల్లగా ఉండే పప్పు చెక్కలు.',
    image: '/images/chekkalu.jpeg',
    group: 'snacks',
    featured: true,
  },
  {
    id: 'mixtures-sev',
    nameEn: 'Mixtures & Savoury Sev',
    nameTe: 'మిక్స్చర్ & కారప్పూస',
    shortDescEn: 'Crunchy golden mixtures with roasted peanuts, cashews, and spices.',
    shortDescTe: 'పల్లీలు, జీడిపప్పు, కరివేపాకుతో కూడిన ఘుమఘుమలాడే మిక్స్చర్లు.',
    image: '/images/south-indian-mixture.jpeg',
    group: 'snacks',
    featured: true,
  },
  {
    id: 'karam-podis',
    nameEn: 'Karam Podis & Masalas',
    nameTe: 'కారం పొడులు & మసాలాలు',
    shortDescEn: 'Aromatic, hand-pounded authentic spice powders and herbal podis made with pure spices.',
    shortDescTe: 'స్వచ్ఛమైన దినుసులతో రోట్లో దంచిన ఘుమఘుమలాడే సాంప్రదాయ కారం పొడులు మరియు మసాలాలు.',
    image: '/images/karam-podi.jpeg',
    group: 'podis',
    featured: true,
  },
  {
    id: 'pickles',
    nameEn: 'Traditional Pickles & Pastes',
    nameTe: 'సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు',
    shortDescEn: 'Heritage Andhra Avakaya, seasonal veg & non-veg pickles, and temple-style pulihora pastes.',
    shortDescTe: 'కమ్మని ఆవకాయ, ఘాటైన వెజ్ & నాన్-వెజ్ నిల్వ పచ్చళ్ళు మరియు రుచికరమైన పులిహోర పేస్ట్‌లు.',
    image: '/images/avakaya-pickle.jpeg',
    group: 'pickles',
    featured: true,
  },
  {
    id: 'festival-specials',
    nameEn: 'Festival Specials',
    nameTe: 'పండుగ ప్రత్యేకాలు',
    shortDescEn: 'Celebratory assortments for Diwali, Sankranti, Ugadi, and special events.',
    shortDescTe: 'దీపావళి, సంక్రాంతి, ఉగాది మరియు శుభకార్యాల కోసం ప్రత్యేక ప్యాకులు.',
    image: '/images/hero-assortment.jpeg',
    group: 'sweets',
    featured: true,
  },
  {
    id: 'catering',
    nameEn: 'Catering & Feasts',
    nameTe: 'కేటరింగ్ & విందు భోజనాలు',
    shortDescEn: 'Authentic South Indian vegetarian and non-vegetarian catering for festive celebrations.',
    shortDescTe: 'శుభకార్యాలు, పండుగలకు స్వచ్ఛమైన సాంప్రదాయ శాకాహార మరియు మాంసాహార కేటరింగ్ సర్వీసెస్.',
    image: '/images/hero-assortment.jpeg',
    group: 'catering',
    featured: false,
  },
]
