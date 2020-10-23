import React, { useState } from "react";
import classNames from "classnames/bind";
import "./Card.scss";

const Card = (props) => {
  //Хуки
  const [status, setStatus] = useState("isDefault");
  const [hover, setHover] = useState("hoverDefault");

  //Переменные
  const isDisabled = props.disabled;


  let cardClass = [
    {
      card__back_type_disabled: isDisabled,
      card__back_type_active: status === "isActive",
      card__back_hovered_default: hover === "hoverDefault" && !isDisabled,
      card__back_hovered_active: hover === "hoverActive" && !isDisabled,
    },
  ];
  let markClass = [
    {
      card__mark_type_disabled: isDisabled,
      card__mark_type_active: status === "isActive",
      card__mark_hovered_default: hover === "hoverDefault" && !isDisabled,
      card__mark_hovered_active: hover === "hoverActive" && !isDisabled,
    },
  ];
  let linkClass = [
    {
      card__captionLink_hovered_default:
        hover === "hoverDefault" && !isDisabled,
      card__captionLink_hovered_active: hover === "hoverActive" && !isDisabled,
    },
  ];

  let subtitleClass = [
    { card__subtitle_hover: hover === "hoverActive" && !isDisabled },
  ];

  let titleClass = [{card__title_type_disabled: isDisabled}];
  let specClass = [{card__spec_type_disabled: isDisabled}];

  let disableWrap = [{ card__disabled: isDisabled }];

  //Функции
  const handleStatus = () => {
    if (status === "isDefault" && !isDisabled) {
      setStatus("isActive");
    } else if (status === "isActive" && !isDisabled) {
      setStatus("isDefault");
    }
    setHover(false);
  };

  const handleHoverOn = () => {
    if (status === "isDefault" && !isDisabled) {
      setHover("hoverDefault");
    } else if (status === "isActive" && !isDisabled) {
      setHover("hoverActive");
    }
  };

  const handleHoverOff = () => {
    setHover(false);
  };

  return (
    <li className="card">
      <div
        className={classNames("card__back", cardClass)}
        onClick={handleStatus}
        onMouseOver={handleHoverOn}
        onMouseOut={handleHoverOff}
      >
        <div className={classNames(disableWrap)}>
          <div className="card__content">
            <p className={classNames("card__subtitle", subtitleClass)}>
              {hover === "hoverActive"
                ? props.subtitle.active
                : props.subtitle.default}
            </p>
            <h2 className={classNames("card__title", titleClass)}>{props.title}</h2>
            <p className={classNames("card__spec",specClass)}>{props.spec}</p>
            <p className="card__desc">
              <span className="card__desc-accent">{props.descNumber}</span>
              {props.desc}
            </p>
            <p className="card__bonus">
              {props.bonusNumber}
              {props.bonus}
            </p>
            <div className="card__image"> </div>
            <div className={classNames("card__mark", markClass)}>
              <p className="card__weigth">{props.weigth}</p>
              <p className="card__weigth-unit">{props.weigthUnit}</p>
            </div>
          </div>
        </div>
      </div>

      {isDisabled ? (
        <p className="card__caption card__caption_type_disabled">
          {props.caption.disabled.start +
            props.spec +
            props.caption.disabled.end}
        </p>
      ) : status === "isActive" ? (
        <p className="card__caption"> {props.caption.active}</p>
      ) : (
        <p className="card__caption">
          {props.caption.default.p}
          <span className="card__caption-accent">
            <a
              href="#s"
              className={classNames("card__captionLink", linkClass)}
              onClick={handleStatus}
            >
              {props.caption.default.link}
            </a>
            {props.caption.default.span}
          </span>
        </p>
      )}
    </li>
  );
};

export default Card;
