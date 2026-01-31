// ============================================
// MARKET DATA & PRICE INTELLIGENCE  
// ============================================

const marketData = {
    north: {
        // Vegetables
        tomato: { summer: {distress:15,fair:28,premium:45}, monsoon:{distress:20,fair:35,premium:55}, autumn:{distress:12,fair:22,premium:35}, winter:{distress:18,fair:30,premium:48}},
        onion: { summer:{distress:18,fair:25,premium:38}, monsoon:{distress:25,fair:40,premium:65}, autumn:{distress:15,fair:22,premium:32}, winter:{distress:20,fair:28,premium:42}},
        potato: { summer:{distress:12,fair:18,premium:28}, monsoon:{distress:15,fair:22,premium:35}, autumn:{distress:10,fair:15,premium:22}, winter:{distress:8,fair:12,premium:18}},
        cabbage: { summer:{distress:8,fair:15,premium:25}, monsoon:{distress:12,fair:20,premium:32}, autumn:{distress:10,fair:18,premium:28}, winter:{distress:6,fair:12,premium:20}},
        carrot: { summer:{distress:15,fair:25,premium:40}, monsoon:{distress:20,fair:32,premium:50}, autumn:{distress:12,fair:22,premium:35}, winter:{distress:10,fair:18,premium:28}},
        cauliflower: { summer:{distress:10,fair:18,premium:30}, monsoon:{distress:15,fair:25,premium:40}, autumn:{distress:8,fair:15,premium:25}, winter:{distress:12,fair:20,premium:32}},
        brinjal: { summer:{distress:12,fair:20,premium:32}, monsoon:{distress:15,fair:25,premium:38}, autumn:{distress:10,fair:18,premium:28}, winter:{distress:14,fair:22,premium:35}},
        ladyfinger: { summer:{distress:20,fair:35,premium:55}, monsoon:{distress:25,fair:45,premium:70}, autumn:{distress:18,fair:32,premium:50}, winter:{distress:22,fair:38,premium:58}},
        // Fruits
        apple: { summer:{distress:60,fair:90,premium:130}, monsoon:{distress:70,fair:100,premium:145}, autumn:{distress:50,fair:80,premium:120}, winter:{distress:55,fair:85,premium:125}},
        banana: { summer:{distress:30,fair:45,premium:65}, monsoon:{distress:35,fair:50,premium:70}, autumn:{distress:28,fair:42,premium:60}, winter:{distress:32,fair:48,premium:68}},
        mango: { summer:{distress:40,fair:70,premium:110}, monsoon:{distress:50,fair:85,premium:130}, autumn:{distress:45,fair:75,premium:115}, winter:{distress:55,fair:90,premium:135}},
        orange: { summer:{distress:35,fair:55,premium:80}, monsoon:{distress:40,fair:60,premium:90}, autumn:{distress:30,fair:50,premium:75}, winter:{distress:32,fair:52,premium:78}},
        grapes: { summer:{distress:45,fair:75,premium:115}, monsoon:{distress:50,fair:85,premium:130}, autumn:{distress:40,fair:70,premium:105}, winter:{distress:42,fair:72,premium:110}},
        pomegranate: { summer:{distress:60,fair:95,premium:140}, monsoon:{distress:70,fair:110,premium:160}, autumn:{distress:55,fair:90,premium:135}, winter:{distress:58,fair:93,premium:138}},
        papaya: { summer:{distress:20,fair:32,premium:50}, monsoon:{distress:25,fair:38,premium:58}, autumn:{distress:18,fair:30,premium:48}, winter:{distress:22,fair:35,premium:53}},
        // Leafy Greens
        spinach: { summer:{distress:8,fair:15,premium:25}, monsoon:{distress:12,fair:20,premium:32}, autumn:{distress:10,fair:18,premium:28}, winter:{distress:6,fair:12,premium:20}},
        coriander: { summer:{distress:15,fair:25,premium:40}, monsoon:{distress:20,fair:32,premium:50}, autumn:{distress:12,fair:22,premium:35}, winter:{distress:10,fair:18,premium:28}},
        mint: { summer:{distress:18,fair:28,premium:45}, monsoon:{distress:22,fair:35,premium:55}, autumn:{distress:15,fair:25,premium:40}, winter:{distress:12,fair:20,premium:32}},
        fenugreek: { summer:{distress:12,fair:20,premium:32}, monsoon:{distress:15,fair:25,premium:38}, autumn:{distress:10,fair:18,premium:28}, winter:{distress:8,fair:15,premium:25}}
    },
    south: {
        // Vegetables
        tomato: { summer:{distress:18,fair:32,premium:50}, monsoon:{distress:22,fair:38,premium:60}, autumn:{distress:15,fair:26,premium:40}, winter:{distress:20,fair:34,premium:52}},
        onion: { summer:{distress:20,fair:28,premium:42}, monsoon:{distress:28,fair:45,premium:70}, autumn:{distress:18,fair:25,premium:36}, winter:{distress:22,fair:32,premium:48}},
        potato: { summer:{distress:15,fair:22,premium:32}, monsoon:{distress:18,fair:26,premium:38}, autumn:{distress:12,fair:18,premium:26}, winter:{distress:10,fair:15,premium:22}},
        cabbage: { summer:{distress:10,fair:18,premium:28}, monsoon:{distress:15,fair:24,premium:36}, autumn:{distress:12,fair:20,premium:30}, winter:{distress:8,fair:14,premium:22}},
        carrot: { summer:{distress:18,fair:28,premium:45}, monsoon:{distress:22,fair:35,premium:55}, autumn:{distress:15,fair:25,premium:38}, winter:{distress:12,fair:20,premium:32}},
        cauliflower: { summer:{distress:12,fair:20,premium:32}, monsoon:{distress:18,fair:28,premium:45}, autumn:{distress:10,fair:18,premium:28}, winter:{distress:15,fair:24,premium:38}},
        brinjal: { summer:{distress:15,fair:24,premium:38}, monsoon:{distress:18,fair:28,premium:45}, autumn:{distress:12,fair:20,premium:32}, winter:{distress:16,fair:26,premium:40}},
        ladyfinger: { summer:{distress:25,fair:42,premium:65}, monsoon:{distress:30,fair:52,premium:80}, autumn:{distress:22,fair:38,premium:58}, winter:{distress:28,fair:45,premium:70}},
        // Fruits
        apple: { summer:{distress:65,fair:95,premium:140}, monsoon:{distress:75,fair:110,premium:155}, autumn:{distress:55,fair:85,premium:130}, winter:{distress:60,fair:90,premium:135}},
        banana: { summer:{distress:25,fair:38,premium:55}, monsoon:{distress:30,fair:45,premium:65}, autumn:{distress:22,fair:35,premium:52}, winter:{distress:28,fair:42,premium:60}},
        mango: { summer:{distress:35,fair:60,premium:95}, monsoon:{distress:45,fair:75,premium:115}, autumn:{distress:40,fair:65,premium:100}, winter:{distress:50,fair:80,premium:120}},
        orange: { summer:{distress:32,fair:50,premium:75}, monsoon:{distress:38,fair:58,premium:88}, autumn:{distress:28,fair:45,premium:70}, winter:{distress:30,fair:48,premium:73}},
        grapes: { summer:{distress:42,fair:70,premium:105}, monsoon:{distress:48,fair:80,premium:120}, autumn:{distress:38,fair:65,premium:98}, winter:{distress:40,fair:68,premium:102}},
        pomegranate: { summer:{distress:55,fair:88,premium:130}, monsoon:{distress:65,fair:100,premium:148}, autumn:{distress:50,fair:82,premium:125}, winter:{distress:52,fair:85,premium:128}},
        papaya: { summer:{distress:18,fair:28,premium:45}, monsoon:{distress:22,fair:35,premium:52}, autumn:{distress:16,fair:26,premium:42}, winter:{distress:20,fair:32,premium:48}},
        // Leafy Greens
        spinach: { summer:{distress:10,fair:18,premium:28}, monsoon:{distress:15,fair:24,premium:36}, autumn:{distress:12,fair:20,premium:30}, winter:{distress:8,fair:14,premium:22}},
        coriander: { summer:{distress:18,fair:28,premium:45}, monsoon:{distress:22,fair:35,premium:55}, autumn:{distress:15,fair:25,premium:40}, winter:{distress:12,fair:20,premium:32}},
        mint: { summer:{distress:20,fair:32,premium:50}, monsoon:{distress:25,fair:38,premium:60}, autumn:{distress:18,fair:28,premium:45}, winter:{distress:15,fair:24,premium:38}},
        fenugreek: { summer:{distress:15,fair:24,premium:38}, monsoon:{distress:18,fair:28,premium:45}, autumn:{distress:12,fair:20,premium:32}, winter:{distress:10,fair:18,premium:28}}
    },
    west: {
        // Vegetables
        tomato: { summer:{distress:20,fair:35,premium:55}, monsoon:{distress:25,fair:42,premium:65}, autumn:{distress:16,fair:28,premium:42}, winter:{distress:22,fair:36,premium:55}},
        onion: { summer:{distress:22,fair:30,premium:45}, monsoon:{distress:30,fair:48,premium:75}, autumn:{distress:20,fair:28,premium:40}, winter:{distress:24,fair:35,premium:52}},
        potato: { summer:{distress:16,fair:24,premium:35}, monsoon:{distress:20,fair:28,premium:40}, autumn:{distress:14,fair:20,premium:28}, winter:{distress:12,fair:18,premium:25}},
        cabbage: { summer:{distress:12,fair:20,premium:30}, monsoon:{distress:16,fair:26,premium:38}, autumn:{distress:14,fair:22,premium:32}, winter:{distress:10,fair:16,premium:24}},
        carrot: { summer:{distress:20,fair:30,premium:48}, monsoon:{distress:25,fair:38,premium:58}, autumn:{distress:18,fair:28,premium:42}, winter:{distress:14,fair:22,premium:35}},
        cauliflower: { summer:{distress:14,fair:22,premium:35}, monsoon:{distress:20,fair:32,premium:50}, autumn:{distress:12,fair:20,premium:32}, winter:{distress:18,fair:28,premium:45}},
        brinjal: { summer:{distress:16,fair:26,premium:40}, monsoon:{distress:20,fair:32,premium:50}, autumn:{distress:14,fair:24,premium:38}, winter:{distress:18,fair:28,premium:45}},
        ladyfinger: { summer:{distress:28,fair:48,premium:75}, monsoon:{distress:35,fair:58,premium:90}, autumn:{distress:25,fair:42,premium:65}, winter:{distress:30,fair:50,premium:78}},
        // Fruits
        apple: { summer:{distress:70,fair:100,premium:145}, monsoon:{distress:80,fair:115,premium:160}, autumn:{distress:60,fair:90,premium:135}, winter:{distress:65,fair:95,premium:140}},
        banana: { summer:{distress:32,fair:48,premium:70}, monsoon:{distress:38,fair:55,premium:80}, autumn:{distress:28,fair:42,premium:65}, winter:{distress:35,fair:52,premium:75}},
        mango: { summer:{distress:45,fair:75,premium:115}, monsoon:{distress:55,fair:90,premium:140}, autumn:{distress:48,fair:80,premium:125}, winter:{distress:60,fair:95,premium:145}},
        orange: { summer:{distress:38,fair:58,premium:88}, monsoon:{distress:45,fair:68,premium:100}, autumn:{distress:35,fair:55,premium:82}, winter:{distress:38,fair:58,premium:88}},
        grapes: { summer:{distress:48,fair:80,premium:120}, monsoon:{distress:55,fair:90,premium:140}, autumn:{distress:42,fair:72,premium:110}, winter:{distress:45,fair:75,premium:115}},
        pomegranate: { summer:{distress:65,fair:100,premium:148}, monsoon:{distress:75,fair:115,premium:170}, autumn:{distress:60,fair:95,premium:142}, winter:{distress:62,fair:98,premium:145}},
        papaya: { summer:{distress:22,fair:35,premium:52}, monsoon:{distress:28,fair:42,premium:62}, autumn:{distress:20,fair:32,premium:50}, winter:{distress:25,fair:38,premium:58}},
        // Leafy Greens
        spinach: { summer:{distress:12,fair:20,premium:30}, monsoon:{distress:16,fair:26,premium:38}, autumn:{distress:14,fair:22,premium:32}, winter:{distress:10,fair:16,premium:24}},
        coriander: { summer:{distress:20,fair:32,premium:50}, monsoon:{distress:25,fair:38,premium:60}, autumn:{distress:18,fair:28,premium:45}, winter:{distress:15,fair:24,premium:38}},
        mint: { summer:{distress:22,fair:35,premium:55}, monsoon:{distress:28,fair:42,premium:65}, autumn:{distress:20,fair:32,premium:50}, winter:{distress:18,fair:28,premium:45}},
        fenugreek: { summer:{distress:16,fair:26,premium:40}, monsoon:{distress:20,fair:32,premium:50}, autumn:{distress:14,fair:22,premium:35}, winter:{distress:12,fair:20,premium:32}}
    },
    east: {
        // Vegetables
        tomato: { summer:{distress:16,fair:28,premium:45}, monsoon:{distress:22,fair:36,premium:58}, autumn:{distress:14,fair:24,premium:38}, winter:{distress:18,fair:30,premium:48}},
        onion: { summer:{distress:18,fair:26,premium:40}, monsoon:{distress:26,fair:42,premium:68}, autumn:{distress:16,fair:24,premium:35}, winter:{distress:20,fair:30,premium:45}},
        potato: { summer:{distress:14,fair:20,premium:30}, monsoon:{distress:16,fair:24,premium:36}, autumn:{distress:11,fair:16,premium:24}, winter:{distress:9,fair:14,premium:20}},
        cabbage: { summer:{distress:9,fair:16,premium:26}, monsoon:{distress:14,fair:22,premium:34}, autumn:{distress:11,fair:19,premium:28}, winter:{distress:7,fair:13,premium:20}},
        carrot: { summer:{distress:16,fair:26,premium:42}, monsoon:{distress:20,fair:33,premium:52}, autumn:{distress:14,fair:24,premium:36}, winter:{distress:11,fair:19,premium:30}},
        cauliflower: { summer:{distress:11,fair:19,premium:30}, monsoon:{distress:16,fair:26,premium:42}, autumn:{distress:9,fair:16,premium:26}, winter:{distress:14,fair:22,premium:35}},
        brinjal: { summer:{distress:14,fair:22,premium:35}, monsoon:{distress:16,fair:26,premium:42}, autumn:{distress:11,fair:19,premium:30}, winter:{distress:15,fair:24,premium:38}},
        ladyfinger: { summer:{distress:22,fair:38,premium:58}, monsoon:{distress:28,fair:48,premium:75}, autumn:{distress:20,fair:35,premium:55}, winter:{distress:25,fair:42,premium:65}},
        // Fruits
        apple: { summer:{distress:58,fair:88,premium:125}, monsoon:{distress:68,fair:98,premium:140}, autumn:{distress:48,fair:78,premium:115}, winter:{distress:53,fair:83,premium:120}},
        banana: { summer:{distress:28,fair:42,premium:60}, monsoon:{distress:32,fair:48,premium:70}, autumn:{distress:25,fair:38,premium:55}, winter:{distress:30,fair:45,premium:65}},
        mango: { summer:{distress:38,fair:65,premium:100}, monsoon:{distress:48,fair:80,premium:125}, autumn:{distress:42,fair:70,premium:110}, winter:{distress:52,fair:85,premium:130}},
        orange: { summer:{distress:30,fair:48,premium:72}, monsoon:{distress:35,fair:55,premium:82}, autumn:{distress:26,fair:42,premium:65}, winter:{distress:28,fair:45,premium:68}},
        grapes: { summer:{distress:40,fair:68,premium:100}, monsoon:{distress:45,fair:78,premium:115}, autumn:{distress:36,fair:62,premium:95}, winter:{distress:38,fair:65,premium:98}},
        pomegranate: { summer:{distress:52,fair:85,premium:125}, monsoon:{distress:62,fair:98,premium:145}, autumn:{distress:48,fair:80,premium:120}, winter:{distress:50,fair:82,premium:122}},
        papaya: { summer:{distress:16,fair:26,premium:42}, monsoon:{distress:20,fair:32,premium:48}, autumn:{distress:14,fair:24,premium:38}, winter:{distress:18,fair:28,premium:45}},
        // Leafy Greens
        spinach: { summer:{distress:9,fair:16,premium:26}, monsoon:{distress:14,fair:22,premium:34}, autumn:{distress:11,fair:19,premium:28}, winter:{distress:7,fair:13,premium:20}},
        coriander: { summer:{distress:16,fair:26,premium:42}, monsoon:{distress:20,fair:33,premium:52}, autumn:{distress:14,fair:24,premium:36}, winter:{distress:11,fair:19,premium:30}},
        mint: { summer:{distress:18,fair:28,premium:45}, monsoon:{distress:22,fair:35,premium:55}, autumn:{distress:16,fair:26,premium:42}, winter:{distress:14,fair:22,premium:35}},
        fenugreek: { summer:{distress:14,fair:22,premium:35}, monsoon:{distress:16,fair:26,premium:42}, autumn:{distress:11,fair:19,premium:30}, winter:{distress:9,fair:16,premium:26}}
    }
};

