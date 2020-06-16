`use strict`;

const IMG_MOD = `_220x220_1`;
const RANDOM_MULTIPLIER = 200;
const RANDOM_DIVIDER = 10;

const utils = {
  Position: {
    AFTERBEGIN: `afterbegin`,
    BEFOREEND: `beforeend`,
  },

  makeElement: (template) => {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;
    return newElement.firstElementChild;
  },

  render: (container, element, place) => {
    switch (place) {
      case utils.Position.AFTERBEGIN:
        container.prepend(element);
        break;
      case utils.Position.BEFOREEND:
        container.append(element);
        break;
    }
  },

  getImgUrl: (url) => {
    const splittedUrl = url.split(`.`);
    splittedUrl[1] = splittedUrl[1] + IMG_MOD;

    return splittedUrl.join(`.`);
  },

  getRandom: (digits = 2) => {
    let random = Math.random() * (RANDOM_MULTIPLIER / RANDOM_DIVIDER);

    if (random === 0) {
      random = Math.random() * (RANDOM_MULTIPLIER / RANDOM_DIVIDER);
    }

    return Number(random.toFixed(digits));
  },

  makeRandomScore: () => {
    return Number(Math.random() * RANDOM_MULTIPLIER)
      .toFixed(2)
      .split(`.`)
      .join(`,`);
  },

  makeRightWord: (word) => {
    let wordNew = ``;

    if (word === `штука`) {
      wordNew = `штуку`;
    }

    if (word === `упаковка`) {
      wordNew = `упаковку` ;
    }

    if (word !== `штука` && word !== `упаковка`) {
      wordNew = word;
    }

    return wordNew;
  },

  makeRightPack: (word) => {
    let pack = ``;

    switch (word) {
      case `штука`:
        pack = `поштучно`;
        break;
      case `упаковка`:
        pack = `упаковками`;
        break;
      case `метр погонный`:
        pack = `пог. метром`;
        break;
    }

    return pack;
  },

  makeRightCount: (word) => {
    let count = ``;

    switch (word) {
      case `штука`:
        count = `1 кв.м = ${utils.getRandom(0)} шт`;
        break;
      case `упаковка`:
        count = `1 упак. = ${utils.getRandom()} м. кв.`;
        break;
      case `метр погонный`:
        count = `1 пог. м = ${utils.getRandom()} м. кв.`;
        break;
    }

    return count;
  },
};

export {utils}
