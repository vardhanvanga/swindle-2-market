import React, { useState, useEffect } from 'react';

// Hardcoded user data for demonstration purposes
const users = [
  {
    name: "S. Saiteja",
    email: "siddamshettysaiteja@gmail.com",
    password: "saiteja@123",
    phone: "Not provided",
    workplace: "Vardhaman College of Engineering"
  },
  {
    name: "B. Lokesh",
    email: "bhukyalokeshnaik19@gmail.com",
    password: "lokesh@123",
    phone: "Not provided",
    workplace: "Vardhaman College of Engineering"
  },
  {
    name: "V. Vardhan",
    email: "vardhanvanga24@gmail.com",
    password: "vardhan@123",
    phone: "Not provided",
    workplace: "Vardhaman College of Engineering"
  },
  {
    name: "R. Pavani",
    email: "pavanirangineni240@gmail.com",
    password: "pavani@123",
    phone: "Not provided",
    workplace: "Vardhaman College of Engineering"
  }
];

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (loggedInUser) => {
    setIsLoggedIn(true);
    setUser(loggedInUser);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setCurrentPage('home');
  };

  const renderPage = () => {
    if (isLoggedIn && user) {
      return <Dashboard user={user} handleLogout={handleLogout} />;
    }

    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'login':
        return <Login setCurrentPage={setCurrentPage} handleLogin={handleLogin} />;
      case 'about':
        return <About />;
      case 'signup':
        return <Signup setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} setCurrentPage={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
    </div>
  );
};

