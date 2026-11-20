export interface Testimonial {
  id: string
  nameEn: string
  nameTe: string
  locationEn: string
  locationTe: string
  occasionEn: string
  occasionTe: string
  quoteEn: string
  quoteTe: string
  rating: number
  isSamplePlaceholder: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    nameEn: 'Lakshmi N. (Sample Placeholder)',
    nameTe: 'లక్ష్మి ఎన్. (నమూనా సమీక్ష)',
    locationEn: 'Hyderabad',
    locationTe: 'హైదరాబాద్',
    occasionEn: 'Diwali Festival Order',
    occasionTe: 'దీపావళి పండుగ ఆర్డర్',
    quoteEn: 'The Mysore Pak and Ariselu tasted just like how my grandmother used to make them in our village. Every piece was fresh, aromatic, and not overly sweet. Ordering on WhatsApp was effortless.',
    quoteTe: 'మైసూర్ పాక్ మరియు అరిసెలు మా అమ్మమ్మ ఇంట్లో చేసినట్లే స్వచ్ఛమైన నెయ్యి రుచితో ఎంతో బాగున్నాయి. వాట్సాప్‌లో ఆర్డర్ చేయడం చాలా సులభంగా జరిగింది.',
    rating: 5,
    isSamplePlaceholder: true,
  },
  {
    id: 't-2',
    nameEn: 'Rajesh V. (Sample Placeholder)',
    nameTe: 'రాజేష్ వి. (నమూనా సమీక్ష)',
    locationEn: 'Bengaluru',
    locationTe: 'బెంగళూరు',
    occasionEn: 'Family Function & Bulk Order',
    occasionTe: 'కుటుంబ వేడుక బల్క్ ఆర్డర్',
    quoteEn: 'We ordered 15kg of mixed sweets and murukulu for a family get-together. The packaging was immaculate and guests specifically asked where we ordered from. Truly authentic homemade goodness.',
    quoteTe: 'మా కుటుంబ వేడుక కోసం 15 కేజీల స్వీట్లు, మురుకులు ఆర్డర్ చేశాము. ప్యాకింగ్ చాలా బాగుంది, బంధువులందరూ రుచిని ఎంతో మెచ్చుకున్నారు.',
    rating: 5,
    isSamplePlaceholder: true,
  },
  {
    id: 't-3',
    nameEn: 'Swapna K. (Sample Placeholder)',
    nameTe: 'స్వప్న కె. (నమూనా సమీక్ష)',
    locationEn: 'Vijayawada',
    locationTe: 'విజయవాడ',
    occasionEn: 'Weekend Teatime & Laddus',
    occasionTe: 'సాయంత్రం స్నాక్స్ & లడ్డూలు',
    quoteEn: 'Finding authentic ragi laddus and crisp chekkalu made with good oil and ghee is rare. You can immediately feel the quality and homemade care in every single bite.',
    quoteTe: 'మంచి నెయ్యి మరియు నాణ్యమైన నూనెతో చేసిన రాగి లడ్డూలు, పప్పు చెక్కలు దొరకడం చాలా అరుదు. ప్రతి ముద్దలోనూ ఇంటివద్ద చేసిన స్వచ్ఛత తెలుస్తుంది.',
    rating: 5,
    isSamplePlaceholder: true,
  },
]
