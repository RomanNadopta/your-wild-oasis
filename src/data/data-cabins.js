// import { supabaseUrl } from '../services/supabase';

// const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const cabins = [
  {
    type: 'warm',
    location: 'Krakow',
    name: 'Willa Norman',
    popular: true,
    maxCapacity: 6,
    kingBed: 2,
    bedrooms: 3,
    bathroom: 2,
    sleepComfortably: 6,
    pets: 1,
    regularPrice: 250,
    discount: 0,
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    description: [
      {
        paragraph: `Featuring garden views, Willa Norman offers accommodation with a garden, a terrace and barbecue facilities, around 8.8 km from Schindler Factory Museum. The property is set 9 km from National Museum of Krakow, 9 km from Town Hall Tower and 9 km from Main Market Square.`,
      },
      {
        paragraph: `The property is non-smoking and is located 8.5 km from Wawel Royal Castle. With free WiFi, this 3-bedroom villa provides a TV, a washing machine and a fully equipped kitchen with a dishwasher and oven.`,
      },
      {
        paragraph: `Towels and bed linen are provided in the villa. The property has an outdoor dining area. The villa complex has a picnic area where you can spend a day out in the open.`,
      },
      {
        paragraph: `Cloth Hall is 9 km from the villa, while St. Mary's Basilica is 9.4 km away. The nearest airport is John Paul II International Kraków–Balice, 18 km from Willa Norman, and the property offers a paid airport shuttle service.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Krakow',
    name: 'Villa Sofia',
    popular: true,
    maxCapacity: 2,
    kingBed: 1,
    bedrooms: 1,
    bathroom: 1,
    sleepComfortably: 2,
    pets: 0,
    regularPrice: 350,
    discount: 25,
    images: [
      `https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Attractively set in the centre of Kraków, Villa Sofia features air-conditioned rooms with free WiFi and private parking. There is a private entrance to the villa for the convenience of those who stay. The villa has family rooms.`,
      },
      {
        paragraph: `The villa provides guests with a terrace, inner courtyard views, a seating area, a flat-screen TV, a fully equipped kitchenette with a dishwasher and an oven, and a private bathroom with a bath and a hair dryer. A toaster, a fridge and a stovetop are also available, and a kettle. Every unit is equipped with bed linen and towels at the villa complex.`,
      },
      {
        paragraph: `Popular points of interest near the villa include the National Museum of Krakow, Town Hall Tower and Main Market Square. The nearest airport is John Paul II International Kraków–Balice, 15 km from Villa Sofia, and the property offers a paid airport shuttle service.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Krakow',
    name: 'Green Lawn',
    maxCapacity: 8,
    kingBed: 1,
    bedrooms: 4,
    bathroom: 2,
    sleepComfortably: 8,
    pets: 1,
    regularPrice: 300,
    discount: 0,
    images: [
      `https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Situated in Kraków and only 8,3 km from Wawel Royal Castle, Green Lawn features accommodation with garden views, free WiFi and free private parking. Featuring a garden, the property is located within 8.7 km of Town Hall Tower. The property is non-smoking and is located 8.7 km from the National Museum of Krakow.`,
      },
      {
        paragraph: `The holiday home has a terrace, 1 bedroom, a living room and a well-equipped kitchenette with a fridge and a stovetop. Towels and bed linen are available in the holiday home. The property has an outdoor dining area.`,
      },
      {
        paragraph: `Main Market Square is 8.7 km from the holiday home, while Cloth Hall is 8.7 km from the property. The nearest airport is John Paul II International Kraków–Balice Airport, 9 km from Green Lawn.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Krakow',
    name: 'Family House',
    maxCapacity: 7,
    kingBed: 1,
    bedrooms: 3,
    bathroom: 1,
    sleepComfortably: 6,
    pets: 2,
    regularPrice: 500,
    discount: 50,
    images: [
      `https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Featuring inner courtyard views, Family House provides accommodation with a garden and a patio, around 12 km from the Schindler Factory Museum. The air-conditioned accommodation is 5.8 km from Wieliczka Salt Mine, and guests can benefit from private parking available on-site and free WiFi. The property is non-smoking and is located 12 km from Wawel Royal Castle.`,
      },
      {
        paragraph: `The holiday home with a terrace and garden views features 3 bedrooms, a living room, a flat-screen TV, an equipped kitchen with a dishwasher and a microwave, and 2 bathrooms with a bidet. Towels and bed linen are provided in the holiday home. The property has an outdoor dining area.`,
      },
      {
        paragraph: `Guests at the holiday home will be able to enjoy activities in and around Kraków, like cycling. Family House has a picnic area and a barbecue.`,
      },
      {
        paragraph: `Town Hall Tower is 13 km from the accommodation, while Main Market Square is 13 km away. The nearest airport is John Paul II International Kraków–Balice Airport, 24 km from Family House.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Krakow',
    name: 'Klimatyczny dom w Krakowie',
    maxCapacity: 6,
    kingBed: 1,
    bedrooms: 3,
    bathroom: 1,
    sleepComfortably: 6,
    pets: 2,
    regularPrice: 350,
    discount: 0,
    images: [
      `https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1617198998846-56e8a4c6e7b7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Situated in Kraków in the Lesser Poland region, Klimatyczny dom w Krakowie features accommodation with free WiFi and free private parking. Featuring a garden, the property is located within 9.1 km of Town Hall Tower. The property is non-smoking and is located 8.7 km from Marszałek Piłsudski Stadium.`,
      },
      {
        paragraph: `The villa with a terrace and garden views has 3 bedrooms, a living room, a flat-screen TV, an equipped kitchen with a dishwasher and an oven, and 2 bathrooms with a bath. Towels and bed linen are available in the villa. The property has an outdoor dining area.`,
      },
      {
        paragraph: `Main Market Square is 9.1 km from the villa, while Cloth Hall is 9.1 km from the property. The nearest airport is John Paul II International Kraków–Balice Airport, 7 km from Klimatyczny dom w Krakowie.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Krakow',
    name: 'Domek na uboczu',
    maxCapacity: 4,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 2,
    sleepComfortably: 4,
    pets: 0,
    regularPrice: 800,
    discount: 100,
    images: [
      `https://images.unsplash.com/photo-1598714805247-5dd440d87124?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1617228069096-4638a7ffc906?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1620995559331-e5507e0a169f?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Offering a garden and garden view, Domek na uboczu is located in Kraków, 6 km from Krakow Central Railway Station and 6,3 km from Galeria Krakowska. This property offers access to a terrace, free private parking and free WiFi. The property is non-smoking and is situated 5.3 km from Krakow Aqua Park.`,
      },
      {
        paragraph: `The villa consists of 2 bedrooms, a living room, a fully equipped kitchen with a dishwasher and a coffee machine, and 2 bathrooms with a shower and a hair dryer. This villa also includes a balcony that doubles up as an outdoor dining area. For added privacy, the accommodation features a private entrance.`,
      },
      {
        paragraph: `The villa complex has a picnic area where you can spend a day out in the open.`,
      },
      {
        paragraph: `St. Florian's Gate is 6.5 km from the villa, while Lost Souls Alley is 7.4 km from the property. The nearest airport is John Paul II International Kraków–Balice Airport, 17 km from Domek na uboczu.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Krakow',
    name: 'Aparthotel',
    maxCapacity: 3,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 3,
    pets: 0,
    regularPrice: 600,
    discount: 100,
    images: [
      `https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1543503103-f94a0036ed9d?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Offering city views, Aparthotel is an accommodation set in Kraków, less than 1 km from Town Hall Tower and an 8-minute walk from Main Market Square. Among the facilities at this property are a lift and full-day security, along with free WiFi throughout the property. The property is less than 1 km from the National Museum of Krakow and within 900 metres of the city centre.`,
      },
      {
        paragraph: `All units in the Aparthotel are fitted with air conditioning, a flat-screen TV with streaming services, a kitchenette, a dining area, a safety deposit box and a private bathroom with a shower, a hairdryer and free toiletries. A dishwasher, a microwave and a toaster are also offered, as well as a coffee machine and a kettle. At the Aparthotel, units come with bed linen and towels.`,
      },
      {
        paragraph: `There is a coffee shop, and a minimarket is also available.`,
      },
      {
        paragraph: `Sightseeing tours are available within easy reach of the property. If you would like to discover the area, walking tours are possible in the surroundings.`,
      },
      {
        paragraph: `Popular points of interest near the Aparthotel include Cloth Hall, Marszałek Piłsudski Stadium and Wisla Krakow Stadium. The nearest airport is John Paul II International Kraków–Balice, 15 km from Aparthotel, and the property offers a paid airport shuttle service.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Krakow',
    name: 'Hotel Kraków',
    maxCapacity: 2,
    kingBed: 1,
    bedrooms: 1,
    bathroom: 1,
    sleepComfortably: 2,
    pets: 0,
    regularPrice: 1400,
    discount: 0,
    images: [
      `https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Set in Kraków, 700 metres from Lost Souls Alley, Hotel Kraków offers accommodation with a fitness centre, private parking, a restaurant and a bar. This 4-star hotel offers a tour desk and luggage storage space. The accommodation provides a 24-hour front desk, airport transfers, room service and free WiFi throughout the property.`,
      },
      {
        paragraph: `The hotel will provide guests with air-conditioned rooms with a desk, a kettle, a fridge, a safety deposit box, a flat-screen TV and a private bathroom with a shower. At Hotel Kraków all rooms are equipped with bed linen and towels.`,
      },
      {
        paragraph: `The daily breakfast offers buffet, continental or vegetarian options.`,
      },
      {
        paragraph: `Popular points of interest near the accommodation include St. Mary's Basilica, St. Florian's Gate and Krakow Central Railway Station. The nearest airport is John Paul II International Kraków–Balice Airport, 17 km from Hotel Kraków.`,
      },
    ],
  },

  // Uznam
  {
    type: 'warm',
    location: 'Uznam',
    name: 'Baltic Home Molly',
    popular: true,
    maxCapacity: 10,
    kingBed: 2,
    bedrooms: 5,
    bathroom: 2,
    sleepComfortably: 10,
    pets: 3,
    regularPrice: 250,
    discount: 0,
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    description: [
      {
        paragraph: `Baltic Home Molly is conveniently located just 150 metres from the wide, sandy beach in Świnoujście. It offers spacious rooms and apartments with free internet and a flat-screen TV.`,
      },
      {
        paragraph: `All elegant rooms and apartments at the Molly are self-catered and come with a coffee maker and a kitchenette. Each apartment has a balcony and beach equipment. A microwave, a toaster, an iron and a hairdryer are available upon request, free of charge.`,
      },
      {
        paragraph: `Guests can benefit from underground, secure parking. There are several cycling paths along the Baltic Sea just a few hundred metres away.`,
      },
      {
        paragraph: `Baltic Home Molly is housed in a traditionally designed apartment complex. The German border is only 3 km away.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Uznam',
    name: 'Sten Apart Hostel',
    maxCapacity: 2,
    kingBed: 1,
    bedrooms: 1,
    bathroom: 1,
    sleepComfortably: 2,
    pets: 0,
    regularPrice: 350,
    discount: 25,
    images: [
      `https://images.unsplash.com/photo-1632566853092-a0faa4665585?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Located in Świnoujście, 1,4 km from Swinoujscie Beach, Sten Apart Hostel features views of the city. Among the facilities at this property are a shared kitchen and room service, along with free WiFi throughout the property. Private parking is available on-site.`,
      },
      {
        paragraph: `All units are equipped with a flat-screen TV with satellite channels, a kettle, a shower, a hairdryer and a wardrobe. Selected rooms have a kitchenette with a fridge, a microwave and a stovetop. At the hostel, each room includes bed linen and towels.`,
      },
      {
        paragraph: `Popular points of interest near Sten Apart Hostel include Baltic Park Molo Aquapark, Zdrojowy Park and Sea Fishing Museum. The nearest airport is Heringsdorf Airport, 9 km from the accommodation.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Uznam',
    name: 'Baltic Home',
    maxCapacity: 8,
    kingBed: 2,
    bedrooms: 4,
    bathroom: 2,
    sleepComfortably: 8,
    pets: 0,
    regularPrice: 300,
    discount: 0,
    images: [
      `https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Baltic Home is located in Świnoujście, 300 metres from its sandy beach. It offers modern apartments with free internet, a fully equipped kitchenette and an LCD TV with cable channels.`,
      },
      {
        paragraph: `All apartments at the Baltic are spacious and decorated with stylish furniture. Each has a balcony or a terrace and a modern bathroom with a shower.`,
      },
      {
        paragraph: `A microwave, a toaster, an iron and a hair dryer are available for free on request.`,
      },
      {
        paragraph: `Baltic Home is housed in the Trzy Korony Complex, a closed and monitored area. Private underground parking is available on site.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Uznam',
    name: 'Mellisa',
    popular: true,
    maxCapacity: 2,
    kingBed: 1,
    bedrooms: 1,
    bathroom: 1,
    sleepComfortably: 2,
    pets: 0,
    regularPrice: 500,
    discount: 50,
    images: [
      `https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Mellisa offers accommodation in Świnoujście, 400 metres from both Zdrojowy Park and a sandy beach. It is 180 metres to a modern Baltic Park Molo Aquapark. Guests can enjoy the on-site bar, the sun terrace and free WiFi throughout.`,
      },
      {
        paragraph: `The rooms feature a flat-screen TV with cable channels. A terrace or balcony are featured in certain rooms. All rooms have a private bathroom, complete with a shower cabin. Free baby equipment including a baby bath, potty, baby toilet seat and a step stool, can be provided upon prior request.`,
      },
      {
        paragraph: `There is a 24-hour front desk and gift shop at Mellisa. At surcharge, it is possible to arrange a massage and use the private parking on site. Parking is available upon prior reservation and the number of parking spaces is limited.`,
      },
      {
        paragraph: `Szczecin Goleniów Airport is within 70 km from the property.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Uznam',
    name: 'Holiday House',
    maxCapacity: 6,
    kingBed: 1,
    bedrooms: 3,
    bathroom: 1,
    sleepComfortably: 6,
    pets: 1,
    regularPrice: 350,
    discount: 0,
    images: [
      `https://images.unsplash.com/photo-1599333915758-58e201c10395?w=1700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxob3VzZXN8ZW58MHx8MHx8fDA%3D`,
      `https://images.unsplash.com/photo-1617198998846-56e8a4c6e7b7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `This hotel is located in the Baltic Sea resort of Świnoujście, 400 metres from Świnoujście Beach and Promenade. Holiday House offers chalets with free Wi-Fi and a fully equipped kitchenette.`,
      },
      {
        paragraph: `The bright and spacious chalets at Holiday House feature modern décor and laminate floors. All chalets include a balcony and terrace, cable TV and a private bathroom.`,
      },
      {
        paragraph: `Towels and linens are provided at Holiday House Świnoujście and are changed once a week.`,
      },
      {
        paragraph: `Guests at Holiday House are welcome to relax in Park Zdrojowy, which is directly beside the chalets. Bicycles can be hired to explore the Baltic Sea Coast.`,
      },
      {
        paragraph: `Private parking is free at Holiday House. It is a 15-minute walk from Świnoujście town centre as well as Świnoujście Bus and Train Stations. The German border is 3 km away.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Uznam',
    name: 'Willa Aphina',
    maxCapacity: 6,
    kingBed: 1,
    bedrooms: 3,
    bathroom: 1,
    sleepComfortably: 6,
    pets: 1,
    regularPrice: 800,
    discount: 100,
    images: [
      `https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1617228069096-4638a7ffc906?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1620995559331-e5507e0a169f?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `All the rooms of Willa Aphina come with beautiful panelled floors and elegant wooden furnishings. Each has a balcony, satellite TV and a bathroom equipped with a hairdryer and bathrobes.`,
      },
      {
        paragraph: `A breakfast buffet is available every morning.`,
      },
      {
        paragraph: `Having the widest beach on the Polish coast, Świnoujście’s tranquil atmosphere makes it ideal for a relaxing break.`,
      },
      {
        paragraph: `Free private parking is possible on-site. Heringsdorf Airport is 10 km away, and there is a UBB station within 3 km.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.4 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Uznam',
    name: 'Baltic Apartments',
    maxCapacity: 4,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 4,
    pets: 0,
    regularPrice: 600,
    discount: 100,
    images: [
      `https://images.unsplash.com/photo-1583377519891-1eea1c2e3947?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1543503103-f94a0036ed9d?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Offering sea views, Baltic Apartments is an accommodation located in Świnoujście, 600 metres from Swinoujscie Beach and 1,5 km from Plaza Cztery Wiatry. This beachfront property offers access to free WiFi and free private parking. Guests can access the apartment via a private entrance.`,
      },
      {
        paragraph: `Each unit has a terrace, a fully equipped kitchenette with a toaster, a dining area and a flat-screen TV, while the private bathroom includes a walk-in shower. A fridge, a stovetop and kitchenware are also provided, as well as a coffee machine and a kettle. At the apartment complex, every unit has bed linen and towels.`,
      },
      {
        paragraph: `Guests at the apartment will be able to enjoy activities in and around Świnoujście, like hiking.`,
      },
      {
        paragraph: `Popular points of interest near Baltic Apartments include Baltic Park Molo Aquapark, Zdrojowy Park and Promenade. The nearest airport is Heringsdorf Airport, 11 km from the accommodation.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.2 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Uznam',
    name: 'Baltic Plaza',
    maxCapacity: 4,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 4,
    pets: 0,
    regularPrice: 1400,
    discount: 0,
    images: [
      `https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Baltic Plaza is situated on the seafront in Świnoujście, 400 metres from Swinoujscie Beach and 1,6 km from Plaza Cztery Wiatry. The property has sea and inner courtyard views and is 60 metres from Baltic Park Molo Aquapark. Free WiFi is available and private parking can be arranged at an extra charge.`,
      },
      {
        paragraph: `At the apartment complex, units have a wardrobe, a flat-screen TV, a private bathroom, bed linen and towels. A dishwasher, an oven and a toaster are also offered, as well as a coffee machine and a kettle. At the apartment complex, all units are allergy-free.`,
      },
      {
        paragraph: `Popular points of interest near the apartment include Zdrojowy Park, Promenade and The Angel's Fort. The nearest airport is Heringsdorf Airport, 10 km from Baltic Home Plaza.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.3 for a two-person trip.`,
      },
    ],
  },

  // Olsztyn
  {
    type: 'warm',
    location: 'Olsztyn',
    name: 'Hotel Olsztyn',
    popular: true,
    maxCapacity: 8,
    kingBed: 1,
    bedrooms: 4,
    bathroom: 2,
    sleepComfortably: 8,
    pets: 2,
    regularPrice: 250,
    discount: 0,
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    description: [
      {
        paragraph: `Located in the centre of Olsztyn, Hotel Olsztyn invites you to enjoy its warm atmosphere, comfortable and cosy accommodation, good cuisine and relaxation amenities.`,
      },
      {
        paragraph: `The rooms of Hotel Olsztyn are simply decorated and functional. They all come with en suite facilities, a flat-screen TV with cable channels, free water and free Wi-Fi.`,
      },
      {
        paragraph: `The buffet breakfast will provide a good start to your day. Later on, you can sample a variety of dishes from European cuisine at the restaurant.`,
      },
      {
        paragraph: `Olsztyn is a historical city with a picturesque Old Town. It is surrounded by lakes and forests, so you can spend some time in a beautiful natural environment during your stay.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.2 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Olsztyn',
    name: 'Beżowe Home',
    maxCapacity: 4,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 4,
    pets: 0,
    regularPrice: 350,
    discount: 25,
    images: [
      `https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1632566853092-a0faa4665585?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Offering a shared lounge and inner courtyard view, Beżowe Home is situated in Olsztyn, less than 1 km from Olsztyn Stadium and 3,4 km from Olsztyn Bus Station. This property offers access to a balcony, free private parking and free WiFi. The accommodation features a lift and a shared kitchen for guests.`,
      },
      {
        paragraph: `The apartment with a terrace and city views has 2 bedrooms, a living room, a flat-screen TV, an equipped kitchenette with a dishwasher and an oven, and 1 bathroom with a walk-in shower. Towels and bed linen are offered in the apartment. The property has an outdoor dining area.`,
      },
      {
        paragraph: `For guests with children, the apartment offers outdoor play equipment.`,
      },
      {
        paragraph: `Urania Sports Arena is 1.5 km from Beżowe Love, while St. James Concathedral is 3.6 km from the property. The nearest airport is Olsztyn-Mazury Airport, 58 km from the accommodation.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 8.8 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Olsztyn',
    name: 'Sweet House',
    maxCapacity: 7,
    kingBed: 1,
    bedrooms: 3,
    bathroom: 1,
    sleepComfortably: 7,
    pets: 0,
    regularPrice: 300,
    discount: 0,
    images: [
      `https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Sweet House is situated in Olsztyn, 4,7 km from Olsztyn Stadium, 5,5 km from Olsztyn Bus Station, and 1,9 km from Kortowskie Lake. Among the facilities at this property are a 24-hour front desk and a lift, along with free WiFi throughout the property. The accommodation features airport transfers, while a car rental service is also available.`,
      },
      {
        paragraph: `The apartment features 1 bedroom, 1 bathroom, bed linen, towels, a flat-screen TV with streaming services, a dining area, a fully equipped kitchen, and a balcony with quiet street views. A private entrance leads guests into the apartment, where they can enjoy some chocolates or cookies. The property has an outdoor dining area.`,
      },
      {
        paragraph: `A minimarket is available at the apartment.`,
      },
      {
        paragraph: `The area is popular for cycling and hiking, and free use of bicycles is available at the apartment. Outdoor play equipment is also available for guests at  Sweet House.`,
      },
      {
        paragraph: `St. James Concathedral is 3.5 km from the accommodation, while Castle Park is 3.7 km from the property. The nearest airport is Olsztyn-Mazury Airport, 61 km from Sweet House.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.5 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Olsztyn',
    name: 'Old City',
    maxCapacity: 2,
    kingBed: 1,
    bedrooms: 1,
    bathroom: 1,
    sleepComfortably: 2,
    pets: 0,
    regularPrice: 500,
    discount: 50,
    images: [
      `https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Offering inner courtyard views, Old City is an accommodation situated in Olsztyn, 2.6 km from Olsztyn Bus Station and 4.2 km from Olsztyn Stadium. Among the facilities at this property are room service and private check-in and check-out, along with free WiFi throughout the property. The apartment has family rooms.`,
      },
      {
        paragraph: `The units come with parquet floors and feature a fully equipped kitchenette with a fridge, a dining area, a flat-screen TV, and a private bathroom with a shower and a hair dryer. Kitchenware and kettle are also available. At the apartment complex, each unit includes bed linen and towels.`,
      },
      {
        paragraph: `Guests at the apartment will be able to enjoy activities in and around Olsztyn, like hiking.`,
      },
      {
        paragraph: `Popular points of interest near Old City include St. James Concathedral, High Gate and Fish Market. The nearest airport is Olsztyn-Mazury Airport, 60 km from the accommodation.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.7 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Olsztyn',
    name: 'Under Trees',
    maxCapacity: 4,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 4,
    pets: 0,
    regularPrice: 350,
    discount: 0,
    images: [
      `https://images.unsplash.com/photo-1617198998846-56e8a4c6e7b7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1599333915758-58e201c10395?w=1700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxob3VzZXN8ZW58MHx8MHx8fDA%3D`,
      `https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `A recently renovated property, Apartament Under Trees is located in Olsztyn near Olsztyn Bus Station, New Town Hall and Castle Park. The property is set 47 km from the Castle of Lidzbark Warmiński, 1.1 km from the Museum of Warmia and Mazury and 1.1 km from Old Town Hall. The property is non-smoking and is situated 4.2 km from Olsztyn Stadium.`,
      },
      {
        paragraph: `The apartment features 2 bedrooms, a flat-screen TV, a fully equipped kitchen with an oven and a fridge, a washing machine, and 1 bathroom with a shower. Towels and bed linen are provided in the apartment. For added privacy, the accommodation features a private entrance.`,
      },
      {
        paragraph: `Popular points of interest near the apartment include High Gate, Fish Market and Warmia Chapter Castle. The nearest airport is Olsztyn-Mazury Airport, 62 km from Apartament Pod Lipami.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Olsztyn',
    name: 'Lina River Apartment',
    maxCapacity: 6,
    kingBed: 1,
    bedrooms: 3,
    bathroom: 1,
    sleepComfortably: 6,
    pets: 1,
    regularPrice: 800,
    discount: 100,
    images: [
      `https://images.unsplash.com/photo-1617228069096-4638a7ffc906?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1620995559331-e5507e0a169f?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Featuring river views, the Lina River Apartment offers accommodation with a balcony, around 1.6 km from Olsztyn Bus Station. This property offers access to a terrace, free private parking and free WiFi. The property features a children's playground and outdoor furniture.`,
      },
      {
        paragraph: `This apartment is fitted with 1 bedroom, a kitchenette with a dishwasher and an oven, a flat-screen TV, a seating area and 1 bathroom equipped with a walk-in shower. Towels and bed linen are featured in the apartment. This apartment is allergy-free and non-smoking.`,
      },
      {
        paragraph: `The area is popular for cycling, and bike hire is available at the apartment.`,
      },
      {
        paragraph: `Popular points of interest near the Lina River Apartment include New Town Hall, High Gate and Fish Market. The nearest airport is Olsztyn-Mazury Airport, 62 km from the accommodation.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.2 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Olsztyn',
    name: 'Green Park Apartments',
    popular: true,
    maxCapacity: 3,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 3,
    pets: 0,
    regularPrice: 600,
    discount: 100,
    images: [
      `https://images.unsplash.com/photo-1543503103-f94a0036ed9d?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1583377519891-1eea1c2e3947?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Green Park Apartments is set in Olsztyn, 5.3 km from Olsztyn Bus Station, 6.9 km from Olsztyn Stadium, as well as 3.1 km from Castle Park. Boasting a lift, this property also provides guests with a picnic area. There is a sun terrace and guests can make use of free WiFi and free private parking.`,
      },
      {
        paragraph: `The apartment has 1 bedroom, a flat-screen TV, a fully equipped kitchen with a dishwasher and an oven, a washing machine, and 1 bathroom with a shower. Towels and bed linen are offered in the apartment. For added privacy, the accommodation features a private entrance.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Olsztyn',
    name: 'Dwa Jeziora',
    maxCapacity: 4,
    kingBed: 2,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 4,
    pets: 0,
    regularPrice: 1400,
    discount: 0,
    images: [
      `https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Situated 3.3 km from Olsztyn Bus Station, 4.9 km from Olsztyn Stadium and 49 km from Castle of Lidzbark Warmiński, Dwa Jeziora provides accommodation located in Olsztyn. This apartment features free private parking, a lift and free WiFi. Warmia Chapter Castle is 1.3 km away and the Museum of Warmia and Mazury is 1.3 km from the apartment.`,
      },
      {
        paragraph: `The apartment features 1 bedroom, 1 bathroom, bed linen, towels, a flat-screen TV with cable channels, a fully equipped kitchenette, and a balcony with inner courtyard views. Guests can enjoy a meal in an outdoor dining area while overlooking the quiet street views. This apartment is allergy-free and non-smoking.`,
      },
      {
        paragraph: `Guests at the apartment will be able to enjoy activities in and around Olsztyn, like hiking.`,
      },
      {
        paragraph: `Popular points of interest near Dwa Jeziora include Castle Park, St. James Concathedral and Fish Market. The nearest airport is Olsztyn-Mazury Airport, 61 km from the accommodation.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.7 for a two-person trip.`,
      },
    ],
  },

  // Wolin National Park
  {
    type: 'warm',
    location: 'Wolin National Park',
    name: 'Apart Hostel',
    maxCapacity: 2,
    kingBed: 0,
    bedrooms: 1,
    bathroom: 1,
    sleepComfortably: 2,
    pets: 0,
    regularPrice: 250,
    discount: 0,
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    description: [
      {
        paragraph: `Located in Świnoujście, 1.4 km from Swinoujscie Beach, Apart Hostel features city views. Among the facilities at this property are a shared kitchen and room service, along with free WiFi throughout the property. Private parking is available on-site.`,
      },
      {
        paragraph: `All units have a flat-screen TV with satellite channels, a kettle, a shower, a hairdryer and a wardrobe. Selected rooms have a kitchenette with a fridge, a microwave and a stovetop. At the hostel, each room includes bed linen and towels.`,
      },
      {
        paragraph: `Popular points of interest near the Apart Hostel include Baltic Park Molo Aquapark, Zdrojowy Park and Sea Fishing Museum. The nearest airport is Heringsdorf Airport, 9 km from the accommodation.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 8.7 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Wolin National Park',
    name: 'Home Regina',
    popular: true,
    maxCapacity: 3,
    kingBed: 1,
    bedrooms: 1,
    bathroom: 1,
    sleepComfortably: 2,
    pets: 0,
    regularPrice: 350,
    discount: 25,
    images: [
      `https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Home Regina is conveniently located 150 metres from the wide, sandy beach in Świnoujście. It offers spacious rooms and apartments with free internet and a flat-screen TV.`,
      },
      {
        paragraph: `All elegant rooms and apartments at the Home Regina are self-catered and come with a coffee maker and a kitchenette. Each apartment has a balcony and beach equipment. A microwave, a toaster, an iron and a hairdryer are available upon request, free of charge.`,
      },
      {
        paragraph: `Guests can benefit from an underground, secure parking. There are several cycling paths along the Baltic Sea just a few hundred metres away.`,
      },
      {
        paragraph: `Home Regina is housed in a traditionally designed apartment complex. The German border is only 3 km away.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Wolin National Park',
    name: 'Blue Sky Apartments',
    maxCapacity: 4,
    kingBed: 2,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 4,
    pets: 0,
    regularPrice: 300,
    discount: 0,
    images: [
      `https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Boasting a terrace with garden views, a garden and a bar, Blue Sky Apartments can be found in Niechorze, close to Pogorzelica Beach and 1.5 km from Rewal Beach. The air-conditioned accommodation is 100 metres from Niechorze Beach, and guests can benefit from complimentary WiFi and private parking available on-site. The apartment has family rooms as well as facilities for disabled guests.`,
      },
      {
        paragraph: `The units come with parquet floors and feature a fully equipped kitchen with a dishwasher, a flat-screen TV with satellite channels, and a private bathroom with a walk-in shower and a hair dryer. A microwave, a toaster and a fridge are also available, as well as a kettle. At the apartment complex, each unit is fitted with bed linen and towels.`,
      },
      {
        paragraph: `For visitors looking to embark on day trips to nearby landmarks, the apartment features a selection of packed lunches.`,
      },
      {
        paragraph: `Guests at Blue Sky Apartments will be able to enjoy activities in and around Niechorze, like fishing and hiking. The apartment complex has a picnic area where you can spend a day out in the open.`,
      },
      {
        paragraph: `Town Hall is 47 km from the accommodation, while Kołobrzeg Railway Station is 48 km from the property. The nearest airport is Heringsdorf Airport, 79 km from Blue Sky Apartments.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.6 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Wolin National Park',
    name: 'Villa Anna',
    popular: true,
    maxCapacity: 5,
    kingBed: 1,
    bedrooms: 3,
    bathroom: 1,
    sleepComfortably: 5,
    pets: 0,
    regularPrice: 500,
    discount: 50,
    images: [
      `https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Set just 30 metres from the beach, Villa Anna offers uniquely furnished apartments with stylish décor. Free WiFi as well as a comfortable seating area are included.`,
      },
      {
        paragraph: `Boasting wooden beams and wooden floors, the apartment combines a rustic feel with home-like comforts. The living rooms come complete with a TV and CD player while the modern bathrooms include a shower and hairdryer.`,
      },
      {
        paragraph: `The fully-equipped kitchens come with a dishwasher and a microwave allowing for home-cooked meals.`,
      },
      {
        paragraph: `Guests are welcome to relax in the At Villa Anna's garden or check out the local sites such as the Ahlbeck Railway Museum, just 1.2 km away. As a partner of the Baltic Thermal Region, guests of the Villa Anna receive discounted entry to the thermal spas.`,
      },
      {
        paragraph: `The B111 main road lies just a 15-minute drive to the west.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.7 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Wolin National Park',
    name: 'Villa Juliana',
    maxCapacity: 6,
    kingBed: 1,
    bedrooms: 3,
    bathroom: 1,
    sleepComfortably: 6,
    pets: 2,
    regularPrice: 350,
    discount: 0,
    images: [
      `https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Offering a garden and lake view, Villa Juliana is situated in Międzyzdroje, 14 km from Świnoujście Railway Station and 14 km from Swinoujscie lighthouse. Boasting room service, this property also provides guests with a picnic area. There is a sun terrace and guests can make use of free WiFi and free private parking.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Wolin National Park',
    name: 'Domki nad morzem',
    maxCapacity: 6,
    kingBed: 1,
    bedrooms: 3,
    bathroom: 1,
    sleepComfortably: 6,
    pets: 1,
    regularPrice: 800,
    discount: 100,
    images: [
      `https://images.unsplash.com/photo-1598714805247-5dd440d87124?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1617228069096-4638a7ffc906?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1620995559331-e5507e0a169f?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Located in Lędzin in the West Pomerania region, Domki nad Morzem provides accommodation with free private parking.`,
      },
      {
        paragraph: `The holiday home offers a terrace.`,
      },
      {
        paragraph: `A garden, barbecue and a children's playground are provided at Domki nad Morzem.`,
      },
      {
        paragraph: `Kołobrzeg is 35 km from the accommodation, while Międzyzdroje is 44 km away. The nearest airport is Solidarity Szczecin-Goleniów Airport, 54 km from Domki nad Morzem.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Wolin National Park',
    name: 'Hotel Villa',
    maxCapacity: 4,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 4,
    pets: 1,
    regularPrice: 600,
    discount: 100,
    images: [
      `https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1543503103-f94a0036ed9d?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `This family-run hotel is situated in the seaside resort of Heringsdorf-Ahlbeck, just 50 metres from a Baltic Sea beach. It provides large rooms and free Wi-Fi within an Art Nouveau building.`,
      },
      {
        paragraph: `A rich breakfast buffet is prepared each morning at the Hotel Villa. Guests can eat outside on the terrace during the summer months.`,
      },
      {
        paragraph: `Every room at the Hotel Villa features a modern bathroom, cable TV channels and a minibar. Guests with cars can use the private parking spaces for a fee.`,
      },
      {
        paragraph: `Many scenic hiking and cycling trails can be found in the surrounding Usedom Nature Park. Ahlbeck’s beach promenade is also right outside the hotel doors.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.7 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'warm',
    location: 'Wolin National Park',
    name: 'Hotel Wolin Park',
    maxCapacity: 4,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 4,
    pets: 0,
    regularPrice: 1400,
    discount: 0,
    images: [
      `https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Hotel Wolin Park is situated on the beachfront in Bansin, less than 1 km from Heringsdorf Beach and 2.7 km from Ahlbeck Beach. Located around 12 km from Baltic Park Molo Aquapark, the hotel with free WiFi is also 13 km away from Zdrojowy Park. The property is non-smoking and is located 100 metres from Bansin Beach.`,
      },
      {
        paragraph: `At the hotel, each room comes with a desk, a flat-screen TV, a private bathroom, bed linen and towels. Guest rooms include a safety deposit box.`,
      },
      {
        paragraph: `Guests at Hotel Wolin Park can enjoy a buffet breakfast.`,
      },
      {
        paragraph: `Ahlbeck Pier is 5.6 km from the accommodation, while Baltic Hills Golf Usedom is 8.7 km away. The nearest airport is Heringsdorf Airport, 18 km from Hotel Wolin Park.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.8 for a two-person trip.`,
      },
    ],
  },

  // Zakopane
  {
    type: 'winter',
    location: 'Zakopane',
    name: 'Dom Górski',
    maxCapacity: 4,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 3,
    pets: 1,
    regularPrice: 150,
    discount: 0,
    images: [
      'https://images.unsplash.com/photo-1608460538152-56571d16b11e?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    description: [
      {
        paragraph: `Located just 800 metres from Tatra National Park, Dom Górski features accommodation in Zakopane with access to a garden, a terrace, as well as luggage storage space. It is situated 3.1 km from Zakopane Aqua Park and offers private check-in and check-out. Private parking can be arranged at an extra charge.`,
      },
      {
        paragraph: `At the bed and breakfast, units include a wardrobe. Featuring a private bathroom with a shower and free toiletries, units at the bed and breakfast also offer free WiFi. At the bed and breakfast, all units come with bed linen and towels.`,
      },
      {
        paragraph: `For guests with children, the bed and breakfast provide an indoor play area. Skiing is possible within the area and Dom Górski offers ski storage space.`,
      },
      {
        paragraph: `Railway Station Zakopane is 3.3 km from the accommodation, while Gubalowka Mountain is 8.4 km away. The nearest airport is Poprad-Tatry Airport, 71 km from Dom Górski.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.1 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Zakopane',
    name: 'Willa Leila',
    maxCapacity: 2,
    kingBed: 1,
    bedrooms: 1,
    bathroom: 1,
    sleepComfortably: 2,
    pets: 0,
    regularPrice: 250,
    discount: 0,
    images: [
      'https://images.pexels.com/photos/7746557/pexels-photo-7746557.jpeg?auto=compress&cs=tinysrgb&w=1700&h=750&dpr=1',
      `https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Set in Zakopane is 1 km away from the resort’s main street, Krupówki and Zakopane Aqua Park reachable within 2.5 km, Willa Leila offers accommodation with free WiFi, BBQ facilities and free private parking.`,
      },
      {
        paragraph: `There is a fully equipped private bathroom with shower and free toiletries.`,
      },
      {
        paragraph: `The apartment offers a terrace with a panoramic view of the Tatry Mountains.`,
      },
      {
        paragraph: `Skiing is possible within the area and Willa Leila offers ski storage space.`,
      },
      {
        paragraph: `Wielka Krokiew Ski Jump is 4 km from the accommodation, while Kasprowy Wierch Mountain is 5 km from the property.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.4 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Zakopane',
    name: 'Hotel Bambi',
    maxCapacity: 3,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 3,
    pets: 0,
    regularPrice: 450,
    discount: 0,
    images: [
      'https://images.pexels.com/photos/12932834/pexels-photo-12932834.jpeg?auto=compress&cs=tinysrgb&w=1700&h=750&dpr=1',
      `https://images.unsplash.com/photo-1543503103-f94a0036ed9d?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Located in the popular Tatra Mountain resort of Zakopane, Residence Bambi offers rooms with free WiFi and a flat-screen TV with satellite channels. Free private parking is possible on-site.`,
      },
      {
        paragraph: `The rooms of the Bambi are spacious and feature an interior design characteristic of the region, with bright wood decorations. All rooms come with a bathroom.`,
      },
      {
        paragraph: `The Boutique has an indoor play area for kids with a ball pit and a designated barbecue area. It also provides an airport shuttle service at an additional surcharge.`,
      },
      {
        paragraph: `Krupówki, Zakopane’s main street is within 1.2 km. Zakopane’s railway and bus stations are within 2 km.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.2 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Zakopane',
    name: 'Harda House',
    maxCapacity: 4,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 3,
    pets: 1,
    regularPrice: 320,
    discount: 0,
    images: [
      'https://images.pexels.com/photos/4969845/pexels-photo-4969845.jpeg?auto=compress&cs=tinysrgb&w=1700&dpr=1',
      `https://images.unsplash.com/photo-1620995559331-e5507e0a169f?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    description: [
      {
        paragraph: `1.2 km from Railway Station Zakopane in Zakopane, Harda House offers accommodation with access to spa facilities and a steam room. This aparthotel features free private parking and a lift. The aparthotel has family rooms and facilities for disabled guests.`,
      },
      {
        paragraph: `Each unit is fitted with air conditioning, a private bathroom and a fully equipped kitchenette including a fridge and kitchenware. Every unit is fitted with a kettle, a flat-screen TV, a safety deposit box and free WiFi, while certain rooms have a terrace and some have mountain views. At the aparthotel, all units come with bed linen and towels.`,
      },
      {
        paragraph: `Skiing and cycling can be enjoyed nearby, while a bicycle rental service and ski storage space are also available on-site.`,
      },
      {
        paragraph: `Zakopane Aqua Park is 1.7 km from the aparthotel, while Tatra National Park is 4 km from the property. The nearest airport is Poprad-Tatry Airport, 72 km from Harda House.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 8.8 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Zakopane',
    name: 'Rezydencja Reindeer',
    maxCapacity: 6,
    kingBed: 2,
    bedrooms: 3,
    bathroom: 2,
    sleepComfortably: 6,
    pets: 2,
    regularPrice: 520,
    discount: 0,
    images: [
      'https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg?auto=compress&cs=tinysrgb&w=1700&h=750&dpr=1',
      `https://images.unsplash.com/photo-1617198998846-56e8a4c6e7b7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Rezydencja Reindeer offers mountain-style accommodation in Zakopane, in a quiet part of the centre. All rooms and apartments feature satellite TV, kitchenette and free Wi-Fi.`,
      },
      {
        paragraph: `Each of the Reindeer’s accommodation facilities features a regional interior design with pinewood elements in a warm, bright colour. All have a refrigerator, electric kettle and a dining area.`,
      },
      {
        paragraph: `Rezydencja Reindeer is a good starting point for hikes to Strążyska, Chochołowska and Kościeliska valleys. Krupówki Street, which features many shops and restaurants, is 800 metres away.`,
      },
      {
        paragraph: `The hotel has a designated barbecue area that the guests can use. It also provides a ski storage service and offers free parking places on-site.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.1 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Zakopane',
    name: 'Villa Friends',
    maxCapacity: 2,
    kingBed: 1,
    bedrooms: 1,
    bathroom: 1,
    sleepComfortably: 2,
    pets: 1,
    regularPrice: 300,
    discount: 0,
    images: [
      'https://images.pexels.com/photos/3717517/pexels-photo-3717517.jpeg?auto=compress&cs=tinysrgb&w=1260&&dpr=1',
      `https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Featuring free access to a sauna and free WiFi throughout the property, Villa Friends is a quiet accommodation decorated mountain-style, located in Zakopane. Free private monitored parking is available on site.`,
      },
      {
        paragraph: `Every room has a 40-inch flat-screen TV and a refrigerator. The rooms come with a private bathroom where, for your comfort, you will find free toiletries and a hair dryer.`,
      },
      {
        paragraph: `Villa Friends is a 15-minute walk from the popular Krupówki Street. Koziniec, the nearest ski lift for children, is within 300 metres, while Nosal ski station is 1.3 km away and the distance to the ski lift operating to Kasprowy Wierch Mountain is 2.5 km.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.4 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Zakopane',
    name: 'Zakopane Stop',
    maxCapacity: 4,
    kingBed: 1,
    bedrooms: 3,
    bathroom: 2,
    sleepComfortably: 4,
    pets: 2,
    regularPrice: 250,
    discount: 0,
    images: [
      'https://images.pexels.com/photos/4061591/pexels-photo-4061591.jpeg?auto=compress&cs=tinysrgb&w=1700&dpr=1',
      `https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Located in a green area of Zakopane, Zakopane Stop features simply furnished rooms with free Wi-Fi and wooden elements.`,
      },
      {
        paragraph: `Every room in Zakopane Stop features a TV, a fridge and a bathroom with a shower.`,
      },
      {
        paragraph: `There is a designated barbecue area and a playground for children.`,
      },
      {
        paragraph: `Zakopane Stop is located 800 metres from Zakopane Train Station and Bus Station. It is 1.8 km to Harenda Ski Lift and 1.5 km to Krupówki – a city promenade.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 8.0 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Zakopane',
    name: 'Willa Dom',
    maxCapacity: 3,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 3,
    pets: 0,
    regularPrice: 250,
    discount: 0,
    images: [
      'https://images.pexels.com/photos/6552568/pexels-photo-6552568.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=1',
      `https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `1,5 km from  Ski Lift Ugory oraz Ski Centre Nosal, in a beautiful and quiet part of Zakopane, this family-run guesthouse offers you cosy accommodation with the Tatra Mountains views.`,
      },
      {
        paragraph: `Willa Dom is conveniently situated a short walk from local shops and restaurants, and the town’s main street, Krupowki, is just 1.5 km away. The natural surroundings are ideal for a fun and relaxing family holiday and offer excellent conditions for hiking, horse riding and skiing. Willa Dom is located only 2 km away from Wielka Krokiew and Zakopane Aquapark is only 10 minutes walk away.`,
      },
      {
        paragraph: `The bright rooms and apartments at Willa Wisienka W Zakopanem are tastefully decorated with rustic wooden furniture and some include a private balcony.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.4 for a two-person trip.`,
      },
    ],
  },

  // Kasprowy Wierch
  {
    type: 'winter',
    location: 'Kasprowy Wierch',
    name: 'Dom Wczasowy',
    popular: true,
    maxCapacity: 5,
    kingBed: 2,
    bedrooms: 3,
    bathroom: 1,
    sleepComfortably: 5,
    pets: 1,
    regularPrice: 200,
    discount: 0,
    images: [
      'https://images.unsplash.com/photo-1608460538152-56571d16b11e?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    description: [
      {
        paragraph: `Dom Wczasowy features a shared lounge, garden, barbecue facilities and terrace in Ząb. Among the facilities of this property are a restaurant, a shared kitchen and room service, along with free WiFi throughout the property. Free private parking is available and the property also provides car hire for guests who want to explore the surrounding area.`,
      },
      {
        paragraph: `At Dom Wczasowy, every room comes with a desk, a flat-screen TV and a private bathroom. All units will provide guests with a wardrobe and a kettle.`,
      },
      {
        paragraph: `The accommodation offers a continental or buffet breakfast.`,
      },
      {
        paragraph: `Dom Wczasowy offers a children's playground. You can play billiards and the area is popular for hiking and skiing.`,
      },
      {
        paragraph: `Zakopane is 8 km from the guest house, while Białka Tatrzanska is 24 km away. The nearest airport is John Paul II International Kraków–Balice, 112 km from Dom Wczasowy, and the property offers a paid airport shuttle service.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.4 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Kasprowy Wierch',
    name: 'Lake Resort',
    maxCapacity: 2,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 3,
    pets: 0,
    regularPrice: 350,
    discount: 25,
    images: [
      `https://images.unsplash.com/photo-1646185965560-c6894e6cc10c?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1632566853092-a0faa4665585?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Lake Resort is set in Vysoke Tatry - Strbske Pleso, 1.2 km from Strbske Pleso Lake and 39 km from Treetop Walk. This aparthotel offers free private parking, a 24-hour front desk and free WiFi. The aparthotel has family rooms.`,
      },
      {
        paragraph: `The accommodation comes with a flat-screen TV and a private bathroom with a shower and a hair dryer, while the kitchen features a dishwasher, a microwave and a fridge. There is also a stovetop, kitchenware and a kettle. At the aparthotel, the units are fitted with bed linen and towels.`,
      },
      {
        paragraph: `Guests at the aparthotel will be able to enjoy activities in and around Vysoke Tatry - Strbske Pleso, like hiking. Skiing and cycling can be enjoyed nearby, while a ski pass sales point and ski storage space are also available on-site.`,
      },
      {
        paragraph: `The nearest airport is Poprad-Tatry, 25 km from Lake Resort, and the property offers a paid airport shuttle service.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.5 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Kasprowy Wierch',
    name: 'Hotel Wierch',
    maxCapacity: 4,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 4,
    pets: 0,
    regularPrice: 300,
    discount: 0,
    images: [
      `https://images.pexels.com/photos/7031405/pexels-photo-7031405.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=1`,
      `https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Hotel Wierch is an accommodation situated in Vysoke Tatry - Strbske Pleso, less than 1 km from Strbske Pleso Lake and 39 km from Treetop Walk. This aparthotel features free private parking, a 24-hour front desk and free WiFi. The aparthotel features family rooms.`,
      },
      {
        paragraph: `The accommodation comes with a flat-screen TV and a private bathroom with a walk-in shower and a hair dryer, while the kitchen has a dishwasher, a microwave and a fridge. A stovetop and kitchenware are also available, as well as a coffee machine and a kettle. At the aparthotel, each unit is fitted with bed linen and towels.`,
      },
      {
        paragraph: `The nearest airport is Poprad-Tatry Airport, 25 km from the aparthotel.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.6 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Kasprowy Wierch',
    name: 'Śnieżna Rezydencja',
    maxCapacity: 3,
    kingBed: 1,
    bedrooms: 1,
    bathroom: 1,
    sleepComfortably: 2,
    pets: 0,
    regularPrice: 500,
    discount: 50,
    images: [
      `https://images.unsplash.com/photo-1553550319-d8d5393e1c80?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Located in Kościelisko and only 5.8 km from Gubalowka Mountain, Śnieżna Rezydencja provides accommodation with mountain views, free WiFi and free private parking. The air-conditioned accommodation is 6.8 km from Railway Station Zakopane. Featuring family rooms, this property also provides guests with a picnic area.`,
      },
      {
        paragraph: `All units include a seating area, a flat-screen TV with streaming services, a fully equipped kitchenette, a dining area, and a private bathroom fitted with a hair dryer, while some units feature a terrace or a balcony. A microwave, a fridge and stovetop are also provided, as well as a kettle. At the aparthotel, all units come with bed linen and towels.`,
      },
      {
        paragraph: `Tatra National Park is 8.4 km from the aparthotel, while Zakopane Aqua Park is 8.9 km away. The nearest airport is Poprad-Tatry Airport, 77 km from Śnieżna Rezydencja.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.5 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Kasprowy Wierch',
    name: 'Domki przy Potoku',
    maxCapacity: 6,
    kingBed: 2,
    bedrooms: 3,
    bathroom: 2,
    sleepComfortably: 6,
    pets: 2,
    regularPrice: 350,
    discount: 0,
    images: [
      `https://images.unsplash.com/photo-1606216363508-50c8c3536b56?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1617198998846-56e8a4c6e7b7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Offering ski-to-door access and barbecue facilities, Domki przy Potoku is set in Suche, 200 meters from Ski Lift Suche. Featuring free WiFi, the property also has a garden and a terrace.`,
      },
      {
        paragraph: `The chalet includes 3 bedrooms, a living room, and 2 bathrooms with a hair dryer. There is a dining area and a kitchenette complete with a microwave and a fridge.`,
      },
      {
        paragraph: `Skiing is possible within the area and the property offers ski storage space.`,
      },
      {
        paragraph: `The nearest airport is John Paul II International Kraków–Balice Airport, 118 km from Domki przy Potoku.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Kasprowy Wierch',
    name: 'Willa Modra',
    maxCapacity: 2,
    kingBed: 1,
    bedrooms: 1,
    bathroom: 1,
    sleepComfortably: 2,
    pets: 0,
    regularPrice: 800,
    discount: 100,
    images: [
      `https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1620995559331-e5507e0a169f?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Set just 7.6 km from Bania Thermal Baths, Willa Modra features accommodation in Bukowina Tatrzańska with access to a garden, barbecue facilities, as well as a shared kitchen. This bed and breakfast offers free private parking and a 24-hour front desk. Featuring family rooms, this property also provides guests with an outdoor fireplace.`,
      },
      {
        paragraph: `At the bed and breakfast, all units are equipped with a wardrobe. The units come with a kettle, a private bathroom and free WiFi, while selected rooms here will provide you with a balcony and some have mountain views. The units at the bed and breakfast come with a seating area and a flat-screen TV with satellite channels.`,
      },
      {
        paragraph: `A continental breakfast is available every morning at the property and includes local specialities and cheese.`,
      },
      {
        paragraph: `For guests with children, the bed and breakfast provides an indoor play area and a piece of outdoor play equipment. Guests at Willa Modra can enjoy skiing nearby, or benefit from the sun terrace.`,
      },
      {
        paragraph: `Railway Station Zakopane is 15 km from the accommodation, while Zakopane Aqua Park is 15 km away. The nearest airport is Poprad-Tatry Airport, 57 km from Willa Modra.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.3 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Kasprowy Wierch',
    name: 'Willa Mountain',
    popular: true,
    maxCapacity: 8,
    kingBed: 1,
    bedrooms: 3,
    bathroom: 2,
    sleepComfortably: 8,
    pets: 2,
    regularPrice: 600,
    discount: 100,
    images: [
      `https://images.unsplash.com/photo-1644836512182-977899856efe?w=1700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHdpbnRlciUyMGNvdHRhZ2VzfGVufDB8MXwwfHx8Mg%3D%3D`,
      `https://images.unsplash.com/photo-1543503103-f94a0036ed9d?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Willa Mountain is located in Kościelisko, 2.3 km from the Szymoszkowa Ski Lift and 4.9 km from Gubalowka Mountain. The property features a lounge with a fireplace, as well as a children's playground and games room.`,
      },
      {
        paragraph: `Each room here will provide you with free WiFi and a seating area with a flat-screen TV and satellite channels. The private bathrooms come with a shower, bathrobe, towel and hairdryer. Extras include a dining table, an electric kettle and a minibar.`,
      },
      {
        paragraph: `At Willa Mountain, you will find a sauna, a hot tub and a barbecue, available at a surcharge, as well as a front desk. An array of activities can be enjoyed on-site or in the surroundings, including skiing, cycling and hiking in the nearby Tatra National Park. The property offers free private parking.`,
      },
      {
        paragraph: `Willa Mountain is located 6.7 km from the Kotelnica Ski Lift and also 6.7 km from Wielka Krokiew Ski Jump. Zakopane Railway Station is 5.4 km from the property.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.5 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Kasprowy Wierch',
    name: 'Willa Annabelle',
    maxCapacity: 10,
    kingBed: 2,
    bedrooms: 5,
    bathroom: 2,
    sleepComfortably: 8,
    pets: 4,
    regularPrice: 540,
    discount: 0,
    images: [
      `https://images.unsplash.com/photo-1521898208365-d7bd8e1ad280?w=1700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHdpbnRlciUyMGNvdHRhZ2VzfGVufDB8MXwwfHx8Mg%3D%3D`,
      `https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Located in the very centre of Zakopane, in the popular Krupówki Street, Annabelle offers luxury rooms with a private bathroom. Wi-Fi is free in the entire Villa.`,
      },
      {
        paragraph: `The rooms at Labelle come with a balcony or a balcony window, and a seating area with a flat-screen TV with satellite channels. Guests can also benefit from tea/coffee facilities and a refrigerator.`,
      },
      {
        paragraph: `The excellent, central location of Labelle ensures easy access to all attractions of Zakopane. Guests can enjoy a free car park on-site.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.8 for a two-person trip.`,
      },
    ],
  },

  // Białka Tatrzańska
  {
    type: 'winter',
    location: 'Białka Tatrzańska',
    name: 'Aparthotel Białczański',
    popular: true,
    maxCapacity: 2,
    kingBed: 1,
    bedrooms: 1,
    bathroom: 1,
    sleepComfortably: 2,
    pets: 0,
    regularPrice: 250,
    discount: 0,
    images: [
      'https://images.unsplash.com/photo-1578689930806-02379e4ded42?w=1700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI5fHx3aW50ZXIlMjBjb3R0YWdlc3xlbnwwfDF8MHx8fDI%3D',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    description: [
      {
        paragraph: `Aparthotel Białczański is located in Białka Tatrzanska, 22 km from Niedzica Castle, 22 km from Railway Station Zakopane, and 23 km from Zakopane Aqua Park. It is situated 100 metres from Bania Thermal Baths and features a lift. There is a restaurant serving Polish cuisine, and free private parking is available.`,
      },
      {
        paragraph: `All units feature air conditioning and a flat-screen TV. With a private bathroom fitted with a shower and a hair dryer, units at the aparthotel also feature free WiFi, while some rooms also boast a balcony. At the aparthotel, units are fitted with bed linen and towels.`,
      },
      {
        paragraph: `Guests at the aparthotel can enjoy a buffet breakfast.`,
      },
      {
        paragraph: `For guests with children, Aparthotel Białczański provides an indoor play area. Ski storage space is available on-site and both skiing and cycling can be enjoyed within proximity of the accommodation.`,
      },
      {
        paragraph: `Gubalowka Mountain is 24 km from Aparthotel Białczański, while Tatra National Park is 25 km from the property. The nearest airport is Poprad-Tatry Airport, 58 km from the aparthotel.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.8 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Białka Tatrzańska',
    name: 'Willa Białczańska',
    maxCapacity: 5,
    kingBed: 2,
    bedrooms: 3,
    bathroom: 2,
    sleepComfortably: 5,
    pets: 2,
    regularPrice: 350,
    discount: 25,
    images: [
      `https://images.unsplash.com/photo-1606879247964-21fce6c7031e?w=1700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU1fHx3aW50ZXIlMjBjb3R0YWdlc3xlbnwwfDF8MHx8fDI%3D`,
      `https://images.unsplash.com/photo-1632566853092-a0faa4665585?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Set just 21 km from Railway Station Zakopane, Willa Białczańska provides accommodation in Białka Tatrzanska with access to a garden, barbecue facilities, as well as a shared kitchen. The property has mountain and river views and is 1.1 km from Bania Thermal Baths. There is a sun terrace and guests can make use of free WiFi and free private parking.`,
      },
      {
        paragraph: `At the bed and breakfast, units are equipped with a wardrobe, a flat-screen TV, a private bathroom, bed linen and towels. Every unit includes a balcony boasting an outdoor dining area. At the bed and breakfast, all units are allergy-free.`,
      },
      {
        paragraph: `A selection of options including warm dishes, fresh pastries and pancakes is available for the buffet breakfast.`,
      },
      {
        paragraph: `For guests with children, the bed and breakfast offers an indoor play area and outdoor play equipment. Skiing, cycling and walking tours are possible within the area, and Willa Białczańska offers a ski pass sales point.`,
      },
      {
        paragraph: `Zakopane Aqua Park is 22 km from the accommodation, while Niedzica Castle is 22 km from the property. The nearest airport is Poprad-Tatry Airport, 57 km from Willa Białczańska.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.7 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Białka Tatrzańska',
    name: 'Górski Hotel',
    maxCapacity: 4,
    kingBed: 2,
    bedrooms: 3,
    bathroom: 2,
    sleepComfortably: 4,
    pets: 2,
    regularPrice: 300,
    discount: 0,
    images: [
      `https://images.pexels.com/photos/4120220/pexels-photo-4120220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
      `https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Offering a children's playground and hot tub, Ośrodek Górski Hotel is set in Białka Tatrzanska in the Lesser Poland Region, 150 metres from Bania Thermal Baths. The resort has a sauna and ski storage space, and guests can enjoy a meal at the restaurant or a drink at the bar.`,
      },
      {
        paragraph: `Rooms are fitted with a flat-screen TV. You will find a kettle in the room. The rooms are fitted with a private bathroom. For your comfort, you will find free toiletries and a hairdryer.`,
      },
      {
        paragraph: `You will find ticket service, as well as a gym at the property.`,
      },
      {
        paragraph: `You can play table tennis and billiards at this resort, and the area is popular for skiing. Kotelnica Bialczanska Ski Resort is 700 metres from Górski Hotel. Krakow - Balice Airport is 79 km from the property.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.8 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Białka Tatrzańska',
    name: 'Apartamenty Białczańskie',
    popular: true,
    maxCapacity: 4,
    kingBed: 2,
    bedrooms: 3,
    bathroom: 2,
    sleepComfortably: 4,
    pets: 2,
    regularPrice: 500,
    discount: 50,
    images: [
      `https://images.pexels.com/photos/6367170/pexels-photo-6367170.jpeg?auto=compress&cs=tinysrgb&w=1700&h=750&dpr=1`,
      `https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Situated in Białka Tatrzanska and only 700 metres from Bania Thermal Baths, Apartamenty Białczańskie features accommodation with mountain views, free WiFi and free private parking. It is located 21 km from Niedzica Castle and provides a 24-hour front desk. The apartment has family rooms.`,
      },
      {
        paragraph: `The units come with tiled floors and feature a fully equipped kitchenette with a microwave, a dining area, a flat-screen TV with cable channels, and a private bathroom with a walk-in shower and a hair dryer. At the apartment complex, all units are allergy-free. At the apartment complex, each unit includes bed linen and towels.`,
      },
      {
        paragraph: `For guests with children, the apartment offers an indoor play area. Skiing, cycling and hiking are possible within the area, and Apartamenty Białczańskie offers ski storage space.`,
      },
      {
        paragraph: `Railway Station Zakopane is 22 km from the accommodation, while Zakopane Aqua Park is 23 km from the property. The nearest airport is Poprad-Tatry, 58 km from Apartamenty Białczańskie, and the property offers a paid airport shuttle service.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.5 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Białka Tatrzańska',
    name: 'Willa Pod Choinkę',
    maxCapacity: 6,
    kingBed: 2,
    bedrooms: 3,
    bathroom: 2,
    sleepComfortably: 6,
    pets: 1,
    regularPrice: 350,
    discount: 0,
    images: [
      `https://images.pexels.com/photos/3369234/pexels-photo-3369234.jpeg?auto=compress&cs=tinysrgb&w=1700&dpr=1`,
      `https://images.unsplash.com/photo-1617198998846-56e8a4c6e7b7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Offering a seasonal outdoor swimming pool and mountain view, Willa Pod Choinkę is located in Białka Tatrzanska, 700 metres from Bania Thermal Baths and 22 km from Railway Station Zakopane. This bed and breakfast offers free private parking and a lift. The accommodation provides a sauna, free WiFi throughout the property and family rooms.`,
      },
      {
        paragraph: `Every unit has a wardrobe and a flat-screen TV, and certain units at the bed and breakfast have a balcony. At the bed and breakfast, the units are equipped with bed linen and towels.`,
      },
      {
        paragraph: `A continental breakfast is available daily at the bed and breakfast.`,
      },
      {
        paragraph: `For guests with children, Willa Pod Choinkę features both an indoor and outdoor play area. Guests can also warm themselves near an outdoor fireplace after a day of skiing.`,
      },
      {
        paragraph: `Niedzica Castle is 22 km from the accommodation, while Zakopane Aqua Park is 22 km away. The nearest airport is Poprad-Tatry, 57 km from Willa Pod Choinkę, and the property offers a paid airport shuttle service.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.6 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Białka Tatrzańska',
    name: 'Dom Wypoczynkowy',
    maxCapacity: 4,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 4,
    pets: 1,
    regularPrice: 800,
    discount: 100,
    images: [
      `https://images.pexels.com/photos/6526181/pexels-photo-6526181.jpeg?auto=compress&cs=tinysrgb&w=1700&dpr=1`,
      `https://images.unsplash.com/photo-1617228069096-4638a7ffc906?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1620995559331-e5507e0a169f?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Dom Wypoczynkowy is located in the centre of Białka Tatrzańska and offers spacious rooms with free Wi-Fi.  Terma Bania thermal baths are 400 metres away.`,
      },
      {
        paragraph: `Each room at the Dom Wypoczynkowy features warm interiors and a private bathroom with a shower. There is wooden furniture with a small table and chairs.`,
      },
      {
        paragraph: `The property includes a garden with barbecue facilities and a children’s playground. There is also a store in the building, as well as a ski storage room.`,
      },
      {
        paragraph: `The meals can be requested and they are served in the restaurant in the building next to Dom Wypoczynkowy.`,
      },
      {
        paragraph: `Guests can work out in the gym or play billiards and table tennis.`,
      },
      {
        paragraph: `Dom Wypoczynkowy has free private parking. The Nowy Targ Train Station is a 20-minute drive away. The nearest ski lifts, Kotelnica-Bania are 400 metres away.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.6 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Białka Tatrzańska',
    name: 'Leśne Apartamenty',
    maxCapacity: 8,
    kingBed: 2,
    bedrooms: 4,
    bathroom: 2,
    sleepComfortably: 8,
    pets: 2,
    regularPrice: 600,
    discount: 100,
    images: [
      `https://images.pexels.com/photos/950058/pexels-photo-950058.jpeg?auto=compress&cs=tinysrgb&w=1700&dpr=1`,
      `https://images.unsplash.com/photo-1543503103-f94a0036ed9d?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Set in Białka Tatrzanska and only 2.2 km from Bania Thermal Baths, Leśne Apartamenty offers accommodation with mountain views, free WiFi and free private parking. Boasting a shared kitchen, this property also provides guests with a picnic area. Featuring family rooms, this property also provides guests with an outdoor fireplace.`,
      },
      {
        paragraph: `At the guest house, each unit comes with a desk, a flat-screen TV and a private bathroom. A fridge and kitchenware are also featured, as well as a kettle. Guests can dine in an outdoor dining area at the guest house.`,
      },
      {
        paragraph: `During the colder months, guests can enjoy winter sports in the surrounding area.`,
      },
      {
        paragraph: `For guests with children, the guest house provides an indoor play area and a piece of outdoor play equipment. Leśne Apartamenty features a barbecue and a garden.`,
      },
      {
        paragraph: `Railway Station Zakopane is 20 km from the accommodation, while Zakopane Aqua Park is 21 km away. The nearest airport is Poprad-Tatry Airport, 56 km from Leśne Apartamenty.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.3 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Białka Tatrzańska',
    name: 'Guest House',
    maxCapacity: 4,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 4,
    pets: 1,
    regularPrice: 400,
    discount: 0,
    images: [
      `https://images.pexels.com/photos/3736487/pexels-photo-3736487.jpeg?auto=compress&cs=tinysrgb&w=1700&dpr=1`,
      `https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Guest House is set in Białka Tatrzanska and has a plunge pool and mountain views. This property offers access to a terrace, free private parking and free WiFi. The guest house features family rooms.`,
      },
      {
        paragraph: `The units come with tiled floors and feature a fully equipped kitchen with a dishwasher, a dining area, a flat-screen TV with streaming services, and a private bathroom with a shower and a hair dryer. A microwave, a toaster and a fridge are also offered, as well as a coffee machine and a kettle. At the guest house, units come with bed linen and towels.`,
      },
      {
        paragraph: `For guests with children, the guest house offers outdoor play equipment. Skiing is possible within the area and Wolfpack Guest House offers ski storage space.`,
      },
      {
        paragraph: `Bania Thermal Baths is 3.7 km from the accommodation, while Niedzica Castle is 19 km from the property. The nearest airport is Poprad-Tatry Airport, 61 km from Guest House.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.1 for a two-person trip.`,
      },
    ],
  },

  // Zieleniec
  {
    type: 'winter',
    location: 'Zieleniec',
    name: 'Skałka Zieleniec',
    popular: true,
    maxCapacity: 2,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 2,
    pets: 1,
    regularPrice: 250,
    discount: 0,
    images: [
      'https://images.pexels.com/photos/7746548/pexels-photo-7746548.jpeg?auto=compress&cs=tinysrgb&w=1700&h=750&dpr=1',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    description: [
      {
        paragraph: `Located in Duszniki Zdrój, 19 km from Kudowa Zdrój Train Station, Skałka Zieleniec provides accommodation with a fitness centre, free private parking, a garden and a terrace. 24 km from Polanica Zdroj Train Station and 37 km from The Grandmother's Valley, the property features a restaurant and a bar. The resort features an indoor pool, evening entertainment and room service.`,
      },
      {
        paragraph: `At the resort, every room is equipped with a wardrobe, a TV, a private bathroom, bed linen and towels.`,
      },
      {
        paragraph: `The area is popular for skiing, and ski equipment hire is available at Skałka Zieleniec.`,
      },
      {
        paragraph: `Chopin Manor is 10 km from the accommodation, while Aqua Park Kudowa is 22 km away. The nearest airport is Pardubice Airport, 99 km from Skałka Zieleniec.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.3 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Zieleniec',
    name: 'Cottage Orlik',
    popular: true,
    maxCapacity: 4,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 2,
    sleepComfortably: 4,
    pets: 0,
    regularPrice: 350,
    discount: 25,
    images: [
      `https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Featuring mountain views and a shared lounge, cottage Orlik is situated in the Zieleniec district of Duszniki Zdrój, 18 km from Kudowa Zdrój Train Station and 23 km from Polanica Zdroj Train Station. This guest house features free private parking and private check-in and check-out. The guest house has family rooms.`,
      },
      {
        paragraph: `At the guest house, units include a wardrobe. With a private bathroom fitted with a shower, units at the guest house also feature free WiFi, while some rooms are fitted with a balcony.`,
      },
      {
        paragraph: `A selection of options including fruits, juice and cheese is available for the buffet breakfast. During the colder months, guests can enjoy winter sports in the surrounding area.`,
      },
      {
        paragraph: `You can play billiards at the guest house.`,
      },
      {
        paragraph: `The Grandmother's Valley is 35 km from cottage Orlik, while Chopin Manor is 13 km from the property. The nearest airport is Pardubice Airport, 97 km from the accommodation.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Zieleniec',
    name: 'Domki Zieleniec',
    maxCapacity: 4,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 2,
    sleepComfortably: 4,
    pets: 1,
    regularPrice: 300,
    discount: 0,
    images: [
      `https://images.pexels.com/photos/10964881/pexels-photo-10964881.jpeg?auto=compress&cs=tinysrgb&w=1700&h=750&dpr=1`,
      `https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Set just 18 km from Kudowa Zdrój Train Station, Domki Zieleniec provides accommodation in Duszniki Zdrój with access to a garden, barbecue facilities, as well as room service. This property offers access to a balcony, free private parking and free WiFi. On clear days, guests can head outside to enjoy the holiday home's outdoor fireplace.`,
      },
      {
        paragraph: `The holiday home with a terrace and mountain views has 2 bedrooms, a living room, a flat-screen TV, an equipped kitchen with a dishwasher and a microwave, and 1 bathroom with a walk-in shower. Towels and bed linen are offered in the holiday home. This holiday home is allergy-free and non-smoking.`,
      },
      {
        paragraph: `For guests with children, the holiday home offers outdoor play equipment and a baby safety gate. Skiing, cycling and hiking are possible within the area, and Domki Zieleniec offers ski storage space.`,
      },
      {
        paragraph: `Polanica Zdroj Train Station is 23 km from the accommodation, while The Grandmother's Valley is 35 km from the property. The nearest airport is Pardubice Airport, 97 km from Domki Zieleniec.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Zieleniec',
    name: 'Resort Ski',
    maxCapacity: 4,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 2,
    sleepComfortably: 4,
    pets: 1,
    regularPrice: 500,
    discount: 50,
    images: [
      `https://images.pexels.com/photos/7746563/pexels-photo-7746563.jpeg?auto=compress&cs=tinysrgb&w=1700&h=750&dpr=1`,
      `https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Situated in the spa town of Duszniki Zdrój, this resort and spa offers a wealth of health and fitness facilities, close to the ski slopes of Zieleniec. Free Wi-Fi is provided.`,
      },
      {
        paragraph: `Resort Ski offers well-furnished accommodations with beautiful views of the hotel’s natural surroundings. Start each day with a tasty buffet breakfast before exploring the area.`,
      },
      {
        paragraph: `Resort Ski will provide you with an informative map of the surrounding ski slopes, allowing you to enjoy slopes that match your ability.`,
      },
      {
        paragraph: `After a day on the slopes, soothe those tired muscles with a massage, or spend some time in the Resort Ski sauna. You can also indulge in beauty treatments for the ultimate level of well-being.`,
      },
      {
        paragraph: `The indoor pool area provides a great sanctuary for swimming and relaxation and you can also lie back in the conservatory and enjoy the stunning mountain scenery.`,
      },
      {
        paragraph: `A variety of cuisine can be enjoyed in the elegant surroundings of Resort Ski’s restaurant, followed by a relaxing drink at the bar, for a lovely end to the day.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.2 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Zieleniec',
    name: 'Chata Zieleniecka',
    maxCapacity: 3,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 3,
    pets: 1,
    regularPrice: 350,
    discount: 0,
    images: [
      `https://images.unsplash.com/photo-1638985787285-46f05ff063f2?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1617198998846-56e8a4c6e7b7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Set in Duszniki Zdrój in the Lower Silesia region and Kudowa Zdrój Train Station reachable within 19 km, Chata Zieleniecka offers accommodation with free WiFi, barbecue facilities, ski-to-door access and free private parking. The property features a garden and inner courtyard views and is 24 km from Polanica Zdroj Train Station. Featuring family rooms, this property also provides guests with a picnic area.`,
      },
      {
        paragraph: `At the bed and breakfast, each unit comes with a wardrobe, a flat-screen TV, a private bathroom, bed linen and towels.`,
      },
      {
        paragraph: `Guests can also warm themselves near an outdoor fireplace after a day of skiing.`,
      },
      {
        paragraph: `The Grandmother's Valley is 36 km from the bed and breakfast, while Chopin Manor is 7.5 km away. The nearest airport is Pardubice Airport, 98 km from Chata Zieleniecka.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Zieleniec',
    name: 'Domek Śnieżnej Wróżki',
    maxCapacity: 6,
    kingBed: 1,
    bedrooms: 3,
    bathroom: 2,
    sleepComfortably: 6,
    pets: 2,
    regularPrice: 800,
    discount: 100,
    images: [
      `https://images.pexels.com/photos/10701132/pexels-photo-10701132.jpeg?auto=compress&cs=tinysrgb&w=1700&dpr=1`,
      `https://images.unsplash.com/photo-1617228069096-4638a7ffc906?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1620995559331-e5507e0a169f?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Located in Duszniki Zdrój in the Lower Silesia region with Zieleniec Ski Resort nearby, Domek Śnieżnej Wróżki provides accommodation with free private parking, as well as access to spa facilities. It is situated 19 km from Kudowa Zdrój Train Station and offers a housekeeping service. Featuring family rooms, this property also provides guests with a barbecue.`,
      },
      {
        paragraph: `At the bed and breakfast, every unit is fitted with a wardrobe. Each unit is equipped with a kettle, a flat-screen TV, a safety deposit box and free WiFi, while some rooms are equipped with a terrace and some have mountain views. The units include a private bathroom, bathrobes and bed linen.`,
      },
      {
        paragraph: `For guests with children, the bed and breakfast features an indoor play area. Skiing, cycling and hiking are possible within the area, and Domek Śnieżnej Wróżki offers ski storage space.`,
      },
      {
        paragraph: `Polanica Zdroj Train Station is 24 km from the accommodation, while The Grandmother's Valley is 36 km away. The nearest airport is Pardubice Airport, 99 km from Domek Śnieżnej Wróżki.`,
      },
      {
        paragraph: `Couples particularly like the location — they rated it 9.0 for a two-person trip.`,
      },
    ],
  },
  {
    type: 'winter',
    location: 'Zieleniec',
    name: 'Ski Domki Zieleniec',
    maxCapacity: 4,
    kingBed: 1,
    bedrooms: 2,
    bathroom: 1,
    sleepComfortably: 4,
    pets: 0,
    regularPrice: 600,
    discount: 100,
    images: [
      `https://images.pexels.com/photos/11346257/pexels-photo-11346257.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=1`,
      `https://images.unsplash.com/photo-1543503103-f94a0036ed9d?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Set 19 km from Kudowa Zdrój Train Station, Ski Domki Zieleniec offers accommodation with a balcony, as well as a garden. There is a private entrance at the chalet for the convenience of those who stay. The chalet offers rooms with air conditioning, free private parking and free WiFi.`,
      },
      {
        paragraph: `All units come with a terrace with mountain views, a fully equipped kitchen with a dishwasher and a microwave, and a private bathroom with a shower. A fridge, a stovetop and kitchenware are also offered, as well as a coffee machine and a kettle. At the chalet complex, the units have bed linen and towels.`,
      },
      {
        paragraph: `During the colder months, guests can enjoy winter sports in the surrounding area.`,
      },
      {
        paragraph: `Polanica Zdroj Train Station is 24 km from the chalet, while The Grandmother's Valley is 37 km from the property. The nearest airport is Pardubice Airport, 99 km from Ski Domki Zieleniec.`,
      },
    ],
  },

  {
    type: 'winter',
    location: 'Zieleniec',
    name: 'Camping Resort',
    maxCapacity: 5,
    kingBed: 2,
    bedrooms: 3,
    bathroom: 2,
    sleepComfortably: 5,
    pets: 1,
    regularPrice: 450,
    discount: 0,
    images: [
      `https://images.pexels.com/photos/11993871/pexels-photo-11993871.jpeg?auto=compress&cs=tinysrgb&w=1700&dpr=1`,
      `https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ],
    description: [
      {
        paragraph: `Camping Resort, a property with barbecue facilities, is situated in Duszniki Zdrój, 22 km from Polanica Zdroj Train Station, 35 km from The Grandmother's Valley, as well as 13 km from Chopin Manor. This property offers access to a balcony, free private parking and free WiFi. The property is soundproof and is located 17 km from Kudowa Zdrój Train Station.`,
      },
      {
        paragraph: `The chalet comes with 2 bedrooms, 2 bathrooms, bed linen, towels, a flat-screen TV with streaming services, a dining area, a fully equipped kitchenette, and a terrace with mountain views. A private entrance leads guests into the chalet, where they can enjoy some wine or champagne and chocolates or cookies. This chalet is allergy-free and non-smoking.`,
      },
      {
        paragraph: `Guests can also warm themselves near an outdoor fireplace after a day of skiing.`,
      },
      {
        paragraph: `Aqua Park Kudowa is 20 km from the chalet, while Polanica Zdrój Mineral Water Pump Room is 22 km away. The nearest airport is Pardubice Airport, 97 km from Camping Resort.`,
      },
    ],
  },
];
