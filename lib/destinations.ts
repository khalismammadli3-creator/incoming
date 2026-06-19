export interface Destination {
  slug: string
  name: string
  title: string
  tagline: string
  description: string
  itinerary: string
  duration: string
  price: string
  difficulty: string
  highlights: string[]
  included: string[]
  notIncluded: string[]
  faqs: { question: string; answer: string }[]
  image: string
  gallery: string[]
  coordinates: { lat: number; lng: number }
  region: string
  related: string[]
  category: string
}

export const destinations: Destination[] = [
  {
    slug: 'baku',
    name: 'Baku',
    title: 'Baku City Tour',
    tagline: 'Where ancient fire meets modern flame',
    description:
      'Baku, the capital of Azerbaijan, is a fascinating blend of medieval architecture and ultramodern skyscrapers. The Flame Towers dominate the skyline while the walled Old City (Icherisheher) transports you back to the medieval Silk Road era. Stroll along the scenic Baku Boulevard, explore the Palace of the Shirvanshahs, and discover a city that truly bridges East and West.',
    itinerary:
      'Day 1: Arrive in Baku, check in, evening stroll along Baku Boulevard and Flame Towers light show. Day 2: Explore Icherisheher (Old City) — Maiden Tower, Palace of the Shirvanshahs, caravanserais and bazaars. Day 3: Modern Baku — Heydar Aliyev Center (Zaha Hadid), Upland Park panorama, Little Venice. Day 4: Day trip to Bibi-Heybat Mosque, Highland Park, Nizami Street shopping. Day 5: Free morning, departure.',
    duration: '5 Days / 4 Nights',
    price: '',
    difficulty: 'Easy',
    highlights: [
      'Icherisheher UNESCO World Heritage Old City',
      'Iconic Flame Towers light show',
      'Heydar Aliyev Center by Zaha Hadid',
      'Palace of the Shirvanshahs',
      'Maiden Tower panoramic views',
      'Baku Boulevard waterfront promenade',
    ],
    included: [
      'Airport transfers',
      '4 nights hotel accommodation (3-star)',
      'Daily breakfast',
      'Licensed English-speaking guide',
      'All entrance fees',
      'City transportation',
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Lunch and dinner',
      'Personal expenses',
      'Optional activities',
    ],
    faqs: [
      {
        question: 'Is Baku safe for tourists?',
        answer:
          'Yes, Baku is considered very safe for tourists. The city has a low crime rate and locals are generally welcoming and helpful to visitors.',
      },
      {
        question: 'What is the best time to visit Baku?',
        answer:
          'Spring (April–June) and autumn (September–November) offer the most pleasant weather. Summers can be hot and dry while winters are mild but windy.',
      },
      {
        question: 'Do I need a visa to visit Azerbaijan?',
        answer:
          'Most nationalities can obtain an e-Visa online before travel. Check the official ASAN Visa portal for your country\'s requirements.',
      },
      {
        question: 'What currency is used in Azerbaijan?',
        answer:
          'The Azerbaijani Manat (AZN) is the local currency. Cards are widely accepted in Baku, but carry some cash for markets.',
      },
    ],
    image: '/images/baku.webp',
    gallery: [
      'https://picsum.photos/seed/baku1/800/600',
      'https://picsum.photos/seed/baku2/800/600',
      'https://picsum.photos/seed/baku3/800/600',
      'https://picsum.photos/seed/baku4/800/600',
    ],
    coordinates: { lat: 40.4093, lng: 49.8671 },
    region: 'Absheron Peninsula',
    related: ['gobustan', 'absheron', 'lahij'],
    category: 'Culture',
  },
  {
    slug: 'gobustan',
    name: 'Gobustan',
    title: 'Gobustan & Mud Volcanoes Tour',
    tagline: 'Ancient rock art and bubbling earth',
    description:
      'Gobustan National Park is home to over 6,000 rock engravings dating back 40,000 years, recognized by UNESCO as a World Heritage Site. Just nearby, the otherworldly mud volcanoes gurgle and bubble — Azerbaijan has more mud volcanoes than anywhere else on Earth. This combination of prehistoric art and geological wonder makes Gobustan an unmissable day trip from Baku.',
    itinerary:
      'Day 1: Depart Baku, visit Gobustan National Park museum, explore rock engravings on guided trail. Afternoon: Drive to Absheron mud volcanoes — witness the bubbling landscape. Evening: Return to Baku. Day 2: Optional flamingo watching at Gobustan coastline, traditional lunch at local restaurant.',
    duration: '2 Days / 1 Night',
    price: '',
    difficulty: 'Moderate',
    highlights: [
      'UNESCO World Heritage rock engravings',
      'Gobustan National Park museum',
      'Mud volcanoes — a global geological rarity',
      'Prehistoric petroglyphs dating to 40,000 BC',
      'Flamingo sightings at coastal wetlands',
      'Dramatic semi-desert landscapes',
    ],
    included: [
      'Transport from/to Baku',
      '1 night guesthouse accommodation',
      'Breakfast and lunch',
      'Park entrance fees',
      'Expert naturalist guide',
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Dinner',
      'Personal expenses',
    ],
    faqs: [
      {
        question: 'Can I visit Gobustan as a day trip from Baku?',
        answer:
          'Absolutely. Gobustan is about 65 km from Baku and can easily be combined with the mud volcanoes in a full-day trip.',
      },
      {
        question: 'Are the mud volcanoes dangerous?',
        answer:
          'The mud volcanoes are quite safe — the mud temperature is only slightly above ambient and eruptions are gentle. Follow your guide\'s instructions and stay on marked paths.',
      },
      {
        question: 'What should I wear?',
        answer:
          'Wear comfortable walking shoes and clothes you don\'t mind getting muddy near the volcanoes. Sun protection is essential in summer.',
      },
    ],
    image: '/images/gobustan.webp',
    gallery: [
      'https://picsum.photos/seed/gobustan1/800/600',
      'https://picsum.photos/seed/gobustan2/800/600',
      'https://picsum.photos/seed/gobustan3/800/600',
      'https://picsum.photos/seed/gobustan4/800/600',
    ],
    coordinates: { lat: 40.1081, lng: 49.3736 },
    region: 'Central Azerbaijan',
    related: ['baku', 'absheron', 'lankaran'],
    category: 'Nature',
  },
  {
    slug: 'sheki',
    name: 'Sheki',
    title: 'Sheki Silk Road Experience',
    tagline: 'A jewel of the ancient Silk Road',
    description:
      'Sheki is arguably Azerbaijan\'s most enchanting city — a former Silk Road hub nestled in the forested foothills of the Greater Caucasus. The Palace of the Sheki Khans, with its breathtaking stained-glass shebeke windows, is one of the finest examples of Eastern architecture in the world. Wander through caravanserais, taste the famous Sheki halva, and breathe in the fragrance of walnut forests.',
    itinerary:
      'Day 1: Depart Baku by train or car, arrive Sheki, check in at a caravanserai hotel. Evening stroll through the old bazaar. Day 2: Palace of the Sheki Khans, Sheki Fortress, Albanian church ruins. Traditional crafts workshop (shebeke glass). Day 3: Hike in Sheki forests, visit local silk factory, farewell dinner with Sheki piti (lamb stew). Day 4: Return to Baku.',
    duration: '4 Days / 3 Nights',
    price: '',
    difficulty: 'Easy',
    highlights: [
      'Palace of the Sheki Khans (UNESCO)',
      'Shebeke stained-glass craft workshop',
      'Historic caravanserai accommodation',
      'Albanian Christian church ruins',
      'Traditional Sheki cuisine (piti, halva)',
      'Forested Caucasus mountain foothills',
    ],
    included: [
      'Transport from/to Baku',
      '3 nights boutique hotel / caravanserai',
      'Daily breakfast',
      'Expert cultural guide',
      'All entrance fees',
      'Craft workshop session',
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Lunch and dinner (except farewell dinner)',
      'Personal expenses',
    ],
    faqs: [
      {
        question: 'How do I get to Sheki from Baku?',
        answer:
          'Sheki is about 350 km from Baku. You can take a comfortable overnight train, a bus, or hire a private car. The journey takes approximately 5–6 hours by car.',
      },
      {
        question: 'What is shebeke?',
        answer:
          'Shebeke is a traditional Azerbaijani craft of creating intricate stained-glass windows without nails or glue, using only hand-cut pieces of wood and coloured glass. The Palace of the Sheki Khans features some of the most magnificent examples.',
      },
      {
        question: 'Is Sheki suitable for families?',
        answer:
          'Yes, Sheki is very family-friendly with its scenic walking routes, craft workshops, and delicious local food. Children especially enjoy the palace and the colourful bazaar.',
      },
    ],
    image: '/images/sheki.webp',
    gallery: [
      'https://picsum.photos/seed/sheki1/800/600',
      'https://picsum.photos/seed/sheki2/800/600',
      'https://picsum.photos/seed/sheki3/800/600',
      'https://picsum.photos/seed/sheki4/800/600',
    ],
    coordinates: { lat: 41.1968, lng: 47.1706 },
    region: 'Northwestern Azerbaijan',
    related: ['gabala', 'quba', 'ganja'],
    category: 'Culture',
  },
  {
    slug: 'gabala',
    name: 'Gabala',
    title: 'Gabala Mountain Adventure',
    tagline: 'Azerbaijan\'s adventure capital in the Caucasus',
    description:
      'Gabala is nestled in a lush valley at the foot of the Greater Caucasus mountains, surrounded by dense forests, rushing rivers and dramatic peaks. Known as Azerbaijan\'s adventure tourism hub, it offers zip-lining, paragliding, archery, and skiing in winter. The Tufandag Mountain Resort and Nohur Lake make Gabala a year-round destination for nature lovers and thrill-seekers alike.',
    itinerary:
      'Day 1: Arrive Gabala, check in resort, evening at Nohur Lake. Day 2: Tufandag cable car ascent, panoramic Caucasus views, forest hiking trails. Day 3: Adventure activities — zip-line, archery, ATV rides in the mountains. Day 4: Visit Yeddi Gozel (Seven Beauties) waterfall, Gabala Archaeological Centre. Day 5: Return to Baku.',
    duration: '5 Days / 4 Nights',
    price: '',
    difficulty: 'Moderate',
    highlights: [
      'Tufandag cable car and ski resort',
      'Nohur Lake and surrounding forest',
      'Yeddi Gozel (Seven Beauties) waterfall',
      'Zip-lining over Caucasus valleys',
      'Paragliding with mountain panoramas',
      'Gabala Archaeological Museum',
    ],
    included: [
      'Transport from/to Baku',
      '4 nights mountain resort accommodation',
      'Daily breakfast',
      'Adventure activities package',
      'Cable car tickets',
      'Local guide',
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Lunch and dinner',
      'Personal expenses',
      'Ski equipment rental (winter)',
    ],
    faqs: [
      {
        question: 'Is Gabala good for skiing?',
        answer:
          'Yes! Tufandag Mountain Resort offers excellent skiing from December to March with modern ski lifts and well-groomed pistes suitable for all levels.',
      },
      {
        question: 'What is the best season to visit Gabala?',
        answer:
          'Gabala is beautiful year-round. Summer (June–September) is ideal for hiking and adventure sports; winter (December–March) is perfect for skiing.',
      },
      {
        question: 'Are the adventure activities suitable for beginners?',
        answer:
          'Most activities cater to all skill levels with professional instructors. Zip-lining, archery and ATV rides are beginner-friendly.',
      },
    ],
    image: '/images/gabala.webp',
    gallery: [
      'https://picsum.photos/seed/gabala1/800/600',
      'https://picsum.photos/seed/gabala2/800/600',
      'https://picsum.photos/seed/gabala3/800/600',
      'https://picsum.photos/seed/gabala4/800/600',
    ],
    coordinates: { lat: 40.9822, lng: 47.8449 },
    region: 'Northwestern Azerbaijan',
    related: ['sheki', 'quba', 'khinalig'],
    category: 'Mountains',
  },
  {
    slug: 'khinalig',
    name: 'Khinalig',
    title: 'Khinalig Village Tour',
    tagline: 'The highest inhabited village in Europe',
    description:
      'Khinalig (Xinaliq) sits at over 2,350 metres above sea level in the Greater Caucasus, making it one of the highest permanently inhabited settlements in Europe. The village has its own unique language spoken by no more than 2,000 people in the world. Stone houses stacked like a natural amphitheatre, ancient traditions, nomadic shepherds and breathtaking alpine scenery make this an extraordinary cultural and natural experience.',
    itinerary:
      'Day 1: Depart Baku early, drive via Quba, ascend mountain road to Khinalig (approximately 5–6 hours). Arrive, check in guesthouse, walk the village streets. Day 2: Full village immersion — visit ancient mosque, meet local craftspeople, shepherd interactions. Hike to valley viewpoint. Day 3: Morning hike, traditional breakfast, descend to Quba for lunch, return to Baku.',
    duration: '3 Days / 2 Nights',
    price: '',
    difficulty: 'Challenging',
    highlights: [
      'Europe\'s highest permanently inhabited village',
      'Unique Khinalig language and culture',
      'Ancient stone architecture amphitheatre',
      'Nomadic shepherd traditions',
      'Dramatic Greater Caucasus alpine scenery',
      'Authentic homestay experience',
    ],
    included: [
      '4WD transport from/to Baku',
      '2 nights authentic guesthouse',
      'All meals (full board)',
      'Experienced mountain guide',
      'Village entrance fee',
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Alcoholic beverages',
    ],
    faqs: [
      {
        question: 'Is the road to Khinalig accessible year-round?',
        answer:
          'The mountain road to Khinalig can be blocked by snow in winter (December–March). The best time to visit is from late April to October.',
      },
      {
        question: 'What is the altitude and should I worry about altitude sickness?',
        answer:
          'Khinalig sits at 2,350m. Most visitors do not experience altitude sickness, but it is wise to stay hydrated and ascend gradually. Those with heart conditions should consult a doctor.',
      },
      {
        question: 'Is there electricity and internet in Khinalig?',
        answer:
          'The village has basic electricity and limited mobile signal. This is part of the authentic experience — a genuine digital detox in the mountains.',
      },
    ],
    image: '/images/khinalig.webp',
    gallery: [
      'https://picsum.photos/seed/khinalig1/800/600',
      'https://picsum.photos/seed/khinalig2/800/600',
      'https://picsum.photos/seed/khinalig3/800/600',
      'https://picsum.photos/seed/khinalig4/800/600',
    ],
    coordinates: { lat: 41.3947, lng: 48.1433 },
    region: 'Greater Caucasus',
    related: ['quba', 'gabala', 'sheki'],
    category: 'Mountains',
  },
  {
    slug: 'quba',
    name: 'Quba',
    title: 'Quba Nature Escape',
    tagline: 'Apple orchards, waterfalls and mountain air',
    description:
      'Quba is a charming northern city surrounded by some of Azerbaijan\'s most dramatic mountain scenery. Famous for its apple and cherry orchards, the region is also home to Afurja waterfall — one of the tallest in the Caucasus — and the unique village of Krasnaya Sloboda (Red Settlement), the last all-Jewish village in the former Soviet Union, located just across the river from Quba.',
    itinerary:
      'Day 1: Arrive Quba, visit Krasnaya Sloboda (Red Settlement Jewish village), explore Quba city centre and mosque. Day 2: Drive to Afurja waterfall (170m high), hike forest trails, picnic lunch by the waterfall. Day 3: Visit apple orchards (seasonal), Tenghe canyon, return to Baku.',
    duration: '3 Days / 2 Nights',
    price: '',
    difficulty: 'Easy',
    highlights: [
      'Krasnaya Sloboda — unique Jewish heritage village',
      'Afurja waterfall (170 metres)',
      'Fresh apple and fruit orchards',
      'Tenghe canyon and river landscapes',
      'Traditional Quba carpet weaving',
      'Mountain village exploration',
    ],
    included: [
      'Transport from/to Baku',
      '2 nights hotel accommodation',
      'Daily breakfast',
      'Local guide',
      'Waterfall hike',
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Lunch and dinner',
      'Personal expenses',
    ],
    faqs: [
      {
        question: 'What is special about Krasnaya Sloboda?',
        answer:
          'Krasnaya Sloboda (also called Gyrmyzy Gasaba) is a unique Mountain Jewish settlement just across the Gudialchay River from Quba. It is considered the last all-Jewish village in the former Soviet Union and has a distinct culture and history.',
      },
      {
        question: 'When is apple season in Quba?',
        answer:
          'Apple harvest season is from August to October, when you can visit orchards, taste freshly picked apples and buy local jams and products.',
      },
    ],
    image: '/images/guba.webp',
    gallery: [
      'https://picsum.photos/seed/quba1/800/600',
      'https://picsum.photos/seed/quba2/800/600',
      'https://picsum.photos/seed/quba3/800/600',
      'https://picsum.photos/seed/quba4/800/600',
    ],
    coordinates: { lat: 41.3594, lng: 48.5126 },
    region: 'Northern Azerbaijan',
    related: ['khinalig', 'gabala', 'sheki'],
    category: 'Nature',
  },
  {
    slug: 'lahij',
    name: 'Lahij',
    title: 'Lahij Cultural Heritage Tour',
    tagline: 'A living museum of Azerbaijani craftsmanship',
    description:
      'Lahij is a remarkably preserved medieval village perched in the Ismailli mountains, famous for its centuries-old copper crafts. The narrow cobblestone streets are lined with workshops where master coppersmiths still practice techniques unchanged for generations. The village has its own Iranian dialect and is considered one of the most authentic craft villages in the Caucasus.',
    itinerary:
      'Day 1: Depart Baku, drive via Ismailli (2.5 hrs), scenic mountain road to Lahij. Check in boutique guesthouse, evening walk through craft lanes. Day 2: Full village day — copper workshop visits, try your hand at engraving, local herb market, waterfall hike in surrounding mountains. Day 3: Morning photography, traditional breakfast, return to Baku.',
    duration: '3 Days / 2 Nights',
    price: '',
    difficulty: 'Easy',
    highlights: [
      'Living copper craftsmanship tradition',
      'Cobblestone medieval streets',
      'Copper engraving workshop hands-on session',
      'Local herb and spice market',
      'Mountain waterfall hike',
      'Unique Lahij Iranian dialect community',
    ],
    included: [
      'Transport from/to Baku',
      '2 nights guesthouse accommodation',
      'Daily breakfast and one traditional lunch',
      'Craft workshop session',
      'Local guide',
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Other meals',
      'Craft souvenirs',
      'Personal expenses',
    ],
    faqs: [
      {
        question: 'What crafts can I buy in Lahij?',
        answer:
          'Lahij is famous for handmade copper items — trays, jugs, pots, jewellery boxes and decorative pieces. Each piece is hand-engraved and unique. Prices are reasonable compared to city markets.',
      },
      {
        question: 'How difficult is the mountain road to Lahij?',
        answer:
          'The road is paved but narrow and winding. It is perfectly navigable in a standard car but can be closed after heavy snow in winter. Spring and autumn offer beautiful scenery along the route.',
      },
    ],
    image: '/images/lahij.webp',
    gallery: [
      'https://picsum.photos/seed/lahij1/800/600',
      'https://picsum.photos/seed/lahij2/800/600',
      'https://picsum.photos/seed/lahij3/800/600',
      'https://picsum.photos/seed/lahij4/800/600',
    ],
    coordinates: { lat: 40.8478, lng: 48.3694 },
    region: 'Central Azerbaijan',
    related: ['baku', 'sheki', 'gabala'],
    category: 'Culture',
  },
  {
    slug: 'ganja',
    name: 'Ganja',
    title: 'Ganja Historical Discovery',
    tagline: 'Azerbaijan\'s second city, rich in history',
    description:
      'Ganja is Azerbaijan\'s second-largest city and one of the oldest in the South Caucasus, with over 2,500 years of history. Birthplace of the great medieval poet Nizami Ganjavi, the city blends historical monuments with a vibrant modern atmosphere. The Bottle House, Javad Khan Street, and the magnificent Imamzadeh religious complex are among its most iconic attractions.',
    itinerary:
      'Day 1: Arrive Ganja, visit Nizami Ganjavi Mausoleum, Ganja State History Museum. Explore old city streets. Day 2: Imamzadeh religious complex, the famous Bottle House (a unique house built from 48,000 bottles), Ganja Gate archaeological site. Day 3: Goygol National Park day trip — one of the most pristine alpine lakes in the Caucasus. Day 4: Return to Baku.',
    duration: '4 Days / 3 Nights',
    price: '',
    difficulty: 'Easy',
    highlights: [
      'Mausoleum of Nizami Ganjavi',
      'Imamzadeh religious complex',
      'The iconic Bottle House',
      'Goygol National Park and pristine lake',
      'Ganja Gate ancient archaeological site',
      'Traditional Ganja cuisine',
    ],
    included: [
      'Transport from/to Baku',
      '3 nights hotel accommodation',
      'Daily breakfast',
      'Local historical guide',
      'All entrance fees',
      'Goygol Park day trip',
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Lunch and dinner',
      'Personal expenses',
    ],
    faqs: [
      {
        question: 'Who was Nizami Ganjavi?',
        answer:
          'Nizami Ganjavi (1141–1209) is one of the greatest poets of Persian and Azerbaijani literature. His romantic epics — including Layla and Majnun, and Khosrow and Shirin — influenced literature across the Islamic world and beyond.',
      },
      {
        question: 'What is the Bottle House?',
        answer:
          'The Bottle House (Şüşə Ev) was built by a local craftsman in the 1960s using approximately 48,000 bottles embedded in the walls. It is a unique example of folk architecture and one of Ganja\'s most photographed landmarks.',
      },
    ],
    image: '/images/ganja.webp',
    gallery: [
      'https://picsum.photos/seed/ganja1/800/600',
      'https://picsum.photos/seed/ganja2/800/600',
      'https://picsum.photos/seed/ganja3/800/600',
      'https://picsum.photos/seed/ganja4/800/600',
    ],
    coordinates: { lat: 40.6828, lng: 46.3606 },
    region: 'Western Azerbaijan',
    related: ['sheki', 'lahij', 'baku'],
    category: 'History',
  },
  {
    slug: 'lankaran',
    name: 'Lankaran',
    title: 'Lankaran Eco Tour',
    tagline: 'Subtropical paradise on the Caspian coast',
    description:
      'Lankaran lies in the subtropical Talysh region near the Iranian border, blessed with a unique humid climate, lush forests, and incredible biodiversity. The Hirkan National Park — a UNESCO Biosphere Reserve — protects ancient tertiary-period forests with trees found nowhere else on Earth. The region is also famed for its tea culture, pomegranates, and fresh Caspian fish.',
    itinerary:
      'Day 1: Depart Baku, arrive Lankaran (4 hrs), check in, stroll Lankaran fortress and seafront. Day 2: Hirkan National Park guided trekking — ancient Hyrcanian forest, rare flora and fauna. Picnic lunch in the forest. Day 3: Masalli tea plantation tour, Lerik longevity village (home to many centenarians), sunset at Caspian shore. Day 4: Fresh fish breakfast, return to Baku.',
    duration: '4 Days / 3 Nights',
    price: '',
    difficulty: 'Moderate',
    highlights: [
      'Hirkan National Park (UNESCO Biosphere Reserve)',
      'Ancient Hyrcanian forest — relict species',
      'Masalli tea plantations',
      'Lerik — the village of longevity',
      'Caspian Sea seafood experience',
      'Lankaran fortress and old town',
    ],
    included: [
      'Transport from/to Baku',
      '3 nights hotel accommodation',
      'Daily breakfast and one picnic lunch',
      'Hirkan Park guide and entrance',
      'Tea plantation visit',
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Other meals',
      'Personal expenses',
    ],
    faqs: [
      {
        question: 'What makes Hirkan Forest special?',
        answer:
          'Hirkan (Hyrcanian) forests are among the world\'s oldest surviving temperate forests, dating back 25–50 million years. They contain many endemic and rare species including the Hyrcanian oak, iron tree and the rare Caucasian leopard.',
      },
      {
        question: 'Is Lankaran suitable year-round?',
        answer:
          'Yes, the subtropical climate makes Lankaran pleasant year-round. Summer is warm and humid; winter is mild. Spring and autumn are ideal for trekking in the national park.',
      },
    ],
    image: '/images/lankaran.webp',
    gallery: [
      'https://picsum.photos/seed/lankaran1/800/600',
      'https://picsum.photos/seed/lankaran2/800/600',
      'https://picsum.photos/seed/lankaran3/800/600',
      'https://picsum.photos/seed/lankaran4/800/600',
    ],
    coordinates: { lat: 38.7529, lng: 48.8481 },
    region: 'Southern Azerbaijan',
    related: ['gobustan', 'baku', 'lahij'],
    category: 'Nature',
  },
  {
    slug: 'absheron',
    name: 'Absheron',
    title: 'Absheron Fire Temples & Yanar Dag Tour',
    tagline: 'Land of eternal flames and ancient fire worship',
    description:
      'The Absheron Peninsula is the historic heartland of Azerbaijan — Land of Fire. Ateshgah Fire Temple, once a pilgrimage site for Zoroastrian, Hindu, and Sikh worshippers, burned for centuries on natural gas seeping from the earth. Nearby Yanar Dag (Burning Mountain) has blazed continuously for decades. Combined with medieval Ramana Castle and the serene Mardakan Palace, Absheron offers a uniquely mystical day away from Baku.',
    itinerary:
      'Day 1: Ateshgah Fire Temple — explore the ancient caravanserai and fire altars. Drive to Yanar Dag — witness the hillside that has burned for over 65 years. Visit Mardakan Octagonal Tower and Round Tower (14th-century castles). Sunset picnic at Absheron coastline. Day 2: Bibi-Heybat Mosque and Absheron oil heritage sites. Return to Baku.',
    duration: '2 Days / 1 Night',
    price: '',
    difficulty: 'Easy',
    highlights: [
      'Ateshgah Zoroastrian Fire Temple',
      'Yanar Dag — the eternal burning hillside',
      'Mardakan medieval castles',
      'Bibi-Heybat Mosque',
      'Absheron oil heritage landscape',
      'Caspian Sea coastal sunset',
    ],
    included: [
      'Transport from Baku',
      '1 night guesthouse',
      'Breakfast',
      'All entrance fees',
      'Expert guide',
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Lunch and dinner',
      'Personal expenses',
    ],
    faqs: [
      {
        question: 'Why did Ateshgah attract fire worshippers?',
        answer:
          'Natural gas seeping from the ground created eternal flames, which Zoroastrians, Hindus and Sikhs revered as sacred. The current temple structure dates from the 17th–18th centuries and served as a rest stop on the Silk Road.',
      },
      {
        question: 'Is Yanar Dag a volcano?',
        answer:
          'No, Yanar Dag is not a volcano. It is a hillside where natural gas continuously seeps from the surface and burns. The fire has been documented since at least the 1950s and likely much earlier.',
      },
    ],
    image: '/images/absheron.webp',
    gallery: [
      'https://picsum.photos/seed/absheron1/800/600',
      'https://picsum.photos/seed/absheron2/800/600',
      'https://picsum.photos/seed/absheron3/800/600',
      'https://picsum.photos/seed/absheron4/800/600',
    ],
    coordinates: { lat: 40.5018, lng: 50.0742 },
    region: 'Absheron Peninsula',
    related: ['baku', 'gobustan', 'ganja'],
    category: 'History',
  },
]
