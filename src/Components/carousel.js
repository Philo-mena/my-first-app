import React from "react";

export default function carousel() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div
          id="carousel-example-generic"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carousel-example-generic"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>

          <div class="carousel-inner carousel-image" role="listbox">
            <div class="item active">
              <img src="piza images/piza1.jpg" alt="pizza" />
              <div class="carousel-caption">It's the pizza you want!</div>
            </div>
            <div class="item">
              <img src="piza images/piza10.jpg" alt="pizza" />
              <div class="carousel-caption">It's the pizza you want!</div>
            </div>
            <div class="item">
              <img src="piza images/piza14.jpg" alt="pizza" />
              <div class="carousel-caption">It's the pizza you want!</div>
            </div>
            <div class="item">
              <img src="piza images/piza15.jpg" alt="pizza" />
              <div class="carousel-caption">It's the pizza you want!</div>
            </div>
            <div class="item">
              <img src="piza images/piza7.jpg" alt="pizza" />
              <div class="carousel-caption">It's the pizza you want!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
