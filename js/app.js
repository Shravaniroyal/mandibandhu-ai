// ============================================
// MAIN APPLICATION LOGIC - 6 LANGUAGES WITH DYNAMIC DROPDOWN
// ============================================

let currentLanguage = 'en'; // Default to English
let vendorsProtected = 1247;
let totalImprovement = 23;

// Update product dropdown based on current language
function updateProductDropdown() {
    const productSelect = document.getElementById('productType');
    const t = translations[currentLanguage];
    
    // Clear existing options
    productSelect.innerHTML = '';
    
    // Vegetables group
    const vegGroup = document.createElement('optgroup');
    vegGroup.label = '🥬 Vegetables';
    
    const vegetables = ['tomato', 'onion', 'potato', 'cabbage', 'carrot', 'cauliflower', 'brinjal', 'ladyfinger'];
    vegetables.forEach(veg => {
        const option = document.createElement('option');
        option.value = veg;
        const engName = productNames[veg].en;
        const localName = productNames[veg][currentLanguage];
        option.textContent = currentLanguage === 'en' ? 
            `${engName} (${productNames[veg].hi})` : 
            `${engName} (${localName})`;
        vegGroup.appendChild(option);
    });
    productSelect.appendChild(vegGroup);
    
    // Fruits group
    const fruitGroup = document.createElement('optgroup');
    fruitGroup.label = '🍎 Fruits';
    
    const fruits = ['apple', 'banana', 'mango', 'orange', 'grapes', 'pomegranate', 'papaya'];
    fruits.forEach(fruit => {
        const option = document.createElement('option');
        option.value = fruit;
        const engName = productNames[fruit].en;
        const localName = productNames[fruit][currentLanguage];
        option.textContent = currentLanguage === 'en' ? 
            `${engName} (${productNames[fruit].hi})` : 
            `${engName} (${localName})`;
        fruitGroup.appendChild(option);
    });
    productSelect.appendChild(fruitGroup);
    
    // Leafy Greens group
    const leafyGroup = document.createElement('optgroup');
    leafyGroup.label = '🌿 Leafy Greens';
    
    const leafy = ['spinach', 'coriander', 'mint', 'fenugreek'];
    leafy.forEach(leaf => {
        const option = document.createElement('option');
        option.value = leaf;
        const engName = productNames[leaf].en;
        const localName = productNames[leaf][currentLanguage];
        option.textContent = currentLanguage === 'en' ? 
            `${engName} (${productNames[leaf].hi})` : 
            `${engName} (${localName})`;
        leafyGroup.appendChild(option);
    });
    productSelect.appendChild(leafyGroup);
}

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    console.log('Language changed to:', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    const t = translations[lang];
    
    // Update tagline
    const taglineEl = document.getElementById('tagline');
    if (taglineEl && t) {
        taglineEl.textContent = t.tagline;
    }
    
    // Update panel headers and labels
    document.querySelector('.input-panel .panel-header h2').innerHTML = `<i class="fas fa-comments"></i> ${t.vendorInput}`;
    document.querySelector('.input-panel .panel-header p').textContent = t.vendorInputDesc;
    
    // Update form labels
    document.querySelectorAll('.form-group label')[0].innerHTML = `<i class="fas fa-map-marker-alt"></i> ${t.location}`;
    document.querySelectorAll('.form-group label')[1].innerHTML = `<i class="fas fa-calendar-alt"></i> ${t.season}`;
    document.querySelectorAll('.form-group label')[2].innerHTML = `<i class="fas fa-leaf"></i> ${t.productCategory}`;
    
    // Update textarea label
    document.querySelector('.input-section label').innerHTML = `<i class="fas fa-comment-dots"></i> ${t.buyerOffer}`;
    
    // Update buttons
    document.getElementById('voiceBtn').innerHTML = `<i class="fas fa-microphone"></i> ${t.voiceInput}`;
    document.getElementById('analyzeBtn').innerHTML = `<i class="fas fa-brain"></i> ${t.analyzeOffer}`;
    
    // Update examples section
    document.querySelector('.examples-title').textContent = t.quickExamples;
    
    // Update results panel header
    document.querySelector('.results-panel .panel-header h2').innerHTML = `<i class="fas fa-chart-bar"></i> ${t.aiAnalysis}`;
    
    // Update empty state
    document.querySelector('#emptyState h3').textContent = t.readyToAnalyze;
    document.querySelector('#emptyState p').textContent = t.readyToAnalyzeDesc;
    
    // UPDATE PRODUCT DROPDOWN
    updateProductDropdown();
}

