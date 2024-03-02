// Sample business ideas
const ideas = [
  {
      idea: "Virtual Event Planning",
      details: "Plan and organize virtual events for businesses and individuals. Offer services such as virtual conference planning, online party organization, and virtual team building activities."
  },
  {
      idea: "Personalized Meal Planning",
      details: "Create personalized meal plans for individuals based on their dietary preferences and health goals. Offer customized meal plans tailored to specific dietary needs such as gluten-free, vegan, keto, etc."
  },
  {
      idea: "Smart Home Installation Service",
      details: "Install and set up smart home devices for homeowners to enhance their living experience. Offer installation services for smart thermostats, security cameras, smart lighting, and other home automation devices."
  }
,
  {
    idea: "Digital Marketing Agency",
    details: "Provide digital marketing services to businesses, including social media management, search engine optimization (SEO), pay-per-click (PPC) advertising, content marketing, and email marketing."
},
{
    idea: "Online Tutoring Platform",
    details: "Create an online platform for connecting students with tutors in various subjects. Offer live one-on-one tutoring sessions, pre-recorded video lessons, and interactive learning materials."
},
{
    idea: "Eco-Friendly Products Store",
    details: "Start a store that sells eco-friendly and sustainable products such as reusable bags, bamboo utensils, organic clothing, and environmentally friendly home goods."
},
    {
      idea: "Digital Marketing Agency",
      details: "Provide digital marketing services to businesses, including social media management, search engine optimization (SEO), pay-per-click (PPC) advertising, content marketing, and email marketing."
  },
  {
      idea: "Online Tutoring Platform",
      details: "Create an online platform for connecting students with tutors in various subjects. Offer live one-on-one tutoring sessions, pre-recorded video lessons, and interactive learning materials."
  },
  {
      idea: "Eco-Friendly Products Store",
      details: "Start a store that sells eco-friendly and sustainable products such as reusable bags, bamboo utensils, organic clothing, and environmentally friendly home goods."
  },
  {
      idea: "Virtual Assistant Service",
      details: "Offer virtual assistant services to businesses and entrepreneurs. Assist with administrative tasks, email management, scheduling, research, and other business support activities."
  },
  {
      idea: "Mobile App Development Company",
      details: "Develop custom mobile applications for businesses and individuals. Offer services for iOS, Android, and cross-platform app development, including design, development, testing, and maintenance."
  },
  {
      idea: "Fitness Coaching Service",
      details: "Provide personalized fitness coaching services to individuals. Offer customized workout plans, nutrition guidance, accountability coaching, and support to help clients achieve their health and fitness goals."
  },
  {
      idea: "Online Course Marketplace",
      details: "Create an online marketplace for buying and selling educational courses. Allow instructors to upload and sell their courses on various topics, and provide students with access to high-quality learning materials."
  },
  {
      idea: "Pet Sitting and Dog Walking Service",
      details: "Offer pet sitting and dog walking services to pet owners. Provide in-home pet sitting, dog walking, feeding, and playtime services to ensure the well-being of pets while their owners are away."
  },
  {
      idea: "Freelance Writing Business",
      details: "Start a freelance writing business and offer writing services to clients. Write articles, blog posts, website content, product descriptions, and other types of content for businesses, publications, and individuals."
  },
  {
      idea: "Home Cleaning Service",
      details: "Start a residential cleaning service and provide professional cleaning services to homeowners. Offer regular cleaning, deep cleaning, move-in/out cleaning, and specialized cleaning services tailored to client needs."
  },
  {
      idea: "Graphic Design Studio",
      details: "Establish a graphic design studio and offer design services to clients. Create logos, branding materials, marketing collateral, digital graphics, and other visual assets for businesses, organizations, and individuals."
  },
  {
      idea: "Handmade Crafts Business",
      details: "Start a handmade crafts business and sell handmade products online or at local markets. Create unique crafts such as jewelry, pottery, candles, soaps, textiles, and artwork, and market them to customers."
  },
  {
      idea: "Social Media Management Agency",
      details: "Provide social media management services to businesses and brands. Manage social media accounts, create content, engage with followers, run ad campaigns, and analyze performance to help clients achieve their marketing goals."
  },
  {
      idea: "Language Translation Service",
      details: "Offer language translation services to individuals and businesses. Translate documents, websites, marketing materials, and other content between different languages to facilitate communication and reach a wider audience."
  },
  {
      idea: "Personal Styling and Wardrobe Consulting",
      details: "Provide personal styling and wardrobe consulting services to individuals. Help clients define their personal style, update their wardrobe, and create outfits for special occasions, events, or everyday wear."
  },
  {
      idea: "Travel Planning and Concierge Service",
      details: "Offer travel planning and concierge services to travelers. Assist with itinerary planning, hotel reservations, transportation bookings, restaurant recommendations, and other travel arrangements to ensure a seamless and enjoyable trip."
  },
  {
      idea: "Handyman Services",
      details: "Start a handyman business and offer a wide range of repair and maintenance services to homeowners and businesses. Provide services such as plumbing, electrical work, carpentry, painting, and general home repairs."
  },
  {
      idea: "Health and Wellness Coaching",
      details: "Become a health and wellness coach and help clients improve their overall well-being. Provide guidance on nutrition, exercise, stress management, sleep hygiene, and other lifestyle factors to promote health and vitality."
  },
  {
      idea: "Event Photography Business",
      details: "Start an event photography business and offer photography services for weddings, parties, corporate events, and other special occasions. Capture memorable moments and deliver high-quality photos to clients."
  },
  {
      idea: "Dropshipping Business",
      details: "Start a dropshipping business and sell products online without the need to hold inventory. Partner with suppliers to fulfill orders directly to customers, and focus on marketing, customer service, and growing your online store."
  },
  {
      idea: "Financial Planning and Advisory Firm",
      details: "Establish a financial planning and advisory firm and offer personalized financial advice to individuals and families. Provide services such as retirement planning, investment management, tax planning, and estate planning."
  },
  {
      idea: "Event Planning and Design Company",
      details: "Start an event planning and design company and offer comprehensive event planning services. Plan and design weddings, corporate events, parties, and other special occasions to create unforgettable experiences for clients."
  },
  {
      idea: "Home Renovation Business",
      details: "Start a home renovation business and provide renovation and remodeling services to homeowners. Offer services such as kitchen remodeling, bathroom renovations, basement finishing, and home additions."
  },
  {
      idea: "Content Creation Agency",
      details: "Establish a content creation agency and offer content creation services to businesses and brands. Create engaging and informative content for websites, blogs, social media, and other digital platforms to attract and engage audiences."
  },
  {
      idea: "Fitness Apparel Brand",
      details: "Launch a fitness apparel brand and design stylish and functional activewear for fitness enthusiasts. Create high-quality workout clothing, including leggings, tops, sports bras, and accessories, and sell them online or in retail stores."
  },
  {
      idea: "Catering Business",
      details: "Start a catering business and offer catering services for events, parties, weddings, and corporate functions. Provide delicious and professionally prepared food, along with exceptional service, to ensure a memorable dining experience for clients and guests."
  },
  {
      idea: "Web Development Agency",
      details: "Establish a web development agency and offer website design and development services to businesses and organizations. Create custom websites, e-commerce platforms, web applications, and other digital solutions to help clients achieve their online goals."
  },
  {
      idea: "Professional Organizing Service",
      details: "Offer professional organizing services to individuals and businesses. Help clients declutter and organize their homes, offices, and other spaces to increase efficiency, reduce stress, and improve overall well-being."

  },  
      {
          idea: "Virtual Reality Arcade",
          details: "Open a virtual reality arcade where customers can experience immersive virtual reality games and simulations."
      },
      {
          idea: "Personalized Astrology Readings",
          details: "Offer personalized astrology readings and consultations to help individuals gain insight into their personalities, relationships, and future."
      },
      {
          idea: "Customized Gift Box Service",
          details: "Create and sell customized gift boxes filled with curated items for special occasions such as birthdays, weddings, and holidays."
      },
      {
          idea: "Urban Farming Consultancy",
          details: "Provide consultancy services to individuals and organizations interested in starting urban farming projects, including rooftop gardens and indoor hydroponic systems."
      },
      {
          idea: "Vintage Clothing Rental Service",
          details: "Start a rental service for vintage clothing and accessories, allowing customers to rent unique pieces for special events and photo shoots."
      },
      {
          idea: "Tech Repair and Refurbishment Shop",
          details: "Open a shop specializing in repairing and refurbishing electronic devices such as smartphones, laptops, and gaming consoles."
      },
      {
          idea: "Mobile Car Detailing Business",
          details: "Offer mobile car detailing services, providing professional cleaning, polishing, and waxing for vehicles at customers' homes or workplaces."
      },
      {
          idea: "Sustainable Home Goods Store",
          details: "Open a store selling sustainable and eco-friendly home goods such as furniture, decor, and kitchenware made from recycled materials."
      },
      {
          idea: "Dog Agility Training Facility",
          details: "Establish a dog agility training facility where owners can train their dogs in agility courses and participate in competitions and events."
      },
      {
          idea: "Artisanal Candle Making Business",
          details: "Start a business creating artisanal candles using natural waxes, essential oils, and unique designs to appeal to eco-conscious consumers."
      },
      {
          idea: "Outdoor Adventure Tours",
          details: "Offer guided outdoor adventure tours such as hiking, kayaking, and rock climbing excursions in scenic locations."
      },
      {
          idea: "Homemade Pet Treat Bakery",
          details: "Start a bakery specializing in homemade treats for pets, using natural and organic ingredients to create healthy and tasty snacks."
      },
      {
          idea: "Ethical Fashion Boutique",
          details: "Open a boutique selling ethically sourced and sustainable fashion brands, promoting fair trade practices and eco-friendly materials."
      },
      {
          idea: "Zero Waste Grocery Store",
          details: "Launch a grocery store focused on zero waste principles, offering bulk bins, reusable containers, and sustainable packaging alternatives."
      },
      {
          idea: "Indoor Trampoline Park",
          details: "Create an indoor trampoline park featuring various trampoline attractions, foam pits, and obstacle courses for all ages."
      },
      {
          idea: "Custom Pet Portraits",
          details: "Offer custom pet portrait services, creating hand-painted or digitally illustrated portraits of customers' beloved pets."
      },
      {
          idea: "Remote Work Consultancy",
          details: "Provide consultancy services to companies transitioning to remote work, offering guidance on best practices, tools, and policies."
      },
      {
          idea: "Escape Room Experience",
          details: "Design and operate an escape room experience where participants solve puzzles and riddles to 'escape' within a set time limit."
      },
      {
          idea: "Craft Beer Brewery and Taproom",
          details: "Start a craft beer brewery and taproom, brewing small-batch, artisanal beers and offering tastings and events at the taproom."
      },
      {
          idea: "Handcrafted Leather Goods",
          details: "Create and sell handcrafted leather goods such as wallets, bags, and accessories using traditional leatherworking techniques."
      }
  



   
];

