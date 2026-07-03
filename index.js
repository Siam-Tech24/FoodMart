const all_items = {
    burger: [
        {
            name: "Beef Burger",
            price: 120,
            id: 1,
        },
        {
            name: "Chicken Burger",
            price: 180,
            id: 2,
        },
        {
            name: "Double Cheese chicken Burger",
            price: 230,
            id: 3,
        },
        {
            name: "Cheese Burger",
            price: 90,
            id: 4,
        },
    ],
    pizza: [
        {
            name: "Cheese Pizza",
            price: 560,
            id: 5,
        },
        {
            name: "Sausage Pizza",
            price: 480,
            id: 6,
        },
        {
            name: "Veg Pizza",
            price: 390,
            id: 7,
        },
        {
            name: "BBQ Chicken Cheese Pizza",
            price: 420,
            id: 8,
        },
    ],
    hot_dog: [
        {
            name: "Cheese Hotdog",
            price: 80,
            id: 9,
        },
        {
            name: "Veg Hotdog",
            price: 160,
            id: 10,
        },
        {
            name: "Extra Crispy Hotdog",
            price: 240,
            id: 11,
        },
        {
            name: "Regular Hotdog",
            price: 60,
            id: 12,
        },
    ],
    fries: [
        {
            name: "Crispy Fries",
            price: 80,
            id: 13,
        },
        {
            name: "Extra Crispy Fries",
            price: 90,
            id: 14,
        },
        {
            name: "Fries With Mayonnaise",
            price: 130,
            id: 15,
        },
        {
            name: "Regular Fries",
            price: 40,
            id: 16,
        },
    ],
    drink: [
        {
            name: "Cold Cola",
            price: 45,
            id: 17,
        },
        {
            name: "Fanta, Coke & Sprite Combo",
            price: 160,
            id: 18,
        },
    ],
    sweet: [
        {
            name: "Chocklate Donut-12pc",
            price: 340,
            id: 19,
        },
        {
            name: "Mix Donut Combo",
            price: 640,
            id: 20,
        },
        {
            name: "Regular Donut-12pc",
            price: 210,
            id: 21,
        },
        {
            name: "Cup Ice Cream",
            price: 60,
            id: 22,
        },
        {
            name: "Chocklate Cup Icecream",
            price: 60,
            id: 23,
        },
        {
            name: "Ice Cream Cone",
            price: 60,
            id: 24,
        },
    ],
};



const allvar = document.querySelectorAll(".food_var");
const container = document.getElementById('scrollContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const item_container = document.getElementById("item_container");
const carousel_wrapper = document.querySelector(".carousel-wrapper");
let isactive = false;
let activeButton = null;

allvar.forEach((item) => {
    item.addEventListener("click", () => {
        if (activeButton === item) return;

        if (activeButton) {
            activeButton.classList.remove("active");
        }
        item.classList.add("active");

        activeButton = item;

        const renderItems = () => {
            item_container.innerHTML = ``;
            const items = all_items[item.id];
            if (!items) return;

            items.forEach((food) => {
                const card = document.createElement("article");
                card.innerHTML = `
                    <img src="food_items/${food.id}.jpg" alt="${food.name}">
                    <div class="card-content">
                        <h2 class="card-title">${food.name}</h2>
                        <p class="card-price">৳${food.price}</p>
                    </div>
                `;
                card.classList.add("card");
                card.id = food.id;
                item_container.appendChild(card);
            });
        };

        if (isactive === false) {
            carousel_wrapper.style.display = "block";
            carousel_wrapper.style.animation = "fade_in 0.3s ease-out forwards";
            renderItems();
            isactive = true;
        } else {
            carousel_wrapper.style.animation = "fade_out 0.3s ease-out forwards";

            setTimeout(() => {
                renderItems();
                carousel_wrapper.style.animation = "fade_in 0.5s ease-out forwards";
            }, 300);
        }
    });
});

const buy = document.getElementById("buy");
buy.addEventListener("click", () => {
    alert("Come on bruh, its a fake website for pertfolio. You can't order anything");
})

carousel_wrapper.addEventListener("click", (event) => {
    const card = event.target.closest(".card");
    if (card) {
        const display_container = document.querySelector(".product_display_container");
        const display = document.querySelector(".product_display");
        display.querySelector(".display_name").innerText = card.querySelector(".card-title").innerText;
        display.querySelector("img").src = "food_items/" + card.id + ".jpg";
        display.querySelector(".price").innerText = card.querySelector(".card-price").innerText;
        display_container.style.display = "flex";

        const close = document.querySelector(".close");
        close.addEventListener("click", () => {
            display_container.style.animation = "dis_fade_out 0.5s ease-out forwards";
            setTimeout(() => {
                display_container.style.display = "none";
                display_container.style.animation = "dis_fade_in 0.5s ease-out forwards";
            }, 500);
        })
    }
})


const scrollAmount = 425;

nextBtn.addEventListener('click', () => {
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});
