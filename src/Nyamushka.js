import React from "react";
import Card from "./components/Card/Card";

import "./Nyamushka.scss";

function Nyamushka(props) {
  let cardElement = props.state.cardProps.map((card, index) => {
    return (
      <Card
        key={index}
        title={card.title}
        subtitle={card.subtitle}
        spec={card.spec}
        descNumber={card.descNumber}
        desc={card.desc}
        bonusNumber={card.bonusNumber}
        bonus={card.bonus}
        weigth={card.weigth}
        weigthUnit={card.weigthUnit}
        caption={card.caption}
        disabled={card.disabled}
       
      />
    );
  });

  return (
    <section className="nyamushka">
      <div className="nyamushka__content">
        <h1 className="nyamushka__title">{props.state.nyamProps.title}</h1>
        <ul className="nyamushka__cards">{cardElement}</ul>
      </div>
    </section>
  );
}

export default Nyamushka;
