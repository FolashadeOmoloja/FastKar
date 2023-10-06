

export const NavLinks = [
    { href: "#home", label: "Home" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact-us", label: "Contact Us" },
];

export const vehicles = [
    {
        type: 'Express Ride',
        image: '/motor.png',
        star: 4.5,
        reviews:'289 Reviews',
        description: 'Efficient motorcycle rides: Affordable way to navigate traffic',
        basePrice: 1
    },

    {
        type: 'Fast Track',
        image: '/tricycle.png',
        star: 3.5,
        reviews:'289 Reviews',
        description: 'Efficient keke napep rides: Affordable way to navigate traffic',
        basePrice: 1.3
    },
    {
        type: 'Economy Compact',
        image: '/economy.png',
        star: 4,
        reviews:'799 Reviews',
        description: 'Compact car rides: Affordable way to outsmart heavy traffic.',
        basePrice: 2.2
    },
    {
        type: 'Luxury Ride',
        image: '/luxury.png',
        star: 4.5,
        reviews:'197 Reviews',
        description: 'Experience elegance and finesse as you travel in luxury',
        basePrice: 2.8
    },
    {
        type: 'Prestige Ride',
        image: '/premuim.png',
        star: 5,
        reviews:'125 Reviews',
        description: 'Indulge in excellence with our premium car travel in this package.',
        basePrice: 3.7
    },
    {
        type: 'Group Ride',
        image: '/groupbus.png',
        star: 4.8,
        reviews:'950 Reviews',
        description: 'Secure group travels with our reliable and spacious bus package.',
        basePrice: 4.5
    },

]


export const testimonials = [
    

    {
        name: 'Mike Ukumbe',
        image: '/user1.png',
        reviews:'"FastKar exceeded my expectations! I was amazed by their efficient service that got me to my destination hassle-free. The affordability combined with their commitment to safety truly set them apart',
        description: 'FastKar User'
    },
    {
        name: 'Claire Victory',
        image: '/user3.png',
        reviews:"Safety has always been my top concern when choosing a ride service. FastKar's dedication to safety standards, combined with their affordability, made them my go-to choice. Highly recommend and trust!",
        description: 'CEO Umbquie'
    },
    {
        name: 'Bryan Magixx',
        image: '/user2.png',
        reviews:'FastKar has redefined my travel experience. The seamless booking process, efficient rides, and pocket-friendly prices make it my preferred option. I feel secure and enjoy a stress-free ride every time.',
        description: 'Actor'
    },

]

// Haversine formula
// a = sin²(Δlat/2) + cos(lat1) * cos(lat2) * sin²(Δlon/2)
// c = 2 * atan2(√a, √(1-a))
// distance = R * c

  

export function calculateDistance(addressFrom: [number,number], addressTo: [number,number]){
    let lat1 = addressFrom[0] 
    let lon1 = addressFrom[1]
    let lat2 = addressTo[0]
    let lon2 = addressTo[1]


    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180); // Convert latitude difference to radians
    const dLon = (lon2 - lon1) * (Math.PI / 180); // Convert longitude difference to radians
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    const distance = R * c; // Distance in kilometers
    const distanceDisplay = `Distance: ${distance.toFixed(2)} km`

  
    return {distanceDisplay, distance};
  }


  export function estimateCarTravelTime(distanceInKm: number, isHighway = false) {
    // Define average speeds for urban roads and highways (in km/h)
    const urbanRoadSpeed = 30; // Average speed on urban roads
    const highwaySpeed = 100;  // Average speed on highways
    
    // Determine the average speed based on the type of road
    const averageSpeed = isHighway ? highwaySpeed : urbanRoadSpeed;
  
    // Calculate time in hours (distance / speed)
    const timeInHours = distanceInKm / averageSpeed;
  
    // Convert hours to minutes and seconds
    const hours = Math.floor(timeInHours);
    const minutes = Math.floor((timeInHours - hours) * 60);
    const seconds = Math.floor(((timeInHours - hours) * 60 - minutes) * 60);
    const timeDisplay = `${hours}H, ${minutes}M, ${seconds}S`
  
    return {
      hours,
      minutes,
      seconds,
      timeDisplay
    };
  }
  
  export function calculateTripPrice(distanceInKilometers: number, basePrice: number) {
    const ratePerKilometer = 200; // Adjust the rate per kilometer as needed
  
    // Calculate the price based on the distance
    const totalPrice = basePrice * distanceInKilometers * ratePerKilometer;
    const totalPriceDisplay = `${totalPrice.toFixed(2)}`
    
  
    return {totalPrice, totalPriceDisplay};
  }
  



export function generateUniqueId(): string {
    let counter = 1;
    let letterIndex = 0;
  const prefix = 'FK';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const currentLetter = letters.charAt(letterIndex);

  const id = counter.toString().padStart(5, '0'); // Pad the counter with leading zeros
  counter++;

  if (counter > 99999) {
    // Reset counter and move to the next letter when it reaches 100000
    counter = 1;
    letterIndex = (letterIndex + 1) % letters.length;
  }

  return `${prefix}${id}${currentLetter}`;
}

// Example usage:
const uniqueId = generateUniqueId();
console.log(uniqueId); // Output: OWC00001A

  