// Get current season
function getCurrentSeason() {
    const month = new Date().getMonth() + 1;
    if (month >= 3 && month <= 6) return 'summer';
    if (month >= 7 && month <= 9) return 'monsoon';
    if (month >= 10 && month <= 11) return 'autumn';
    return 'winter';
}

// Load example
function loadExample(exampleLang) {
    const examples = {
        en: "I'll give you 100 rupees per kg for tomatoes",
        hi: "भाई साहब, 40 किलो प्याज़ के 800 रुपये दे रहा हूँ।",
        kn: "ಈ ಟೊಮೇಟೊಗೆ ಕ್ರೇಟ್‌ಗೆ 150 ರೂಪಾಯಿ ಕೊಡ್ತೀನಿ",
        ta: "இந்த தக்காளிக்கு கூடைக்கு 150 ரூபாய் தருகிறேன்",
        te: "ఈ టమాటోలకు క్రేట్‌కు 150 రూపాయలు ఇస్తాను",
        mr: "या टोमॅटोसाठी पेटीला 150 रुपये देतो"
    };
    
    document.getElementById('vendorInput').value = examples[exampleLang] || examples.en;
    
    if (!document.getElementById('location').value) {
        const locationMap = {
            en: 'bangalore',
            hi: 'delhi',
            kn: 'bangalore',
            ta: 'chennai',
            te: 'hyderabad',
            mr: 'pune'
        };
        document.getElementById('location').value = locationMap[exampleLang] || 'bangalore';
    }
    
    changeLanguage(exampleLang);
}

// Handle voice input - REAL VOICE RECOGNITION
function handleVoiceInput() {
    console.log('Voice Input button clicked!');
    console.log('Current language:', currentLanguage);
    
    const btn = document.getElementById('voiceBtn');
    if (!btn) {
        console.error('Voice button not found!');
        return;
    }
    
    // Check if browser supports speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        console.log('Speech recognition not supported, using demo mode');
        useDemoVoiceInput(btn);
        return;
    }
    
    const recognition = new SpeechRecognition();
    const originalHTML = btn.innerHTML;
    const t = translations[currentLanguage];
    
    // Map language codes for speech recognition
    const langMap = {
        en: 'en-IN',
        hi: 'hi-IN',
        kn: 'kn-IN',
        ta: 'ta-IN',
        te: 'te-IN',
        mr: 'mr-IN'
    };
    
    recognition.lang = langMap[currentLanguage] || 'en-IN';
    recognition.continuous = false;
    recognition.interimResults = false;
    
    btn.innerHTML = '<i class="fas fa-microphone-alt fa-pulse"></i> Listening...';
    btn.disabled = true;
    btn.style.background = 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)';
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('Voice recognized:', transcript);
        document.getElementById('vendorInput').value = transcript;
        
        btn.innerHTML = '<i class="fas fa-check"></i> Voice Captured';
        btn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
        
        showToast('Voice input captured!', 'success');
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            btn.disabled = false;
        }, 2000);
    };
    
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        
        if (event.error === 'not-allowed') {
            showToast('Please allow microphone access', 'error');
        } else if (event.error === 'no-speech') {
            showToast('No speech detected. Using demo mode.', 'warning');
            useDemoVoiceInput(btn);
        } else {
            showToast('Voice input failed. Using demo mode.', 'warning');
            useDemoVoiceInput(btn);
        }
        
        btn.innerHTML = originalHTML;
        btn.style.background = '';
        btn.disabled = false;
    };
    
    recognition.onend = () => {
        console.log('Speech recognition ended');
    };
    
    try {
        recognition.start();
        console.log('Speech recognition started for language:', recognition.lang);
    } catch (error) {
        console.error('Failed to start recognition:', error);
        useDemoVoiceInput(btn);
    }
}

