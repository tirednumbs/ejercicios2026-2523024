const Card = ({ titulo, subtitulo, children }) => {
  return (
    <div className="activity-card">
      <h3>{titulo}</h3>
      <p>{subtitulo}</p>
      {children}
    </div>
  );
};

export default Card;