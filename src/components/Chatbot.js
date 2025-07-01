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
  const [lastFollowUpKey, setLastFollowUpKey] = useState(null);

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
      text: `Thanks for asking! 😊\n\nWe've got quite an impressive lineup of premium fruit-based products that our customers really love:\n\n🥭 Mango Products:\n- Alphanso Mango Pulp/Puree/Slices\n- Totapuri Mango Pulp/Puree/Slice/Dice\n- Kesar Mango Pulp/Puree/Slice/Dice\n- Totapuri Mango Concentrate\n- Totapuri Mango Sulphate\n\n🍍 Other Fruit Pulp, Slices & Dice:\n- Guava Pulp/Juice/Slices/Dice\n- Pineapple Juice/Slices/Tidbits\n- Sapota (Chikku) Pulp/Pieces\n- Jackfruit Pulp/Pieces\n\n🥤 Juice Commodities:\n- Mango Juice\n- Guava Juice\n- Lemon Juice\n- Pineapple Juice\n- Litchi Juice\n\n🥒 Vegetables:\n- Gherkins\n- Baby Corn\n- Tomato Paste\n- Tamarind Paste\n- Ginger Paste\n- Garlic Paste\n- Green Chilli Paste\n- Red Chilli Paste\n\nAll our products meet strict quality standards and work great for both domestic and international markets. What specific product are you looking for? I can help you find the perfect match for your needs! 😊`,
      followUp: "What would you like to know next? You can ask about packaging, quality standards, pricing, or how to place an order.",
      reactions: ['🥭', '🍍', '🥒', '👍']
    },
    'packaging': {
      text: `Good question! We've got flexible packaging solutions that work well for different needs:\n\n🥫 OTS Tins/Cans: 450g, 850g, 3.1kgs\n📦 Pouch Packaging: 1Kg, 2kgs, 15Kgs & Above\n🛢️ Aseptic Bags Packaging: 100Kgs, 215kgs\n\nMost of our customers go with the OTS tins for smaller orders and aseptic bags for bulk shipments. What kind of volume are you thinking about? I can recommend the best option for your situation. 😊`,
      followUp: "Would you like to know about our quality standards or how to place an order?",
      reactions: ['📦', '👍']
    },
    'quality': {
      text: `Quality is absolutely our top priority - I can't stress that enough! 🏆\n\nWe're committed to maintaining the highest quality and safety standards throughout our entire process. Here's what we do to ensure you get the best:\n\n✅ FSSAI Compliance: We strictly follow the guidelines set by the Food Safety and Standards Authority of India (FSSAI) to ensure food safety and hygiene.\n\n📋 MSDS Adherence: We implement Material Safety Data Sheet (MSDS) protocols to ensure the proper handling, storage, and transportation of all food-grade materials.\n\n🏭 GMP Practices: We follow Good Manufacturing Practices (GMP) to maintain product consistency, safety, and traceability.\n\n🔍 HACCP Principles: Our processes are based on Hazard Analysis and Critical Control Points (HACCP) for identifying and controlling food safety risks.\n\n🧪 Batch-wise Quality Testing: Each production batch undergoes stringent microbiological, physical, and chemical testing in certified laboratories.\n\n🧹 Sanitized Production Environment: Our facilities are maintained with routine cleaning, pest control, and hygienic practices to ensure a contamination-free environment.\n\n👥 Trained Quality Personnel: Our QA/QC team is trained regularly to ensure standard operating procedures are strictly followed.\n\nI've been working here for a while, and I can tell you - our quality standards are something we're really proud of. You can trust us to deliver consistently excellent products every time! 😊`,
      followUp: "What would you like to know next? You can ask about our certifications, pricing, or how to place an order.",
      reactions: ['🏆', '✅', '👍']
    },
    'order': {
      text: `Placing an order with Luqi Harvest is quick and simple! You can choose any of the following options:\n- Call or WhatsApp us at +91 81224 29668 for instant assistance.\n- Email your order details to luqiharvestindia@gmail.com\n- Direct Message us on our social media pages: Facebook, Instagram, LinkedIn\n- Submit an Inquiry via our website.\n- For bulk/export orders, our sales team will guide you through the product selection, packaging options, documentation, and delivery process.\nOnce we receive your order request, our team will share a proforma invoice, confirm stock availability, and schedule production or dispatch as per your needs.`,
      followUp: "Would you like to know about delivery options or bulk export services?",
      reactions: ['📞', '💬', '👍']
    },
    'delivery': {
      text: `We've got reliable delivery covered! 🚚\n\nAt Luqi Harvest, we aim to ensure timely and safe delivery of all orders, whether domestic or international. Here's our delivery policy:\n\n🇮🇳 Domestic Deliveries (Within India):\n- Delivery within 3–7 working days after order confirmation and payment\n- Shipped via trusted logistics partners with tracking details shared\n- Transportation charges are based on order size and delivery location\n- Bulk orders may have special delivery arrangements upon request\n\n🌏 International Deliveries (Exports):\n- We handle exports via Chennai Port or other major Indian ports\n- Delivery timelines depend on destination and mode (sea/air freight)\n- Full support provided with documentation: Invoice, Packing List, Certificate of Origin, FSSAI license copy, and more as needed\n- We offer FOB terms based on buyer preference\n\n📦 Packaging & Handling:\n- All products are securely packed in aseptic barrels, cans, or frozen bags, depending on order type\n- Cold chain or ambient transport as required by the product\n\nWe ensure full transparency, live tracking (where applicable), and end-to-end support to make your buying experience smooth and reliable! 😊`,
      followUp: "Would you like to know about bulk orders or export documentation?",
      reactions: ['🚚', '🌏', '👍']
    },
    'bulk': {
      text: `Absolutely! We love bulk orders! 🌏\n\nLuqi Harvest specializes in bulk exports of high-quality fruit pulps and concentrates to international markets. Here's what we offer:\n\n📦 Export Services Include:\n- Bulk packaging options: 215 kg Aseptic bags in MS Barrels, 3.1 kg OTS tins, 850g Cans, 450g Cans\n- Products: Alphonso mango pulp, Totapuri mango pulp, Guava pulp and more\n- Shipment from Chennai International Port (India) to your preferred destination\n- All export documentation provided: Proforma Invoice, Packing List, Certificate of Origin, FSSAI License, Lab Test Report (if needed)\n- Minimum Order Quantity (MOQ): For exports, MOQ typically starts at 1 FCL (Full Container Load), such as 20 or 40-foot container, depending on product and packaging\n\nWe're here to make your bulk export experience smooth and successful! 😊`,
      followUp: "Would you like to know about sweetened/unsweetened options or private labeling?",
      reactions: ['🌏', '📦', '👍']
    },
    'sweetened': {
      text: `Great question! 🥭\n\nWe provide both sweetened and unsweetened variants based on customer requirements. Standard export pulp is typically unsweetened, ideal for further processing into juices or desserts.\n\nWe can customize according to your specific needs! 😊`,
      followUp: "Would you like to know about preservatives or organic options?",
      reactions: ['🥭', '👍']
    },
    'preservatives': {
      text: `No preservatives, No artificial colors or flavors are added. Our products are made from natural or organic fruits.\n\nWe believe in keeping things natural and healthy! 🌱`,
      followUp: "Would you like to know about private labeling or certifications?",
      reactions: ['🍃', '👍']
    },
    'private label': {
      text: `Yes, absolutely! 🏷️\n\nWe offer OEM/private labeling services for bulk buyers. You can provide your branding and design, and after discussion with the respective department/team, we'll take care of the rest.\n\nWe're here to help bring your brand vision to life! 😊`,
      followUp: "Would you like to know about FSSAI or organic certification?",
      reactions: ['🏷️', '👍']
    },
    'fssai': {
      text: `Yes, absolutely! ✅\n\nAll our products are FSSAI-certified and manufactured under strict hygiene and food safety guidelines. You can trust our quality standards! 😊`,
      followUp: "Would you like to know about organic certification?",
      reactions: ['✅', '👍']
    },
    'organic': {
      text: `Yes, we've got you covered! 🌱\n\nOrganic options are available upon request. We coordinate with our partnered manufacturers to provide products certified under NPOP, USDA Organic, or EU Organic, as required.\n\nWe're committed to meeting your organic certification needs! 😊`,
      followUp: "Would you like to know about MOQ or get a quotation?",
      reactions: ['🌱', '👍']
    },
    'moq': {
      text: `Good question! 📦\n\nFor exports, MOQ is usually 1 full container (20ft or 40ft). For domestic bulk orders, MOQ can be discussed case-by-case.\n\nWe're flexible and here to work with you! 😊`,
      followUp: "Would you like to get a quotation or know about shipping ports?",
      reactions: ['📦', '👍']
    },
    'quotation': {
      text: `Perfect! 💰\n\nPlease share your product requirements, quantity, packaging preference, and destination. We'll send a detailed quotation with Ex-factory/FOB pricing within 24 hours via Email.\n\nWe're excited to work with you! 😊`,
      followUp: "Would you like to know about shipping ports or export documentation?",
      reactions: ['💰', '👍']
    },
    'port': {
      text: `Great question! 🚢\n\nWe primarily ship from Chennai International Port (India), but we can also coordinate from other major Indian ports based on your availability.\n\nWe're flexible to meet your shipping needs! 😊`,
      followUp: "Would you like to know about export documentation?",
      reactions: ['🚢', '👍']
    },
    'documentation': {
      text: `Absolutely! 📄\n\nYes, we provide complete export documentation, including: Invoice & Packing List, Certificate of Origin, Lab Reports & FSSAI License (as per destination requirement).\n\nWe handle all the paperwork so you don't have to worry! 😊`,
      followUp: "Would you like to request a sample?",
      reactions: ['📄', '👍']
    },
    'sample': {
      text: `Of course! 📦\n\nYes, we offer paid sample dispatch (with shipping cost covered by the buyer). It's the best way to evaluate our quality before placing bulk orders.\n\nWe want you to be completely satisfied with our products! 😊`,
      followUp: "Would you like to know about our manufacturing process?",
      reactions: ['📦', '👍']
    },
    'manufacturer': {
      text: `Great question! 🏭\n\nWe are a contract manufacturer and aggregator, working closely with certified manufacturing units under our supervision. All products are processed in FSSAI-approved facilities, with Luqi Harvest quality control staff overseeing the production.\n\nWe maintain strict quality control throughout the process! 😊`,
      followUp: "Would you like to stay updated with our new products or offers?",
      reactions: ['🏭', '👍']
    },
    'updates': {
      text: `Absolutely! 📱\n\nFollow us on:\n- Facebook – Luqi Harvest\n- Instagram – Luqi Harvest\n- X.com – Luqi Harvest\n- LinkedIn – Luqi Harvest\n- YouTube – Luqi Harvest\n- WhatsApp Broadcast List – +91 81224 29668 (Send us a message to join)\n\nStay connected with us for the latest updates and offers! 😊`,
      followUp: "Is there anything else I can help you with?",
      reactions: ['📱', '👍']
    },
    'contact': {
      text: `You can contact LUQI HARVEST through multiple channels:\n\n📞 Phone & WhatsApp: +91 81224 29668\n📧 Email: luqiharvestindia@gmail.com\n🌐 Website: Submit an inquiry through our contact form\n\nSocial Media:\n- Facebook: Luqi Harvest\n- Instagram: Luqi Harvest\n- LinkedIn: Luqi Harvest\n- X.com: Luqi Harvest\n\nFor instant assistance, call or WhatsApp us. For detailed inquiries, email us or use our website contact form. We typically respond within 24 hours! 😊`,
      followUp: "Would you like to know about our products or how to place an order?",
      reactions: ['📞', '📧', '👍']
    },
    'about': {
      text: `Great question! 🏢\n\nLUQI HARVEST is a leading fruit processing and export company based in India, specializing in premium fruit pulps, concentrates, and processed fruit products.\n\n🌱 What We Do:\n- Process and export high-quality fruit pulps and concentrates\n- Supply fresh and frozen fruit products to domestic and international markets\n- Offer private labeling and OEM services\n- Provide comprehensive export solutions with full documentation\n\n🎯 Our Mission:\nTo deliver the finest quality fruit products while maintaining the highest standards of food safety and customer satisfaction. We bridge the gap between Indian farmers and global markets.\n\n🌟 Key Highlights:\n- FSSAI certified manufacturing facilities\n- International quality standards compliance\n- Wide range of products (mangoes, guavas, pineapples, and more)\n- Flexible packaging options for all requirements\n- Complete export documentation support\n- Dedicated customer service team\n\nWe're passionate about bringing the authentic taste of Indian fruits to the world! 😊`,
      followUp: "Would you like to know about our products, quality standards, or how to place an order?",
      reactions: ['🏢', '🌱', '👍']
    },
    'prices': {
      text: `Great question about pricing! 💰\n\nOur pricing varies based on several factors:\n- Product type and variety\n- Quantity (bulk orders get better rates)\n- Packaging preference\n- Destination (domestic vs international)\n- Seasonal availability\n\nFor accurate pricing, I'd recommend sharing your specific requirements with us. We'll send you a detailed quotation within 24 hours via email.\n\nWe offer competitive rates and special discounts for bulk orders and regular customers! 😊`,
      followUp: "Would you like to get a quotation or know about our bulk pricing?",
      reactions: ['💰', '📧', '👍']
    },
    'location': {
      text: `We're based in India and serve customers worldwide! 🌍\n\n🏢 Our Operations:\n- Manufacturing facilities in India\n- Export operations from Chennai International Port\n- Domestic distribution network across India\n- International shipping to multiple countries\n\n📍 Service Areas:\n- Domestic: All major cities in India\n- International: We export to Europe, Middle East, Asia, and other global markets\n\nWe can coordinate shipments from other major Indian ports based on your location and requirements! 😊`,
      followUp: "Would you like to know about delivery to your specific location?",
      reactions: ['🌍', '🚢', '👍']
    },
    'fresh': {
      text: `Absolutely! Freshness is our promise! 🍃\n\nWe ensure maximum freshness through:\n- Harvest-to-processing within 24-48 hours\n- Cold chain storage and transportation\n- Aseptic packaging to preserve freshness\n- Quality checks at every stage\n- Proper handling and storage protocols\n\nOur products maintain their natural taste, color, and nutritional value. We're committed to delivering the freshest fruits and vegetables to our customers! 😊`,
      followUp: "Would you like to know about our quality standards or storage recommendations?",
      reactions: ['🍃', '✅', '👍']
    },
    'seasonal': {
      text: `Great question! We work with seasonal availability! 🌞\n\n🥭 Mango Season: March to July (Alphonso, Kesar, Totapuri)\n🍍 Pineapple: Available year-round with peak from March to June\n🍈 Guava: August to March\n🥥 Jackfruit: March to September\n🥒 Vegetables: Year-round availability with seasonal variations\n\nWe also offer frozen and processed products that are available throughout the year, regardless of season.\n\nFor current availability and seasonal offers, feel free to ask! 😊`,
      followUp: "Would you like to know about current seasonal products or year-round availability?",
      reactions: ['🌞', '📅', '👍']
    },
    'certification': {
      text: `Yes, we have comprehensive certifications! ✅\n\n🏆 Our Certifications:\n- FSSAI (Food Safety and Standards Authority of India)\n- ISO 22000 (Food Safety Management)\n- HACCP (Hazard Analysis and Critical Control Points)\n- GMP (Good Manufacturing Practices)\n- Organic certifications available (NPOP, USDA, EU)\n\nWe maintain strict compliance with international food safety standards and regularly update our certifications.\n\nAll our products come with proper certification documentation for both domestic and international markets! 😊`,
      followUp: "Would you like to know about specific certification requirements for your market?",
      reactions: ['✅', '📄', '👍']
    },
    'payment': {
      text: `We offer flexible payment options! 💳\n\n💳 Payment Methods:\n- Bank Transfer\n- Letter of Credit (LC)\n- Advance Payment\n- Payment on Delivery (for domestic orders)\n- Secure online payment gateways\n\n💰 Payment Terms:\n- Domestic: Advance payment or COD\n- International: Advance payment or LC\n- Bulk orders: Negotiable terms\n\nWe ensure secure and transparent payment processes for all transactions! 😊`,
      followUp: "Would you like to know about specific payment terms for your order?",
      reactions: ['💳', '💰', '👍']
    },
    'return': {
      text: `We have a customer-friendly return policy! 🔄\n\n📦 Return Policy:\n- Quality issues: Immediate replacement or refund\n- Damaged goods: Full refund or replacement\n- Wrong products: Free replacement\n- Bulk orders: Quality guarantee with replacement\n\n⏰ Time Frame:\n- Quality issues: Within 7 days of delivery\n- Damaged goods: Within 24 hours\n\nWe're committed to customer satisfaction and ensure you're completely happy with your purchase! 😊`,
      followUp: "Would you like to know about our quality guarantee or warranty?",
      reactions: ['🔄', '✅', '👍']
    },
    'hours': {
      text: `We're here to help you! ⏰\n\n🕐 Business Hours:\n- Monday to Friday: 9:00 AM - 6:00 PM (IST)\n- Saturday: 9:00 AM - 4:00 PM (IST)\n- Sunday: Closed\n\n📞 Customer Support:\n- Phone/WhatsApp: Available during business hours\n- Email: 24/7 (response within 24 hours)\n- Website: 24/7 access\n\nFor urgent inquiries outside business hours, you can always reach us via WhatsApp or email! 😊`,
      followUp: "Would you like to know the best time to contact us for your specific inquiry?",
      reactions: ['⏰', '📞', '👍']
    },
    'help': {
      text: `I'm here to help you with everything LUQI HARVEST! 🤗\n\nI can assist you with:\n- Product information and recommendations\n- Pricing and quotations\n- Order placement and tracking\n- Quality standards and certifications\n- Delivery and shipping\n- Bulk orders and exports\n- Payment and return policies\n- Company information\n\nJust ask me anything - no question is too small! What would you like to know? 😊`,
      followUp: "What specific information are you looking for? I'm here to help!",
      reactions: ['🤗', '📋', '👍']
    }
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Handle generic confirmations to follow-ups with better context
    if (["yes", "ok", "sure", "yep", "yeah", "please", "go ahead", "alright", "fine"].some(word => lowerMessage === word || lowerMessage.includes(word))) {
      if (lastFollowUpKey && botResponses[lastFollowUpKey]) {
        return botResponses[lastFollowUpKey];
      }
      // If no specific follow-up key, provide a helpful response
      return {
        text: "Great! I'd be happy to help you further. What specific information would you like to know? You can ask me about our products, pricing, delivery, quality standards, certifications, or how to place an order.",
        followUp: "What would you like to know more about?",
        reactions: ['🤗', '📋', '👍']
      };
    }
    
    // Smart keyword matching with priority order
    const keywordMappings = [
      { keywords: ['product', 'fruit', 'vegetable', 'mango', 'guava', 'pineapple', 'offer', 'sell'], response: 'products' },
      { keywords: ['contact', 'phone', 'email', 'reach', 'call', 'whatsapp'], response: 'contact' },
      { keywords: ['about', 'company', 'who', 'story', 'background'], response: 'about' },
      { keywords: ['quality', 'standard', 'certified', 'certification'], response: 'quality' },
      { keywords: ['price', 'cost', 'rate', 'quotation', 'quote'], response: 'prices' },
      { keywords: ['delivery', 'shipping', 'deliver', 'ship', 'transport'], response: 'delivery' },
      { keywords: ['order', 'buy', 'purchase', 'place order'], response: 'order' },
      { keywords: ['location', 'address', 'where', 'place'], response: 'location' },
      { keywords: ['organic', 'natural'], response: 'organic' },
      { keywords: ['fresh', 'freshness', 'freshly'], response: 'fresh' },
      { keywords: ['bulk', 'wholesale', 'large', 'export'], response: 'bulk' },
      { keywords: ['seasonal', 'season', 'available', 'availability'], response: 'seasonal' },
      { keywords: ['payment', 'pay', 'money', 'cost'], response: 'payment' },
      { keywords: ['return', 'refund', 'exchange', 'warranty'], response: 'return' },
      { keywords: ['hour', 'time', 'open', 'business'], response: 'hours' },
      { keywords: ['help', 'assist', 'support', 'guide'], response: 'help' },
      { keywords: ['packaging', 'package', 'pack'], response: 'packaging' },
      { keywords: ['sweetened', 'sugar', 'sweet'], response: 'sweetened' },
      { keywords: ['preservative', 'artificial', 'natural'], response: 'preservatives' },
      { keywords: ['private label', 'oem', 'branding'], response: 'private label' },
      { keywords: ['fssai', 'certification'], response: 'certification' },
      { keywords: ['moq', 'minimum', 'quantity'], response: 'moq' },
      { keywords: ['port', 'shipping', 'chennai'], response: 'port' },
      { keywords: ['documentation', 'documents', 'paperwork'], response: 'documentation' },
      { keywords: ['sample', 'test'], response: 'sample' },
      { keywords: ['manufacturer', 'manufacturing', 'facility'], response: 'manufacturer' },
      { keywords: ['update', 'follow', 'social'], response: 'updates' }
    ];

    // Find the best match
    for (const mapping of keywordMappings) {
      if (mapping.keywords.some(keyword => lowerMessage.includes(keyword))) {
        const response = botResponses[mapping.response];
        if (response) {
          return response;
        }
      }
    }
    
    // Default response for unrecognized queries
    return {
      text: "I'm sorry, I didn't quite catch that. Could you please rephrase your question? I can help you with our products, pricing, delivery, company information, quality standards, or any other inquiries about LUQI HARVEST.",
      followUp: "What specific information are you looking for? I'm here to help!",
      reactions: ['🤔', '📋', '👍', '💬']
    };
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
        // Improved follow-up key logic based on the actual response content
        let followUpKey = null;
        const responseText = botResponseData.text.toLowerCase();
        
        // For products response, set packaging as default follow-up since it's mentioned first
        if (responseText.includes('mango products') || responseText.includes('fruit-based products')) {
          followUpKey = 'packaging';
        }
        // For other responses, use the existing logic
        else if (responseText.includes('packaging')) followUpKey = 'packaging';
        else if (responseText.includes('quality')) followUpKey = 'quality';
        else if (responseText.includes('order')) followUpKey = 'order';
        else if (responseText.includes('delivery')) followUpKey = 'delivery';
        else if (responseText.includes('bulk')) followUpKey = 'bulk';
        else if (responseText.includes('organic')) followUpKey = 'organic';
        else if (responseText.includes('certification') || responseText.includes('fssai')) followUpKey = 'certification';
        else if (responseText.includes('quotation') || responseText.includes('price')) followUpKey = 'prices';
        else if (responseText.includes('sample')) followUpKey = 'sample';
        else if (responseText.includes('manufacturer')) followUpKey = 'manufacturer';
        else if (responseText.includes('updates') || responseText.includes('social')) followUpKey = 'updates';
        else if (responseText.includes('contact')) followUpKey = 'contact';
        else if (responseText.includes('about') || responseText.includes('company')) followUpKey = 'about';
        else if (responseText.includes('payment')) followUpKey = 'payment';
        else if (responseText.includes('return')) followUpKey = 'return';
        else if (responseText.includes('hour')) followUpKey = 'hours';
        else if (responseText.includes('help')) followUpKey = 'help';
        
        setLastFollowUpKey(followUpKey);
        const followUpMessage = {
          id: messages.length + 3,
          text: botResponseData.followUp,
          sender: 'bot',
          timestamp: new Date(),
          isFollowUp: true
        };
        setMessages(prev => [...prev, followUpMessage]);
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
        className="fixed bottom-12 right-8 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all focus:outline-none animate-fade-bounce hover:scale-110"
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
                <img src="/images/lucy-bot.jpg" alt="Lucy Bot" className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold">LUCY</h3>
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
                    <span className="text-xs text-gray-500">LUCY is typing...</span>
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