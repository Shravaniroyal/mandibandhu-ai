// ============================================
// NEGOTIATION ENGINE - CORE AI LOGIC
// ============================================

function detectLanguage(text) {
    const kannadaPattern = /[\u0C80-\u0CFF]/;
    const devanagariPattern = /[\u0900-\u097F]/;
    const tamilPattern = /[\u0B80-\u0BFF]/;
    const bengaliPattern = /[\u0980-\u09FF]/;
    
    if (kannadaPattern.test(text)) return 'kn';
    if (tamilPattern.test(text)) return 'ta';
    if (bengaliPattern.test(text)) return 'bn';
    if (devanagariPattern.test(text)) {
        if (text.includes('आहे') || text.includes('आहात')) return 'mr';
        return 'hi';
    }
    return 'en';
}

function extractProduct(text) {
    const productKeywords = {
        tomato: ['tomato', 'टमाटर', 'ಟೊಮೇಟೊ', 'தக்காளி', 'টমেটো', 'टोमॅटो'],
        onion: ['onion', 'प्याज', 'ಈರುಳ್ಳಿ', 'வெங்காயம்', 'পেঁয়াজ', 'कांदा'],
        potato: ['potato', 'आलू', 'ಆಲೂಗಡ್ಡೆ', 'உருளைக்கிழங்கு', 'আলু', 'बटाटा'],
        cabbage: ['cabbage', 'पत्तागोभी', 'ಎಲೆಕೋಸು', 'முட்டைகோஸ்', 'বাঁধাকপি', 'कोबी'],
        carrot: ['carrot', 'गाजर', 'ಕ್ಯಾರೆಟ್', 'கேரட்', 'গাজর'],
        cauliflower: ['cauliflower', 'फूलगोभी', 'ಹೂಕೋಸು', 'காலிஃப்ளவர்', 'ফুলকপি', 'फुलकोबी'],
        brinjal: ['brinjal', 'बैंगन', 'ಬದನೆಕಾಯಿ', 'கத்தரிக்காய்', 'বেগুন', 'वांगी', 'eggplant'],
        ladyfinger: ['ladyfinger', 'भिंडी', 'ಬೆಂಡೆಕಾಯಿ', 'வெண்டைக்காய்', 'ঢেঁড়স', 'भेंडी', 'okra'],
        apple: ['apple', 'सेब', 'ಸೇಬು', 'ஆப்பிள்', 'আপেল', 'सफरचंद'],
        banana: ['banana', 'केला', 'ಬಾಳೆ', 'வாழை', 'কলা', 'केळ'],
        mango: ['mango', 'आम', 'ಮಾವು', 'மாம்பழம்', 'আম', 'आंबा'],
        orange: ['orange', 'संतरा', 'ಕಿತ್ತಳೆ', 'ஆரஞ்சு', 'কমলা', 'संत्रा'],
        grapes: ['grape', 'अंगूर', 'ದ್ರಾಕ್ಷಿ', 'திராட்சை', 'আঙ্গুর', 'द्राक्षे'],
        pomegranate: ['pomegranate', 'अनार', 'ದಾಳಿಂಬೆ', 'மாதுளை', 'ডালিম', 'डाळिंब'],
        papaya: ['papaya', 'पपीता', 'ಪಪ್ಪಾಯಿ', 'பப்பாளி', 'পেঁপে', 'पपई'],
        spinach: ['spinach', 'पालक', 'ಪಾಲಕ್', 'கீரை', 'পালং'],
        coriander: ['coriander', 'धनिया', 'ಕೊತ್ತಂಬರಿ', 'கொத்தமல்லி', 'ধনে', 'कोथिंबीर'],
        mint: ['mint', 'पुदीना', 'ಪುದೀನ', 'புதினா', 'পুদিনা'],
        fenugreek: ['fenugreek', 'मेथी', 'ಮೆಂತ್ಯ', 'வெந்தயம்', 'মেথি']
    };
    
    const textLower = text.toLowerCase();
    
    for (const [product, keywords] of Object.entries(productKeywords)) {
        for (const keyword of keywords) {
            if (textLower.includes(keyword.toLowerCase())) {
                return product;
            }
        }
    }
    
    return 'tomato';
}

