`use strict`;

import {utils} from "./utils";

const getCardTemplate = (data) => {

  return `<div id="products_section">
            <div class="products_page pg_0">
                <div class="product product_horizontal">
                    <span class="product_code">Код: ${data.code}</span>
                    <div class="product_status_tooltip_container">
                        <span class="product_status">Наличие</span>
                    </div>
                    <div class="product_photo">
                        <a href="#" class="url--link product__link">
                            <img src="${utils.getImgUrl(data.primaryImageUrl)}">
                        </a>
                    </div>
                    <div class="product_description">
                        <a href="#" class="product__link">${data.title}</a>
                    </div>
                    <div class="product_tags hidden-sm">
                        <p>Могут понадобиться:</p>
                        ${data.assocProducts.split(`;`).map((current) => {
                          return `<a href="#" class="url--link">${current}</a>`})}
                    </div>
                    <div class="product_units">
                        <div class="unit--wrapper">
                            <div class="unit--select unit--active">
                                <p class="ng-binding">За ${data.unitAlt}</p>
                            </div>
                            <div class="unit--select">
                                <p class="ng-binding">За ${utils.makeRightWord(data.unitFull)}</p>
                            </div>
                        </div>
                    </div>
                    <p class="product_price_club_card">
                        <span class="product_price_club_card_text">По карте<br>клуба</span>
                        <span class="goldPrice">${Math.ceil(Number(data.priceGoldAlt) * 100) / 100}</span>
                        <span class="rouble__i black__i">
                            <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                               <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>
                            </svg>
                         </span>
                    </p>
                    <p class="product_price_default">
                        <span class="retailPrice">${Math.ceil(Number(data.priceRetailAlt) * 100) / 100}</span>
                        <span class="rouble__i black__i">
                            <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                               <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>
                            </svg>
                         </span>
                    </p>
                    <div class="product_price_points">
                        <p class="ng-binding">Можно купить за ${utils.makeRandomScore()} балла</p>
                    </div>
                    <div class="list--unit-padd"></div>
                    <div class="list--unit-desc">
                        <div class="unit--info">
                            <div class="unit--desc-i">
                              <img src="img/unit--i.png" width="15" height="15" alt="Внимание">
                            </div>
                            <div class="unit--desc-t">
                                <p>
                                    <span class="ng-binding">Продается ${utils.makeRightPack(data.unitFull)}:</span>
                                    <span class="unit--infoInn">${utils.makeRightCount(data.unitFull)}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="product__wrapper">
                        <div class="product_count_wrapper">
                            <div class="stepper">
                                <input class="product__count stepper-input" type="number" value="1">
                                <span class="stepper-arrow up"></span>
                                <span class="stepper-arrow down"></span>
                                <img src="img/jquery.fs.stepper-arrows.png" width="54" height="41" alt="Стрелки управления">
                            </div>
                        </div>
                        <span class="btn btn_cart" data-url="/cart/" data-product-id="${data.productId}">
                            <svg class="ic ic_cart">
                               <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>
                            </svg>
                            <span class="ng-binding">В корзину</span>
                        </span>
                    </div>
                </div>
            </div>
          </div>`
}

export {getCardTemplate}
