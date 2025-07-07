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

copyButton.addEventListener('click', async function() {
    try {
        await navigator.clipboard.writeText(window.location.href);
        
        const originalText = copyButton.innerHTML;
        
        copyButton.innerHTML = `
            Copied
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
            </svg>
        `;
        
        copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
        copyButton.style.color = '#ffffff';
        copyButton.style.borderColor = '1px solid rgba(255, 255, 255, 0.2)';
        
        setTimeout(() => {
            copyButton.innerHTML = originalText;
            copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
            copyButton.style.color = '#ffffff';
            copyButton.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }, 2000);
        
    } catch (err) {
        console.error('Failed to copy: ', err);
        
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            const originalText = copyButton.innerHTML;
            copyButton.innerHTML = `
                Copied
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
                </svg>
            `;
            
            copyButton.style.background = 'rgba(76, 175, 80, 0.2)';
            copyButton.style.color = '#4CAF50';
            copyButton.style.borderColor = '#4CAF50';
            
            setTimeout(() => {
                copyButton.innerHTML = originalText;
                copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
                copyButton.style.color = '#ffffff';
                copyButton.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }, 2000);
            
        } catch (fallbackErr) {
            console.error('Fallback copy failed: ', fallbackErr);
            alert('Copy failed. Please copy the URL manually.');
        }
    }
});

copyButton.style.transition = 'all 0.3s ease';