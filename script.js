// const chartData = [
//             17.2, 17.1, 17.3, 17.5, 17.4, 17.6, 17.8, 17.7, 17.9, 18.1, 
//             18.0, 18.2, 18.4, 18.3, 18.5, 18.7, 18.6, 18.8, 19.0, 18.9,
//             19.1, 19.3, 19.2, 19.4, 19.6, 19.5, 19.7, 19.9, 19.8, 20.0,
//             20.2, 20.1, 20.3, 20.5, 20.4, 20.6, 20.8, 20.7, 20.9, 21.1,
//             21.0, 21.2, 21.4, 21.3, 21.5, 21.7, 21.6, 21.8, 22.0, 21.9,
//             22.1, 22.3, 22.2, 22.4, 22.6, 22.5, 22.7, 22.9, 22.8, 23.0,
//             23.2, 23.1, 23.3, 23.5, 23.4, 23.6, 23.8, 23.7, 23.9, 24.1,
//             24.0, 24.2, 24.4, 24.3, 24.5, 24.7, 24.6, 24.8, 25.0, 24.9,
//             25.1, 25.3, 25.2, 25.4, 25.6, 25.5, 25.7, 25.9, 25.8, 26.0
//         ];

//         function drawChart() {
//             const canvas = document.getElementById('price-chart');
//             if (!canvas) return;
            
//             const ctx = canvas.getContext('2d');
            
//             // Set canvas size for high DPI displays
//             const rect = canvas.getBoundingClientRect();
//             canvas.width = rect.width * window.devicePixelRatio;
//             canvas.height = rect.height * window.devicePixelRatio;
//             ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            
//             const width = rect.width;
//             const height = rect.height;
            
//             // Clear canvas
//             ctx.clearRect(0, 0, width, height);
            
//             // Chart settings
//             const padding = 20;
//             const chartWidth = width - padding * 2;
//             const chartHeight = height - padding * 2;
            
//             // Find min and max values for scaling
//             const minValue = Math.min(...chartData);
//             const maxValue = Math.max(...chartData);
//             const valueRange = maxValue - minValue;
            
//             // Create points for the line
//             const points = chartData.map((value, index) => ({
//                 x: padding + (index / (chartData.length - 1)) * chartWidth,
//                 y: padding + chartHeight - ((value - minValue) / valueRange) * chartHeight
//             }));
            
//             // Create gradient for the line
//             const gradient = ctx.createLinearGradient(0, 0, width, 0);
//             gradient.addColorStop(0, '#4CAF50');
//             gradient.addColorStop(0.5, '#66BB6A');
//             gradient.addColorStop(1, '#81C784');
            
//             // Draw the smooth line
//             ctx.beginPath();
//             ctx.moveTo(points[0].x, points[0].y);
            
//             // Create smooth curves using bezier curves
//             for (let i = 1; i < points.length; i++) {
//                 const prevPoint = points[i - 1];
//                 const currentPoint = points[i];
//                 const nextPoint = points[i + 1];
                
//                 if (i === 1) {
//                     // First curve
//                     const cp1x = prevPoint.x + (currentPoint.x - prevPoint.x) / 3;
//                     const cp1y = prevPoint.y;
//                     const cp2x = currentPoint.x - (currentPoint.x - prevPoint.x) / 3;
//                     const cp2y = currentPoint.y;
//                     ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, currentPoint.x, currentPoint.y);
//                 } else if (i === points.length - 1) {
//                     // Last curve
//                     const cp1x = prevPoint.x + (currentPoint.x - prevPoint.x) / 3;
//                     const cp1y = prevPoint.y;
//                     const cp2x = currentPoint.x - (currentPoint.x - prevPoint.x) / 3;
//                     const cp2y = currentPoint.y;
//                     ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, currentPoint.x, currentPoint.y);
//                 } else {
//                     // Middle curves
//                     const cp1x = prevPoint.x + (currentPoint.x - prevPoint.x) / 3;
//                     const cp1y = prevPoint.y + (currentPoint.y - prevPoint.y) / 3;
//                     const cp2x = currentPoint.x - (nextPoint.x - currentPoint.x) / 3;
//                     const cp2y = currentPoint.y - (nextPoint.y - currentPoint.y) / 3;
//                     ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, currentPoint.x, currentPoint.y);
//                 }
//             }
            
//             ctx.strokeStyle = gradient;
//             ctx.lineWidth = 2;
//             ctx.lineCap = 'round';
//             ctx.lineJoin = 'round';
//             ctx.stroke();
            
//             // Add glow effect
//             ctx.shadowColor = '#4CAF50';
//             ctx.shadowBlur = 8;
//             ctx.stroke();
            
//             // Reset shadow
//             ctx.shadowColor = 'transparent';
//             ctx.shadowBlur = 0;
//         }

//         // Initialize chart when page loads
//         window.addEventListener('load', drawChart);
//         window.addEventListener('resize', drawChart);

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