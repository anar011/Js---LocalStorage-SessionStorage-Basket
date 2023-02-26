"use strict"



let tableBody = document.querySelector("tbody")

let products = JSON.parse(localStorage.getItem("basket"));

if (products != null) {
    for (const product of products) {
        tableBody.innerHTML += `<tr>
        <td>
        <img src="${product.img}" alt="">
        </td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>$${product.price}</td>
        <td>${product.count}</td>
        <td class="d-none">${product.id}</td>

        <td>  <i class="fa-solid fa-trash-can icons"></i></td>
        
        </tr>`

    }

    let deleteIcons = document.querySelector(".icons");

    // let idNumber = Number(this.parentNode.previousElementSibling.innerText);



    for (const item of deleteIcons) {
        item.addEventListener("click",function(){

            let products = JSON.parse(localStorage.getItem("basket"));

            let arr = localItem.filter(m=>m.id!= Number(this.parentNode.previousElementSibling.innerText));



        })
        
    }


  





    getBasketCount(products);

} else {
    document.querySelector("table").classList.add("d-none")
    document.querySelector(".alert-warning").classList.remove("d-none");
}


function getBasketCount(arr) {
    let sum = 0;

    for (const item of arr) {
        sum += item.count;
    }
    document.querySelector("sup").innerText = sum;

}


