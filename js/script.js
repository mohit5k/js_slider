"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  let slider_items = document.querySelectorAll(".slider .item");
  let item_index = 0;

  slider_items.forEach(function (item) {
    item.setAttribute("item-index", item_index);
    item_index += 1;
  });

  // Next Slide
  document.querySelector(".next").addEventListener("click", function () {
    let slider_items_length = slider_items.length;
    console.log('slider_items_length '+slider_items_length);
    let item_current_index = Number(
      document.querySelector(".active").getAttribute("item-index")
    );
    console.log('item_current_index '+item_current_index);

    if (item_current_index < slider_items_length - 1) {
      document
        .querySelector(`[item-index="${item_current_index + 1}"]`)
        .classList.add("active");
      document
        .querySelector(`[item-index="${item_current_index}"]`)
        .classList.remove("active");
    } else {
      console.log("Last Element");
    }
  });

  // Previous Slide
  document.querySelector(".prev").addEventListener("click", function () {
    let item_current_index = Number(
      document.querySelector(".active").getAttribute("item-index")
    );

    if (item_current_index != 0) {
      document
        .querySelector(`[item-index="${item_current_index - 1}"]`)
        .classList.add("active");
      document
        .querySelector(`[item-index="${item_current_index}"]`)
        .classList.remove("active");
    } else {
      console.log("First lement");
    }
  });


  document.querySelector('.slider').addEventListener("wheel", function(e){
    if(e.deltaY == 100){
        let slider_items_length = slider_items.length;
        let item_current_index = Number(
          document.querySelector(".active").getAttribute("item-index")
        );
            console.log(item_current_index)
            if(item_current_index >= 0 && item_current_index < slider_items_length - 1){
                document.querySelector('.js-slider').style.position = 'fixed';
                console.log('test')
            }else{
                document.querySelector('.js-slider').style.position = 'relative';
            }

        if (item_current_index < slider_items_length - 1) {
          document
            .querySelector(`[item-index="${item_current_index + 1}"]`)
            .classList.add("active");
          document
            .querySelector(`[item-index="${item_current_index}"]`)
            .classList.remove("active");
        } else {
          console.log("Last Element");
        }
    }else if(e.deltaY == -100){
        let item_current_index = Number(
            document.querySelector(".active").getAttribute("item-index")
          );
          let slider_items_length = slider_items.length;
          if(item_current_index < slider_items_length - 1 ){
            document.querySelector('.js-slider').style.position = 'fixed';
        }else{
            document.querySelector('.js-slider').style.position = 'relative';
        }
      
          if (item_current_index != 0) {
            document
              .querySelector(`[item-index="${item_current_index - 1}"]`)
              .classList.add("active");
            document
              .querySelector(`[item-index="${item_current_index}"]`)
              .classList.remove("active");
          } else {
            console.log("First lement");
          }
    }
  });




});