const generateBtn = document.getElementById('generateBtn');
const readMoreBtn = document.getElementById('readMoreBtn');
const ideaText = document.getElementById('ideaText');
const detailsContainer = document.getElementById('detailsContainer');

generateBtn.addEventListener('click', generateIdea);
readMoreBtn.addEventListener('click', showDetails);

// Function to generate a random business idea
function generateIdea() {
  const randomIndex = Math.floor(Math.random() * ideas.length);
  const randomIdea = ideas[randomIndex].idea;
  const randomDetails = ideas[randomIndex].details;

  ideaText.textContent = randomIdea;
  readMoreBtn.style.display = 'inline'; // Show the "Read More" button
  detailsContainer.textContent = ''; // Clear any previous details
  detailsContainer.style.display = 'none'; // Hide details initially
  readMoreBtn.dataset.details = randomDetails; // Store details in a data attribute
}

// Function to show details when "Read More" button is clicked
function showDetails() {
  const details = readMoreBtn.dataset.details;
  detailsContainer.textContent = details;
  detailsContainer.style.display = 'block'; // Show the details container
}


// Get the animated div
const animatedDiv = document.querySelector('.section');

// Function to handle scroll event
function handleScroll() {
    const scrollPosition = window.scrollY;
    const elementPosition = animatedDiv.offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollPosition > elementPosition - windowHeight + 200) {
        animatedDiv.classList.add('animate');
        // Remove the event listener after the animation has played
        window.removeEventListener('scroll', handleScroll);
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
