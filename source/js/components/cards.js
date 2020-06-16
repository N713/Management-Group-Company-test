`use strict`;

import {utils} from "./utils";
import {getCardTemplate} from "./card";
import {setElementHandlers} from "./handlers";

const cardsContainer = document.body.querySelector(`.product__area`);

const renderCards = (data) => {
  const cards = Array.from(data);

  cards.map((card) => {
    const element = utils.makeElement(getCardTemplate(card));
    const ratio = card.unitRatioAlt;

    setElementHandlers(element, ratio);
    utils.render(cardsContainer, element, utils.Position.AFTERBEGIN);
  });
}

export {renderCards}
