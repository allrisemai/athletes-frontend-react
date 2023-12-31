import "../styles/Item.scss";

function PlayerItem({
  title,
  description,
  backgroundColor,
  titleTextColor,
  textColor,
  id,
}) {
  return (
    <div
      className="item"
      style={{
        backgroundColor: backgroundColor ?? "white",
        color: textColor,
      }}
    >
      <div className="item__text item__text--left">
        <div className={`item__title`}>
          <span
            className={`player-${id}`}
            style={{ color: titleTextColor ?? textColor }}
          >
            {"0" + id}
          </span>
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
      </div>
      <div className="space" />
    </div>
  );
}

export default PlayerItem;
