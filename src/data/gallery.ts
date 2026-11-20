export interface GalleryItem {
  id: string
  titleEn: string
  titleTe: string
  category: 'sweets' | 'snacks' | 'kitchen' | 'festive' | 'packaging'
  categoryLabelEn: string
  categoryLabelTe: string
  descriptionEn: string
  descriptionTe: string
  image: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'g-hero-assortment',
    titleEn: 'Grand South Indian Festive Platter',
    titleTe: 'ఘనమైన పండుగ థాలీ వంటకాలు',
    category: 'festive',
    categoryLabelEn: 'Festive Platter',
    categoryLabelTe: 'పండుగ థాలీ',
    descriptionEn: 'An artisanal assortment of Mysore Pak, Boondi Laddu, Ariselu, and crisp savouries on a traditional banana leaf brass thali.',
    descriptionTe: 'అరటి ఆకు వేసిన ఇత్తడి పళ్లెంలో మైసూర్ పాక్, బూందీ లడ్డూ, అరిసెలు మరియు మురుకుల సుందర దృశ్యం.',
    image: '/images/hero-assortment.jpeg',
  },
  {
    id: 'g-mysore-pak',
    titleEn: 'Golden Ghee Mysore Pak',
    titleTe: 'స్వర్ణ వర్ణపు నేతి మైసూర్ పాక్',
    category: 'sweets',
    categoryLabelEn: 'Sweets',
    categoryLabelTe: 'మిఠాయిలు',
    descriptionEn: 'Melt-in-mouth texture with classic porous crumb, made from pure cow ghee and fragrant gram flour.',
    descriptionTe: 'స్వచ్ఛమైన ఆవు నెయ్యితో గుల్లగా చేసిన అమృతపు మైసూర్ పాక్ ముక్కలు.',
    image: '/images/mysore-pak.jpeg',
  },
  {
    id: 'g-boondi-laddu',
    titleEn: 'Aromatic Boondi Laddus',
    titleTe: 'కమ్మని బూందీ లడ్డూలు',
    category: 'sweets',
    categoryLabelEn: 'Sweets & Laddus',
    categoryLabelTe: 'లడ్డూలు',
    descriptionEn: 'Hand-rolled golden boondi pearls studded with plump raisins, roasted cashews, and aromatic cardamom.',
    descriptionTe: 'జీడిపప్పు, కిస్‌మిస్ మరియు యాలకుల సువాసనతో చేతితో చుట్టిన బూందీ లడ్డూలు.',
    image: '/images/boondi-laddu.jpeg',
  },
  {
    id: 'g-ariselu',
    titleEn: 'Traditional Jaggery & Sesame Ariselu',
    titleTe: 'బెల్లం & నువ్వుల సాంప్రదాయ అరిసెలు',
    category: 'sweets',
    categoryLabelEn: 'Sweets',
    categoryLabelTe: 'మిఠాయిలు',
    descriptionEn: 'Golden brown festival ariselu prepared with freshly harvested rice flour and organic jaggery.',
    descriptionTe: 'కొత్త బియ్యపు పిండి, సేంద్రీయ బెల్లం పాకంతో చేసిన కమ్మని సంక్రాంతి అరిసెలు.',
    image: '/images/ariselu.jpeg',
  },
  {
    id: 'g-chekkalu',
    titleEn: 'Crisp Pappu Chekkalu',
    titleTe: 'కరకరలాడే పప్పు చెక్కలు',
    category: 'snacks',
    categoryLabelEn: 'Crisp Savouries',
    categoryLabelTe: 'స్నాక్స్',
    descriptionEn: 'Artisanal rice crackers with soaked chana dal and fresh curry leaves, stacked in a bamboo basket.',
    descriptionTe: 'వెదురు బుట్టలో నానబెట్టిన శనగపప్పు, కరివేపాకుతో చేసిన కరకరలాడే పప్పు చెక్కలు.',
    image: '/images/chekkalu.jpeg',
  },
  {
    id: 'g-mixture',
    titleEn: 'Royal South Indian Mixture',
    titleTe: 'రాయల్ సౌత్ ఇండియన్ మిక్స్చర్',
    category: 'snacks',
    categoryLabelEn: 'Crisp Savouries',
    categoryLabelTe: 'స్నాక్స్',
    descriptionEn: 'Fine golden besan sev, crispy boondi, roasted peanuts, cashews, and fresh curry leaves.',
    descriptionTe: 'పల్లీలు, జీడిపప్పు, కరివేపాకుతో కూడిన ఘుమఘుమలాడే సాయంత్రపు మిక్స్చర్.',
    image: '/images/south-indian-mixture.jpeg',
  },
  {
    id: 'g-kitchen-prep',
    titleEn: 'Traditional Brass Uruli Sweet Crafting',
    titleTe: 'ఇత్తడి పాత్రలో సంప్రదాయ తయారీ విధానం',
    category: 'kitchen',
    categoryLabelEn: 'Kitchen & Craft',
    categoryLabelTe: 'తయారీ విధానం',
    descriptionEn: 'Pure golden ghee poured into a traditional heavy brass uruli vessel, slow-cooking rich roasted gram flour.',
    descriptionTe: 'సాంప్రదాయ వంటింట్లో స్వచ్ఛమైన ఆవు నెయ్యితో చిన్న బ్యాచుల్లో ఓర్పుతో చేసే తయారీ విధానం.',
    image: '/images/kitchen-prep.jpeg',
  },
  {
    id: 'g-packaging',
    titleEn: 'Eco-Friendly Festive Gift Hampers',
    titleTe: 'పండుగ గిఫ్ట్ బాక్సులు & ప్యాకింగ్',
    category: 'packaging',
    categoryLabelEn: 'Gifting & Packaging',
    categoryLabelTe: 'గిఫ్టింగ్ & ప్యాకింగ్',
    descriptionEn: 'Artisanal kraft gift boxes tied with natural jute string, prepared for weddings, festivals, and gifting.',
    descriptionTe: 'పండుగలు మరియు శుభకార్యాల కోసం సహజసిద్ధమైన తాళ్లతో కట్టిన పర్యావరణ హితమైన గిఫ్ట్ బాక్సులు.',
    image: '/images/festive-gifting.jpeg',
  },
  {
    id: 'g-ragi-laddu',
    titleEn: 'Wholesome Ragi Laddus',
    titleTe: 'పోషకభరిత రాగి లడ్డూలు',
    category: 'sweets',
    categoryLabelEn: 'Sweets & Laddus',
    categoryLabelTe: 'లడ్డూలు',
    descriptionEn: 'Slow-roasted finger millet with organic jaggery and crushed dry fruit nuts.',
    descriptionTe: 'చిరుధాన్యాల ఆరోగ్యంతో కూడిన సాంప్రదాయ రాగి లడ్డూలు.',
    image: '/images/ragi-laddu.jpeg',
  },
  {
    id: 'g-murukulu',
    titleEn: 'Hand-Pressed Murukulu Spirals',
    titleTe: 'చేతితో ఒత్తిన కమ్మని మురుకులు',
    category: 'snacks',
    categoryLabelEn: 'Crisp Savouries',
    categoryLabelTe: 'స్నాక్స్',
    descriptionEn: 'Flaky golden spirals seasoned with ajwain and cumin, fried in small batches.',
    descriptionTe: 'వాము, జీలకర్రతో కమ్మగా ఉండేలా తాజా నూనెలో వేయించిన మురుకులు.',
    image: '/images/murukulu.jpeg',
  },
]