function extractQuantity(text) {
    const numberPattern = /(\d+(?:\.\d+)?)/g;
    const numbers = text.match(numberPattern);
    
    const units = {
        kg: ['kg', 'किलो', 'kilo', 'ಕಿಲೋ', 'கிலோ', 'কেজি'],
        crate: ['crate', 'क्रेट', 'ಕ್ರೇಟ್', 'கூடை', 'ক্রেট', 'पेटी', 'box', 'बॉक्स'],
        quintal: ['quintal', 'क्विंटल', 'ಕ್ವಿಂಟಾಲ್', 'குவிண்டால்', 'কুইন্টাল'],
        dozen: ['dozen', 'दर्जन', 'ಡಜನ್', 'டஜன்', 'ডজন']
    };
    
    let detectedUnit = 'kg';
    const textLower = text.toLowerCase();
    
    for (const [unit, keywords] of Object.entries(units)) {
        for (const keyword of keywords) {
            if (textLower.includes(keyword.toLowerCase())) {
                detectedUnit = unit;
                break;
            }
        }
    }
    
    const quantity = numbers && numbers.length > 0 ? parseFloat(numbers[0]) : 50;
    return { quantity, unit: detectedUnit };
}

function extractPrice(text) {
    const pricePatterns = [
        /(\d+(?:\.\d+)?)\s*(?:रुपये|रूपाय|rupees?|rs\.?|₹)/gi,
        /(?:रुपये|रूपाय|rupees?|rs\.?|₹)\s*(\d+(?:\.\d+)?)/gi,
        /(\d+(?:\.\d+)?)\s*(?:टाका|টাকা|ರೂಪಾಯಿ)/gi
    ];
    
    for (const pattern of pricePatterns) {
        const match = text.match(pattern);
        if (match) {
            const numbers = match[0].match(/\d+(?:\.\d+)?/);
            if (numbers) return parseFloat(numbers[0]);
        }
    }
    
    const allNumbers = text.match(/\d+(?:\.\d+)?/g);
    if (allNumbers && allNumbers.length > 0) {
        return parseFloat(allNumbers[allNumbers.length - 1]);
    }
    
    return null;
}

function normalizeToPerKg(price, quantity, unit) {
    const conversionFactors = { kg: 1, crate: 20, quintal: 100, dozen: 1.5 };
    const factor = conversionFactors[unit] || 1;
    
    if (price > 100 && quantity > 1) {
        return price / (quantity * factor);
    }
    
    if (unit === 'crate' || unit === 'quintal') {
        return price / factor;
    }
    
    return price;
}

function determineStrategy(evaluation, isRegularCustomer = false) {
    const strategies = {
        EXPLOITATIVE: { type: 'Firm Rejection', approach: 'firmRejection', tone: 'assertive', description: 'Strongly decline and educate buyer on fair pricing' },
        LOW: { type: 'Polite Counter-Offer', approach: 'politeCounter', tone: 'firm but respectful', description: 'Counter with fair price while maintaining relationship' },
        REASONABLE: { type: isRegularCustomer ? 'Relationship Preservation' : 'Standard Negotiation', approach: isRegularCustomer ? 'relationshipBased' : 'politeCounter', tone: 'cooperative', description: 'Accept with minor negotiation or relationship discount' },
        FAVORABLE: { type: 'Graceful Acceptance', approach: 'acceptance', tone: 'appreciative', description: 'Accept the offer with gratitude' }
    };
    
    return strategies[evaluation.category] || strategies.REASONABLE;
}