const locationToRegion = {
    delhi: 'north', jaipur: 'north', lucknow: 'north',
    bangalore: 'south', chennai: 'south', hyderabad: 'south',
    mumbai: 'west', pune: 'west', ahmedabad: 'west',
    kolkata: 'east'
};

function getMarketPrice(location, product, season) {
    const region = locationToRegion[location] || 'north';
    const productLower = product.toLowerCase();
    
    if (marketData[region] && marketData[region][productLower]) {
        return marketData[region][productLower][season];
    }
    
    return { distress: 15, fair: 25, premium: 40 };
}

function calculateConfidence(location, product, season, quantity) {
    let confidence = 100;
    let factors = [];
    
    if (!location || !locationToRegion[location]) {
        confidence -= 20;
        factors.push('Missing location');
    }
    
    const region = locationToRegion[location] || 'north';
    const productLower = product.toLowerCase();
    if (!marketData[region] || !marketData[region][productLower]) {
        confidence -= 25;
        factors.push('Product not in database');
    }
    
    if (!quantity || isNaN(quantity)) {
        confidence -= 10;
        factors.push('Quantity unclear');
    }
    
    let level = 'HIGH';
    if (confidence < 60) level = 'LOW';
    else if (confidence < 85) level = 'MEDIUM';
    
    return { score: Math.max(0, confidence), level: level, factors: factors };
}