// Demo voice input (fallback when real voice doesn't work)
function useDemoVoiceInput(btn) {
    const originalHTML = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Demo Mode...';
    btn.disabled = true;
    
    const voiceExamples = {
        en: "I'll give you 100 rupees per kg for mangoes",
        hi: "भाई साहब, 40 किलो प्याज़ के 800 रुपये दे रहा हूँ।",
        kn: "ಈ ಟೊಮೇಟೊಗೆ ಕ್ರೇಟ್‌ಗೆ 150 ರೂಪಾಯಿ ಕೊಡ್ತೀನಿ",
        ta: "இந்த தக்காளிக்கு கூடைக்கு 150 ரூபாய் தருகிறேன்",
        te: "ఈ టమాటోలకు క్రేట్‌కు 150 రూపాయలు ఇస్తాను",
        mr: "या टोमॅटोसाठी पेटीला 150 रुपये देतो"
    };
    
    setTimeout(() => {
        const example = voiceExamples[currentLanguage] || voiceExamples.en;
        document.getElementById('vendorInput').value = example;
        
        if (!document.getElementById('location').value) {
            const locationMap = {
                en: 'bangalore',
                hi: 'delhi',
                kn: 'bangalore',
                ta: 'chennai',
                te: 'hyderabad',
                mr: 'pune'
            };
            document.getElementById('location').value = locationMap[currentLanguage] || 'bangalore';
        }
        
        btn.innerHTML = '<i class="fas fa-check"></i> Demo Loaded';
        btn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            btn.disabled = false;
        }, 2000);
    }, 1500);
}

// Show toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    
    const colors = {
        info: '#FF6B35',
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B'
    };
    
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
        max-width: 300px;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Main analysis function
async function handleAnalyze() {
    const input = document.getElementById('vendorInput').value.trim();
    const t = translations[currentLanguage];
    
    if (!input) {
        showToast(currentLanguage === 'hi' ? 'कृपया खरीदार की पेशकश दर्ज करें' : 'Please enter buyer\'s offer', 'warning');
        return;
    }
    
    const location = document.getElementById('location').value;
    if (!location) {
        showToast(currentLanguage === 'hi' ? 'कृपया स्थान चुनें' : 'Please select location', 'warning');
        return;
    }
    
    const season = document.getElementById('season').value;
    const productType = document.getElementById('productType').value;
    
    // Show loading
    document.getElementById('emptyState').classList.add('hidden');
    document.getElementById('resultsContent').classList.add('hidden');
    document.getElementById('loadingState').classList.remove('hidden');
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
        const result = analyzeOffer(input, location, season, productType, currentLanguage);
        
        if (!result || !result.marketPrices) {
            throw new Error('Invalid analysis result');
        }
        
        displaySimplifiedResults(result);
        updateStats();
        showToast(currentLanguage === 'hi' ? 'विश्लेषण पूर्ण!' : 'Analysis complete!', 'success');
    } catch (error) {
        console.error('Analysis error:', error);
        document.getElementById('loadingState').classList.add('hidden');
        document.getElementById('emptyState').classList.remove('hidden');
        showToast(currentLanguage === 'hi' ? 'विश्लेषण करने में असमर्थ। कृपया पुनः प्रयास करें।' : 'Unable to analyze. Please try again.', 'error');
    }
}

