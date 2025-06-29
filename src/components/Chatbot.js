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
      text: `Welcome!\nWe offer a wide range of premium fruit-based products, including:\n\nMango Products:\n- Alphanso Mango Pulp/Puree/Slices\n- Totapuri Mango Pulp/Puree/Slice/Dice\n- Kesar Mango Pulp/Puree/Slice/Dice\n- Totapuri Mango Concentrate\n- Totapuri Mango Sulphate\nOther Fruit Pulp, Slices & Dice:\n- Guava Pulp/Juice/Slices/Dice\n- Pineapple Juice/Slices/Tidbits\n- Sapota (Chikku) Pulp/Pieces\n- Jackfruit Pulp/Pieces\nJuice Commodities:\n- Mango Juice\n- Guava Juice\n- Lemon Juice\n- Pineapple Juice\n- Litchi Juice\nVegetables:\n- Gherkins\n- Baby Corn\n- Tomato Paste\n- Tamarind Paste\n- Ginger Paste\n- Garlic Paste\n- Green Chilli Paste\n- Red Chilli Paste\nAll our products are processed under strict quality standards and are suitable for both domestic and international markets.\nLet us know if you need samples, specifications, or pricing details! Thank You`,
      followUp: "Would you like to know about packaging, quality, or how to order?",
      reactions: ['🥭', '🍍', '🥒', '👍']
    },
    'packaging': {
      text: `Our packaging options include:\n\nOTS Tins/Cans: 450g, 850g, 3.1kgs\nPouch Packaging: 1Kg, 2kgs, 15Kgs & Above\nAseptic Bags Packaging: 100Kgs, 215kgs`,
      followUp: "Would you like to know about our quality standards or how to order?",
      reactions: ['📦', '👍']
    },
    'quality': {
      text: `At Luqi Harvest, we are committed to maintaining the highest quality and safety standards throughout our production and packaging processes.\n\n- FSSAI Compliance\n- MSDS Adherence\n- GMP Practices\n- HACCP Principles\n- Batch-wise Quality Testing\n- Sanitized Production Environment\n- Trained Quality Personnel`,
      followUp: "Would you like to know about certifications or ordering?",
      reactions: ['🏆', '✅', '👍']
    },
    'order': {
      text: `Placing an order with Luqi Harvest is quick and simple!\n\n- Call or WhatsApp us at +91 81224 29668\n- Email: luqiharvestindia@gmail.com\n- DM us on Facebook, Instagram, LinkedIn\n- Submit an Inquiry via our website\nFor bulk/export orders, our sales team will guide you through the process. Once we receive your order request, our team will share a proforma invoice, confirm stock availability, and schedule production or dispatch as per your needs.`,
      followUp: "Would you like to know about delivery or bulk export?",
      reactions: ['📞', '💬', '👍']
    },
    'delivery': {
      text: `Our delivery policy includes:\n\nDomestic Deliveries: 3–7 working days after order confirmation.\nInternational Deliveries: Exports via Chennai Port or other major Indian ports.\nPackaging & Handling: Securely packed in aseptic barrels, cans, or frozen bags.\nWe ensure full transparency, live tracking (where applicable), and end-to-end support.`,
      followUp: "Would you like to know about bulk orders or export documentation?",
      reactions: ['🚚', '🌏', '👍']
    },
    'bulk': {
      text: `Absolutely! Luqi Harvest specializes in bulk exports of high-quality fruit pulps and concentrates.\n\n- Bulk packaging: 215 kg Aseptic bags, 3.1 kg OTS tins, 850g/450g Cans\n- Products: Alphonso mango pulp, Totapuri mango pulp, Guava pulp, and more\n- Shipment from Chennai International Port\n- All export documentation provided\n- MOQ: 1 FCL (Full Container Load)`,
      followUp: "Would you like to know about sweetened/unsweetened options or private labeling?",
      reactions: ['🌏', '📦', '👍']
    },
    'sweetened': {
      text: `We provide both sweetened and unsweetened variants based on customer requirements. Standard export pulp is typically unsweetened, ideal for further processing into juices or desserts.`,
      followUp: "Would you like to know about preservatives or organic options?",
      reactions: ['🥭', '👍']
    },
    'preservatives': {
      text: `No preservatives, no artificial colors or flavors are added. Our products are made from natural or organic fruits.`,
      followUp: "Would you like to know about private labeling or certifications?",
      reactions: ['🍃', '👍']
    },
    'private label': {
      text: `Yes, we offer OEM/private labeling services for bulk buyers. You can provide your branding and design, and after discussion with the respective department/team, we'll take care of the rest.`,
      followUp: "Would you like to know about FSSAI or organic certification?",
      reactions: ['🏷️', '👍']
    },
    'fssai': {
      text: `Yes, all our products are FSSAI-certified and manufactured under strict hygiene and food safety guidelines.`,
      followUp: "Would you like to know about organic certification?",
      reactions: ['✅', '👍']
    },
    'organic': {
      text: `Yes, organic options are available upon request. We coordinate with our partnered manufacturers to provide products certified under NPOP, USDA Organic, or EU Organic, as required.`,
      followUp: "Would you like to know about MOQ or get a quotation?",
      reactions: ['🌱', '👍']
    },
    'moq': {
      text: `For exports, MOQ is usually 1 full container (20ft or 40ft). For domestic bulk orders, MOQ can be discussed case-by-case.`,
      followUp: "Would you like to get a quotation or know about shipping ports?",
      reactions: ['📦', '👍']
    },
    'quotation': {
      text: `Please share your product requirements, quantity, packaging preference, and destination. We'll send a detailed quotation with Ex-factory/FOB pricing within 24 hours via Email.`,
      followUp: "Would you like to know about shipping ports or export documentation?",
      reactions: ['💰', '👍']
    },
    'port': {
      text: `We primarily ship from Chennai International Port (India), but we can also coordinate from other major Indian ports based on your availability.`,
      followUp: "Would you like to know about export documentation?",
      reactions: ['🚢', '👍']
    },
    'documentation': {
      text: `Yes, we provide complete export documentation, including Invoice & Packing List, Certificate of Origin, Lab Reports & FSSAI License (as per destination requirement).`,
      followUp: "Would you like to request a sample?",
      reactions: ['📄', '👍']
    },
    'sample': {
      text: `Yes, we offer paid sample dispatch (with shipping cost covered by the buyer). It's the best way to evaluate our quality before placing bulk orders.`,
      followUp: "Would you like to know about our manufacturing process?",
      reactions: ['📦', '👍']
    },
    'manufacturer': {
      text: `We are a contract manufacturer and aggregator, working closely with certified manufacturing units under our supervision. All products are processed in FSSAI-approved facilities, with Luqi Harvest quality control staff overseeing the production.`,
      followUp: "Would you like to stay updated with our new products or offers?",
      reactions: ['🏭', '👍']
    },
    'updates': {
      text: `Follow us on:\n- Facebook – Luqi Harvest\n- Instagram – Luqi Harvest\n- X.com – Luqi Harvest\n- LinkedIn – Luqi Harvest\n- YouTube – Luqi Harvest\n- WhatsApp Broadcast List – +91 81224 29668 (Send us a message to join)`,
      followUp: "Is there anything else I can help you with?",
      reactions: ['📱', '👍']
    }
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Handle generic confirmations to follow-ups
    if (["yes", "ok", "sure", "yep", "yeah", "please", "go ahead", "alright", "fine"].some(word => lowerMessage === word || lowerMessage.includes(word))) {
      if (lastFollowUpKey && botResponses[lastFollowUpKey]) {
        return botResponses[lastFollowUpKey];
      }
    }
    
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
        // Try to extract a follow-up key from the botResponseData
        let followUpKey = null;
        if (botResponseData.text.includes('packaging')) followUpKey = 'packaging';
        else if (botResponseData.text.includes('quality')) followUpKey = 'quality';
        else if (botResponseData.text.includes('order')) followUpKey = 'order';
        else if (botResponseData.text.includes('delivery')) followUpKey = 'delivery';
        else if (botResponseData.text.includes('bulk')) followUpKey = 'bulk';
        else if (botResponseData.text.includes('organic')) followUpKey = 'organic';
        else if (botResponseData.text.includes('certification')) followUpKey = 'fssai';
        else if (botResponseData.text.includes('quotation')) followUpKey = 'quotation';
        else if (botResponseData.text.includes('sample')) followUpKey = 'sample';
        else if (botResponseData.text.includes('manufacturer')) followUpKey = 'manufacturer';
        else if (botResponseData.text.includes('updates')) followUpKey = 'updates';
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