function generateResponse(lang, strategy, prices, productName) {
    // Make sure translations and response templates exist
    if (!translations || !translations[lang] || !translations[lang].responses) {
        console.error('Translation data not available for language:', lang);
        return `Market price is ₹${prices.fair}. I can accept ₹${prices.counter}.`;
    }
    
    const template = translations[lang].responses[strategy.approach];
    
    if (!template) {
        console.error('Template not found for approach:', strategy.approach);
        return `Market price is ₹${prices.fair}. I can accept ₹${prices.counter}.`;
    }
    
    let response = template
        .replace('{fairPrice}', `₹${prices.fair}`)
        .replace('{counterPrice}', `₹${prices.counter}`)
        .replace('{acceptPrice}', `₹${prices.accept}`)
        .replace('{product}', productName);
    
    return response;
}

function analyzeOffer(input, location, season, productType, userLanguage = 'en') {
    try {
        console.log('=== Starting Analysis ===');
        console.log('Input:', input);
        console.log('Location:', location);
        console.log('Season:', season);
        console.log('Product Type:', productType);
        console.log('User Language:', userLanguage);
        
        const language = userLanguage; // Use the selected UI language instead of detecting
        console.log('Using language:', language);
        
        const product = productType || extractProduct(input);
        console.log('Product:', product);
        
        const { quantity, unit } = extractQuantity(input);
        console.log('Quantity:', quantity, 'Unit:', unit);
        
        const extractedPrice = extractPrice(input);
        console.log('Extracted price:', extractedPrice);
        
        if (!extractedPrice) {
            throw new Error('Could not extract price from input');
        }
        
        const pricePerKg = normalizeToPerKg(extractedPrice, quantity, unit);
        console.log('Price per kg:', pricePerKg);
        
        const marketPrices = getMarketPrice(location, product, season);
        console.log('Market prices:', marketPrices);
        
        if (!marketPrices || !marketPrices.fair) {
            throw new Error('Could not get market prices');
        }
        
        const confidence = calculateConfidence(location, product, season, quantity);
        console.log('Confidence:', confidence);
        
        const evaluation = evaluateOffer(pricePerKg, marketPrices.fair, marketPrices.distress, marketPrices.premium);
        console.log('Evaluation:', evaluation);
        
        const counterPrice = generateCounterOffer(pricePerKg, marketPrices.fair, marketPrices.distress, marketPrices.premium, evaluation);
        console.log('Counter price:', counterPrice);
        
        const isRegularCustomer = input.toLowerCase().includes('regular') || 
                                 input.includes('पुराने') || 
                                 input.includes('नियमित') ||
                                 input.includes('पुरान') ||
                                 input.includes('हळेय');
        
        const strategy = determineStrategy(evaluation, isRegularCustomer);
        console.log('Strategy:', strategy);
        
        const prices = { 
            fair: marketPrices.fair, 
            counter: counterPrice, 
            accept: Math.round(pricePerKg) 
        };
        
        const productNameInLang = (productNames[product] && productNames[product][language]) ? 
                                 productNames[product][language] : 
                                 product;
        
        const negotiationResponse = generateResponse(language, strategy, prices, productNameInLang);
        console.log('Negotiation response:', negotiationResponse);
        
        const translatedText = `Buyer offering ₹${Math.round(pricePerKg)}/kg for ${quantity} ${unit} of ${product}`;
        
        // Get location name with proper capitalization
        const locationName = location.charAt(0).toUpperCase() + location.slice(1);
        
        const result = {
            language, 
            languageName: translations[language].name, 
            product, 
            productDisplay: productNameInLang,
            quantity, 
            unit, 
            offeredPrice: Math.round(pricePerKg), 
            totalOffered: extractedPrice, 
            translatedText,
            locationName,
            marketPrices, 
            evaluation, 
            strategy, 
            counterPrice, 
            negotiationResponse, 
            confidence
        };
        
        console.log('=== Analysis Complete ===');
        console.log('Result:', result);
        
        return result;
    } catch (error) {
        console.error('Error in analyzeOffer:', error);
        throw error;
    }
}
