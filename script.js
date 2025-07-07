const canvas = document.getElementById('chartCanvas');
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(20, 140);
        ctx.quadraticCurveTo(40, 130, 60, 125);
        ctx.quadraticCurveTo(80, 122.5, 100, 120);
        ctx.quadraticCurveTo(120, 115, 140, 110);
        ctx.quadraticCurveTo(160, 107.5, 180, 105);
        ctx.quadraticCurveTo(200, 100, 220, 95);
        ctx.quadraticCurveTo(240, 90, 260, 85);
        ctx.quadraticCurveTo(280, 80, 300, 75);
        ctx.quadraticCurveTo(320, 70, 340, 65);
        ctx.quadraticCurveTo(360, 60, 380, 55);
        ctx.quadraticCurveTo(400, 50, 420, 45);
        ctx.quadraticCurveTo(440, 40, 460, 35);
        ctx.quadraticCurveTo(480, 30, 500, 25);
        ctx.quadraticCurveTo(520, 20, 540, 15);
        ctx.quadraticCurveTo(560, 10, 580, 5);
        ctx.quadraticCurveTo(600, 0, 620, -5);
        ctx.quadraticCurveTo(640, -10, 660, -15);
        ctx.quadraticCurveTo(680, -20, 700, -25);
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 1;
        ctx.stroke();

const copyButton = document.querySelector('.btn-secondary');
const copyIcon = copyButton.querySelector('img');

const originalButtonContent = copyButton.innerHTML;

async function checkClipboardForURL() {
    try {
        if (!navigator.clipboard || !navigator.clipboard.readText) {
            return false;
        }
        
        const clipboardText = await navigator.clipboard.readText();
        const currentURL = window.location.href;
        
        return clipboardText === currentURL;
        
    } catch (err) {
        console.log('Cannot read clipboard:', err);
        return false;
    }
}

async function updateButtonState() {
    const urlInClipboard = await checkClipboardForURL();
    
    if (urlInClipboard) {
        copyButton.innerHTML = `
            Copied
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
            </svg>
        `;
        
        copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
        copyButton.style.color = '#ffffff';
        copyButton.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        
    } else {
        copyButton.innerHTML = originalButtonContent;
        copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
        copyButton.style.color = '#ffffff';
        copyButton.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    }
}

async function copyURLToClipboard() {
    try {
        await navigator.clipboard.writeText(window.location.href);
        
        copyButton.innerHTML = `
            Copied
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
            </svg>
        `;
        
        copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
        copyButton.style.color = '#ffffff';
        copyButton.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        
    } catch (err) {
        console.error('Failed to copy: ', err);
        
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            copyButton.innerHTML = `
                Copied
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
                </svg>
            `;
            
        copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
        copyButton.style.color = '#ffffff';
        copyButton.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            
        } catch (fallbackErr) {
            console.error('Fallback copy failed: ', fallbackErr);
            alert('Copy failed. Please copy the URL manually.');
        }
    }
}

copyButton.addEventListener('click', async function() {
    const urlInClipboard = await checkClipboardForURL();
    
    if (urlInClipboard) {
        const originalContent = copyButton.innerHTML;
        
        copyButton.innerHTML = `
            Already Copied!
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
            </svg>
        `;
        
        setTimeout(() => {
            copyButton.innerHTML = originalContent;
        }, 1000);
        
    } else {
        await copyURLToClipboard();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    updateButtonState();
});

window.addEventListener('focus', function() {
    updateButtonState();
});

setInterval(updateButtonState, 5000);

copyButton.style.transition = 'all 0.3s ease';

document.addEventListener('click', function(e) {
    if (e.target !== copyButton && !copyButton.contains(e.target)) {
        updateButtonState();
    }
});

document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        updateButtonState();
    }
});

const openPositionButton = document.querySelector('.btn-primary');

const getCurrentTradingData = () => {
    const activeTab = document.querySelector('.tab-option.active');
    const symbol = activeTab.textContent.trim();
    const priceElement = document.querySelector('.price');
    const priceText = priceElement.textContent.split('+')[0]; 
    const currentPrice = parseFloat(priceText);
    
    return {
        symbol: symbol,
        price: currentPrice,
        exchange: 'Hyperliquid',
        correlation: '0.47',
        zScore: '0.7',
        beta: '0.63'
    };
};

