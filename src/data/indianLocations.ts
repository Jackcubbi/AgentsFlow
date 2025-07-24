export interface LocationData {
  state: string;
  region: "North India" | "South India" | "East India" | "West India";
  cities: {
    name: string;
    districts?: string[];
    taluks?: string[];
    villages?: string[];
  }[];
}

export const indianLocations: LocationData[] = [
  // North India
  {
    state: "Delhi",
    region: "North India",
    cities: [
      {
        name: "New Delhi",
        districts: [
          "Central Delhi",
          "North Delhi",
          "South Delhi",
          "East Delhi",
          "West Delhi",
        ],
        taluks: ["Connaught Place", "Karol Bagh", "Lajpat Nagar"],
        villages: ["Mahipalpur", "Chattarpur", "Vasant Kunj"],
      },
    ],
  },
  {
    state: "Punjab",
    region: "North India",
    cities: [
      {
        name: "Chandigarh",
        districts: ["Chandigarh"],
        taluks: ["Sector 17", "Sector 22", "Sector 35"],
        villages: ["Mani Majra", "Burail", "Maloya"],
      },
      {
        name: "Amritsar",
        districts: ["Amritsar"],
        taluks: ["Ajnala", "Rayya", "Tarn Taran"],
        villages: ["Attari", "Wagah", "Jandiala Guru"],
      },
      {
        name: "Ludhiana",
        districts: ["Ludhiana"],
        taluks: ["Khanna", "Samrala", "Jagraon"],
        villages: ["Machhiwara", "Sidhwan Bet", "Doraha"],
      },
    ],
  },
  {
    state: "Haryana",
    region: "North India",
    cities: [
      {
        name: "Gurgaon",
        districts: ["Gurgaon"],
        taluks: ["Sohna", "Pataudi", "Farukh Nagar"],
        villages: ["Manesar", "Binola", "Sultanpur"],
      },
      {
        name: "Faridabad",
        districts: ["Faridabad"],
        taluks: ["Ballabgarh", "Hathin", "Palwal"],
        villages: ["Surajkund", "Badkhal", "Anangpur"],
      },
    ],
  },
  {
    state: "Rajasthan",
    region: "North India",
    cities: [
      {
        name: "Jaipur",
        districts: ["Jaipur"],
        taluks: ["Amber", "Bassi", "Chaksu"],
        villages: ["Sanganer", "Bagru", "Dudu"],
      },
      {
        name: "Udaipur",
        districts: ["Udaipur"],
        taluks: ["Girwa", "Mavli", "Vallabhnagar"],
        villages: ["Eklingji", "Nathdwara", "Rajsamand"],
      },
      {
        name: "Jodhpur",
        districts: ["Jodhpur"],
        taluks: ["Bilara", "Luni", "Shergarh"],
        villages: ["Mandore", "Balesar", "Pipar"],
      },
    ],
  },
  {
    state: "Uttar Pradesh",
    region: "North India",
    cities: [
      {
        name: "Lucknow",
        districts: ["Lucknow"],
        taluks: ["Sarojininagar", "Mohanlalganj", "Malihabad"],
        villages: ["Kakori", "Chinhat", "Itaunja"],
      },
      {
        name: "Agra",
        districts: ["Agra"],
        taluks: ["Fatehabad", "Kheragarh", "Bah"],
        villages: ["Sikandra", "Itimad-ud-Daulah", "Dayalbagh"],
      },
      {
        name: "Varanasi",
        districts: ["Varanasi"],
        taluks: ["Pindra", "Cholapur", "Arajiline"],
        villages: ["Sarnath", "Ramnagar", "Bhadohi"],
      },
    ],
  },

  // South India
  {
    state: "Karnataka",
    region: "South India",
    cities: [
      {
        name: "Bangalore",
        districts: ["Bangalore Urban", "Bangalore Rural"],
        taluks: ["Anekal", "Devanahalli", "Doddaballapur", "Hoskote"],
        villages: ["Whitefield", "Electronic City", "Sarjapur", "Yelahanka"],
      },
      {
        name: "Mysore",
        districts: ["Mysore"],
        taluks: ["Krishnarajanagar", "Piriyapatna", "Hunsur"],
        villages: ["Srirangapatna", "Mandya", "Somnathpur"],
      },
      {
        name: "Mangalore",
        districts: ["Dakshina Kannada"],
        taluks: ["Bantwal", "Belthangady", "Puttur"],
        villages: ["Udupi", "Kundapur", "Karkala"],
      },
    ],
  },
  {
    state: "Tamil Nadu",
    region: "South India",
    cities: [
      {
        name: "Chennai",
        districts: ["Chennai"],
        taluks: ["Ambattur", "Alandur", "Sholinganallur"],
        villages: ["Mahabalipuram", "Kanchipuram", "Chengalpattu"],
      },
      {
        name: "Coimbatore",
        districts: ["Coimbatore"],
        taluks: ["Pollachi", "Valparai", "Anaimalai"],
        villages: ["Mettupalayam", "Udumalaipettai", "Tirupur"],
      },
      {
        name: "Madurai",
        districts: ["Madurai"],
        taluks: ["Melur", "Vadipatti", "Thirumangalam"],
        villages: ["Alagar Koil", "Tiruparankundram", "Sholavandan"],
      },
    ],
  },
  {
    state: "Kerala",
    region: "South India",
    cities: [
      {
        name: "Kochi",
        districts: ["Ernakulam"],
        taluks: ["Fort Kochi", "Mattancherry", "Vypin"],
        villages: ["Kumbakonam", "Cherai", "Munambam"],
      },
      {
        name: "Thiruvananthapuram",
        districts: ["Thiruvananthapuram"],
        taluks: ["Neyyattinkara", "Chirayinkeezhu", "Varkala"],
        villages: ["Kovalam", "Poovar", "Anchuthengu"],
      },
      {
        name: "Calicut",
        districts: ["Kozhikode"],
        taluks: ["Vatakara", "Koyilandy", "Ramanattukara"],
        villages: ["Beypore", "Elathur", "Thiruvambady"],
      },
    ],
  },
  {
    state: "Andhra Pradesh",
    region: "South India",
    cities: [
      {
        name: "Hyderabad",
        districts: ["Hyderabad", "Rangareddy", "Medchal"],
        taluks: ["Secunderabad", "Cyberabad", "Old City"],
        villages: ["Shamshabad", "Kondapur", "Gachibowli"],
      },
      {
        name: "Visakhapatnam",
        districts: ["Visakhapatnam"],
        taluks: ["Anakapalle", "Narsipatnam", "Paderu"],
        villages: ["Araku Valley", "Lambasingi", "Borra Caves"],
      },
      {
        name: "Vijayawada",
        districts: ["Krishna"],
        taluks: ["Machilipatnam", "Gudivada", "Jaggayyapeta"],
        villages: ["Amaravati", "Mangalagiri", "Guntur"],
      },
    ],
  },

  // East India
  {
    state: "West Bengal",
    region: "East India",
    cities: [
      {
        name: "Kolkata",
        districts: ["Kolkata", "North 24 Parganas", "South 24 Parganas"],
        taluks: ["Salt Lake", "New Town", "Rajarhat"],
        villages: ["Barasat", "Basirhat", "Diamond Harbour"],
      },
      {
        name: "Darjeeling",
        districts: ["Darjeeling"],
        taluks: ["Kalimpong", "Kurseong", "Mirik"],
        villages: ["Ghoom", "Batasia", "Phalut"],
      },
      {
        name: "Siliguri",
        districts: ["Darjeeling"],
        taluks: ["Matigara", "Naxalbari", "Kharibari"],
        villages: ["Bagdogra", "Sukna", "Sevoke"],
      },
    ],
  },
  {
    state: "Odisha",
    region: "East India",
    cities: [
      {
        name: "Bhubaneswar",
        districts: ["Khordha"],
        taluks: ["Balianta", "Jatni", "Begunia"],
        villages: ["Dhauli", "Pipili", "Konark"],
      },
      {
        name: "Puri",
        districts: ["Puri"],
        taluks: ["Satyabadi", "Brahmagiri", "Nimapara"],
        villages: ["Raghurajpur", "Chandrabhaga", "Astaranga"],
      },
      {
        name: "Cuttack",
        districts: ["Cuttack"],
        taluks: ["Salepur", "Nischintakoili", "Baranga"],
        villages: ["Choudwar", "Banki", "Tigiria"],
      },
    ],
  },
  {
    state: "Jharkhand",
    region: "East India",
    cities: [
      {
        name: "Ranchi",
        districts: ["Ranchi"],
        taluks: ["Bundu", "Tamar", "Sonahatu"],
        villages: ["Kanke", "Tupudana", "Ratu"],
      },
      {
        name: "Jamshedpur",
        districts: ["East Singhbhum"],
        taluks: ["Ghatshila", "Potka", "Dhalbhumgarh"],
        villages: ["Ghatsila", "Mosabani", "Chakulia"],
      },
      {
        name: "Dhanbad",
        districts: ["Dhanbad"],
        taluks: ["Jharia", "Sindri", "Baliapur"],
        villages: ["Katras", "Patherdih", "Topchanchi"],
      },
    ],
  },
  {
    state: "Bihar",
    region: "East India",
    cities: [
      {
        name: "Patna",
        districts: ["Patna"],
        taluks: ["Danapur", "Fatuha", "Masaurhi"],
        villages: ["Hajipur", "Maner", "Phulwari"],
      },
      {
        name: "Gaya",
        districts: ["Gaya"],
        taluks: ["Bodh Gaya", "Tekari", "Dobhi"],
        villages: ["Vishnupad", "Falgu", "Magadh"],
      },
      {
        name: "Muzaffarpur",
        districts: ["Muzaffarpur"],
        taluks: ["Sitamarhi", "Sheohar", "Vaishali"],
        villages: ["Kanti", "Minapur", "Paroo"],
      },
    ],
  },

  // West India
  {
    state: "Maharashtra",
    region: "West India",
    cities: [
      {
        name: "Mumbai",
        districts: ["Mumbai City", "Mumbai Suburban"],
        taluks: ["Andheri", "Borivali", "Kurla", "Thane"],
        villages: ["Juhu", "Versova", "Madh Island", "Gorai"],
      },
      {
        name: "Pune",
        districts: ["Pune"],
        taluks: ["Haveli", "Mulshi", "Bhor", "Baramati"],
        villages: ["Lonavala", "Khandala", "Lavasa", "Talegaon"],
      },
      {
        name: "Nagpur",
        districts: ["Nagpur"],
        taluks: ["Kamptee", "Narkhed", "Umred"],
        villages: ["Deekshabhoomi", "Sitabuldi", "Saoner"],
      },
      {
        name: "Nashik",
        districts: ["Nashik"],
        taluks: ["Trimbakeshwar", "Igatpuri", "Sinnar"],
        villages: ["Shirdi", "Ozar", "Ghoti"],
      },
    ],
  },
  {
    state: "Gujarat",
    region: "West India",
    cities: [
      {
        name: "Ahmedabad",
        districts: ["Ahmedabad"],
        taluks: ["Gandhinagar", "Sanand", "Dholka"],
        villages: ["Sarkhej", "Vatva", "Naroda"],
      },
      {
        name: "Surat",
        districts: ["Surat"],
        taluks: ["Bardoli", "Mandvi", "Kamrej"],
        villages: ["Dumas", "Hazira", "Magdalla"],
      },
      {
        name: "Vadodara",
        districts: ["Vadodara"],
        taluks: ["Padra", "Karjan", "Dabhoi"],
        villages: ["Champaner", "Pavagadh", "Kawant"],
      },
      {
        name: "Rajkot",
        districts: ["Rajkot"],
        taluks: ["Gondal", "Jetpur", "Dhoraji"],
        villages: ["Morbi", "Wankaner", "Paddhari"],
      },
    ],
  },
  {
    state: "Rajasthan",
    region: "West India",
    cities: [
      {
        name: "Jaisalmer",
        districts: ["Jaisalmer"],
        taluks: ["Pokaran", "Fatehgarh", "Sam"],
        villages: ["Khuri", "Kanoi", "Ramgarh"],
      },
      {
        name: "Bikaner",
        districts: ["Bikaner"],
        taluks: ["Nokha", "Lunkaransar", "Khajuwala"],
        villages: ["Deshnoke", "Mukam", "Kolayat"],
      },
      {
        name: "Mount Abu",
        districts: ["Sirohi"],
        taluks: ["Abu Road", "Pindwara", "Sheoganj"],
        villages: ["Achalgarh", "Guru Shikhar", "Trevor Tank"],
      },
    ],
  },
  {
    state: "Goa",
    region: "West India",
    cities: [
      {
        name: "Panaji",
        districts: ["North Goa"],
        taluks: ["Tiswadi", "Bardez", "Pernem"],
        villages: ["Fontainhas", "Ribandar", "Goa Velha"],
      },
      {
        name: "Margao",
        districts: ["South Goa"],
        taluks: ["Salcete", "Mormugao", "Quepem"],
        villages: ["Benaulim", "Colva", "Cavelossim"],
      },
      {
        name: "Vasco da Gama",
        districts: ["South Goa"],
        taluks: ["Mormugao", "Cortalim", "Sancoale"],
        villages: ["Bogmalo", "Issorcim", "Cansaulim"],
      },
    ],
  },
];

// Helper function to get all locations as flat array for search
export const getAllLocations = () => {
  const locations: string[] = [];

  indianLocations.forEach((state) => {
    // Add state
    locations.push(`${state.state}, ${state.region}`);

    state.cities.forEach((city) => {
      // Add city
      locations.push(`${city.name}, ${state.state}`);

      // Add districts
      city.districts?.forEach((district) => {
        locations.push(`${district}, ${city.name}, ${state.state}`);
      });

      // Add taluks
      city.taluks?.forEach((taluk) => {
        locations.push(`${taluk}, ${city.name}, ${state.state}`);
      });

      // Add villages
      city.villages?.forEach((village) => {
        locations.push(`${village}, ${city.name}, ${state.state}`);
      });
    });
  });

  return locations.sort();
};

// Helper function to search locations
export const searchLocations = (query: string, limit: number = 10) => {
  if (!query.trim()) return [];

  const allLocations = getAllLocations();
  const searchQuery = query.toLowerCase();

  return allLocations
    .filter((location) => location.toLowerCase().includes(searchQuery))
    .slice(0, limit);
};

// Helper function to get locations by region
export const getLocationsByRegion = (region: string) => {
  return indianLocations.filter((state) => state.region === region);
};
