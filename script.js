document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('animationCanvas');
    const ctx = canvas.getContext('2d');

    function drawCircle(x, y, radius, color) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }

    function animateCircle() {
        let x = 50;
        let y = 50;
        let radius = 20;
        let color = '#007bff';

        function update() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            drawCircle(x, y, radius, color);

            x += 2;
            y += 1;
            radius += 0.5;

            requestAnimationFrame(update);
        }

        update();
    }

    function drawSpiral() {
        let angle = 0;

        function update() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const x = canvas.width / 2 + Math.cos(angle) * angle * 5;
            const y = canvas.height / 2 + Math.sin(angle) * angle * 5;

            drawCircle(x, y, 5, '#28a745');

            angle += 0.1;

            requestAnimationFrame(update);
        }

        update();
    }

    animateCircle();
    // drawSpiral();
});

