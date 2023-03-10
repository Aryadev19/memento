const Card = ({ image, selected, onClick }) => {
  return (
    <div className="card">
      <div className={selected && "selected"}>
        <img src={image} alt="" className="card-face" />
        <img
          src={"/assets/icons8-idea-512.png"}
          alt=""
          className="card-back"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Card;
