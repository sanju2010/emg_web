export interface Product {
  id: string
  nameEn: string
  nameTe: string
  categoryId: string
  categoryNameEn: string
  categoryNameTe: string
  descriptionEn: string
  descriptionTe: string
  image: string
  prices: Partial<Record<'250g' | '500g' | '1kg', number>>
  contactForPrice?: boolean
  ingredientsEn: string
  ingredientsTe: string
  availabilityEn: string
  availabilityTe: string
  packageSizes: string[]
  featured?: boolean
}

export const products: Product[] = [
  // 1. Featured Homemade Mysore Pak
  {
    id: 'mysore-pak',
    nameEn: 'Homemade Ghee Mysore Pak',
    nameTe: 'సాంప్రదాయ నెయ్యి మైసూర్ పాక్',
    categoryId: 'traditional-sweets',
    categoryNameEn: 'Traditional Sweets',
    categoryNameTe: 'సాంప్రదాయ మిఠాయిలు',
    descriptionEn: 'Melt-in-mouth traditional South Indian sweet prepared with freshly sifted besan, aromatic pure cow ghee, and sugar with a classic porous texture.',
    descriptionTe: 'తాజా శనగపిండి, స్వచ్ఛమైన ఆవు నెయ్యి మరియు చక్కెరకు తగిన పాకంతో గుల్లగా నోట్లో కరిగిపోయే అసలైన సాంప్రదాయ మైసూర్ పాక్.',
    image: '/images/mysore-pak.jpeg',
    prices: { '250g': 190, '500g': 380, '1kg': 750 },
    ingredientsEn: 'Pure cow ghee, besan (gram flour), sugar, cardamom.',
    ingredientsTe: 'స్వచ్ఛమైన ఆవు నెయ్యి, శనగపిండి, చక్కెర, యాలకుల పొడి.',
    availabilityEn: 'Made fresh to order in daily batches.',
    availabilityTe: 'ఆర్డర్ మేరకు ప్రతిరోజూ తాజాగా సిద్ధం చేస్తాము.',
    packageSizes: ['250g', '500g', '1kg'],
    featured: true,
  },

  // 2. Traditional Ariselu
  {
    id: 'ariselu',
    nameEn: 'Traditional Nethi Ariselu',
    nameTe: 'సాంప్రదాయ నేతి అరిసెలు',
    categoryId: 'traditional-sweets',
    categoryNameEn: 'Traditional Sweets',
    categoryNameTe: 'సాంప్రదాయ మిఠాయిలు',
    descriptionEn: 'Authentic Andhra & Telangana festive delicacy made of freshly harvested aged rice flour, pure organic jaggery syrup, white sesame, and pure ghee.',
    descriptionTe: 'కొత్త బియ్యపు పిండి, స్వచ్ఛమైన సేంద్రీయ బెల్లం పాకం, తెల్ల నువ్వులు మరియు కమ్మని నెయ్యితో వేయించిన సాంప్రదాయ అరిసెలు.',
    image: '/images/ariselu.jpeg',
    prices: { '250g': 180, '500g': 360, '1kg': 700 },
    ingredientsEn: 'Fresh rice flour, organic jaggery, pure ghee, sesame seeds, cardamom.',
    ingredientsTe: 'తాజా వరిపిండి, ఆర్గానిక్ బెల్లం, స్వచ్ఛమైన నెయ్యి, నువ్వులు, యాలకులు.',
    availabilityEn: 'Fresh festive batches prepared to order.',
    availabilityTe: 'పండుగలు మరియు వేడుకల కోసం ప్రత్యేకంగా సిద్ధం చేస్తాము.',
    packageSizes: ['250g', '500g', '1kg'],
    featured: true,
  },

  // 3. Boondi Laddu
  {
    id: 'boondi-laddu',
    nameEn: 'Traditional Boondi Laddu',
    nameTe: 'సాంప్రదాయ బూందీ లడ్డూ',
    categoryId: 'laddus',
    categoryNameEn: 'Handmade Laddus',
    categoryNameTe: 'చేతితో చేసిన లడ్డూలు',
    descriptionEn: 'Golden beads of freshly prepared boondi bound with aromatic sugar syrup, generously spiked with toasted cashew halves, raisins, and green cardamom.',
    descriptionTe: 'స్వర్ణ వర్ణపు బూందీ, నేతిలో వేయించిన జీడిపప్పు, కిస్‌మిస్ మరియు కమ్మని యాలకుల పరిమళంతో చేతితో చుట్టిన సాంప్రదాయ లడ్డూ.',
    image: '/images/boondi-laddu.jpeg',
    prices: { '250g': 160, '500g': 320, '1kg': 640 },
    ingredientsEn: 'Besan, sugar syrup, cow ghee, roasted cashews, golden raisins, cardamom, edible camphor.',
    ingredientsTe: 'శనగపిండి, చక్కెర పాకం, ఆవు నెయ్యి, వేయించిన జీడిపప్పు, కిస్‌మిస్, యాలకులు, పచ్చకర్పూరం.',
    availabilityEn: 'Available daily, prepared in small batches.',
    availabilityTe: 'రోజూ చిన్న బ్యాచుల్లో తాజాగా లభించును.',
    packageSizes: ['250g', '500g', '1kg'],
    featured: true,
  },

  // 4. Ragi Laddu (from Catelogue)
  {
    id: 'ragi-laddu',
    nameEn: 'Nutritious Ragi Laddu',
    nameTe: 'బలవర్ధకమైన రాగి లడ్డూ',
    categoryId: 'ragi-millet',
    categoryNameEn: 'Ragi & Millet Snacks',
    categoryNameTe: 'రాగి & చిరుధాన్యాల పిండివంటలు',
    descriptionEn: 'Wholesome homemade laddu crafted from slow-roasted finger millet flour, organic jaggery, pure cow ghee, and crushed dry nuts.',
    descriptionTe: 'దోరగా వేయించిన రాగి పిండి, స్వచ్ఛమైన సేంద్రీయ బెల్లం, ఆవు నెయ్యి మరియు డ్రై ఫ్రూట్స్తో చేసిన ఆరోగ్యకరమైన ఇంటి లడ్డూ.',
    image: '/images/ragi-laddu.jpeg',
    prices: { '250g': 150, '500g': 300, '1kg': 600 },
    ingredientsEn: 'Finger millet (ragi) flour, organic jaggery, cow ghee, roasted nuts, cardamom.',
    ingredientsTe: 'రాగి పిండి, సేంద్రీయ బెల్లం, ఆవు నెయ్యి, జీడిపప్పు, బాదం, యాలకులు.',
    availabilityEn: 'Available daily by weight.',
    availabilityTe: 'రోజూ బరువు ప్రకారం సిద్ధంగా ఉండును.',
    packageSizes: ['250g', '500g', '1kg'],
    featured: true,
  },

  // 5. Sunnundalu (from Catelogue)
  {
    id: 'sunnundalu',
    nameEn: 'Traditional Sunnundalu',
    nameTe: 'ఆంధ్రా సాంప్రదాయ సున్నుండలు',
    categoryId: 'laddus',
    categoryNameEn: 'Handmade Laddus',
    categoryNameTe: 'చేతితో చేసిన లడ్డూలు',
    descriptionEn: 'Celebrated Andhra classic made from slow-roasted whole black gram (urad dal), rich organic jaggery/sugar, and flowing pure desi ghee.',
    descriptionTe: 'దోరగా వేయించిన మినపప్పు, స్వచ్ఛమైన బెల్లం/చక్కెర మరియు సువాసనగల దేశీ నెయ్యితో అమ్మ చేతి వంటలా గుండ్రంగా చుట్టిన అమృతపు సున్నుండలు.',
    image: '/images/ragi-laddu.jpeg',
    prices: { '250g': 165, '1kg': 650 },
    ingredientsEn: 'Whole roasted urad dal, jaggery, desi cow ghee, cardamom.',
    ingredientsTe: 'వేయించిన మినపప్పు, బెల్లం, దేశీ ఆవు నెయ్యి, యాలకులు.',
    availabilityEn: 'Fresh batches made every week to order.',
    availabilityTe: 'ప్రతి వారం ఆర్డర్ ప్రకారం తాజాగా తయారుచేస్తాము.',
    packageSizes: ['250g', '1kg'],
    featured: true,
  },

  // 6. Pappu Chekkalu (Chekkalu)
  {
    id: 'chekkalu',
    nameEn: 'Crispy Pappu Chekkalu',
    nameTe: 'కరకరలాడే పప్పు చెక్కలు',
    categoryId: 'chekkalu-crisps',
    categoryNameEn: 'Chekkalu & Crackers',
    categoryNameTe: 'చెక్కలు & కారప్పూస',
    descriptionEn: 'Crisp and crunchy handmade rice crackers studded with soaked chana dal, fresh green curry leaves, ginger, and cumin seeds.',
    descriptionTe: 'నానబెట్టిన పచ్చిశనగపప్పు, కరివేపాకు, అల్లం, జీలకర్రతో దోరగా వేయించిన సంప్రదాయ కరకరలాడే పప్పు చెక్కలు.',
    image: '/images/chekkalu.jpeg',
    prices: { '250g': 140, '500g': 280, '1kg': 560 },
    ingredientsEn: 'Rice flour, soaked Bengal gram (chana dal), green chilies, curry leaves, butter/oil, cumin, salt.',
    ingredientsTe: 'వరిపిండి, పచ్చిశనగపప్పు, పచ్చిమిర్చి, కరివేపాకు, వెన్న/నూనె, జీలకర్ర, ఉప్పు.',
    availabilityEn: 'Prepared fresh in small batches.',
    availabilityTe: 'తాజా బ్యాచుల్లో సిద్ధం చేయబడును.',
    packageSizes: ['250g', '500g', '1kg'],
    featured: true,
  },

  // 8. South Indian Mixture (from Catelogue & Prompt)
  {
    id: 'south-indian-mixture',
    nameEn: 'Royal South Indian Mixture',
    nameTe: 'రాయల్ సౌత్ ఇండియన్ మిక్స్చర్',
    categoryId: 'mixtures-sev',
    categoryNameEn: 'Mixtures & Savoury Sev',
    categoryNameTe: 'మిక్స్చర్ & కారప్పూస',
    descriptionEn: 'The quintessential teatime savoury: a fragrant medley of fine besan sev, crispy boondi, roasted peanuts, roasted gram, and crisp curry leaves.',
    descriptionTe: 'సాయంత్రపు టీ వేళకు సరిపడే రాచరికపు మిక్స్చర్: సన్న కారప్పూస, కారపు బూందీ, వేయించిన పల్లీలు, పుట్నాల పప్పు మరియు కరివేపాకు కలయిక.',
    image: '/images/south-indian-mixture.jpeg',
    prices: { '250g': 140, '500g': 280, '1kg': 560 },
    ingredientsEn: 'Gram flour, rice flour, roasted peanuts, roasted gram, curry leaves, red chili powder, salt, pure spices.',
    ingredientsTe: 'శనగపిండి, వరిపిండి, పల్లీలు,  పుట్నాలు, కరివేపాకు, కారం, ఉప్పు, సుగంధ ద్రవ్యాలు.',
    availabilityEn: 'Always fresh, packed in airtight containers.',
    availabilityTe: 'ఎల్లప్పుడూ తాజాగా గాలి చొరబడని ప్యాకింగ్‌లో లభించును.',
    packageSizes: ['250g', '500g', '1kg'],
    featured: true,
  },

  // 9. Murukulu (from Catelogue)
  {
    id: 'besan-murukulu',
    nameEn: 'Traditional Besan Murukulu',
    nameTe: 'సాంప్రదాయ శనగపిండి మురుకులు',
    categoryId: 'traditional-savouries',
    categoryNameEn: 'Traditional Savouries',
    categoryNameTe: 'సాంప్రదాయ పిండివంటలు',
    descriptionEn: 'Classic spiral South Indian savoury made from seasoned gram flour, butter, and ajwain, fried to crispy golden perfection.',
    descriptionTe: 'శనగపిండి, కమ్మని వెన్న, వాము మరియు జీలకర్రతో గుల్లగా ఉండేలా నూనెలో వేయించిన సాంప్రదాయ మురుకులు.',
    image: '/images/murukulu.jpeg',
    prices: { '250g': 130, '500g': 260, '1kg': 520 },
    ingredientsEn: 'Besan, butter, carom seeds (ajwain), cumin, sesame seeds, salt.',
    ingredientsTe: 'శనగపిండి, వెన్న, వాము, జీలకర్ర, నువ్వులు, ఉప్పు.',
    availabilityEn: 'Available fresh by weight.',
    availabilityTe: 'బరువు ప్రకారం తాజాగా లభించును.',
    packageSizes: ['250g', '500g', '1kg'],
    featured: false,
  },

  // 10. Rice Flour Murukulu (from Catelogue)
  {
    id: 'rice-flour-murukulu',
    nameEn: 'Crispy Rice Flour Murukulu',
    nameTe: 'కమ్మని బియ్యంపిండి మురుకులు',
    categoryId: 'traditional-savouries',
    categoryNameEn: 'Traditional Savouries',
    categoryNameTe: 'సాంప్రదాయ పిండివంటలు',
    descriptionEn: 'Light, crunchy white murukulu made with fine rice flour, roasted gram powder, cumin seeds, and a touch of butter.',
    descriptionTe: 'మెత్తని బియ్యం పిండి, పుట్నాల పొడి, వెన్న మరియు జీలకర్రతో చేసిన ఎంతో గుల్లగా ఉండే తెల్లటి మురుకులు.',
    image: '/images/murukulu.jpeg',
    prices: { '250g': 130, '500g': 260, '1kg': 520 },
    ingredientsEn: 'Rice flour, roasted gram flour, butter, cumin, sesame, salt.',
    ingredientsTe: 'బియ్యం పిండి, పుట్నాల పిండి, వెన్న, జీలకర్ర, నువ్వులు, ఉప్పు.',
    availabilityEn: 'Available fresh by weight.',
    availabilityTe: 'బరువు ప్రకారం తాజాగా లభించును.',
    packageSizes: ['250g', '500g', '1kg'],
    featured: false,
  },

  // 12. Rice Flour Kara (from Catelogue)
  {
    id: 'rice-flour-kara',
    nameEn: 'Spicy Rice Flour Kara',
    nameTe: 'వరిపిండి కారప్పూస',
    categoryId: 'traditional-savouries',
    categoryNameEn: 'Traditional Savouries',
    categoryNameTe: 'సాంప్రదాయ పిండివంటలు',
    descriptionEn: 'Fine spicy sev made from pure rice flour and red chili seasoning, offering a light and crispy kick.',
    descriptionTe: 'బియ్యం పిండి మరియు కారంతో చేసిన సన్నటి కరకరలాడే కారప్పూస.',
    image: '/images/murukulu.jpeg',
    prices: { '250g': 125, '500g': 250, '1kg': 500 },
    ingredientsEn: 'Rice flour, gram flour, red chili powder, cumin, salt.',
    ingredientsTe: 'బియ్యం పిండి, శనగపిండి, కారం పొడి, జీలకర్ర, ఉప్పు.',
    availabilityEn: 'Available fresh by weight.',
    availabilityTe: 'బరువు ప్రకారం తాజాగా లభించును.',
    packageSizes: ['250g', '500g', '1kg'],
    featured: false,
  },

  // 13. Besan Sev (from Catelogue)
  {
    id: 'besan-sev',
    nameEn: 'Crisp Besan Sev',
    nameTe: 'శనగపిండి కారప్పూస',
    categoryId: 'traditional-savouries',
    categoryNameEn: 'Traditional Savouries',
    categoryNameTe: 'సాంప్రదాయ పిండివంటలు',
    descriptionEn: 'Golden, savoury besan noodles seasoned with freshly ground black pepper and ajwain.',
    descriptionTe: 'మిరియాలు మరియు వాము సువాసనతో కూడిన బంగారు వర్ణపు కారప్పూస.',
    image: '/images/south-indian-mixture.jpeg',
    prices: { '250g': 120, '500g': 240, '1kg': 480 },
    ingredientsEn: 'Besan (gram flour), ajwain, turmeric, pepper, salt.',
    ingredientsTe: 'శనగపిండి, వాము, పసుపు, మిరియాలు, ఉప్పు.',
    availabilityEn: 'Available fresh by weight.',
    availabilityTe: 'బరువు ప్రకారం తాజాగా లభించును.',
    packageSizes: ['250g', '500g', '1kg'],
    featured: false,
  },

  // 14. Besan Mixture with Dry Fruits (from Catelogue)
  {
    id: 'besan-mixture-dry-fruits',
    nameEn: 'Rich Dry Fruit Mixture',
    nameTe: 'డ్రై ఫ్రూట్స్ స్పెషల్ మిక్స్చర్',
    categoryId: 'mixtures-sev',
    categoryNameEn: 'Mixtures & Savoury Sev',
    categoryNameTe: 'మిక్స్చర్ & కారప్పూస',
    descriptionEn: 'A luxurious savoury blend loaded with roasted cashews, whole almonds, raisins, fine sev, and curry leaves.',
    descriptionTe: 'వేయించిన జీడిపప్పు, బాదం, కిస్‌మిస్ మరియు కరకరలాడే సన్న కారప్పూసతో కూడిన రాచరికపు స్పెషల్ మిక్స్చర్.',
    image: '/images/south-indian-mixture.jpeg',
    prices: { '250g': 225, '500g': 450, '1kg': 900 },
    ingredientsEn: 'Besan, whole cashews, almonds, raisins, peanuts, curry leaves, spices.',
    ingredientsTe: 'శనగపిండి, జీడిపప్పు, బాదం, కిస్‌మిస్, పల్లీలు, కరివేపాకు, సుగంధ ద్రవ్యాలు.',
    availabilityEn: 'Made to order in small batches.',
    availabilityTe: 'ఆర్డర్ మేరకు ప్రత్యేకంగా తయారుచేయబడును.',
    packageSizes: ['250g', '500g', '1kg'],
    featured: false,
  },

  // 15. Karivepaku Murukulu
  {
    id: 'karivepaku-murukulu',
    nameEn: 'Karivepaku Murukulu',
    nameTe: 'కరివేపాకు మురుకులు',
    categoryId: 'traditional-savouries',
    categoryNameEn: 'Traditional Savouries',
    categoryNameTe: 'సాంప్రదాయ పిండివంటలు',
    descriptionEn: 'Combining karri leaves (curry leaves / karivepaku) and mirchi (green chillies / pacha mirapakaya) creates an incredible aromatic base for South Indian snacks.',
    descriptionTe: 'కరివేపాకు, పచ్చిమిరపకాయల కలయికతో అద్భుతమైన సువాసన మరియు కారంతో చేసిన కరకరలాడే సాంప్రదాయ మురుకులు.',
    image: '/images/carryleaves-murukulu.jpg',
    prices: { '250g': 149, '500g': 279, '1kg': 559 },
    ingredientsEn: 'Rice flour, gram flour, fresh curry leaves (karivepaku), green chillies, butter, cumin, salt.',
    ingredientsTe: 'బియ్యం పిండి, శనగపిండి, తాజా కరివేపాకు, పచ్చిమిర్చి, వెన్న, జీలకర్ర, ఉప్పు.',
    availabilityEn: 'Available fresh by weight.',
    availabilityTe: 'బరువు ప్రకారం తాజాగా లభించును.',
    packageSizes: ['250g', '500g', '1kg'],
    featured: false,
  },

  // 16. Dry Fruit Laddu (from Catelogue)
  {
    id: 'dry-fruit-laddu',
    nameEn: 'Royal Dry Fruit Laddu',
    nameTe: 'రాచరికపు డ్రై ఫ్రూట్ లడ్డూ',
    categoryId: 'laddus',
    categoryNameEn: 'Handmade Laddus',
    categoryNameTe: 'చేతితో చేసిన లడ్డూలు',
    descriptionEn: 'Premium nutrient-dense laddu composed entirely of roasted almonds, cashews, pistachios, dates, and pure cow ghee without added refined sugar.',
    descriptionTe: 'పంచదార లేకుండా కేవలం వేయించిన బాదం, జీడిపప్పు, పిస్తా, ఖర్జూరం మరియు స్వచ్ఛమైన ఆవు నెయ్యితో చేసిన బలవర్ధకమైన లడ్డూ.',
    image: '/images/dry-fruit-laddu.jpeg',
    prices: { '500g': 700, '1kg': 1400 },
    ingredientsEn: 'Almonds, cashews, pistachios, dates, pure cow ghee, cardamom.',
    ingredientsTe: 'బాదం, జీడిపప్పు, పిస్తా, ఖర్జూరం, స్వచ్ఛమైన ఆవు నెయ్యి, యాలకులు.',
    availabilityEn: 'Available in 500g and 1kg packs.',
    availabilityTe: '500 గ్రాములు మరియు 1 కేజీ ప్యాకులలో లభించును.',
    packageSizes: ['500g', '1kg'],
    featured: false,
  },


  // 18. Dry Fruit Laddu with Dates (from Catelogue)
  {
    id: 'dry-fruit-laddu-dates',
    nameEn: 'Dates & Dry Fruit Laddu (Sugar-Free)',
    nameTe: 'ఖర్జూరం డ్రై ఫ్రూట్ లడ్డూ (చక్కెర లేనిది)',
    categoryId: 'laddus',
    categoryNameEn: 'Handmade Laddus',
    categoryNameTe: 'చేతితో చేసిన లడ్డూలు',
    descriptionEn: 'Naturally sweetened with premium soft Arabian dates, stuffed with crunchy walnuts, cashews, and almonds. No added sugar.',
    descriptionTe: 'ఎటువంటి పంచదార లేకుండా ప్రీమియం ఖర్జూరం తీపితో, వాల్‌నట్స్, జీడిపప్పు, బాదంతో చేసిన సహజసిద్ధమైన లడ్డూ.',
    image: '/images/dry-fruit-laddu.jpeg',
    prices: { '250g': 300, '500g': 600, '1kg': 1200 },
    ingredientsEn: 'Premium dates, almonds, cashews, walnuts, cow ghee, cardamom.',
    ingredientsTe: 'ఖర్జూరం, బాదం, జీడిపప్పు, అక్రూట్లు, ఆవు నెయ్యి, యాలకులు.',
    availabilityEn: 'Made fresh upon order.',
    availabilityTe: 'ఆర్డర్ మేరకు తాజాగా తయారుచేయబడును.',
    packageSizes: ['250g', '500g', '1kg'],
    featured: false,
  },

  // 19. Dry Fruit Laddu with Jaggery (from Catelogue)
  {
    id: 'dry-fruit-laddu-jaggery',
    nameEn: 'Jaggery & Dry Fruit Laddu',
    nameTe: 'బెల్లం డ్రై ఫ్రూట్ లడ్డూ',
    categoryId: 'laddus',
    categoryNameEn: 'Handmade Laddus',
    categoryNameTe: 'చేతితో చేసిన లడ్డూలు',
    descriptionEn: 'Traditional jaggery sweetened confection packed with finely minced assorted nuts, poppy seeds, and golden ghee.',
    descriptionTe: 'నాటు బెల్లం పాకంలో వేయించిన డ్రై ఫ్రూట్స్, గసగసాలు మరియు స్వచ్ఛమైన నెయ్యి కలిపి చేసిన సాంప్రదాయ లడ్డూ.',
    image: '/images/dry-fruit-laddu.jpeg',
    prices: { '250g': 325, '500g': 650, '1kg': 1300 },
    ingredientsEn: 'Organic jaggery, mixed dry fruits, poppy seeds, pure ghee, dry ginger powder.',
    ingredientsTe: 'సేంద్రీయ బెల్లం, డ్రై ఫ్రూట్స్, గసగసాలు, ఆవు నెయ్యి, శొంఠి పొడి.',
    availabilityEn: 'Available by weight upon order.',
    availabilityTe: 'ఆర్డర్ ప్రకారం బరువుతో లభించును.',
    packageSizes: ['250g', '500g', '1kg'],
    featured: false,
  },

  // 20. Coconut Laddu (Prompt)
  {
    id: 'coconut-laddu',
    nameEn: 'Homemade Kobbari Laddu',
    nameTe: 'సాంప్రదాయ కొబ్బరి లడ్డూ',
    categoryId: 'traditional-sweets',
    categoryNameEn: 'Traditional Sweets',
    categoryNameTe: 'సాంప్రదాయ మిఠాయిలు',
    descriptionEn: 'Soft, moist spheres of fresh grated coconut gently cooked in jaggery/sugar syrup, perfumed with cardamom and cashews.',
    descriptionTe: 'తాజా పచ్చికొబ్బరి తురుము, బెల్లం పాకం, కమ్మని నెయ్యి మరియు యాలకుల సువాసనతో చేసిన మధురమైన కొబ్బరి లడ్డూ.',
    image: '/images/kobbari-laddulu.jpg',
    prices: { '250g': 140, '500g': 280, '1kg': 560 },
    ingredientsEn: 'Fresh coconut, jaggery, cow ghee, roasted cashews, cardamom.',
    ingredientsTe: 'తాజా కొబ్బరి తురుము, బెల్లం, ఆవు నెయ్యి, జీడిపప్పు, యాలకులు.',
    availabilityEn: 'Prepared fresh to order.',
    availabilityTe: 'ఆర్డర్ మేరకు తాజాగా తయారుచేయబడును.',
    packageSizes: ['250g', '500g', '1kg'],
    featured: false,
  },

  // 21. Festive Sweet Assortment Box (Prompt)
  {
    id: 'festive-box',
    nameEn: 'Grand Festive Celebration Box',
    nameTe: 'పండుగ స్పెషల్ సెలబ్రేషన్ బాక్స్',
    categoryId: 'festival-specials',
    categoryNameEn: 'Festival Specials',
    categoryNameTe: 'పండుగ ప్రత్యేకాలు',
    descriptionEn: 'A curated festival thali box containing Mysore Pak, Ariselu, Boondi Laddu, Sunnundalu, and crispy Murukulu, elegantly packed for celebrations.',
    descriptionTe: 'మైసూర్ పాక్, అరిసెలు, బూందీ లడ్డూ, సున్నుండలు మరియు కరకరలాడే మురుకులతో కూడిన అందమైన పండుగ గిఫ్ట్ బాక్స్.',
    image: '/images/festive-gifting.jpeg',
    prices: { '500g': 450, '1kg': 850 },
    ingredientsEn: 'Assorted homemade sweets and savouries made with pure ghee and wholesome flours.',
    ingredientsTe: 'స్వచ్ఛమైన నెయ్యితో చేసిన వివిధ రకాల ఇంటి మిఠాయిలు మరియు పిండివంటలు.',
    availabilityEn: 'Special packaging available for festivals & events.',
    availabilityTe: 'పండుగలు మరియు శుభకార్యాల కోసం ప్రత్యేక గిఫ్ట్ ప్యాకింగ్ అందుబాటులో ఉండును.',
    packageSizes: ['500g', '1kg'],
    featured: true,
  },
]