// Navbar Component
const Navbar = ({ isLoggedIn, handleLogout, setCurrentPage }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-blue-600">
            Swindle
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {!isLoggedIn ? (
            <>
              <button onClick={() => setCurrentPage('home')} className="text-gray-600 hover:text-blue-600 font-semibold transition-colors duration-200">
                Home
              </button>
              <button onClick={() => setCurrentPage('login')} className="text-gray-600 hover:text-blue-600 font-semibold transition-colors duration-200">
                Login
              </button>
              <button onClick={() => setCurrentPage('about')} className="text-gray-600 hover:text-blue-600 font-semibold transition-colors duration-200">
                About Us
              </button>
            </>
          ) : (
            <button onClick={handleLogout} className="px-4 py-2 text-sm font-bold text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-200">
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  </nav>
);

// Home Component
const Home = ({ setCurrentPage }) => {
  const scams = [
    { title: "The 'Bricking' Scam", description: "Fraudsters purchase a new electronic item, swap out valuable internal parts, and return the now-useless 'bricked' item for a full refund." },
    { title: "Empty Box Fraud", description: "A scammer claims they received an empty box or a box filled with junk (like a rock or a brick) instead of the product. " },
    { title: "Wardrobing", description: "This scam involves a customer buying an item, often clothing or a high-end gadget, using it once for an event, and then returning it for a full refund with all tags reattached." },
    { title: "Price Switching", description: "A scammer purchases a low-cost item and swaps its price tag or barcode with that of a more expensive one. They then return the more expensive item for a fraudulent, higher refund." },
    { title: "Delivery Agent Swap", description: "In some cases, a delivery agent may be part of the scam, replacing the correct, returned item with a fake or old one before submitting it to the company's warehouse." },
    { title: "False 'Wrong Item' Claims", description: "Fraudsters place a bulk order and then falsely claim that a significant portion of the items were either missing or incorrect, requesting a refund for the 'undelivered' products." }
  ];

  const statistics = [
    { figure: "₹50 Crore", description: "Estimated nationwide loss for Myntra in a single refund scam." },
    { figure: "13.7%", description: "Percentage of all retail returns that are fraudulent." },
    { figure: "48%", description: "Percentage of Indian online shoppers who have received a wrong product." }
  ];

  const newsItems = [
    { title: "Myntra Loses ₹50 Crore in 'Refund' Scam", source: "India Today", link: "https://www.indiatoday.in/technology/news/story/myntra-loses-rs-50-crore-after-scammers-placed-fake-orders-2647832-2024-12-10", description: "A sophisticated fraud ring exploited Myntra's refund system by placing bulk orders and falsely claiming items were missing or incorrect." },
    { title: "Delhi Delivery Agent Arrested for Defrauding Amazon, Flipkart", source: "NDTV", link: "https://www.ndtv.com/india-news/delhi-delivery-agent-defrauds-amazon-flipkart-used-to-return-old-items-8680162", description: "A delivery agent was arrested for replacing genuine returned items with used goods, causing significant financial losses for both companies." },
    { title: "48% of Online Shoppers in India Stuck with Wrong Product", source: "Moneylife", link: "https://www.moneylife.in/article/48-percentage-of-online-shoppers-got-stuck-with-a-wrong-product-localcircles/76116.html", description: "A LocalCircles survey reveals that nearly half of all online shoppers have received the wrong product, with many unable to get a refund or replacement." }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 leading-tight">
              Stay Informed, Shop Safely
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto lg:mx-0">
              Online shopping is convenient, but so are the scams. Learn to spot the tricks and protect your money and products from return and exchange fraud.
            </p>
            <button onClick={() => setCurrentPage('login')} className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
              Secure Your Transactions
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center p-6">
            <svg className="w-full h-auto max-w-sm text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.1L20 8.5V15.5L12 19.9L4 15.5V8.5L12 4.1ZM12 13L17 10.5V8.5L12 11L7 8.5V10.5L12 13Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>

      {/* Scams Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10">
            Common Scams to Look Out For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scams.map((scam, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{scam.title}</h3>
                <p className="text-gray-700">{scam.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10">
            The Hard Numbers: Impact of Scams
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-b-4 border-blue-500">
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.figure}</p>
                <p className="text-gray-700 font-medium">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related News Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10">
            In the News
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {newsItems.map((news, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{news.title}</h3>
                <p className="text-gray-700 italic mb-2">Source: {news.source}</p>
                <p className="text-gray-600 mb-4">{news.description}</p>
                <a href={news.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                  Read Full Article →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Login Component
const Login = ({ setCurrentPage, handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      handleLogin(user);
    } else {
      setMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-5xl lg:grid lg:grid-cols-2 lg:gap-8">
        {/* Left side with image and tagline */}
        <div className="bg-blue-50 p-6 rounded-xl flex flex-col justify-between items-center text-center lg:text-left">
          <img src="https://placehold.co/600x400/EBF8FF/3182CE?text=Online+Shopping+Fraud" alt="Online Shopping Fraud Illustration" className="w-full h-auto max-w-md mb-4"/>
          <p className="mt-4 text-sm text-gray-600">
            Stay protected from online shopping fraud with our comprehensive security system.
          </p>
        </div>

        {/* Right side with login options */}
        <div className="mt-8 lg:mt-0 p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Swindle</h2>
          <p className="text-gray-700 mb-6">Choose your login type to access fraud protection tools.</p>
          <div className="mt-8 space-y-4">
            {message && <p className="text-red-500 text-sm text-center">{message}</p>}
            <h3 className="text-2xl font-bold text-gray-900 text-center">Login</h3>
            <form className="space-y-4" onSubmit={handleLoginSubmit}>
              <div>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
              </div>
              <div>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
              </div>
              <button type="submit" className="w-full py-3 font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-300">
                Log In
              </button>
            </form>
            <div className="flex flex-col sm:flex-row justify-between text-sm mt-4">
              <button onClick={() => setCurrentPage('forgot-password')} className="text-blue-600 hover:underline mb-2 sm:mb-0">Forgot Password / Username?</button>
              <button onClick={() => setCurrentPage('signup')} className="text-blue-600 hover:underline">Don't have an account? Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Component
const About = () => {
  const teamMembers = [
    { name: "S. Saiteja", role: "Team Lead" },
    { name: "B. Sushmitha", role: "Developer" },
    { name: "V. Vardhan", role: "Developer" },
    { name: "B. Lokesh", role: "Researcher" },
    { name: "R. Pavani", role: "Research" }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to Swindle, a platform dedicated to raising awareness about the growing threat of online shopping return and exchange scams. In an era where e-commerce has become an integral part of our lives, it's more important than ever to be vigilant against fraud.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our mission is to empower both consumers and merchants with knowledge. By providing clear, actionable information on the latest scam tactics, real-world case studies, and compelling statistics, we aim to build a safer online shopping ecosystem for everyone.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-200 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user text-blue-500">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Vardhaman College of Engineering</h2>
          <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                  Kacharam, Shamshabad, Hyderabad - 501218, Telangana, India
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                  Phone: +91 8688901557 | Email: info@vardhaman.org
              </p>
              <a href="https://vardhaman.org/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 font-semibold hover:underline">
                  Visit Official Website →
              </a>
          </div>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          This website serves as a resource for education and a community hub for sharing experiences and best practices. Thank you for joining us in the fight against online fraud.
        </p>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = ({ user, handleLogout }) => {
  const [dashboardPage, setDashboardPage] = useState('dashboard');
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    let message = '';
    let emoji = '';
    if (hour < 12) {
      message = 'Good morning';
      emoji = '☀️';
    } else if (hour < 18) {
      message = 'Good afternoon';
      emoji = '🌤️';
    } else {
      message = 'Good evening';
      emoji = '🌙';
    }
    setWelcomeMessage(`${message}, ${user.name.split(' ')[1]} ${emoji}`);
  }, [user]);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('bg-gray-800', !isDarkMode);
    document.body.classList.toggle('text-white', !isDarkMode);
  };
  
  const renderDashboardContent = () => {
    const teamMembers = users.filter(u => u.email !== user.email);
    
    switch (dashboardPage) {
      case 'dashboard':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">{welcomeMessage}</h2>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Team Members</h3>
              <ul className="space-y-4">
                {teamMembers.map((member, index) => (
                  <li key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{member.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{member.email}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case 'products':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">Products</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">Products page content will go here.</p>
          </div>
        );
      case 'profile':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">Profile</h2>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md space-y-4">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone || 'Not provided'}</p>
              <p><strong>Current Working Place:</strong> {user.workplace || 'Not provided'}</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">Settings</h2>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md space-y-4">
              <div className="flex items-center space-x-4">
                <span>Theme:</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={isDarkMode} onChange={handleThemeChange} />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                  </span>
                </label>
              </div>
              <p>Password Update/Change option will be here.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <nav className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex justify-between items-center mb-8">
          <div className="flex items-center space-x-6">
            <button onClick={() => setDashboardPage('dashboard')} className={`font-semibold px-4 py-2 rounded-lg ${dashboardPage === 'dashboard' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}>
              Dashboard
            </button>
            <button onClick={() => setDashboardPage('products')} className={`font-semibold px-4 py-2 rounded-lg ${dashboardPage === 'products' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}>
              Products
            </button>
          </div>
          <div className="relative">
            <button onClick={() => setShowProfileDropdown(!showProfileDropdown)} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-circle">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
              </svg>
              <span>{user.name.split(' ')[0]}</span>
            </button>
            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                <button onClick={() => { setDashboardPage('profile'); setShowProfileDropdown(false); }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Profile
                </button>
                <button onClick={() => { setDashboardPage('settings'); setShowProfileDropdown(false); }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Settings
                </button>
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>
        {renderDashboardContent()}
      </div>
    </div>
  );
};