function evaluateOffer(offeredPrice, fairPrice, distressPrice, premiumPrice) {
    const offerRatio = offeredPrice / fairPrice;
    
    if (offeredPrice < distressPrice) {
        return { category: 'EXPLOITATIVE', severity: 'SEVERE', message: 'This offer is significantly below cost and will harm the vendor', color: 'danger' };
    } else if (offerRatio < 0.75) {
        return { category: 'LOW', severity: 'MODERATE', message: 'This offer is notably below fair market value', color: 'warning' };
    } else if (offerRatio >= 0.75 && offerRatio <= 1.15) {
        return { category: 'REASONABLE', severity: 'ACCEPTABLE', message: 'This offer is within fair market range', color: 'success' };
    } else {
        return { category: 'FAVORABLE', severity: 'GOOD', message: 'This is a favorable offer for the vendor', color: 'info' };
    }
}

function generateCounterOffer(offeredPrice, fairPrice, distressPrice, premiumPrice, evaluation) {
    switch(evaluation.category) {
        case 'EXPLOITATIVE': return Math.round(fairPrice * 0.95);
        case 'LOW': return Math.round(fairPrice * 0.90);
        case 'REASONABLE': return Math.round(fairPrice * 0.85);
        case 'FAVORABLE': return Math.round(offeredPrice * 0.95);
        default: return fairPrice;
    }
}