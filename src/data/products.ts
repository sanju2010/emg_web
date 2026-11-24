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
  {
    "id": "mysore-pak",
    "nameEn": "Homemade Ghee Mysore Pak",
    "nameTe": "సాంప్రదాయ నెయ్యి మైసూర్ పాక్",
    "categoryId": "traditional-sweets",
    "categoryNameEn": "Traditional Sweets",
    "categoryNameTe": "సాంప్రదాయ మిఠాయిలు",
    "descriptionEn": "Melt-in-mouth traditional South Indian sweet prepared with freshly sifted besan, aromatic pure cow ghee, and sugar with a classic porous texture.",
    "descriptionTe": "తాజా శనగపిండి, స్వచ్ఛమైన ఆవు నెయ్యి మరియు చక్కెరకు తగిన పాకంతో గుల్లగా నోట్లో కరిగిపోయే అసలైన సాంప్రదాయ మైసూర్ పాక్.",
    "image": "/images/mysore-pak.jpeg",
    "prices": {
      "250g": 190,
      "500g": 380,
      "1kg": 750
    },
    "ingredientsEn": "Pure cow ghee, besan (gram flour), sugar, cardamom.",
    "ingredientsTe": "స్వచ్ఛమైన ఆవు నెయ్యి, శనగపిండి, చక్కెర, యాలకుల పొడి.",
    "availabilityEn": "Made fresh to order in daily batches.",
    "availabilityTe": "ఆర్డర్ మేరకు ప్రతిరోజూ తాజాగా సిద్ధం చేస్తాము.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "ariselu",
    "nameEn": "Traditional Pure Ghee Ariselu (Nethi Ariselu)",
    "nameTe": "సాంప్రదాయ నేతి అరిసెలు",
    "categoryId": "traditional-sweets",
    "categoryNameEn": "Traditional Sweets",
    "categoryNameTe": "సాంప్రదాయ మిఠాయిలు",
    "descriptionEn": "Authentic Andhra festive delicacy made of freshly harvested aged rice flour, pure organic jaggery syrup, white sesame, and pure cow ghee.",
    "descriptionTe": "కొత్త బియ్యం పిండి, సేంద్రీయ బెల్లం పాకం, తెల్ల నువ్వులు మరియు స్వచ్ఛమైన ఆవు నెయ్యితో చేసిన సాంప్రదాయ పండుగ నేతి అరిసెలు.",
    "image": "/images/ariselu.jpeg",
    "prices": {
      "250g": 199,
      "500g": 379,
      "1kg": 729
    },
    "ingredientsEn": "Raw rice flour, organic jaggery, pure cow ghee, sesame seeds, cardamom.",
    "ingredientsTe": "వరిపిండి, సేంద్రీయ బెల్లం, స్వచ్ఛమైన ఆవు నెయ్యి, నువ్వులు, యాలకులు.",
    "availabilityEn": "Freshly prepared to order.",
    "availabilityTe": "ఆర్డర్ మేరకు తాజాగా తయారుచేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "plain-ariselu",
    "nameEn": "Traditional Plain Bellam Ariselu",
    "nameTe": "సాంప్రదాయ సాదా బెల్లం అరిసెలు",
    "categoryId": "traditional-sweets",
    "categoryNameEn": "Traditional Sweets",
    "categoryNameTe": "సాంప్రదాయ మిఠాయిలు",
    "descriptionEn": "Classic Andhra festive sweet made from soaked rice flour, country jaggery syrup, and aromatic cardamom.",
    "descriptionTe": "తడి బియ్యపు పిండి మరియు నాటు బెల్లం పాకంతో నూనెలో వేయించిన సాంప్రదాయ కమ్మని అరిసెలు.",
    "image": "/images/ariselu.jpeg",
    "prices": {
      "250g": 159,
      "500g": 299,
      "1kg": 579
    },
    "ingredientsEn": "Aged rice flour, organic jaggery, sunflower oil, cardamom.",
    "ingredientsTe": "వరిపిండి, సేంద్రీయ బెల్లం, నూనె, యాలకులు.",
    "availabilityEn": "Available fresh to order.",
    "availabilityTe": "ఆర్డర్ మేరకు సిద్ధం చేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "sesame-ariselu",
    "nameEn": "Sesame Seeds Nuvvula Ariselu",
    "nameTe": "నువ్వుల అరిసెలు",
    "categoryId": "traditional-sweets",
    "categoryNameEn": "Traditional Sweets",
    "categoryNameTe": "సాంప్రదాయ మిఠాయిలు",
    "descriptionEn": "Soft and chewy jaggery ariselu generously crusted with toasted white sesame seeds for rich nutty crunch.",
    "descriptionTe": "కమ్మని బెల్లం అరిసెలపై పుష్కలంగా తెల్ల నువ్వులు అద్ది చేసిన ఎంతో రుచికరమైన నువ్వుల అరిసెలు.",
    "image": "/images/ariselu.jpeg",
    "prices": {
      "250g": 169,
      "500g": 319,
      "1kg": 589
    },
    "ingredientsEn": "Rice flour, organic jaggery, white sesame seeds, ghee, cardamom.",
    "ingredientsTe": "వరిపిండి, సేంద్రీయ బెల్లం, తెల్ల నువ్వులు, నెయ్యి, యాలకులు.",
    "availabilityEn": "Available daily upon order.",
    "availabilityTe": "ఆర్డర్ మేరకు రోజూ లభించును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "bobbatlu-plain",
    "nameEn": "Traditional Bakshalu (Bobbatlu / Puran Poli)",
    "nameTe": "సాంప్రదాయ బక్షాలు (బొబ్బట్లు)",
    "categoryId": "traditional-sweets",
    "categoryNameEn": "Traditional Sweets",
    "categoryNameTe": "సాంప్రదాయ మిఠాయిలు",
    "descriptionEn": "Delicate, golden homemade sweet flatbreads filled with a melt-in-mouth puran of cooked chana dal, jaggery, and cardamom.",
    "descriptionTe": "శనగపప్పు, బెల్లం మరియు యాలకుల పూర్ణంతో నేర్పుగా చేసిన సాంప్రదాయ పండుగ బక్షాలు (బొబ్బట్లు).",
    "image": "/images/bobbatlu.jpeg",
    "prices": {
      "250g": 149,
      "500g": 279,
      "1kg": 529
    },
    "ingredientsEn": "Chana dal, jaggery, maida/wheat flour, cardamom, sunflower oil.",
    "ingredientsTe": "పచ్చి శనగపప్పు, బెల్లం, మైదా/గోధుమ పిండి, యాలకులు, నూనె.",
    "availabilityEn": "Made fresh daily upon order.",
    "availabilityTe": "ఆర్డర్ మేరకు రోజూ తాజాగా తయారుచేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "bobbatlu-ghee",
    "nameEn": "Pure Ghee Nethi Bakshalu (Bobbatlu)",
    "nameTe": "స్వచ్ఛమైన నేతి బక్షాలు (నేతి బొబ్బట్లు)",
    "categoryId": "traditional-sweets",
    "categoryNameEn": "Traditional Sweets",
    "categoryNameTe": "సాంప్రదాయ మిఠాయిలు",
    "descriptionEn": "Luxurious soft sweet flatbreads prepared and roasted with liberal amounts of pure cow ghee for authentic festive aroma.",
    "descriptionTe": "స్వచ్ఛమైన ఆవు నెయ్యితో కాల్చిన కమ్మని పూర్ణం బక్షాలు, ప్రతి ముద్దలో నోట్లో కరిగిపోయే అమృతం.",
    "image": "/images/bobbatlu.jpeg",
    "prices": {
      "250g": 199,
      "500g": 379,
      "1kg": 729
    },
    "ingredientsEn": "Chana dal, jaggery, wheat flour, pure desi cow ghee, cardamom.",
    "ingredientsTe": "శనగపప్పు, సేంద్రీయ బెల్లం, గోధుమపిండి, దేశీ ఆవు నెయ్యి, యాలకులు.",
    "availabilityEn": "Prepared fresh to order.",
    "availabilityTe": "ఆర్డర్ మేరకు తాజాగా తయారుచేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "kajjikayalu-sugar",
    "nameEn": "Crispy Sugar Kajjikayalu (Karanji)",
    "nameTe": "కమ్మని చక్కర కజ్జికాయలు",
    "categoryId": "traditional-sweets",
    "categoryNameEn": "Traditional Sweets",
    "categoryNameTe": "సాంప్రదాయ మిఠాయిలు",
    "descriptionEn": "Golden crisp crescent pastries filled with roasted suji, dry grated coconut, sugar, roasted cashews, and fragrant cardamom.",
    "descriptionTe": "వేయించిన సుజీ రవ్వ, కొబ్బరి పొడి, చక్కెర, జీడిపప్పు మరియు యాలకుల సువాసనతో నింపిన కరకరలాడే కజ్జికాయలు.",
    "image": "/images/kajjikayalu.jpeg",
    "prices": {
      "250g": 149,
      "500g": 279,
      "1kg": 529
    },
    "ingredientsEn": "Flour, semolina (suji), dry coconut, sugar, ghee, cashews, cardamom.",
    "ingredientsTe": "మైదా, బొంబాయి రవ్వ, ఎండు కొబ్బరి, చక్కెర, నెయ్యి, జీడిపప్పు, యాలకులు.",
    "availabilityEn": "Made fresh to order.",
    "availabilityTe": "ఆర్డర్ మేరకు తాజాగా సిద్ధం చేస్తాము.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "kajjikayalu-seeds-nuts",
    "nameEn": "Royal Dry Fruit & Seeds Kajjikayalu",
    "nameTe": "డ్రై ఫ్రూట్స్ & సీడ్స్ స్పెషల్ కజ్జికాయలు",
    "categoryId": "traditional-sweets",
    "categoryNameEn": "Traditional Sweets",
    "categoryNameTe": "సాంప్రదాయ మిఠాయిలు",
    "descriptionEn": "Premium crescent sweets stuffed with crunchy roasted almonds, cashews, melon seeds, poppy seeds, and golden dry fruits.",
    "descriptionTe": "వేయించిన బాదం, జీడిపప్పు, పుచ్చగింజలు, గసగసాలు మరియు డ్రై ఫ్రూట్స్తో నిండిన రాచరికపు పోషకభరిత కజ్జికాయలు.",
    "image": "/images/kajjikayalu.jpeg",
    "prices": {
      "250g": 249,
      "500g": 479,
      "1kg": 929
    },
    "ingredientsEn": "Flour, roasted almonds, cashews, pistachios, melon seeds, poppy seeds, jaggery/sugar, ghee.",
    "ingredientsTe": "మైదా, బాదం, జీడిపప్పు, పిస్తా, పుచ్చగింజలు, గసగసాలు, బెల్లం/చక్కెర, ఆవు నెయ్యి.",
    "availabilityEn": "Special batch prepared upon order.",
    "availabilityTe": "ఆర్డర్ మేరకు ప్రత్యేకంగా తయారుచేస్తాము.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "kajjikayalu-jaggery",
    "nameEn": "Traditional Jaggery Bellam Kajjikayalu",
    "nameTe": "సాంప్రదాయ బెల్లం కజ్జికాయలు",
    "categoryId": "traditional-sweets",
    "categoryNameEn": "Traditional Sweets",
    "categoryNameTe": "సాంప్రదాయ మిఠాయిలు",
    "descriptionEn": "Authentic crispy crescents stuffed with natural jaggery, toasted sesame, roasted gram powder, and grated coconut.",
    "descriptionTe": "సేంద్రీయ బెల్లం, నువ్వులు, పుట్నాల పప్పు పొడి మరియు కొబ్బరితో చేసిన ఆరోగ్యకరమైన సాంప్రదాయ కజ్జికాయలు.",
    "image": "/images/kajjikayalu.jpeg",
    "prices": {
      "250g": 179,
      "500g": 339,
      "1kg": 649
    },
    "ingredientsEn": "Wheat flour, organic jaggery, roasted gram, sesame seeds, coconut, ghee, cardamom.",
    "ingredientsTe": "గోధుమ పిండి, సేంద్రీయ బెల్లం, పుట్నాల పప్పు, నువ్వులు, కొబ్బరి, నెయ్యి, యాలకులు.",
    "availabilityEn": "Available fresh by order.",
    "availabilityTe": "ఆర్డర్ ప్రకారం తాజాగా లభించును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "gavvalu-sugar",
    "nameEn": "Sweet Sugar Gavvalu",
    "nameTe": "కమ్మని చక్కెర గవ్వలు",
    "categoryId": "traditional-sweets",
    "categoryNameEn": "Traditional Sweets",
    "categoryNameTe": "సాంప్రదాయ మిఠాయిలు",
    "descriptionEn": "Crispy shell-shaped fried bites made from semolina dough, dipped in fragrant cardamom-infused sugar syrup.",
    "descriptionTe": "బొంబాయి రవ్వతో గుల్లగా చేసిన గవ్వలను యాలకుల చక్కర పాకంలో ముంచి తీసిన కమ్మని మిఠాయి.",
    "image": "/images/gavvalu.jpeg",
    "prices": {
      "250g": 129,
      "500g": 239,
      "1kg": 449
    },
    "ingredientsEn": "Maida, semolina (rava), sugar, ghee, cardamom.",
    "ingredientsTe": "మైదా, బొంబాయి రవ్వ, చక్కెర, నెయ్యి, యాలకులు.",
    "availabilityEn": "Available daily.",
    "availabilityTe": "రోజూ సిద్ధంగా ఉండును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "gavvalu-bellam",
    "nameEn": "Traditional Jaggery Bellam Gavvalu",
    "nameTe": "సాంప్రదాయ బెల్లం గవ్వలు",
    "categoryId": "traditional-sweets",
    "categoryNameEn": "Traditional Sweets",
    "categoryNameTe": "సాంప్రదాయ మిఠాయిలు",
    "descriptionEn": "Time-tested shell sweets rolled on wooden boards and coated in luscious, sticky organic jaggery syrup with a touch of ghee.",
    "descriptionTe": "చెక్క గవ్వల బల్లపై వత్తిన కరకరలాడే గవ్వలకు జిగురు బెల్లం పాకం పట్టించిన అసలైన ఇంటి రుచి.",
    "image": "/images/gavvalu.jpeg",
    "prices": {
      "250g": 149,
      "500g": 279,
      "1kg": 529
    },
    "ingredientsEn": "Semolina, organic jaggery, pure ghee, cardamom, oil.",
    "ingredientsTe": "రవ్వ, సేంద్రీయ బెల్లం, స్వచ్ఛమైన నెయ్యి, యాలకులు, నూనె.",
    "availabilityEn": "Prepared fresh to order.",
    "availabilityTe": "ఆర్డర్ మేరకు తాజాగా తయారుచేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "gavvalu-karam",
    "nameEn": "Crispy Spicy Karam Gavvalu",
    "nameTe": "కరకరలాడే కారం గవ్వలు",
    "categoryId": "traditional-savouries",
    "categoryNameEn": "Traditional Savouries",
    "categoryNameTe": "సాంప్రదాయ పిండివంటలు",
    "descriptionEn": "Savory shell bites tossed in red chili, garlic seasoning, cumin, and curry leaves for a crunchy spicy teatime snack.",
    "descriptionTe": "కారం, వెల్లుల్లి, జీలకర్ర మరియు కరివేపాకు సువాసనతో కరకరలాడే కారపు గవ్వలు.",
    "image": "/images/gavvalu.jpeg",
    "prices": {
      "250g": 139,
      "500g": 259,
      "1kg": 499
    },
    "ingredientsEn": "Rice flour, besan, red chili powder, garlic, cumin, curry leaves, salt.",
    "ingredientsTe": "వరిపిండి, శనగపిండి, కారం, వెల్లుల్లి, జీలకర్ర, కరివేపాకు, ఉప్పు.",
    "availabilityEn": "Available daily.",
    "availabilityTe": "ప్రతిరోజూ అందుబాటులో ఉండును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "coconut-laddu",
    "nameEn": "Homemade Kobbari Laddu (Bellam Kobbari Undalu)",
    "nameTe": "సాంప్రదాయ కొబ్బరి లడ్డూ (కొబ్బరి ఉండలు)",
    "categoryId": "traditional-sweets",
    "categoryNameEn": "Traditional Sweets",
    "categoryNameTe": "సాంప్రదాయ మిఠాయిలు",
    "descriptionEn": "Soft, moist spheres of fresh grated coconut gently cooked in jaggery syrup, perfumed with cardamom and cashews.",
    "descriptionTe": "తాజా పచ్చికొబ్బరి తురుము, బెల్లం పాకం, కమ్మని నెయ్యి మరియు యాలకుల సువాసనతో చేసిన మధురమైన కొబ్బరి లడ్డూ.",
    "image": "/images/coconut-laddu.jpeg",
    "prices": {
      "250g": 140,
      "500g": 280,
      "1kg": 560
    },
    "ingredientsEn": "Fresh coconut, jaggery, cow ghee, roasted cashews, cardamom.",
    "ingredientsTe": "తాజా కొబ్బరి తురుము, బెల్లం, ఆవు నెయ్యి, జీడిపప్పు, యాలకులు.",
    "availabilityEn": "Prepared fresh to order.",
    "availabilityTe": "ఆర్డర్ మేరకు తాజాగా తయారుచేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "boondi-laddu",
    "nameEn": "Traditional Boondi Laddu",
    "nameTe": "సాంప్రదాయ బూందీ లడ్డూ",
    "categoryId": "laddus",
    "categoryNameEn": "Handmade Laddus",
    "categoryNameTe": "చేతితో చేసిన లడ్డూలు",
    "descriptionEn": "Festive South Indian celebration laddu made with tiny golden besan pearls soaked in fragrant sugar syrup, roasted cashews, and golden raisins.",
    "descriptionTe": "సన్నని శనగపిండి బూందీ, స్వచ్ఛమైన పాకం, నేతిలో వేయించిన జీడిపప్పు, కిస్‌మిస్ మరియు పచ్చకర్పూరం సువాసనతో చేసిన సాంప్రదాయ లడ్డూ.",
    "image": "/images/boondi-laddu.jpeg",
    "prices": {
      "250g": 160,
      "500g": 320,
      "1kg": 640
    },
    "ingredientsEn": "Besan (gram flour), sugar, cow ghee, cashews, raisins, cardamom, clove.",
    "ingredientsTe": "శనగపిండి, చక్కెర, ఆవు నెయ్యి, జీడిపప్పు, కిస్‌మిస్, యాలకులు, లవంగం.",
    "availabilityEn": "Fresh batches made daily.",
    "availabilityTe": "ప్రతిరోజూ తాజా బ్యాచ్‌లలో లభించును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "sunnundalu",
    "nameEn": "Traditional Sunnundalu (Urad Dal Laddu)",
    "nameTe": "ఆంధ్రా సాంప్రదాయ సున్నుండలు",
    "categoryId": "laddus",
    "categoryNameEn": "Handmade Laddus",
    "categoryNameTe": "చేతితో చేసిన లడ్డూలు",
    "descriptionEn": "Celebrated Andhra classic made from slow-roasted whole black gram (urad dal), rich organic jaggery, and flowing pure desi ghee.",
    "descriptionTe": "దోరగా వేయించిన మినపప్పు, స్వచ్ఛమైన బెల్లం మరియు సువాసనగల దేశీ నెయ్యితో అమ్మ చేతి వంటలా గుండ్రంగా చుట్టిన అమృతపు సున్నుండలు.",
    "image": "/images/ragi-laddu.jpeg",
    "prices": {
      "250g": 169,
      "500g": 329,
      "1kg": 629
    },
    "ingredientsEn": "Whole roasted urad dal, jaggery, desi cow ghee, cardamom.",
    "ingredientsTe": "వేయించిన మినపప్పు, బెల్లం, దేశీ ఆవు నెయ్యి, యాలకులు.",
    "availabilityEn": "Fresh batches made every week to order.",
    "availabilityTe": "ప్రతి వారం ఆర్డర్ ప్రకారం తాజాగా తయారుచేస్తాము.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "ravva-laddu",
    "nameEn": "Homemade Ghee Ravva Laddu",
    "nameTe": "కమ్మని నేతి రవ్వ లడ్డూ",
    "categoryId": "laddus",
    "categoryNameEn": "Handmade Laddus",
    "categoryNameTe": "చేతితో చేసిన లడ్డూలు",
    "descriptionEn": "Aromatic spheres of slow-roasted fine semolina, freshly grated coconut, pure cow ghee, milk, and roasted dry fruits.",
    "descriptionTe": "దోరగా నేతిలో వేయించిన బొంబాయి రవ్వ, పచ్చికొబ్బరి తురుము, ఆవు నెయ్యి, జీడిపప్పు, కిస్‌మిస్‌లతో గుండ్రంగా చుట్టిన కమ్మని రవ్వ లడ్డూ.",
    "image": "/images/ravva-laddu.jpeg",
    "prices": {
      "250g": 149,
      "500g": 279,
      "1kg": 529
    },
    "ingredientsEn": "Semolina (rava), grated coconut, pure cow ghee, sugar, cashews, raisins, cardamom.",
    "ingredientsTe": "బొంబాయి రవ్వ, కొబ్బరి తురుము, ఆవు నెయ్యి, చక్కెర, జీడిపప్పు, కిస్‌మిస్, యాలకులు.",
    "availabilityEn": "Made fresh upon order.",
    "availabilityTe": "ఆర్డర్ మేరకు తాజాగా తయారుచేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "dry-fruit-laddu",
    "nameEn": "Royal Dry Fruit Laddu",
    "nameTe": "రాచరికపు డ్రై ఫ్రూట్ లడ్డూ",
    "categoryId": "laddus",
    "categoryNameEn": "Handmade Laddus",
    "categoryNameTe": "చేతితో చేసిన లడ్డూలు",
    "descriptionEn": "Premium nutrient-dense laddu composed entirely of roasted almonds, cashews, pistachios, dates, and pure cow ghee without added refined sugar.",
    "descriptionTe": "పంచదార లేకుండా కేవలం వేయించిన బాదం, జీడిపప్పు, పిస్తా, ఖర్జూరం మరియు స్వచ్ఛమైన ఆవు నెయ్యితో చేసిన బలవర్ధకమైన లడ్డూ.",
    "image": "/images/dry-fruit-laddu.jpeg",
    "prices": {
      "250g": 249,
      "500g": 479,
      "1kg": 929
    },
    "ingredientsEn": "Almonds, cashews, pistachios, dates, pure cow ghee, cardamom.",
    "ingredientsTe": "బాదం, జీడిపప్పు, పిస్తా, ఖర్జూరం, స్వచ్ఛమైన ఆవు నెయ్యి, యాలకులు.",
    "availabilityEn": "Available daily by order.",
    "availabilityTe": "ఆర్డర్ మేరకు రోజూ లభించును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "dry-fruit-laddu-dates",
    "nameEn": "Dates & Dry Fruit Laddu (Sugar-Free)",
    "nameTe": "ఖర్జూరం డ్రై ఫ్రూట్ లడ్డూ (చక్కెర లేనిది)",
    "categoryId": "laddus",
    "categoryNameEn": "Handmade Laddus",
    "categoryNameTe": "చేతితో చేసిన లడ్డూలు",
    "descriptionEn": "Naturally sweetened with premium soft Arabian dates, stuffed with crunchy walnuts, cashews, and almonds. No added sugar.",
    "descriptionTe": "ఎటువంటి పంచదార లేకుండా ప్రీమియం ఖర్జూరం తీపితో, వాల్‌నట్స్, జీడిపప్పు, బాదంతో చేసిన సహజసిద్ధమైన లడ్డూ.",
    "image": "/images/dry-fruit-laddu.jpeg",
    "prices": {
      "250g": 229,
      "500g": 429,
      "1kg": 829
    },
    "ingredientsEn": "Premium dates, almonds, cashews, walnuts, cow ghee, cardamom.",
    "ingredientsTe": "ఖర్జూరం, బాదం, జీడిపప్పు, అక్రూట్లు, ఆవు నెయ్యి, యాలకులు.",
    "availabilityEn": "Made fresh upon order.",
    "availabilityTe": "ఆర్డర్ మేరకు తాజాగా తయారుచేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "dry-fruit-laddu-jaggery",
    "nameEn": "Jaggery & Dry Fruit Laddu",
    "nameTe": "బెల్లం డ్రై ఫ్రూట్ లడ్డూ",
    "categoryId": "laddus",
    "categoryNameEn": "Handmade Laddus",
    "categoryNameTe": "చేతితో చేసిన లడ్డూలు",
    "descriptionEn": "Traditional jaggery sweetened confection packed with finely minced assorted nuts, poppy seeds, and golden ghee.",
    "descriptionTe": "నాటు బెల్లం పాకంలో వేయించిన డ్రై ఫ్రూట్స్, గసగసాలు మరియు స్వచ్ఛమైన నెయ్యి కలిపి చేసిన సాంప్రదాయ లడ్డూ.",
    "image": "/images/dry-fruit-laddu.jpeg",
    "prices": {
      "250g": 229,
      "500g": 429,
      "1kg": 829
    },
    "ingredientsEn": "Organic jaggery, mixed dry fruits, poppy seeds, pure ghee, dry ginger powder.",
    "ingredientsTe": "సేంద్రీయ బెల్లం, డ్రై ఫ్రూట్స్, గసగసాలు, ఆవు నెయ్యి, శొంఠి పొడి.",
    "availabilityEn": "Available by weight upon order.",
    "availabilityTe": "ఆర్డర్ ప్రకారం బరువుతో లభించును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "peanut-laddu",
    "nameEn": "Peanut Laddu with Dates & Dry Fruits",
    "nameTe": "పల్లీ ఖర్జూరం డ్రై ఫ్రూట్ లడ్డూ",
    "categoryId": "laddus",
    "categoryNameEn": "Handmade Laddus",
    "categoryNameTe": "చేతితో చేసిన లడ్డూలు",
    "descriptionEn": "Wholesome crunch of freshly roasted country peanuts paired with Arabian dates, organic jaggery, cashews, and almonds.",
    "descriptionTe": "దోరగా వేయించిన పల్లీలు, ఖర్జూరం, జీడిపప్పు, బాదం మరియు సేంద్రీయ బెల్లంతో చేసిన బలవర్ధకమైన లడ్డూ.",
    "image": "/images/ragi-laddu.jpeg",
    "prices": {
      "250g": 199,
      "500g": 379,
      "1kg": 729
    },
    "ingredientsEn": "Roasted peanuts, dates, cashews, almonds, organic jaggery, ghee, cardamom.",
    "ingredientsTe": "వేయించిన పల్లీలు, ఖర్జూరం, జీడిపప్పు, బాదం, బెల్లం, నెయ్యి, యాలకులు.",
    "availabilityEn": "Available daily.",
    "availabilityTe": "ప్రతిరోజూ సిద్ధంగా ఉండును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "ragi-laddu",
    "nameEn": "Nutritious Ragi Laddu",
    "nameTe": "బలవర్ధకమైన రాగి లడ్డూ",
    "categoryId": "ragi-millet",
    "categoryNameEn": "Ragi & Millet Snacks",
    "categoryNameTe": "రాగి & చిరుధాన్యాల పిండివంటలు",
    "descriptionEn": "Wholesome homemade laddu crafted from slow-roasted finger millet flour, organic jaggery, pure cow ghee, and crushed dry nuts.",
    "descriptionTe": "దోరగా వేయించిన రాగి పిండి, స్వచ్ఛమైన సేంద్రీయ బెల్లం, ఆవు నెయ్యి మరియు డ్రై ఫ్రూట్స్తో చేసిన ఆరోగ్యకరమైన ఇంటి లడ్డూ.",
    "image": "/images/ragi-laddu.jpeg",
    "prices": {
      "250g": 149,
      "500g": 289,
      "1kg": 559
    },
    "ingredientsEn": "Finger millet (ragi) flour, organic jaggery, cow ghee, roasted nuts, cardamom.",
    "ingredientsTe": "రాగి పిండి, సేంద్రీయ బెల్లం, ఆవు నెయ్యి, జీడిపప్పు, బాదం, యాలకులు.",
    "availabilityEn": "Available daily by weight.",
    "availabilityTe": "రోజూ బరువు ప్రకారం సిద్ధంగా ఉండును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "ragi-garelu",
    "nameEn": "Crispy Ragi Garelu (Chekkalu)",
    "nameTe": "సాంప్రదాయ కరకరలాడే రాగి గారెలు",
    "categoryId": "ragi-millet",
    "categoryNameEn": "Ragi & Millet Snacks",
    "categoryNameTe": "రాగి & చిరుధాన్యాల పిండివంటలు",
    "descriptionEn": "Crispy, savory golden discs made with whole finger millet flour, roasted peanuts, chana dal, curry leaves, and cumin.",
    "descriptionTe": "రాగి పిండి, వేయించిన పల్లీలు, పచ్చిశనగపప్పు, కరివేపాకు మరియు జీలకర్రతో కరకరలాడే రుచికరమైన సాంప్రదాయ రాగి గారెలు.",
    "image": "/images/ragi-garelu.jpeg",
    "prices": {
      "250g": 129,
      "500g": 249,
      "1kg": 479
    },
    "ingredientsEn": "Finger millet flour, rice flour, chana dal, roasted peanuts, curry leaves, green chilies, cumin, salt.",
    "ingredientsTe": "రాగి పిండి, వరిపిండి, శనగపప్పు, పల్లీలు, కరివేపాకు, పచ్చిమిర్చి, జీలకర్ర, ఉప్పు.",
    "availabilityEn": "Fresh batches made to order.",
    "availabilityTe": "ఆర్డర్ మేరకు తాజాగా తయారుచేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "ragi-murukulu",
    "nameEn": "Ragi Murukulu (Millet Chakli)",
    "nameTe": "కరకరలాడే రాగి మురుకులు",
    "categoryId": "ragi-millet",
    "categoryNameEn": "Ragi & Millet Snacks",
    "categoryNameTe": "రాగి & చిరుధాన్యాల పిండివంటలు",
    "descriptionEn": "Crispy savory spirals made with finger millet flour, butter, and traditional spices, perfect for healthy evening snacking.",
    "descriptionTe": "రాగి పిండి, వెన్న, వాము మరియు జీలకర్రతో చేసిన గుల్లగా కరకరలాడే ఆరోగ్యకరమైన రాగి మురుకులు.",
    "image": "/images/murukulu.jpeg",
    "prices": {
      "250g": 119,
      "500g": 229,
      "1kg": 449
    },
    "ingredientsEn": "Ragi flour, rice flour, butter, cumin, carom seeds (vaamu), salt.",
    "ingredientsTe": "రాగి పిండి, వరిపిండి, వెన్న, జీలకర్ర, వాము, ఉప్పు.",
    "availabilityEn": "Prepared to order.",
    "availabilityTe": "ఆర్డర్ మేరకు తయారుచేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "chekkalu",
    "nameEn": "Crispy Pappu Chekkalu",
    "nameTe": "కమ్మని పప్పు చెక్కలు",
    "categoryId": "chekkalu-crisps",
    "categoryNameEn": "Chekkalu & Crackers",
    "categoryNameTe": "చెక్కలు & కారప్పూస",
    "descriptionEn": "Classic savory crackers pressed paper-thin with soaked Bengal gram (chana dal), aromatic curry leaves, sesame seeds, and crushed green chillies.",
    "descriptionTe": "వరిపిండి, నానబెట్టిన పచ్చి శనగపప్పు, కరివేపాకు, పచ్చిమిర్చి మరియు నువ్వులతో చేసిన కరకరలాడే కమ్మని పప్పు చెక్కలు.",
    "image": "/images/chekkalu.jpeg",
    "prices": {
      "250g": 140,
      "500g": 280,
      "1kg": 560
    },
    "ingredientsEn": "Rice flour, chana dal, fresh curry leaves, green chilies, cumin, butter, sesame.",
    "ingredientsTe": "వరిపిండి, పచ్చి శనగపప్పు, తాజా కరివేపాకు, పచ్చిమిర్చి, జీలకర్ర, వెన్న, నువ్వులు.",
    "availabilityEn": "Available fresh by weight.",
    "availabilityTe": "బరువు ప్రకారం రోజూ లభించును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "south-indian-mixture",
    "nameEn": "Royal South Indian Mixture (Besan Mixture)",
    "nameTe": "స్పెషల్ రాయల్ మిక్స్చర్",
    "categoryId": "mixtures-sev",
    "categoryNameEn": "Mixtures & Savoury Sev",
    "categoryNameTe": "మిక్స్చర్ & కారప్పూస",
    "descriptionEn": "Crowd-pleasing crunchy medley of crispy sev, golden boondi, roasted groundnuts, fried curry leaves, and secret South Indian masala.",
    "descriptionTe": "సన్న కారప్పూస, కరకరలాడే బూందీ, వేయించిన పల్లీలు, పుట్నాలు, కరివేపాకు మరియు సుగంధ మసాలాతో చేసిన స్పెషల్ మిక్స్చర్.",
    "image": "/images/south-indian-mixture.jpeg",
    "prices": {
      "250g": 119,
      "500g": 229,
      "1kg": 449
    },
    "ingredientsEn": "Besan, roasted peanuts, fried gram, curry leaves, red chili powder, asafoetida, salt.",
    "ingredientsTe": "శనగపిండి, పల్లీలు, పుట్నాలు, కరివేపాకు, కారం పొడి, ఇంగువ, ఉప్పు.",
    "availabilityEn": "Made daily in small batches.",
    "availabilityTe": "చిన్న బ్యాచ్‌లలో ప్రతిరోజూ తాజాగా సిద్ధం చేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "besan-mixture-peanuts",
    "nameEn": "Besan Mixture with Crunchy Peanuts",
    "nameTe": "పల్లీల స్పెషల్ బేసన్ మిక్స్చర్",
    "categoryId": "mixtures-sev",
    "categoryNameEn": "Mixtures & Savoury Sev",
    "categoryNameTe": "మిక్స్చర్ & కారప్పూస",
    "descriptionEn": "Extra crunchy savory blend loaded with double roasted country groundnuts, crisp chickpea strands, and garlic-tempered curry leaves.",
    "descriptionTe": "దోరగా వేయించిన నాటు పల్లీలు, గుల్లటి కారప్పూస, వెల్లుల్లి మరియు కరివేపాకు సువాసనతో కూడిన మిక్స్చర్.",
    "image": "/images/besan-mixture-peanuts.jpeg",
    "prices": {
      "250g": 129,
      "500g": 249,
      "1kg": 479
    },
    "ingredientsEn": "Besan, country peanuts, garlic, red chili, curry leaves, salt.",
    "ingredientsTe": "శనగపిండి, నాటు పల్లీలు, వెల్లుల్లి, కారం, కరివేపాకు, ఉప్పు.",
    "availabilityEn": "Available daily.",
    "availabilityTe": "ప్రతిరోజూ సిద్ధంగా ఉండును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "besan-mixture-dry-fruits",
    "nameEn": "Rich Dry Fruit Mixture",
    "nameTe": "డ్రై ఫ్రూట్స్ స్పెషల్ మిక్స్చర్",
    "categoryId": "mixtures-sev",
    "categoryNameEn": "Mixtures & Savoury Sev",
    "categoryNameTe": "మిక్స్చర్ & కారప్పూస",
    "descriptionEn": "A luxurious savoury blend loaded with roasted cashews, whole almonds, golden raisins, fine sev, and crisp curry leaves.",
    "descriptionTe": "వేయించిన జీడిపప్పు, బాదం, కిస్‌మిస్ మరియు కరకరలాడే సన్న కారప్పూసతో కూడిన రాచరికపు స్పెషల్ మిక్స్చర్.",
    "image": "/images/south-indian-mixture.jpeg",
    "prices": {
      "250g": 179,
      "500g": 349,
      "1kg": 679
    },
    "ingredientsEn": "Besan, whole cashews, almonds, raisins, peanuts, curry leaves, spices.",
    "ingredientsTe": "శనగపిండి, జీడిపప్పు, బాదం, కిస్‌మిస్, పల్లీలు, కరివేపాకు, సుగంధ ద్రవ్యాలు.",
    "availabilityEn": "Made to order in small batches.",
    "availabilityTe": "ఆర్డర్ మేరకు ప్రత్యేకంగా తయారుచేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "besan-murukulu",
    "nameEn": "Traditional Besan Murukulu",
    "nameTe": "కమ్మని శనగపిండి మురుకులు",
    "categoryId": "traditional-savouries",
    "categoryNameEn": "Traditional Savouries",
    "categoryNameTe": "సాంప్రదాయ పిండివంటలు",
    "descriptionEn": "Crispy golden spirals made from premium gram flour and aromatic spices, light and wonderfully crunchy.",
    "descriptionTe": "శనగపిండి, వెన్న, వాము మరియు జీలకర్రతో కరకరలాడే సువాసనభరిత సాంప్రదాయ మురుకులు.",
    "image": "/images/murukulu.jpeg",
    "prices": {
      "250g": 109,
      "500g": 229,
      "1kg": 449
    },
    "ingredientsEn": "Besan (gram flour), rice flour, butter, ajwain, cumin, salt.",
    "ingredientsTe": "శనగపిండి, వరిపిండి, వెన్న, వాము, జీలకర్ర, ఉప్పు.",
    "availabilityEn": "Available fresh by weight.",
    "availabilityTe": "రోజూ బరువు ప్రకారం సిద్ధం చేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "rice-flour-murukulu",
    "nameEn": "Crispy Rice Flour Murukulu",
    "nameTe": "కమ్మని బియ్యంపిండి మురుకులు",
    "categoryId": "traditional-savouries",
    "categoryNameEn": "Traditional Savouries",
    "categoryNameTe": "సాంప్రదాయ పిండివంటలు",
    "descriptionEn": "Light, crunchy white murukulu made with fine rice flour, roasted gram powder, cumin seeds, and a touch of butter.",
    "descriptionTe": "మెత్తని బియ్యం పిండి, పుట్నాల పొడి, వెన్న మరియు జీలకర్రతో చేసిన ఎంతో గుల్లగా ఉండే తెల్లటి మురుకులు.",
    "image": "/images/murukulu.jpeg",
    "prices": {
      "250g": 119,
      "500g": 229,
      "1kg": 449
    },
    "ingredientsEn": "Rice flour, roasted gram flour, butter, cumin, sesame, salt.",
    "ingredientsTe": "బియ్యం పిండి, పుట్నాల పిండి, వెన్న, జీలకర్ర, నువ్వులు, ఉప్పు.",
    "availabilityEn": "Available fresh by weight.",
    "availabilityTe": "బరువు ప్రకారం తాజాగా లభించును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "rice-flour-kara",
    "nameEn": "Spicy Rice Flour Kara",
    "nameTe": "వరిపిండి కారప్పూస",
    "categoryId": "traditional-savouries",
    "categoryNameEn": "Traditional Savouries",
    "categoryNameTe": "సాంప్రదాయ పిండివంటలు",
    "descriptionEn": "Fine spicy sev made from pure rice flour and red chili seasoning, offering a light and crispy kick.",
    "descriptionTe": "బియ్యం పిండి మరియు కారంతో చేసిన సన్నటి కరకరలాడే కారప్పూస.",
    "image": "/images/murukulu.jpeg",
    "prices": {
      "250g": 119,
      "500g": 229,
      "1kg": 449
    },
    "ingredientsEn": "Rice flour, gram flour, red chili powder, cumin, salt.",
    "ingredientsTe": "బియ్యం పిండి, శనగపిండి, కారం పొడి, జీలకర్ర, ఉప్పు.",
    "availabilityEn": "Available fresh by weight.",
    "availabilityTe": "బరువు ప్రకారం తాజాగా లభించును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "besan-sev",
    "nameEn": "Crisp Besan Sev",
    "nameTe": "శనగపిండి కారప్పూస",
    "categoryId": "traditional-savouries",
    "categoryNameEn": "Traditional Savouries",
    "categoryNameTe": "సాంప్రదాయ పిండివంటలు",
    "descriptionEn": "Golden, savoury besan noodles seasoned with freshly ground black pepper and ajwain.",
    "descriptionTe": "మిరియాలు మరియు వాము సువాసనతో కూడిన బంగారు వర్ణపు కారప్పూస.",
    "image": "/images/south-indian-mixture.jpeg",
    "prices": {
      "250g": 109,
      "500g": 209,
      "1kg": 449
    },
    "ingredientsEn": "Besan (gram flour), ajwain, turmeric, pepper, salt.",
    "ingredientsTe": "శనగపిండి, వాము, పసుపు, మిరియాలు, ఉప్పు.",
    "availabilityEn": "Available fresh by weight.",
    "availabilityTe": "బరువు ప్రకారం తాజాగా లభించును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "karivepaku-murukulu",
    "nameEn": "Karivepaku Murukulu",
    "nameTe": "కరివేపాకు మురుకులు",
    "categoryId": "traditional-savouries",
    "categoryNameEn": "Traditional Savouries",
    "categoryNameTe": "సాంప్రదాయ పిండివంటలు",
    "descriptionEn": "Fresh curry leaves and green chillies blended into crunchy South Indian spirals with aromatic herbs.",
    "descriptionTe": "కరివేపాకు, పచ్చిమిరపకాయల కలయికతో అద్భుతమైన సువాసన మరియు కారంతో చేసిన కరకరలాడే సాంప్రదాయ మురుకులు.",
    "image": "/images/carryleaves-murukulu.jpg",
    "prices": {
      "250g": 149,
      "500g": 279,
      "1kg": 559
    },
    "ingredientsEn": "Rice flour, gram flour, fresh curry leaves (karivepaku), green chillies, butter, cumin, salt.",
    "ingredientsTe": "బియ్యం పిండి, శనగపిండి, తాజా కరివేపాకు, పచ్చిమిర్చి, వెన్న, జీలకర్ర, ఉప్పు.",
    "availabilityEn": "Available fresh by weight.",
    "availabilityTe": "బరువు ప్రకారం తాజాగా లభించును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "moringa-karam-podi",
    "nameEn": "Moringa Leaves Karam Podi (Munagaku Podi)",
    "nameTe": "మునగాకు కారం పొడి",
    "categoryId": "karam-podis",
    "categoryNameEn": "Karam Podis & Masalas",
    "categoryNameTe": "కారం పొడులు & మసాలాలు",
    "descriptionEn": "Nutritious and flavorful spice powder made from shade-dried organic drumstick leaves, roasted lentils, garlic, and red chilies.",
    "descriptionTe": "పోషకాలు నిండిన సేంద్రీయ మునగాకు, వేయించిన పప్పులు, వెల్లుల్లి మరియు ఎండుమిర్చితో రోట్లో దంచిన ఆరోగ్యకరమైన కారం పొడి.",
    "image": "/images/curry-leaves-podi.jpeg",
    "prices": {
      "250g": 199,
      "500g": 379,
      "1kg": 729
    },
    "ingredientsEn": "Fresh moringa leaves, urad dal, chana dal, dry red chilies, garlic, cumin, tamarind, salt.",
    "ingredientsTe": "మునగాకు, మినపప్పు, శనగపప్పు, ఎండుమిర్చి, వెల్లుల్లి, జీలకర్ర, చింతపండు, ఉప్పు.",
    "availabilityEn": "Freshly hand-pounded to order.",
    "availabilityTe": "ఆర్డర్ మేరకు తాజాగా దంచి సిద్ధం చేస్తాము.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "flax-seeds-podi",
    "nameEn": "Flax Seeds Karam Podi (Avise Ginjala Podi)",
    "nameTe": "అవిసె గింజల కారం పొడి",
    "categoryId": "karam-podis",
    "categoryNameEn": "Karam Podis & Masalas",
    "categoryNameTe": "కారం పొడులు & మసాలాలు",
    "descriptionEn": "Rich in Omega-3, this wholesome podi pairs roasted flax seeds with lentils, dry red chilies, and garlic for hot steamed rice and idlis.",
    "descriptionTe": "ఒమేగా-3 పుష్కలంగా ఉండే అవిసె గింజలు, వేయించిన పప్పులు మరియు వెల్లుల్లితో చేసిన బలవర్ధకమైన కారం పొడి.",
    "image": "/images/karam-podi.jpeg",
    "prices": {
      "250g": 199,
      "500g": 379,
      "1kg": 729
    },
    "ingredientsEn": "Toasted flax seeds, urad dal, red chilies, garlic, cumin, coriander seeds, salt.",
    "ingredientsTe": "అవిసె గింజలు, మినపప్పు, ఎండుమిర్చి, వెల్లుల్లి, జీలకర్ర, ధనియాలు, ఉప్పు.",
    "availabilityEn": "Available fresh in batches.",
    "availabilityTe": "తాజా బ్యాచ్‌లలో లభించును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "cashews-karam-podi",
    "nameEn": "Royal Cashews Karam Podi (Jeedipappu Podi)",
    "nameTe": "రాచరికపు జీడిపప్పు కారం పొడి",
    "categoryId": "karam-podis",
    "categoryNameEn": "Karam Podis & Masalas",
    "categoryNameTe": "కారం పొడులు & మసాలాలు",
    "descriptionEn": "An exquisite, nutty royal podi blending slow-roasted whole cashews, Kashmiri chilies, toasted sesame, and garlic.",
    "descriptionTe": "దోరగా వేయించిన జీడిపప్పు, నాటు ఎండుమిర్చి, నువ్వులు మరియు వెల్లుల్లితో చేసిన అత్యంత రుచికరమైన రాయల్ కారం పొడి.",
    "image": "/images/karam-podi.jpeg",
    "prices": {
      "250g": 299,
      "500g": 579,
      "1kg": 1099
    },
    "ingredientsEn": "Whole roasted cashews, red chillies, sesame seeds, garlic, cumin, salt.",
    "ingredientsTe": "జీడిపప్పు, ఎండుమిర్చి, నువ్వులు, వెల్లుల్లి, జీలకర్ర, ఉప్పు.",
    "availabilityEn": "Specialty item made fresh to order.",
    "availabilityTe": "ఆర్డర్ మేరకు ప్రత్యేకంగా తయారుచేస్తాము.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "curry-leaves-podi",
    "nameEn": "Curry Leaves Karam Podi (Karivepaku Podi)",
    "nameTe": "సువాసనాభరిత కరివేపాకు కారం పొడి",
    "categoryId": "karam-podis",
    "categoryNameEn": "Karam Podis & Masalas",
    "categoryNameTe": "కారం పొడులు & మసాలాలు",
    "descriptionEn": "Fragrant and digestion-friendly podi made from fresh country curry leaves, roasted dals, cumin, and tamarind.",
    "descriptionTe": "తాజా నాటు కరివేపాకు, వేయించిన పప్పులు, జీలకర్ర, వెల్లుల్లి మరియు చింతపండుతో గుబాళించే కరివేపాకు పొడి.",
    "image": "/images/curry-leaves-podi.jpeg",
    "prices": {
      "250g": 179,
      "500g": 339,
      "1kg": 649
    },
    "ingredientsEn": "Fresh curry leaves, chana dal, urad dal, dried chilies, garlic, cumin, tamarind, salt.",
    "ingredientsTe": "తాజా కరివేపాకు, శనగపప్పు, మినపప్పు, ఎండుమిర్చి, వెల్లుల్లి, జీలకర్ర, చింతపండు, ఉప్పు.",
    "availabilityEn": "Available daily.",
    "availabilityTe": "ప్రతిరోజూ సిద్ధంగా ఉండును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "ulava-karam-podi",
    "nameEn": "Traditional Ulava Karam Podi (Horse Gram Powder)",
    "nameTe": "సాంప్రదాయ ఉలవ కారం పొడి",
    "categoryId": "karam-podis",
    "categoryNameEn": "Karam Podis & Masalas",
    "categoryNameTe": "కారం పొడులు & మసాలాలు",
    "descriptionEn": "Nutritious and protein-packed horse gram roasted to perfection with red chillies, garlic, and coriander.",
    "descriptionTe": "ప్రొటీన్లు సమృద్ధిగా ఉండే ఉలవలు, ధనియాలు, ఎండుమిర్చి మరియు వెల్లుల్లితో చేసిన పాతకాలపు నాటు ఉలవ కారం పొడి.",
    "image": "/images/karam-podi.jpeg",
    "prices": {
      "250g": 179,
      "500g": 339,
      "1kg": 649
    },
    "ingredientsEn": "Roasted horse gram (ulavalu), dry chilies, coriander seeds, cumin, garlic, salt.",
    "ingredientsTe": "ఉలవలు, ఎండుమిర్చి, ధనియాలు, జీలకర్ర, వెల్లుల్లి, ఉప్పు.",
    "availabilityEn": "Made fresh upon order.",
    "availabilityTe": "ఆర్డర్ మేరకు తయారుచేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "kakarakaya-podi",
    "nameEn": "Kakarakaya Karam Podi (Bitter Gourd Powder)",
    "nameTe": "రుచికరమైన కాకరకాయ కారం పొడి",
    "categoryId": "karam-podis",
    "categoryNameEn": "Karam Podis & Masalas",
    "categoryNameTe": "కారం పొడులు & మసాలాలు",
    "descriptionEn": "Finely crisped bitter gourd slices hand-pounded with roasted peanuts, red chillies, garlic, and jaggery to balance the bitterness deliciously.",
    "descriptionTe": "దోరగా వేయించిన కాకరకాయ ముక్కలు, పల్లీలు, వెల్లుల్లి, బెల్లం మరియు కారంతో చేసిన నోరూరించే కారం పొడి.",
    "image": "/images/karam-podi.jpeg",
    "prices": {
      "250g": 179,
      "500g": 339,
      "1kg": 649
    },
    "ingredientsEn": "Bitter gourd, roasted peanuts, dry red chilies, garlic, jaggery, tamarind, salt.",
    "ingredientsTe": "కాకరకాయ, పల్లీలు, ఎండుమిర్చి, వెల్లుల్లి, బెల్లం, చింతపండు, ఉప్పు.",
    "availabilityEn": "Prepared fresh to order.",
    "availabilityTe": "ఆర్డర్ మేరకు తాజాగా తయారుచేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "kandi-podi",
    "nameEn": "Traditional Kandi Podi (Paruppu / Gunpowder Dal)",
    "nameTe": "సాంప్రదాయ కంది పొడి",
    "categoryId": "karam-podis",
    "categoryNameEn": "Karam Podis & Masalas",
    "categoryNameTe": "కారం పొడులు & మసాలాలు",
    "descriptionEn": "The quintessential Andhra meal starter: slow-roasted toor dal, roasted gram, black pepper, cumin, and dry red chilies. Irresistible with hot rice and ghee.",
    "descriptionTe": "దోరగా వేయించిన కందిపప్పు, పుట్నాలు, మిరియాలు, జీలకర్ర మరియు ఎండుమిర్చితో చేసిన అమృతతుల్యమైన కంది పొడి.",
    "image": "/images/karam-podi.jpeg",
    "prices": {
      "250g": 149,
      "500g": 279,
      "1kg": 529
    },
    "ingredientsEn": "Toor dal, roasted gram, red chilies, black pepper, cumin, asafoetida, salt.",
    "ingredientsTe": "కందిపప్పు, పుట్నాల పప్పు, ఎండుమిర్చి, మిరియాలు, జీలకర్ర, ఇంగువ, ఉప్పు.",
    "availabilityEn": "Available daily.",
    "availabilityTe": "రోజూ సిద్ధంగా ఉండును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "sambhar-podi",
    "nameEn": "Authentic Andhra Sambar Podi",
    "nameTe": "ఘుమఘుమలాడే సాంబార్ పొడి",
    "categoryId": "karam-podis",
    "categoryNameEn": "Karam Podis & Masalas",
    "categoryNameTe": "కారం పొడులు & మసాలాలు",
    "descriptionEn": "Hand-blended aromatic sambar powder crafted from slow-roasted coriander seeds, fenugreek, lentils, whole turmeric, and Byadgi red chilies.",
    "descriptionTe": "ధనియాలు, మెంతులు, పప్పులు, పసుపు కొమ్ములు మరియు ఎర్రటి మిర్చితో ఘుమఘుమలాడే అసలైన ఇంటి సాంబార్ పొడి.",
    "image": "/images/karam-podi.jpeg",
    "prices": {
      "250g": 179,
      "500g": 339,
      "1kg": 649
    },
    "ingredientsEn": "Coriander seeds, red chilies, chana dal, toor dal, fenugreek, cumin, black pepper, turmeric.",
    "ingredientsTe": "ధనియాలు, ఎండుమిర్చి, శనగపప్పు, కందిపప్పు, మెంతులు, జీలకర్ర, మిరియాలు, పసుపు.",
    "availabilityEn": "Freshly ground in small batches.",
    "availabilityTe": "చిన్న బ్యాచ్‌లలో తాజాగా విసిరినది.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "garam-masala",
    "nameEn": "Aromatic Andhra Royal Garam Masala",
    "nameTe": "సుగంధభరిత రాయల్ గరం మసాలా",
    "categoryId": "karam-podis",
    "categoryNameEn": "Karam Podis & Masalas",
    "categoryNameTe": "కారం పొడులు & మసాలాలు",
    "descriptionEn": "Potent spice blend made from whole cinnamon sticks, green cardamom, cloves, star anise, mace, shahi jeera, and bay leaves.",
    "descriptionTe": "దాల్చినచెక్క, యాలకులు, లవంగాలు, అనాసపువ్వు, జాపత్రి మరియు బిర్యానీ ఆకులతో చేసిన సువాసనభరిత గరం మసాలా.",
    "image": "/images/karam-podi.jpeg",
    "prices": {
      "250g": 229,
      "500g": 439,
      "1kg": 849
    },
    "ingredientsEn": "Cinnamon, cardamom, cloves, star anise, mace, nutmeg, black cumin, bay leaves.",
    "ingredientsTe": "దాల్చినచెక్క, యాలకులు, లవంగాలు, అనాసపువ్వు, జాపత్రి, జాజికాయ, షాజీరా, బిర్యానీ ఆకు.",
    "availabilityEn": "Freshly prepared to order.",
    "availabilityTe": "ఆర్డర్ మేరకు తాజాగా తయారుచేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "ginger-garlic-paste",
    "nameEn": "Fresh Homemade Ginger Garlic Paste",
    "nameTe": "తాజా ఇంటి అల్లం వెల్లుల్లి పేస్ట్",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "100% natural ginger garlic paste prepared from freshly peeled desi ginger and garlic with cold-pressed oil and salt. Zero artificial preservatives.",
    "descriptionTe": "ఎటువంటి రసాయనాలు లేకుండా తాజా నాటు అల్లం, వెల్లుల్లి మరియు స్వచ్ఛమైన నూనెతో చేసిన కమ్మని ఇంటి పేస్ట్.",
    "image": "/images/kitchen-prep.jpeg",
    "prices": {
      "250g": 99,
      "500g": 179,
      "1kg": 329
    },
    "ingredientsEn": "Fresh ginger, fresh garlic, cold-pressed groundnut oil, salt, turmeric.",
    "ingredientsTe": "తాజా అల్లం, వెల్లుల్లి, స్వచ్ఛమైన పల్లీ నూనె, ఉప్పు, పసుపు.",
    "availabilityEn": "Ground fresh daily.",
    "availabilityTe": "ప్రతిరోజూ తాజాగా రుబ్బి సిద్ధం చేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "mango-pickle",
    "nameEn": "Traditional Andhra Avakaya Mango Pickle",
    "nameTe": "సాంప్రదాయ ఆంధ్రా మామిడికాయ ఆవకాయ",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "The king of South Indian pickles: sour raw mango cubes aged with freshly ground pungent mustard powder, fiery red chillies, and wood-pressed sesame oil.",
    "descriptionTe": "పచ్చి పుల్లటి మామిడికాయ ముక్కలు, ఘాటైన ఆవపిండి, కారం మరియు నువ్వుల నూనెతో పెట్టిన అసలైన ఆంధ్రా నోరూరించే ఆవకాయ.",
    "image": "/images/avakaya-pickle.jpeg",
    "prices": {
      "250g": 149,
      "500g": 279,
      "1kg": 529
    },
    "ingredientsEn": "Raw sour mangoes, mustard powder, red chili powder, wood-pressed sesame oil, salt, fenugreek, garlic.",
    "ingredientsTe": "నాటు మామిడికాయలు, ఆవపిండి, కారం, నువ్వుల నూనె, ఉప్పు, మెంతులు, వెల్లుల్లి.",
    "availabilityEn": "Aged in traditional porcelain jars (jaadi).",
    "availabilityTe": "సాంప్రదాయ జాడీలలో నిల్వ ఉన్నది అందుబాటులో ఉండును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "tomato-pickle",
    "nameEn": "Tangy Andhra Tomato Nilva Pickle",
    "nameTe": "కమ్మని టమాటో నిల్వ పచ్చడి",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "Sun-concentrated ripe country tomatoes cooked with tangy tamarind, fragrant mustard tempering, and garlic cloves.",
    "descriptionTe": "ఎర్రటి నాటు టమాటాలు, చింతపండు, కమ్మని ఆవాల పోపు మరియు వెల్లుల్లితో చేసిన అద్భుతమైన నిల్వ పచ్చడి.",
    "image": "/images/avakaya-pickle.jpeg",
    "prices": {
      "250g": 149,
      "500g": 279,
      "1kg": 549
    },
    "ingredientsEn": "Ripe country tomatoes, tamarind, red chili powder, mustard seeds, garlic, groundnut oil, salt.",
    "ingredientsTe": "నాటు టమాటాలు, చింతపండు, కారం, ఆవాలు, వెల్లుల్లి, పల్లీ నూనె, ఉప్పు.",
    "availabilityEn": "Available daily.",
    "availabilityTe": "ప్రతిరోజూ సిద్ధంగా ఉండును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "ginger-pickle",
    "nameEn": "Spicy Tangy Allam Pachadi (Ginger Pickle)",
    "nameTe": "ఘాటైన తీపి-కారం అల్లం పచ్చడి",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "Famous Andhra accompaniment for pesarattu and hot rice, balancing fiery fresh ginger with country jaggery and sour tamarind.",
    "descriptionTe": "పెసరట్టు, అన్నంలోకి మేలైన ఘాటైన తాజా అల్లం, నాటు బెల్లం మరియు చింతపండు సమపాళ్లలో కలిపిన అల్లం పచ్చడి.",
    "image": "/images/avakaya-pickle.jpeg",
    "prices": {
      "250g": 179,
      "500g": 339,
      "1kg": 649
    },
    "ingredientsEn": "Fresh ginger, organic jaggery, tamarind, red chilies, mustard, groundnut oil, salt.",
    "ingredientsTe": "తాజా అల్లం, సేంద్రీయ బెల్లం, చింతపండు, ఎండుమిర్చి, ఆవాలు, నూనె, ఉప్పు.",
    "availabilityEn": "Prepared fresh in small batches.",
    "availabilityTe": "చిన్న బ్యాచ్‌లలో తాజాగా సిద్ధం చేస్తాము.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "pandu-mirchi-pickle",
    "nameEn": "Authentic Pandu Mirchi Pickle (Red Ripe Chili)",
    "nameTe": "నాటు పండుమిర్చి తొక్కు పచ్చడి",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "Fiery and rustic red ripe chili pickle stone-ground with sour tamarind and garlic. An absolute Andhra classic.",
    "descriptionTe": "తాజా ఎర్రటి పండుమిర్చి, చింతపండు మరియు వెల్లుల్లితో రోట్లో దంచిన ఘాటైన సాంప్రదాయ పండుమిర్చి తొక్కు.",
    "image": "/images/avakaya-pickle.jpeg",
    "prices": {
      "250g": 179,
      "500g": 339,
      "1kg": 649
    },
    "ingredientsEn": "Red ripe chilies (pandu mirchi), tamarind, salt, garlic, cumin, mustard seeds, oil.",
    "ingredientsTe": "పండుమిర్చి, చింతపండు, ఉప్పు, వెల్లుల్లి, జీలకర్ర, ఆవాలు, నూనె.",
    "availabilityEn": "Available daily.",
    "availabilityTe": "రోజూ లభించును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "gongura-pickle",
    "nameEn": "Famous Andhra Gongura Nilva Pickle",
    "nameTe": "ప్రసిద్ధ ఆంధ్రా గోంగూర నిల్వ పచ్చడి",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "The iconic Andhra Matha delicacy: sorrel leaves slowly simmered in cold-pressed oil, roasted spices, and crushed garlic.",
    "descriptionTe": "ఆంధ్రా మాతగా పిలవబడే పుల్లటి గోంగూర, వెల్లుల్లి, ఎండుమిర్చి పోపుతో పరిమళించే సాంప్రదాయ గోంగూర పచ్చడి.",
    "image": "/images/gongura-pickle.jpeg",
    "prices": {
      "250g": 250,
      "500g": 339,
      "1kg": 649
    },
    "ingredientsEn": "Fresh red sorrel leaves (gongura), dry red chillies, garlic, fenugreek, mustard, sesame oil, salt.",
    "ingredientsTe": "ఎర్ర గోంగూర, ఎండుమిర్చి, వెల్లుల్లి, మెంతులు, ఆవాలు, నువ్వుల నూనె, ఉప్పు.",
    "availabilityEn": "Prepared fresh to order.",
    "availabilityTe": "ఆర్డర్ మేరకు తాజాగా తయారుచేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "usirikaya-pickle",
    "nameEn": "Whole Amla Pickle (Usirikaya Avakaya)",
    "nameTe": "ఉసిరికాయ ఆవకాయ పచ్చడి",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "Nutritious seasonal wild gooseberries preserved in spiced mustard paste and sesame oil, bursting with vitamin C and tart flavor.",
    "descriptionTe": "స్వచ్ఛమైన పెద్ద ఉసిరికాయలతో, ఆవపిండి మరియు నువ్వుల నూనెతో పెట్టిన ఆరోగ్యకరమైన ఉసిరికాయ నిల్వ పచ్చడి.",
    "image": "/images/avakaya-pickle.jpeg",
    "prices": {
      "250g": 179,
      "500g": 339,
      "1kg": 649
    },
    "ingredientsEn": "Wild gooseberries (amla), mustard powder, red chili powder, sesame oil, salt, fenugreek.",
    "ingredientsTe": "పెద్ద ఉసిరికాయలు, ఆవపిండి, కారం, నువ్వుల నూనె, ఉప్పు, మెంతులు.",
    "availabilityEn": "Available seasonal and fresh.",
    "availabilityTe": "సీజనల్ తాజా పచ్చడి సిద్ధంగా ఉండును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "munakaya-pickle",
    "nameEn": "Drumstick Pickle (Munakkaya Pachadi)",
    "nameTe": "మునక్కాయ నిల్వ పచ్చడి",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "Tender fresh drumstick batons steeped in a robust mustard-tamarind marinade with aromatic garlic cloves.",
    "descriptionTe": "లేత మునక్కాయ ముక్కలు, చింతపండు, ఆవపిండి మరియు కారంతో చేసిన నోరూరించే ప్రత్యేక మునక్కాయ పచ్చడి.",
    "image": "/images/avakaya-pickle.jpeg",
    "prices": {
      "250g": 199,
      "500g": 379,
      "1kg": 729
    },
    "ingredientsEn": "Fresh tender drumsticks, tamarind pulp, red chili powder, mustard, garlic, oil, salt.",
    "ingredientsTe": "లేత మునక్కాయలు, చింతపండు, కారం, ఆవపిండి, వెల్లుల్లి, నూనె, ఉప్పు.",
    "availabilityEn": "Made fresh upon order.",
    "availabilityTe": "ఆర్డర్ మేరకు తాజాగా తయారుచేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "lemon-pickle",
    "nameEn": "Traditional Lemon Pickle (Nimmakaya Pachadi)",
    "nameTe": "సాంప్రదాయ నిమ్మకాయ ఊరగాయ",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "Zesty, sun-cured country lemons salted and seasoned with roasted fenugreek and red chili powder for a gut-friendly tang.",
    "descriptionTe": "బాగా ఊరిన నాటు నిమ్మకాయ ముక్కలు, మెంతిపిండి మరియు కారంతో చేసిన సాంప్రదాయ నిమ్మకాయ ఊరగాయ.",
    "image": "/images/avakaya-pickle.jpeg",
    "prices": {
      "250g": 149,
      "500g": 279,
      "1kg": 529
    },
    "ingredientsEn": "Juicy lemons, red chili powder, turmeric, fenugreek powder, salt.",
    "ingredientsTe": "నిమ్మకాయలు, కారం, పసుపు, మెంతిపిండి, ఉప్పు.",
    "availabilityEn": "Available daily.",
    "availabilityTe": "రోజూ లభించును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "chintapandu-pulihora-paste",
    "nameEn": "Temple Style Tamarind Pulihora Paste",
    "nameTe": "గుడి ప్రసాదం లాంటి చింతపండు పులిహోర పేస్ట్",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "Ready-to-mix concentrated tamarind paste simmered with jaggery, green chilies, mustard, crunchy peanuts, and curry leaves.",
    "descriptionTe": "చిక్కటి చింతపండు గుజ్జు, బెల్లం, పచ్చిమిర్చి, పల్లీలు, ఆవాల పోపుతో చేసిన దేవాలయ ప్రసాదం రుచినిచ్చే పులిహోర గుజ్జు.",
    "image": "/images/avakaya-pickle.jpeg",
    "prices": {
      "250g": 199,
      "500g": 379,
      "1kg": 729
    },
    "ingredientsEn": "Tamarind, groundnut oil, peanuts, green chilies, mustard, turmeric, curry leaves, salt.",
    "ingredientsTe": "చింతపండు, పల్లీ నూనె, వేరుశనగ గుళ్ళు, పచ్చిమిర్చి, ఆవాలు, పసుపు, కరివేపాకు, ఉప్పు.",
    "availabilityEn": "Available daily for instant pulihora.",
    "availabilityTe": "క్షణాల్లో పులిహోర కలుపుకోవడానికి సిద్ధంగా లభించును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "mango-pulihora-paste",
    "nameEn": "Raw Mango Pulihora Paste",
    "nameTe": "పచ్చి మామిడికాయ పులిహోర పేస్ట్",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "Grated tart raw mangoes gently sautéed with green chillies, ginger bits, mustard, hing, and crunchy lentils.",
    "descriptionTe": "తురిమిన పుల్లటి మామిడికాయ, అల్లం ముక్కలు, పచ్చిమిర్చి, పప్పుల పోపుతో చేసిన కమ్మని మామిడికాయ పులిహోర గుజ్జు.",
    "image": "/images/avakaya-pickle.jpeg",
    "prices": {
      "250g": 149,
      "500g": 279,
      "1kg": 529
    },
    "ingredientsEn": "Raw mango, green chilies, ginger, mustard, chana dal, urad dal, curry leaves, oil, salt.",
    "ingredientsTe": "పచ్చి మామిడికాయ తురుము, పచ్చిమిర్చి, అల్లం, ఆవాలు, పోపు పప్పులు, కరివేపాకు, నూనె, ఉప్పు.",
    "availabilityEn": "Prepared fresh upon order.",
    "availabilityTe": "ఆర్డర్ మేరకు తాజాగా తయారుచేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "chicken-pickle",
    "nameEn": "Andhra Chicken Pickle (With Bone)",
    "nameTe": "ఘుమఘుమలాడే ఆంధ్రా చికెన్ పచ్చడి (విత్ బోన్)",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "Crispy fried tender chicken pieces marinated in ginger-garlic paste, freshly ground spices, lemon juice, and pure groundnut oil.",
    "descriptionTe": "దోరగా వేయించిన చికెన్ ముక్కలు, అల్లం వెల్లుల్లి, ఘాటైన మసాలాలు, నిమ్మరసం మరియు పల్లీ నూనెతో చేసిన రుచికరమైన చికెన్ నిల్వ పచ్చడి.",
    "image": "/images/chicken-pickle.jpeg",
    "prices": {
      "250g": 349,
      "500g": 679,
      "1kg": 1299
    },
    "ingredientsEn": "Fresh chicken, ginger garlic paste, red chili powder, garam masala, lemon juice, groundnut oil, salt.",
    "ingredientsTe": "తాజా చికెన్, అల్లం వెల్లుల్లి పేస్ట్, కారం, గరం మసాలా, నిమ్మరసం, పల్లీ నూనె, ఉప్పు.",
    "availabilityEn": "Prepared fresh upon order for maximum aroma.",
    "availabilityTe": "తాజాదనంతో ఆర్డర్ మేరకు తయారుచేస్తాము.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "chicken-boneless-pickle",
    "nameEn": "Boneless Special Chicken Pickle",
    "nameTe": "బోన్‌లెస్ స్పెషల్ చికెన్ పచ్చడి",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "Premium boneless chicken breast cubes deep-fried and infused with authentic Andhra spices, garlic cloves, and aromatic red oil.",
    "descriptionTe": "ఎముకలు లేని మెత్తని చికెన్ ముక్కలతో ప్రత్యేకంగా చేసిన కమ్మని బోన్‌లెస్ చికెన్ పచ్చడి.",
    "image": "/images/chicken-pickle.jpeg",
    "prices": {
      "250g": 399,
      "500g": 769,
      "1kg": 1499
    },
    "ingredientsEn": "Boneless chicken, ginger garlic, roasted spices, lemon juice, cold-pressed oil, salt.",
    "ingredientsTe": "బోన్‌లెస్ చికెన్, అల్లం వెల్లుల్లి, సుగంధ మసాలాలు, నిమ్మరసం, స్వచ్ఛమైన నూనె, ఉప్పు.",
    "availabilityEn": "Made to order in small batches.",
    "availabilityTe": "ఆర్డర్ మేరకు ప్రత్యేక బ్యాచ్‌లలో చేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "mutton-pickle",
    "nameEn": "Traditional Andhra Mutton Pickle (With Bone)",
    "nameTe": "సాంప్రదాయ ఆంధ్రా మటన్ పచ్చడి (విత్ బోన్)",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "Succulent bone-in mutton pieces slow-cooked and fried, tossed in stone-ground clove-cinnamon masala and tangy lemon.",
    "descriptionTe": "లేత మటన్ ముక్కలు, దాల్చినచెక్క, లవంగాల ఘాటైన మసాలా మరియు నిమ్మరసంతో చేసిన రాచరికపు మటన్ పచ్చడి.",
    "image": "/images/chicken-pickle.jpeg",
    "prices": {
      "250g": 499,
      "500g": 969,
      "1kg": 1899
    },
    "ingredientsEn": "Tender mutton, ginger garlic, red chili powder, cloves, cinnamon, lemon juice, groundnut oil, salt.",
    "ingredientsTe": "లేత మటన్, అల్లం వెల్లుల్లి, కారం, లవంగాలు, చెక్క, నిమ్మరసం, నూనె, ఉప్పు.",
    "availabilityEn": "Prepared upon pre-order.",
    "availabilityTe": "ముందస్తు ఆర్డర్ మేరకు తాజాగా చేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "mutton-boneless-pickle",
    "nameEn": "Boneless Tender Mutton Pickle",
    "nameTe": "మెత్తని బోన్‌లెస్ మటన్ పచ్చడి",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "Juicy, hand-trimmed boneless mutton bites slowly browned and preserved in rich spiced garlic gravy oil.",
    "descriptionTe": "ఎముకలు లేని మెత్తటి మేక మాంసం ముక్కలతో చేసిన అత్యంత రుచికరమైన స్పెషల్ బోన్‌లెస్ మటన్ పచ్చడి.",
    "image": "/images/chicken-pickle.jpeg",
    "prices": {
      "250g": 549,
      "500g": 1049,
      "1kg": 2049
    },
    "ingredientsEn": "Boneless mutton, garlic, ginger, roasted spices, lemon juice, pure groundnut oil, salt.",
    "ingredientsTe": "బోన్‌లెస్ మటన్, వెల్లుల్లి, అల్లం, మసాలాలు, నిమ్మరసం, స్వచ్ఛమైన పల్లీ నూనె, ఉప్పు.",
    "availabilityEn": "Pre-order required.",
    "availabilityTe": "ముందస్తు ఆర్డర్ ద్వారా లభించును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "gongura-mutton-pickle",
    "nameEn": "Royal Gongura Mutton Pickle",
    "nameTe": "రాచరికపు గోంగూర మటన్ పచ్చడి",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "Legendary Andhra fusion of tender fried mutton pieces simmered in sour red gongura paste and rich spices.",
    "descriptionTe": "పుల్లటి ఎర్ర గోంగూర మరియు వేయించిన మటన్ ముక్కల అద్భుత కలయికతో చేసిన ప్రసిద్ధ రాయల్ గోంగూర మటన్ పచ్చడి.",
    "image": "/images/gongura-pickle.jpeg",
    "prices": {
      "250g": 599,
      "500g": 1149,
      "1kg": 2249
    },
    "ingredientsEn": "Tender mutton, red sorrel leaves (gongura), ginger garlic, chili, cloves, cinnamon, oil, salt.",
    "ingredientsTe": "మటన్, ఎర్ర గోంగూర, అల్లం వెల్లుల్లి, కారం, మసాలాలు, నూనె, ఉప్పు.",
    "availabilityEn": "Pre-order specialty.",
    "availabilityTe": "ముందస్తు ఆర్డర్ మేరకు సిద్ధం చేస్తాము.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "fish-pickle",
    "nameEn": "Spicy Coastal Fish Pickle (Chepala Pachadi)",
    "nameTe": "ఘాటైన తీరప్రాంత చేపల నిల్వ పచ్చడి",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "Boneless coastal fish cubes crisp-fried and tossed in tangy ginger-garlic, fenugreek, and mustard red chili gravy.",
    "descriptionTe": "దోరగా వేయించిన ముళ్ళు లేని చేప ముక్కలు, అల్లం వెల్లుల్లి మరియు ఆవ-మెంతి మసాలాతో చేసిన తీరప్రాంత చేపల పచ్చడి.",
    "image": "/images/chicken-pickle.jpeg",
    "prices": {
      "250g": 399,
      "500g": 779,
      "1kg": 1499
    },
    "ingredientsEn": "Fresh fish fillets, ginger garlic, red chili, mustard, fenugreek, vinegar/lemon, groundnut oil, salt.",
    "ingredientsTe": "చేప ముక్కలు, అల్లం వెల్లుల్లి, కారం, ఆవాలు, మెంతులు, నిమ్మరసం, పల్లీ నూనె, ఉప్పు.",
    "availabilityEn": "Freshly prepared to order.",
    "availabilityTe": "ఆర్డర్ మేరకు తాజాగా చేయబడును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": false
  },
  {
    "id": "prawns-pickle",
    "nameEn": "Rich Andhra Prawns Pickle (Royyala Pachadi)",
    "nameTe": "రుచికరమైన ఆంధ్రా రొయ్యల పచ్చడి",
    "categoryId": "pickles",
    "categoryNameEn": "Traditional Pickles & Pastes",
    "categoryNameTe": "సాంప్రదాయ పచ్చళ్ళు & పేస్ట్‌లు",
    "descriptionEn": "Succulent cleaned sea prawns crisp-fried and preserved in aromatic garlic, cumin, and fiery red chili masala oil.",
    "descriptionTe": "శుభ్రం చేసిన తాజా రొయ్యలను దోరగా వేయించి, ఘాటైన వెల్లుల్లి, జీలకర్ర మరియు ఎర్రటి కారంతో ఊరబెట్టిన రొయ్యల పచ్చడి.",
    "image": "/images/chicken-pickle.jpeg",
    "prices": {
      "250g": 449,
      "500g": 879,
      "1kg": 1699
    },
    "ingredientsEn": "Fresh prawns, ginger garlic paste, red chili, spices, lemon juice, groundnut oil, salt.",
    "ingredientsTe": "తాజా రొయ్యలు, అల్లం వెల్లుల్లి పేస్ట్, కారం, మసాలా దినుసులు, నిమ్మరసం, పల్లీ నూనె, ఉప్పు.",
    "availabilityEn": "Made upon pre-order.",
    "availabilityTe": "ముందస్తు ఆర్డర్ ప్రకారం లభించును.",
    "packageSizes": [
      "250g",
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "festive-box",
    "nameEn": "Grand Festive Celebration Box",
    "nameTe": "పండుగ స్పెషల్ సెలబ్రేషన్ బాక్స్",
    "categoryId": "festival-specials",
    "categoryNameEn": "Festival Specials",
    "categoryNameTe": "పండుగ ప్రత్యేకాలు",
    "descriptionEn": "A curated festival thali box containing Mysore Pak, Ariselu, Boondi Laddu, Sunnundalu, and crispy Murukulu, elegantly packed for celebrations.",
    "descriptionTe": "మైసూర్ పాక్, అరిసెలు, బూందీ లడ్డూ, సున్నుండలు మరియు కరకరలాడే మురుకులతో కూడిన అందమైన పండుగ గిఫ్ట్ బాక్స్.",
    "image": "/images/festive-gifting.jpeg",
    "prices": {
      "500g": 450,
      "1kg": 850
    },
    "ingredientsEn": "Assorted homemade sweets and savouries made with pure ghee and wholesome flours.",
    "ingredientsTe": "స్వచ్ఛమైన నెయ్యితో చేసిన వివిధ రకాల ఇంటి మిఠాయిలు మరియు పిండివంటలు.",
    "availabilityEn": "Special packaging available for festivals & events.",
    "availabilityTe": "పండుగలు మరియు శుభకార్యాల కోసం ప్రత్యేక గిఫ్ట్ ప్యాకింగ్ అందుబాటులో ఉండును.",
    "packageSizes": [
      "500g",
      "1kg"
    ],
    "featured": true
  },
  {
    "id": "veg-catering",
    "nameEn": "Traditional South Indian Vegetarian Catering",
    "nameTe": "సాంప్రదాయ శాకాహార విందు & కేటరింగ్",
    "categoryId": "catering",
    "categoryNameEn": "Catering & Feasts",
    "categoryNameTe": "కేటరింగ్ & విందు భోజనాలు",
    "descriptionEn": "Complete authentic South Indian vegetarian feast on banana leaves for weddings, housewarmings, festivals, and family celebrations.",
    "descriptionTe": "వివాహాలు, గృహప్రవేశాలు మరియు పండుగలకు అరటి ఆకులో స్వచ్ఛమైన ఆంధ్రా సాంప్రదాయ శాకాహార విందు భోజన కేటరింగ్.",
    "image": "/images/hero-assortment.jpeg",
    "prices": {
      "1kg": 0
    },
    "contactForPrice": true,
    "ingredientsEn": "Curated custom menus prepared with fresh organic produce and pure cow ghee.",
    "ingredientsTe": "తాజా కూరగాయలు మరియు స్వచ్ఛమైన నెయ్యితో మీ ఇష్టానుసారం మెనూ సిద్ధం చేస్తాము.",
    "availabilityEn": "Available upon advance event booking.",
    "availabilityTe": "ముందస్తు ఈవెంట్ బుకింగ్ ద్వారా లభించును.",
    "packageSizes": [
      "Custom Orders"
    ],
    "featured": false
  },
  {
    "id": "non-veg-catering",
    "nameEn": "Authentic Non-Veg Feast & Catering Services",
    "nameTe": "రుచికరమైన మాంసాహార విందు & కేటరింగ్",
    "categoryId": "catering",
    "categoryNameEn": "Catering & Feasts",
    "categoryNameTe": "కేటరింగ్ & విందు భోజనాలు",
    "descriptionEn": "Rich and spicy South Indian non-vegetarian feasts featuring authentic biryanis, mutton curries, chicken roasts, and seafood specials.",
    "descriptionTe": "ఘుమఘుమలాడే దమ్ బిర్యానీ, మటన్ కర్రీలు, నాటుకోడి వేపుడు మరియు సీఫుడ్ స్పెషల్స్‌తో కూడిన అద్భుతమైన మాంసాహార విందు కేటరింగ్.",
    "image": "/images/chicken-pickle.jpeg",
    "prices": {
      "1kg": 0
    },
    "contactForPrice": true,
    "ingredientsEn": "Fresh farm-sourced meats, stone-ground masalas, and wood-pressed oils.",
    "ingredientsTe": "తాజా మాంసం, రోట్లో దంచిన మసాలాలు మరియు స్వచ్ఛమైన నూనెలతో తయారుచేయబడును.",
    "availabilityEn": "Available upon advance event booking.",
    "availabilityTe": "ముందస్తు ఈవెంట్ బుకింగ్ ద్వారా లభించును.",
    "packageSizes": [
      "Custom Orders"
    ],
    "featured": false
  }
]
