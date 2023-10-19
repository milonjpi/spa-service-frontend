const HeroSection = () => {
  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: 'url(/hero.jpg)',
        minHeight: 500,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        margin: '0 -24px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 600,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div>
            <p
              style={{
                fontSize: '20px',
                display: 'inline-block',
                letterSpacing: '2px',
                color: '#fff',
                padding: '5px 10px',
                textAlign: 'center',
                background: '#2f2f2f',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              {'24/7 SPA SERVICE'}
            </p>
          </div>
          <div>
            <h2
              style={{
                fontSize: 55,
                display: 'inline-block',
                fontWeight: 700,
                margin: 0,
                lineHeight: 1.4,
                background: '#937c6f',
                padding: '10px 20px',
                fontFamily: 'Open Sans',
              }}
            >
              Relax Your Mind Here
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