// Display simplified results - WITH LANGUAGE SUPPORT
function displaySimplifiedResults(result) {
    document.getElementById('loadingState').classList.add('hidden');
    document.getElementById('resultsContent').classList.remove('hidden');
    
    const t = translations[currentLanguage];
    const offeredPrice = result.offeredPrice;
    const fairPrice = result.marketPrices.fair;
    const distressPrice = result.marketPrices.distress;
    
    // Calculate recommendation
    const priceRatio = offeredPrice / fairPrice;
    let recommendation, recommendationClass, recommendationIcon;
    
    if (offeredPrice < distressPrice) {
        recommendation = `❌ ${t.dontBuy}`;
        recommendationClass = "bad-deal";
        recommendationIcon = "fa-times-circle";
    } else if (priceRatio < 0.85) {
        recommendation = `⚠️ ${t.negotiate}`;
        recommendationClass = "negotiate";
        recommendationIcon = "fa-exclamation-triangle";
    } else if (priceRatio >= 0.85 && priceRatio <= 1.15) {
        recommendation = `✅ ${t.goodDeal}`;
        recommendationClass = "good-deal";
        recommendationIcon = "fa-check-circle";
    } else {
        recommendation = `✅ ${t.excellent}`;
        recommendationClass = "excellent-deal";
        recommendationIcon = "fa-thumbs-up";
    }
    
    // Update product info with translations
    document.getElementById('productLabel').textContent = t.product + ':';
    document.getElementById('quantityLabel').textContent = t.quantity + ':';
    document.getElementById('locationLabel').textContent = t.location_label + ':';
    
    document.getElementById('detectedProduct').textContent = result.productDisplay;
    document.getElementById('detectedQuantity').textContent = `${result.quantity} ${result.unit}`;
    document.getElementById('detectedLocation').textContent = result.locationName;
    
    // Update recommendation
    const recElement = document.getElementById('recommendation');
    recElement.innerHTML = `<i class="fas ${recommendationIcon}"></i> ${recommendation}`;
    recElement.className = `recommendation ${recommendationClass}`;
    
    // Update price cards with translations
    document.getElementById('yourPriceLabel').textContent = t.yourOfferedPrice;
    document.getElementById('marketPriceLabel').textContent = t.marketPrice;
    document.getElementById('suggestedPriceLabel').textContent = t.suggestedPrice;
    
    document.getElementById('offeredPriceValue').textContent = `₹${offeredPrice}`;
    document.getElementById('marketPriceValue').textContent = `₹${fairPrice}`;
    document.getElementById('suggestedPriceValue').textContent = `₹${result.counterPrice}`;
    
    document.getElementById('perKg1').textContent = t.perKg;
    document.getElementById('perKg2').textContent = `${t.perKg} (${t.fairValue})`;
    document.getElementById('perKg3').textContent = `${t.perKg} (${t.toNegotiate})`;
    
    // Update price difference
    const priceDiff = offeredPrice - fairPrice;
    const diffElement = document.getElementById('priceDifferenceValue');
    const diffLabel = document.getElementById('differenceLabel');
    
    diffLabel.textContent = t.differenceFromMarket + ':';
    
    if (priceDiff >= 0) {
        diffElement.textContent = `+₹${priceDiff} (${t.aboveMarket})`;
        diffElement.className = 'price-positive';
    } else {
        diffElement.textContent = `-₹${Math.abs(priceDiff)} (${t.belowMarket})`;
        diffElement.className = 'price-negative';
    }
    
    // Update response section
    document.getElementById('whatToSayLabel').innerHTML = `<i class="fas fa-comments"></i> ${t.whatToSay}`;
    document.getElementById('responseSuggestion').textContent = result.negotiationResponse;
    document.getElementById('copyBtn').innerHTML = `<i class="fas fa-copy"></i> ${t.copyResponse}`;
    
    // Scroll to results
    document.getElementById('resultsContent').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Copy response
function copyResponse() {
    const response = document.getElementById('responseSuggestion').textContent;
    const t = translations[currentLanguage];
    
    navigator.clipboard.writeText(response).then(() => {
        showToast(currentLanguage === 'hi' ? 'प्रतिक्रिया कॉपी की गई!' : 'Response copied!', 'success');
    }).catch(() => {
        showToast(currentLanguage === 'hi' ? 'कॉपी करने में विफल' : 'Failed to copy', 'error');
    });
}

// Update stats
function updateStats() {
    vendorsProtected++;
    totalImprovement = Math.min(totalImprovement + 1, 30);
    
    animateCounter(document.getElementById('protectedCount'), vendorsProtected);
    animateCounter(document.getElementById('avgIncrease'), totalImprovement, '%');
}

// Animate counter
function animateCounter(element, target, suffix = '') {
    const start = parseInt(element.textContent) || 0;
    const duration = 1000;
    const steps = 30;
    const increment = (target - start) / steps;
    let current = start;
    let step = 0;
    
    const timer = setInterval(() => {
        step++;
        current += increment;
        element.textContent = Math.round(current) + suffix;
        
        if (step >= steps) {
            element.textContent = target + suffix;
            clearInterval(timer);
        }
    }, duration / steps);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    console.log('MandiBandhu initializing...');
    document.getElementById('season').value = getCurrentSeason();
    changeLanguage('en'); // Set default language to English
    console.log('MandiBandhu initialized successfully! 🤝');
    console.log('Voice input should now work - click the Voice Input button to test');
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
@keyframes slideInRight {
    from { transform: translateX(400px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}
@keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(400px); opacity: 0; }
}

.recommendation {
    padding: 1.5rem;
    border-radius: 12px;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
    margin: 1rem 0;
}

.recommendation i {
    margin-right: 0.5rem;
}

.bad-deal {
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    color: #991b1b;
    border: 2px solid #ef4444;
}

.negotiate {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    color: #92400e;
    border: 2px solid #f59e0b;
}

.good-deal {
    background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
    color: #065f46;
    border: 2px solid #10b981;
}

.excellent-deal {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    color: #1e40af;
    border: 2px solid #3b82f6;
}

.price-positive {
    color: #10b981;
    font-weight: 600;
}

.price-negative {
    color: #ef4444;
    font-weight: 600;
}
`;
document.head.appendChild(style);