const createConfirmationModal = (tradingData) => {
    const modal = document.createElement('div');
    modal.id = 'confirmationModal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <h3>Confirm Trade Position</h3>
                <div class="trade-details">
                    <div class="trade-row">
                        <span>Symbol:</span>
                        <span class="highlight">${tradingData.symbol}USDT</span>
                    </div>
                    <div class="trade-row">
                        <span>Current Price:</span>
                        <span>$${tradingData.price}</span>
                    </div>
                    <div class="trade-row">
                        <span>Position Type:</span>
                        <span class="highlight">LONG</span>
                    </div>
                    <div class="trade-row">
                        <span>Exchange:</span>
                        <span>${tradingData.exchange}</span>
                    </div>
                    <div class="trade-row">
                        <span>Amount:</span>
                        <input type="number" id="tradeAmount" value="100" min="10" max="10000" step="10">
                        <span>USDT</span>
                    </div>
                    <div class="trade-row">
                        <span>Estimated Quantity:</span>
                        <span id="estimatedQty">${(100 / tradingData.price).toFixed(4)} ${tradingData.symbol}</span>
                    </div>
                </div>
                <div class="risk-warning">
                    <p>⚠️ <strong>Risk Warning:</strong> Trading involves substantial risk of loss. Only trade with money you can afford to lose.</p>
                </div>
                <div class="modal-buttons">
                    <button id="cancelTrade" class="btn btn-cancel">Cancel</button>
                    <button id="confirmTrade" class="btn btn-confirm">Confirm Trade</button>
                </div>
            </div>
        </div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background: linear-gradient(145deg, #1e1e1e 0%, #2a2a2a 100%);
            border-radius: 20px;
            padding: 30px;
            max-width: 500px;
            width: 90%;
            color: white;
            box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.5);
        }
        
        .modal-content h3 {
            margin-bottom: 20px;
            color: #4CAF50;
            font-size: 24px;
            text-align: center;
        }
        
        .trade-details {
            margin-bottom: 20px;
        }
        
        .trade-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #333;
        }
        
        .trade-row:last-child {
            border-bottom: none;
        }
        
        .highlight {
            color: #4CAF50;
            font-weight: bold;
        }
        
        #tradeAmount {
            background: #333;
            border: 1px solid #555;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            width: 100px;
            text-align: center;
        }
        
        .risk-warning {
            background: rgba(255, 193, 7, 0.1);
            border: 1px solid rgba(255, 193, 7, 0.3);
            border-radius: 10px;
            padding: 15px;
            margin-bottom: 20px;
        }
        
        .risk-warning p {
            margin: 0;
            color: #FFC107;
            font-size: 14px;
        }
        
        .modal-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
        }
        
        .btn-cancel {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: 12px 24px;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .btn-cancel:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .btn-confirm {
            background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .btn-confirm:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(76, 175, 80, 0.3);
        }
        
        .btn-confirm:disabled {
            background: #666;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    return modal;
};

const executeTrade = async (tradingData, amount) => {
    const confirmButton = document.getElementById('confirmTrade');
    const originalText = confirmButton.innerHTML;
    
    confirmButton.innerHTML = 'Processing...';
    confirmButton.disabled = true;
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const isSuccess = Math.random() > 0.1;
    
    if (isSuccess) {
        const quantity = (amount / tradingData.price).toFixed(4);
        const tradeId = 'HYP' + Date.now().toString().slice(-8);
        
        confirmButton.innerHTML = 'Trade Successful!';
        confirmButton.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
        
        setTimeout(() => {
            const modal = document.getElementById('confirmationModal');
            modal.innerHTML = `
                <div class="modal-overlay">
                    <div class="modal-content">
                        <h3>✅ Trade Executed Successfully!</h3>
                        <div class="trade-details">
                            <div class="trade-row">
                                <span>Trade ID:</span>
                                <span class="highlight">${tradeId}</span>
                            </div>
                            <div class="trade-row">
                                <span>Symbol:</span>
                                <span>${tradingData.symbol}USDT</span>
                            </div>
                            <div class="trade-row">
                                <span>Quantity:</span>
                                <span>${quantity} ${tradingData.symbol}</span>
                            </div>
                            <div class="trade-row">
                                <span>Entry Price:</span>
                                <span>$${tradingData.price}</span>
                            </div>
                            <div class="trade-row">
                                <span>Total Value:</span>
                                <span>$${amount} USDT</span>
                            </div>
                            <div class="trade-row">
                                <span>Status:</span>
                                <span class="highlight">FILLED</span>
                            </div>
                        </div>
                        <div class="modal-buttons">
                            <button id="closeModal" class="btn btn-confirm">Close</button>
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById('closeModal').addEventListener('click', () => {
                document.getElementById('confirmationModal').remove();
            });
        }, 1500);
        
    } else {
        confirmButton.innerHTML = 'Trade Failed';
        confirmButton.style.background = 'linear-gradient(135deg, #f44336 0%, #d32f2f 100%)';
        
        setTimeout(() => {
            const modal = document.getElementById('confirmationModal');
            modal.innerHTML = `
                <div class="modal-overlay">
                    <div class="modal-content">
                        <h3>❌ Trade Failed</h3>
                        <div class="trade-details">
                            <p>Trade execution failed due to:</p>
                            <ul>
                                <li>Insufficient liquidity</li>
                                <li>Price slippage exceeded limits</li>
                                <li>Market conditions changed</li>
                            </ul>
                            <p>Please try again or contact support.</p>
                        </div>
                        <div class="modal-buttons">
                            <button id="closeModal" class="btn btn-confirm">Close</button>
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById('closeModal').addEventListener('click', () => {
                document.getElementById('confirmationModal').remove();
            });
        }, 1500);
    }
};

openPositionButton.addEventListener('click', function() {
    const tradingData = getCurrentTradingData();
    const modal = createConfirmationModal(tradingData);
    
    const amountInput = document.getElementById('tradeAmount');
    const estimatedQtyElement = document.getElementById('estimatedQty');
    
    amountInput.addEventListener('input', function() {
        const amount = parseFloat(this.value) || 0;
        const qty = (amount / tradingData.price).toFixed(4);
        estimatedQtyElement.textContent = `${qty} ${tradingData.symbol}`;
    });
    
    document.getElementById('cancelTrade').addEventListener('click', () => {
        modal.remove();
    });
    
    document.getElementById('confirmTrade').addEventListener('click', () => {
        const amount = parseFloat(document.getElementById('tradeAmount').value);
        if (amount >= 10) {
            executeTrade(tradingData, amount);
        } else {
            alert('Minimum trade amount is $10 USDT');
        }
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            modal.remove();
        }
    });
});

openPositionButton.style.transition = 'all 0.3s ease';