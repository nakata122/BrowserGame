let c, ctx, time = 0;
const particleCount = 100;
const particles = [], pnoise = [];
let background, transistion = 0, claws, intervalId = 0;

export default class SplashScreen {
    init(canvas) {
        c = canvas;
        ctx = c.getContext('2d');

        // Make it visually fill the positioned parent
        canvas.style.width = '100%';
        canvas.style.height = '600px';
        // ...then set the internal size to match
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        // c.setAttribute('height', c.width);
        // c.setAttribute('width', c.height);

        claws = new Image();
        claws.src = '../../../assets/marks.png';
        claws.onload = () => {
            intervalId = setInterval(this.gameLoop.bind(this), 100 / 3);
        };

        background = ctx.createRadialGradient(c.width / 2, c.height / 2, 10, c.width / 2, c.height / 2, c.width / 2);
        background.addColorStop(0, '#2A2A2A');
        background.addColorStop(1, 'black');
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, c.width, c.height);

        for (let i = 0; i < particleCount; i++) {
           this.recycleParticle(i);
           pnoise[i] = Math.random();
        }
    }
    noise(t) {
        t = t % 100;
        return this.lerp(pnoise[Math.floor(t)], pnoise[Math.ceil(t)], t - Math.floor(t));
    }
    lerp(a, b, t ) {
        return a * ( 1 - t ) + b * t;
    }
    recycleParticle(i) {
        particles[i] = {
            x: c.width / 2 + Math.random() * 220 - 120,
            y: c.height / 2 + Math.random() * 220 - 120,
            nx: (Math.random() * 2 - 1) * 2,
            ny: (Math.random() * 2 - 1) * 2,
            size: 6,
            color: Math.random() * 255,
            life: Math.random()
        };
    }
    gameLoop() {
        ctx.fillStyle = background;
        ctx.globalAlpha = 0.5;
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.globalAlpha = transistion;

        ctx.shadowColor = '#fff993';
        ctx.drawImage(claws, c.width / 2 - 200, c.height / 2 - 200, 400, 400);
        ctx.globalAlpha = 1;

        const imageData = ctx.getImageData(c.width / 2 - 200, c.height / 2 - 200, 400, 400);
        const data = imageData.data;
        const displacement = 4 * 2;
        for (let i = 0; i < data.length; i += 4) {
            const x = (i / 4) % 400 + time;
            const y = Math.floor((i / 4) / 400) + time;
            const rand = Math.round(this.noise(x * y) * 2);
            data[i] = data[i + rand * displacement];
            data[i + 1] = data[i + 1 + rand * displacement];
            data[i + 2] = data[i + 2 + rand * displacement];
        }
        ctx.putImageData(imageData, c.width / 2 - 200, c.height / 2 - 200);



        for (let i = 0; i < Math.floor(particleCount * transistion); i++) {
            particles[i].x += particles[i].nx;
            particles[i].y -= particles[i].ny;

            ctx.beginPath();
            ctx.arc(particles[i].x, particles[i].y, particles[i].size * particles[i].life, 0, 2 * Math.PI);

            const spark = ctx.createRadialGradient(
                particles[i].x,
                particles[i].y,
                1.5 * particles[i].life,
                particles[i].x,
                particles[i].y,
                3 * particles[i].life);
            spark.addColorStop(0, '#fff');
            spark.addColorStop(1, 'rgba(255,255,0, 0.1)');
            ctx.fillStyle = spark;
            ctx.fill();

            // ctx.globalAlpha = particles[i].life;
            particles[i].life -= 0.01;
            if (particles[i].life <= 0) {
                this.recycleParticle(i);
            }
        }


        ctx.shadowBlur = transistion * 40;
        ctx.drawImage(claws, c.width / 2 - 200, c.height / 2 - 200, 400, 400);
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;

        // ctx.globalCompositeOperation = 'destination-out';


        // ctx.globalCompositeOperation = 'source-over';


        if (transistion < 1) {
            transistion += 0.01;
        } else {
            transistion = 1;
        }
        time += 1;
    }
    unmount() {
        clearInterval(intervalId);
    }
}
