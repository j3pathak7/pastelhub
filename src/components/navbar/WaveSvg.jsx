const WaveSvg = () => {
  const wavePath = `M0,100 C150,200 350,50 500,100 L500,0 L0,0 Z`; // Example wave path

  return (
    <svg viewBox="0 0 500 100" preserveAspectRatio="none">
      <path d={wavePath} fill="#fff" /> {/* Adjust fill color as needed */}
    </svg>
  );
};

export default WaveSvg;
