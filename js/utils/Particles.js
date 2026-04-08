export function initParticlesCanvas() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    const maxParticles = 50;

    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor(x, y) {
            this.x = x || Math.random() * canvas.width;
            this.y = y || Math.random() * canvas.height;
            this.radius = Math.random() * 1.5 + 0.5;
            this.color = `rgba(96, 165, 250, ${Math.random() * 0.5 + 0.2})`;
            
            this.velocity = {
                x: (Math.random() - 0.5) * 0.2,
                y: (Math.random() - 0.5) * 0.2
            };
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            this.x += this.velocity.x;
            this.y += this.velocity.y;

            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
            
            this.draw();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < maxParticles; i++) {
            particles.push(new Particle());
        }
    }

    function connectParticles() {
        let opacityValue = 1;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i; j < particles.length; j++) {
                const distance = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);

                if (distance < 100) {
                    opacityValue = 1 - (distance / 100);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${opacityValue})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        requestAnimationFrame(animateParticles);

        ctx.fillStyle = 'rgba(15, 23, 42, 0.2)'; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        connectParticles();

        particles.forEach(particle => {
            particle.update();
        });
    }

    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();
    initParticles();
    animateParticles();
}
