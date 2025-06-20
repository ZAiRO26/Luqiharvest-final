import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to LUQI HARVEST. I'm here to help you with information about our products, company, or any other questions you might have. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      showReactions: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Enhanced predefined responses with follow-up questions
  const botResponses = {
    'products': {
      text: "Oh, you'll love our product range! 🌱 We're passionate about bringing you the freshest, most delicious produce straight from our farms.\n\n🍎 **Our Premium Fruits:**\n• Alphonso Mangoes - The king of mangoes, sweet and aromatic\n• Totapuri & Kesar Mangoes - Perfect for juices and desserts\n• White & Pink Guava - Rich in vitamin C and antioxidants\n• Pineapple - Sweet and tangy, great for smoothies\n• Sapota (Chikku) - Creamy and naturally sweet\n• Jackfruit - Versatile and nutritious\n\n🥬 **Fresh Vegetables:**\n• Tomatoes - Perfect for salads and cooking\n• Green & Red Chilli - Add spice to your dishes\n• Tamarind - Natural souring agent\n• Ginger & Garlic - Essential for Indian cooking\n• Baby Corn - Tender and sweet\n\n🥤 **Natural Fruit Juices:**\n• Mango Juice - Pure and refreshing\n• Guava Juice - Rich in nutrients\n• Lemon Juice - Perfect detox drink\n• Pineapple Juice - Tropical goodness\n• Lychee Juice - Exotic and sweet\n\nEverything is 100% organic and harvested at peak ripeness! What catches your interest?",
      followUp: "I'd love to tell you more about our seasonal availability or help you place an order. What would you prefer?",
      reactions: ['👍', '🍎', '🥬', '🥤']
    },
    'contact': {
      text: "Great! I'm here to help you get in touch with our team. Here's how you can reach us:\n\n📞 **Call us:** +91 8122429668\n• We love talking to our customers directly!\n• Best time to call: 8 AM - 6 PM (Mon-Sat)\n\n📧 **Email:** info@luqiharvest.com\n• We respond within 2-3 hours during business days\n• Perfect for detailed inquiries\n\n💬 **WhatsApp:** Just click the WhatsApp button on our website\n• Fastest way to get quick answers\n• We're available even outside business hours\n\n📍 **Visit us:** [Your Company Address]\n• Come see our facility and meet our team\n• We'd love to show you around!\n\nWe're a friendly bunch and always happy to help! 😊",
      followUp: "Would you like me to help you with placing an order or getting more specific information?",
      reactions: ['📞', '📧', '💬', '👍']
    },
    'about': {
      text: "I'm so excited to tell you about LUQI HARVEST! 🌿 We're not just another agricultural company - we're a family passionate about bringing you the best nature has to offer.\n\n**Our Story:**\nWe started with a simple dream: to provide families with the freshest, healthiest produce while caring for our planet. Today, we're proud to be one of the leading organic farming companies, serving thousands of happy customers.\n\n**What Makes Us Special:**\n• 🌱 **Organic First:** We never compromise on organic practices\n• 🏆 **Quality Obsessed:** Every product meets our strict standards\n• 💚 **Eco-Friendly:** We farm sustainably for future generations\n• 👨‍🌾 **Expert Farmers:** Decades of farming experience\n• 🚚 **Farm to Table:** Fresh from our fields to your kitchen\n\n**Our Mission:**\nTo nourish families with nature's best while preserving our environment for generations to come.\n\nWe're not just selling produce - we're sharing our passion for healthy living!",
      followUp: "Would you like to learn about our quality standards or see what makes our products special?",
      reactions: ['🏆', '🌱', '👍', '💚']
    },
    'quality': {
      text: "Quality is everything to us! 🌟 We're absolutely obsessed with delivering the best to our customers.\n\n**Our Quality Promise:**\n✅ **100% Organic:** No harmful chemicals, ever!\n✅ **Fresh Daily:** Harvested same day for maximum freshness\n✅ **Rigorous Testing:** Every batch is quality-checked\n✅ **Certified Organic:** We meet international standards\n✅ **Sustainable Farming:** Caring for soil and environment\n✅ **Regular Audits:** Third-party quality verification\n✅ **Food Safety:** HACCP certified processes\n\n**What This Means for You:**\n• 🍎 Fruits that taste like they should - naturally sweet and flavorful\n• 🥬 Vegetables packed with nutrients and freshness\n• 🥤 Juices that are pure and natural\n• 💚 Peace of mind knowing your family eats the best\n\nWe believe you deserve nothing but the finest, and that's exactly what we deliver!",
      followUp: "Would you like to know about our organic certification or see our product range?",
      reactions: ['✅', '🏆', '🌱', '👍']
    },
    'prices': {
      text: "I understand you want to know about pricing! 💰 We believe in fair, transparent pricing that reflects the quality of our organic produce.\n\n**Our Pricing Philosophy:**\n• 💚 **Fair Value:** Quality organic produce at reasonable prices\n• 📦 **Bulk Discounts:** Better rates for larger orders\n• 🎯 **Seasonal Pricing:** Reflects natural availability\n• 👥 **Loyalty Rewards:** Special prices for regular customers\n\n**Current Offers:**\n• 🏢 **Business Accounts:** Special wholesale pricing\n• 🎉 **First Order:** 10% discount for new customers\n• 📦 **Bulk Orders:** Up to 25% off for large quantities\n\n**Get Exact Pricing:**\nSince prices vary by season and availability, I'd love to give you current rates. Just call us at +91 8122429668 or WhatsApp us for instant pricing!\n\nWe're always happy to work within your budget while ensuring you get the best quality!",
      followUp: "Would you like to know about our bulk ordering options or seasonal pricing?",
      reactions: ['💰', '📞', '🏢', '👍']
    },
    'delivery': {
      text: "We make sure your fresh produce reaches you in perfect condition! 🚚\n\n**Our Delivery Promise:**\n🚚 **Same-Day Delivery:** For local orders (within city limits)\n📦 **Next-Day Delivery:** For nearby areas\n📅 **Scheduled Delivery:** Choose your preferred time\n🌿 **Fresh Guarantee:** Products stay fresh during transit\n\n**Delivery Areas:**\nWe currently serve [your service areas] with plans to expand. Our delivery network is growing every day!\n\n**Delivery Charges:**\n• 🆓 **Free Delivery:** Orders above ₹500\n• 💰 **Standard Fee:** ₹50 for orders below ₹500\n• 🚚 **Express Delivery:** ₹100 for same-day delivery\n\n**Special Care:**\nWe use eco-friendly packaging and maintain optimal temperature to preserve freshness. Your satisfaction is our priority!\n\nWant to know if we deliver to your area? Just share your location!",
      followUp: "Would you like to know about our delivery areas or how to place an order?",
      reactions: ['🚚', '📞', '📍', '👍']
    },
    'order': {
      text: "Perfect! I'm here to make ordering super easy for you! 🛒\n\n**How to Order:**\n📞 **Call Us:** +91 8122429668\n• Speak directly with our friendly team\n• Get personalized recommendations\n• Instant order confirmation\n\n💬 **WhatsApp:** Click the WhatsApp button\n• Send us your order list\n• Get quick responses and updates\n• Perfect for busy schedules\n\n📧 **Email:** info@luqiharvest.com\n• Great for detailed orders\n• Attach your shopping list\n• We'll confirm within hours\n\n🏢 **Visit Us:** Come to our facility\n• See our products in person\n• Meet our team\n• Get expert advice\n\n**Payment Options:**\n💳 Cash on delivery, UPI, bank transfer, digital wallets - we accept it all!\n\n**Pro Tip:** Call us for the best experience - we love helping customers choose the perfect products! 😊",
      followUp: "Would you like to know about our payment options or product availability?",
      reactions: ['📞', '💬', '💳', '👍']
    },
    'location': {
      text: "We'd love to have you visit us! 🏢\n\n**Our Main Facility:**\n📍 [Your Company Address]\n• Modern processing facility\n• Quality control labs\n• Fresh produce storage\n• Customer service center\n\n**What You'll Find Here:**\n🌿 **Farm Tours:** See how we grow our organic produce\n🏭 **Processing Unit:** Watch how we maintain quality\n📦 **Packaging Center:** See our eco-friendly packaging\n👥 **Friendly Team:** Meet the people behind LUQI HARVEST\n\n**Distribution Centers:**\nWe also have distribution centers across [your service areas] to ensure quick delivery to all our customers.\n\n**Visit Hours:**\nMonday to Saturday: 8 AM - 6 PM\nSunday: Closed (but we're available on WhatsApp!)\n\nCome say hello - we'd love to show you around and share our passion for organic farming!",
      followUp: "Would you like to know about our delivery services or business hours?",
      reactions: ['📍', '🚚', '⏰', '👍']
    },
    'organic': {
      text: "Absolutely! 🌱 Organic farming isn't just what we do - it's who we are!\n\n**Our Organic Commitment:**\n🌿 **100% Natural:** No synthetic fertilizers or pesticides\n🌱 **Soil Health:** We nurture our soil naturally\n🐝 **Biodiversity:** We protect beneficial insects and wildlife\n💧 **Water Conservation:** Sustainable irrigation practices\n🌍 **Climate Friendly:** Reducing our carbon footprint\n\n**What This Means for You:**\n• 🍎 **Better Taste:** Natural flavors without chemical residues\n• 💪 **More Nutrients:** Higher vitamin and mineral content\n• 🛡️ **Safer for Family:** No harmful chemical exposure\n• 🌍 **Better for Planet:** Supporting sustainable agriculture\n\n**Our Certifications:**\n🏆 Certified organic by [certification body]\n✅ Regular audits and compliance checks\n📋 Transparent farming practices\n\nWe believe organic isn't just a choice - it's the only way to farm! Your health and our planet's future depend on it.",
      followUp: "Would you like to know about our certification or see our organic product range?",
      reactions: ['🌱', '🏆', '💚', '👍']
    },
    'fresh': {
      text: "Freshness is our superpower! 🌿 We're obsessed with getting you the freshest produce possible.\n\n**Our Freshness Promise:**\n🌅 **Same-Day Harvest:** Most products harvested the day of delivery\n🚚 **Direct Delivery:** From our farms to your doorstep\n❄️ **Temperature Control:** Optimal storage during transit\n📦 **Eco Packaging:** Preserves freshness naturally\n⏰ **Quick Processing:** Minimal time between harvest and delivery\n\n**Why Freshness Matters:**\n• 🍎 **Better Taste:** Peak flavor and aroma\n• 💪 **More Nutrients:** Maximum vitamin content\n• 🥬 **Crisp Texture:** Vegetables that stay fresh longer\n• 🥤 **Pure Juices:** No preservatives needed\n\n**Our Process:**\n1. 🌅 Early morning harvest at peak ripeness\n2. 🧼 Gentle cleaning and sorting\n3. 📦 Eco-friendly packaging\n4. 🚚 Temperature-controlled delivery\n5. 🏠 Fresh to your kitchen\n\nWe're so confident in our freshness that we offer a 24-hour freshness guarantee!",
      followUp: "Would you like to know about our delivery process or product availability?",
      reactions: ['🌿', '🚚', '💚', '👍']
    },
    'bulk': {
      text: "Excellent choice! 🏢 We love working with businesses and large orders!\n\n**Bulk Order Benefits:**\n💰 **Special Pricing:** Wholesale rates for bulk orders\n🚚 **Priority Delivery:** Dedicated delivery slots\n📦 **Custom Packaging:** Branded packaging available\n📋 **Regular Supply:** Set up recurring orders\n👤 **Account Manager:** Dedicated contact person\n📊 **Volume Discounts:** Better rates for larger quantities\n\n**Perfect For:**\n🏪 **Restaurants & Hotels:** Fresh ingredients daily\n🏢 **Corporate Offices:** Healthy snacks for employees\n🎉 **Events & Catering:** Fresh produce for large gatherings\n🏪 **Retail Stores:** Stock your shelves with quality products\n🏥 **Hospitals & Schools:** Nutritious meals for institutions\n\n**Our Business Partners Love:**\n• 📞 **Dedicated Support:** Direct line to our team\n• 📅 **Flexible Scheduling:** Delivery when you need it\n• 💳 **Credit Terms:** Payment options for businesses\n• 📊 **Regular Reports:** Track your orders and savings\n\nLet's discuss your specific needs and create a perfect partnership!",
      followUp: "Would you like to discuss bulk pricing or set up a business account?",
      reactions: ['🏢', '💰', '📞', '👍']
    },
    'seasonal': {
      text: "Great question! 🌞 We love working with nature's seasons - it ensures the best quality and taste!\n\n**Current Seasonal Highlights:**\n🌞 **Summer (March-June):**\n• 🥭 **Alphonso Mangoes** - The king is here! Sweet, aromatic, perfect\n• 🥭 **Totapuri & Kesar** - Great for juices and desserts\n• 🍍 **Pineapple** - Sweet and refreshing\n• 🍅 **Tomatoes** - Perfect for salads and cooking\n\n🌧️ **Monsoon (July-September):**\n• 🥑 **Guava varieties** - Rich in vitamin C\n• 🍎 **Sapota (Chikku)** - Creamy and naturally sweet\n• 🥭 **Jackfruit** - Versatile and nutritious\n• 🧄 **Ginger & Garlic** - Essential for monsoon cooking\n\n❄️ **Winter (October-February):**\n• 🌶️ **Green & Red Chilli** - Add warmth to your dishes\n• 🥭 **Tamarind** - Natural souring agent\n• 🌽 **Baby Corn** - Tender and sweet\n• 🧄 **Fresh Garlic** - Immunity boosters\n\n**Pro Tip:** Seasonal produce is not only fresher but also more affordable! Want to know what's currently in season?",
      followUp: "Would you like to know about current seasonal products or pricing?",
      reactions: ['🌞', '🌧️', '❄️', '👍']
    },
    'certification': {
      text: "We're proud of our certifications! 🏆 They prove our commitment to quality and organic practices.\n\n**Our Certifications:**\n🏆 **Organic Certification:** [Certification Body]\n• Annual audits and compliance checks\n• Regular soil and product testing\n• Transparent farming practices\n\n✅ **Food Safety Standards:**\n• HACCP certified processes\n• ISO quality management systems\n• International food safety compliance\n• Regular facility inspections\n\n🌱 **Environmental Standards:**\n• Sustainable farming practices\n• Carbon footprint reduction\n• Water conservation measures\n• Biodiversity protection\n\n**What This Means for You:**\n• 🛡️ **Trust & Safety:** Third-party verified quality\n• 📋 **Transparency:** Clear traceability of all products\n• 🌍 **Environmental Care:** Certified eco-friendly practices\n• 💪 **Health Assurance:** Safe, healthy produce\n\nWe don't just meet standards - we exceed them! Our certifications are proof of our dedication to your health and our planet.",
      followUp: "Would you like to know about our quality processes or product range?",
      reactions: ['🏆', '✅', '🌱', '👍']
    },
    'payment': {
      text: "We make payment super convenient for you! 💳\n\n**Payment Options:**\n💵 **Cash on Delivery:** Pay when you receive your order\n🏦 **Bank Transfer:** Direct transfer to our account\n📱 **UPI Payments:** Quick and easy digital payments\n💳 **Digital Wallets:** Paytm, Google Pay, PhonePe\n💳 **Credit/Debit Cards:** All major cards accepted\n\n**Business Payment Terms:**\n🏢 **Credit Accounts:** Available for regular business customers\n📅 **Flexible Terms:** 15-30 day payment terms\n📊 **Monthly Billing:** Convenient invoicing system\n💳 **Corporate Cards:** Accepted for business purchases\n\n**Security & Trust:**\n🔒 **Secure Transactions:** All digital payments are encrypted\n📋 **Clear Invoicing:** Detailed receipts for all payments\n🔄 **Easy Refunds:** Quick refund process if needed\n\n**Pro Tip:** UPI payments are the fastest and most convenient option! Just scan and pay.\n\nWe believe in making your experience as smooth as possible - from ordering to payment!",
      followUp: "Would you like to know about our ordering process or bulk payment terms?",
      reactions: ['💳', '💰', '📞', '👍']
    },
    'return': {
      text: "We stand behind every product we deliver! 🔄\n\n**Our Quality Guarantee:**\n✅ **24-Hour Freshness Guarantee:** If you're not satisfied, we'll replace it\n🌿 **Freshness Promise:** Products stay fresh for 24 hours after delivery\n🔄 **Easy Returns:** Simple and hassle-free return process\n💰 **Full Refund:** Money back if we can't make it right\n\n**What's Covered:**\n• 🍎 **Quality Issues:** Any product not meeting our standards\n• 📦 **Delivery Problems:** Damaged or incorrect items\n• ⏰ **Freshness Issues:** Products that don't stay fresh\n• 🛡️ **Safety Concerns:** Any safety-related issues\n\n**How It Works:**\n1. 📞 **Contact Us:** Call or WhatsApp within 24 hours\n2. 📸 **Send Photos:** Show us the issue (if applicable)\n3. 🚚 **Quick Resolution:** Replacement or refund within hours\n4. 😊 **Your Satisfaction:** We're not happy until you are!\n\n**Our Promise:**\nWe're not just selling products - we're building relationships. Your satisfaction is our top priority!",
      followUp: "Would you like to know about our quality standards or how to place an order?",
      reactions: ['🔄', '✅', '📞', '👍']
    },
    'hours': {
      text: "We're here when you need us! ⏰\n\n**Customer Service Hours:**\n📅 **Monday to Saturday:** 8:00 AM - 6:00 PM\n• Full customer support\n• Order processing\n• Product consultations\n• Quality assistance\n\n📅 **Sunday:** Closed for family time\n• But we're available on WhatsApp for urgent orders!\n• Emergency orders can be placed via WhatsApp\n\n**Best Times to Contact Us:**\n🌅 **Morning (8 AM - 11 AM):** Perfect for placing orders\n☀️ **Afternoon (2 PM - 5 PM):** Great for product consultations\n🌆 **Evening (5 PM - 6 PM):** Order confirmations and updates\n\n**After Hours Support:**\n💬 **WhatsApp:** Available 24/7 for urgent inquiries\n📧 **Email:** We'll respond first thing next morning\n📞 **Emergency Orders:** Special arrangements for urgent needs\n\n**Pro Tip:** Call us in the morning for the freshest selection and fastest processing! 😊",
      followUp: "Would you like to know about our contact methods or how to place an order?",
      reactions: ['⏰', '📞', '💬', '👍']
    },
    'help': {
      text: "I'm here to help you with everything LUQI HARVEST! 🤗\n\n**What I Can Help You With:**\n🍎 **Product Information:** Learn about our fruits, vegetables, and juices\n💰 **Pricing & Orders:** Get current prices and place orders\n📞 **Contact Details:** Find the best way to reach us\n🏆 **Quality Standards:** Understand our organic practices\n🚚 **Delivery Info:** Learn about our delivery services\n📅 **Seasonal Products:** Know what's available when\n🏢 **Bulk Orders:** Special pricing for businesses\n🌱 **Organic Certification:** Details about our practices\n💳 **Payment Options:** All the ways you can pay\n⏰ **Business Hours:** When we're available to help\n\n**Quick Tips:**\n• 🍎 Ask about seasonal products for the best deals\n• 📞 Call us for personalized recommendations\n• 💬 WhatsApp is fastest for quick questions\n• 🏢 We offer special pricing for bulk orders\n\nI'm your personal LUQI HARVEST assistant - no question is too small! What would you like to know? 😊",
      followUp: "What would you like to know more about?",
      reactions: ['📋', '🍎', '📞', '👍']
    }
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for specific keywords and return appropriate responses
    if (lowerMessage.includes('product') || lowerMessage.includes('fruit') || lowerMessage.includes('vegetable') || lowerMessage.includes('mango') || lowerMessage.includes('guava')) {
      return botResponses.products;
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return botResponses.contact;
    } else if (lowerMessage.includes('about') || lowerMessage.includes('company') || lowerMessage.includes('who')) {
      return botResponses.about;
    } else if (lowerMessage.includes('quality') || lowerMessage.includes('standard') || lowerMessage.includes('certified')) {
      return botResponses.quality;
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate')) {
      return botResponses.prices;
    } else if (lowerMessage.includes('delivery') || lowerMessage.includes('shipping') || lowerMessage.includes('deliver')) {
      return botResponses.delivery;
    } else if (lowerMessage.includes('order') || lowerMessage.includes('buy') || lowerMessage.includes('purchase')) {
      return botResponses.order;
    } else if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
      return botResponses.location;
    } else if (lowerMessage.includes('organic') || lowerMessage.includes('natural')) {
      return botResponses.organic;
    } else if (lowerMessage.includes('fresh') || lowerMessage.includes('freshness')) {
      return botResponses.fresh;
    } else if (lowerMessage.includes('bulk') || lowerMessage.includes('wholesale') || lowerMessage.includes('large')) {
      return botResponses.bulk;
    } else if (lowerMessage.includes('seasonal') || lowerMessage.includes('season') || lowerMessage.includes('available')) {
      return botResponses.seasonal;
    } else if (lowerMessage.includes('certification') || lowerMessage.includes('certified')) {
      return botResponses.certification;
    } else if (lowerMessage.includes('payment') || lowerMessage.includes('pay') || lowerMessage.includes('money')) {
      return botResponses.payment;
    } else if (lowerMessage.includes('return') || lowerMessage.includes('refund') || lowerMessage.includes('exchange')) {
      return botResponses.return;
    } else if (lowerMessage.includes('hour') || lowerMessage.includes('time') || lowerMessage.includes('open')) {
      return botResponses.hours;
    } else if (lowerMessage.includes('help') || lowerMessage.includes('assist') || lowerMessage.includes('support')) {
      return botResponses.help;
    } else {
      return {
        text: "I'm sorry, I didn't understand that. Could you please rephrase your question? You can ask me about our products, pricing, delivery, company information, or any other general inquiries about LUQI HARVEST.",
        followUp: "Would you like me to help you with something specific?",
        reactions: ['🤔', '📋', '👍', '💬']
      };
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay with random duration for more natural feel
    const typingDelay = 800 + Math.random() * 1200;
    
    setTimeout(() => {
      const botResponseData = getBotResponse(inputValue);
      const botResponse = {
        id: messages.length + 2,
        text: botResponseData.text,
        sender: 'bot',
        timestamp: new Date(),
        showReactions: true,
        reactions: botResponseData.reactions
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);

      // Add follow-up question after a short delay
      if (botResponseData.followUp) {
        setTimeout(() => {
          const followUpMessage = {
            id: messages.length + 3,
            text: botResponseData.followUp,
            sender: 'bot',
            timestamp: new Date(),
            isFollowUp: true
          };
          setMessages(prev => [...prev, followUpMessage]);
        }, 1500);
      }
    }, typingDelay);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleReaction = (messageId, reaction) => {
    // Add reaction to the message
    setMessages(prev => prev.map(msg => 
      msg.id === messageId 
        ? { ...msg, userReaction: reaction }
        : msg
    ));

    // Send a quick response based on reaction
    setTimeout(() => {
      const reactionResponses = {
        '👍': "Awesome! I'm so glad I could help! 😊 Is there anything else you'd like to know about LUQI HARVEST?",
        '🍎': "Right? Our fruits are absolutely amazing! 🥭 The Alphonso mangoes are particularly special - they're like nature's candy! Would you like to know more about our fruit varieties or seasonal availability?",
        '🥬': "Absolutely! Our vegetables are so fresh and nutritious! 🌱 We're especially proud of our organic farming practices. Need any tips on seasonal vegetables or cooking ideas?",
        '🥤': "Our juices are 100% natural and delicious! 🍊 No preservatives, no artificial flavors - just pure goodness! Would you like to know about our juice range or nutritional benefits?",
        '📞': "Yes! We love talking to our customers! 📞 Call us anytime at +91 8122429668. Our team is super friendly and always happy to help with personalized recommendations!",
        '📧': "Perfect! We're really quick with email responses! 📧 Usually within 2-3 hours during business days. Great for detailed inquiries or attaching your shopping list!",
        '💬': "WhatsApp is definitely the fastest way to reach us! 💬 We're available 24/7 there, even outside business hours. Perfect for quick questions or urgent orders!",
        '🏆': "Quality is everything to us! 🏆 We're absolutely obsessed with delivering the best. Every product goes through rigorous quality checks before reaching you!",
        '🌱': "Organic farming is our passion! 🌱 We believe it's the only way to farm. Your health and our planet's future depend on it. Want to know more about our organic practices?",
        '💚': "We care deeply about the environment! 💚 Sustainable farming isn't just a choice for us - it's our responsibility. Every decision we make considers our planet's future!",
        '💰': "We believe in fair, transparent pricing! 💰 Quality organic produce at reasonable prices. Plus, we offer great discounts for bulk orders and regular customers!",
        '🚚': "Fast and reliable delivery is our promise! 🚚 Same-day delivery for local orders, and we take special care to keep everything fresh during transit!",
        '📍': "We're expanding our delivery network every day! 📍 Currently serving [your service areas] with plans to reach more locations soon. Want to know if we deliver to your area?",
        '⏰': "We're here when you need us! ⏰ Monday to Saturday, 8 AM to 6 PM, plus WhatsApp support 24/7. We love being available for our customers!",
        '💳': "We make payment super convenient! 💳 Cash on delivery, UPI, digital wallets, cards - we accept it all! Plus secure transactions for your peace of mind!",
        '🔄': "Customer satisfaction is our top priority! 🔄 We offer a 24-hour freshness guarantee and easy returns. We're not happy until you are!",
        '📋': "I'm your personal LUQI HARVEST assistant! 🤗 No question is too small - I'm here to help with everything from product info to placing orders!",
        '✅': "Quality assured! ✅ Every product meets our strict standards. We're certified organic and follow international food safety standards!",
        '🏢': "We love working with businesses! 🏢 Special wholesale pricing, dedicated account managers, and flexible payment terms. Let's create a perfect partnership!",
        '🌞': "Summer fruits are absolutely delicious! 🌞 The Alphonso mangoes are in season now - they're like sunshine in fruit form! Perfect time to stock up!",
        '🌧️': "Monsoon brings such fresh produce! 🌧️ The guava and jackfruit are particularly good this season. Nature knows best when it comes to timing!",
        '❄️': "Winter vegetables are so nutritious! ❄️ Perfect for boosting immunity. Our ginger and garlic are especially popular during this season!",
        '🤔': "Let me help you better! 🤔 What specific information are you looking for? I'm here to make sure you get exactly what you need from LUQI HARVEST!"
      };

      const response = reactionResponses[reaction] || "Thanks for your feedback! 😊 I'm here to help with anything you need about LUQI HARVEST!";
      const reactionMessage = {
        id: messages.length + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date(),
        isReactionResponse: true
      };
      setMessages(prev => [...prev, reactionMessage]);
    }, 500);
  };

  const quickReplies = [
    "What products do you offer?",
    "How can I contact you?",
    "Tell me about your company",
    "What are your quality standards?",
    "How do I place an order?",
    "Are your products organic?",
    "What's your delivery policy?",
    "Do you offer bulk orders?"
  ];

  const handleQuickReply = (reply) => {
    setInputValue(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all focus:outline-none animate-fade-bounce hover:scale-110"
        aria-label="Open chat"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.18)' }}
      >
        {isOpen ? (
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-32 right-8 z-40 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col animate-fade-bounce">
          {/* Chat Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center animate-pulse">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">LUQI HARVEST</h3>
                <p className="text-sm text-green-100">Online Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-green-100 transition-colors hover:scale-110"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id}>
                <div
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-green-600 text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm border'
                    } ${message.isFollowUp ? 'bg-blue-50 border-blue-200' : ''} ${message.isReactionResponse ? 'bg-yellow-50 border-yellow-200' : ''}`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-green-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
                
                {/* Reaction Buttons */}
                {message.showReactions && message.reactions && (
                  <div className="flex justify-start mt-2 space-x-2">
                    {message.reactions.map((reaction, index) => (
                      <button
                        key={index}
                        onClick={() => handleReaction(message.id, reaction)}
                        className="text-lg hover:scale-125 transition-transform cursor-pointer bg-white rounded-full p-1 shadow-sm border"
                        title={`React with ${reaction}`}
                      >
                        {reaction}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-lg rounded-bl-none shadow-sm border px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-gray-500">LUQI Assistant is typing...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
              <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-white border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-50 hover:border-green-300 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all hover:scale-105"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot; 