useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const context = canvas.getContext("2d");
  if (!context) return;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resize();
  window.addEventListener("resize", resize);

  const particles = Array.from({ length: 70 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.2,
    vy: (Math.random() - 0.5) * 0.2,
    size: Math.random() * 1.2 + 0.5,
    alpha: Math.random() * 0.5 + 0.2
  }));

  function animate() {
    if (!context) return;   // 🔥 important safety line

    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      context.beginPath();
      context.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      context.fillStyle = `rgba(255,255,255,${p.alpha})`;
      context.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();

  return () => window.removeEventListener("resize", resize);
}, []);