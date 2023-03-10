const shuffle = () => {
  const assets = [
    { image: "/assets/icons8-batman-512.png" },
    { image: "/assets/icons8-baby-yoda-512.png" },
    { image: "/assets/icons8-hulk-512.png" },
    { image: "/assets/icons8-naruto-512.png" },
    { image: "/assets/icons8-iron-man-512.png" },
    { image: "/assets/icons8-ninja-turtle-512.png" },
    { image: "/assets/icons8-pennywise-512.png" },
    { image: "/assets/icons8-super-mario-512.png" },
  ];
  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;
