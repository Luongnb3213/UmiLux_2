"use strict";

const navbar = document.querySelector(".navbar_item_list");
const navbar_mobile = document.querySelector(".navbar_mobile");
const layer = document.querySelector(".layer");
const close = document.querySelector(".close");
const footer_icon = document.querySelectorAll(".footer_icon");
const header_mid = document.querySelector(".header_mid");
const header_mid_before = window.getComputedStyle(header_mid, "::before");
const mobile_footer = document.querySelector(".mobile-footer");
const menu = document.querySelector("#menu");
const category = document.querySelector("#category");
const menu_mobile = document.querySelector(".menu-mobile");
const category_mobile = document.querySelector(".category-mobile");
const main = document.querySelector("main");
var body = document.querySelector("body");
const header = document.querySelector("header");
const layer_item = document.querySelector(".layer_item");
const header_bot_left = document.querySelector(".header_bot_left");

/* ======================================== 
    NAVBARS BUTTONS
   ====================================== */

if (navbar_mobile) {
  navbar_mobile.onclick = function () {
    if (navbar.classList.contains("slideout")) {
      navbar.classList.remove("slideout");
    }
    mobile_footer.classList.add("d-none");
    navbar.classList.add("slidein");
    header_mid.classList.add("layer_in");

    document.body.style.overflow = "hidden";
    // mobile
    item_slidein();
    // mobile
  };
}

if (close) {
  close.onclick = function () {
    navbar.classList.remove("slidein");
    navbar.classList.add("slideout");
    header_mid.classList.remove("layer_in");
    mobile_footer.classList.remove("d-none");
    document.body.style.overflow = "";
    let navbar_item_mobile_link_list = document.querySelectorAll(
      ".navbar_item_mobile_link"
    );
    navbar_item_mobile_link_list.forEach((navbar_item) => {
      navbar_item.classList.remove("active");
    });
  };
}

const mobile_item = {
  Home: [
    "Main Demo",
    "Elegant Couture",
    "Simple Modern",
    "Clothing Store",
    "Unique Fashion",
    "Minimal Clothings",
    "Trendy Style",
    "Men's Luxury",
    "Categories Men's",
    "Skincar",
    "Unique Watches",
  ],
  Shop: ["Shop Pages", "Shop Sidebar", "Features", "Hover Style"],
  Product: [
    "Product Layout",
    "Thumbnail Position",
    "Product Detail",
    "Product Type",
    "Product Features",
  ],
  Blog: ["Post List", "Grid 3 Columns", "Grid 4 Columns", "Grid With Sidebar"],
  Page: [
    "My Account",
    "About Us",
    "Find a Store",
    "FAQs",
    "Contact Us",
    "404 Page",
  ],
  Digital_01: ["Digital 1", "Digital 2"],
  Usd: ["EUR", "JPY", "NZD"],
  Computer: ["Laptop & Computers", "Home Audio", "Cameras", "Smart Phone"],
  Tablet: ["Cameras", "Home Audio", "Smart Phone", "Laptop & Computers"],
  Printer: [
    "Carrier Phones",
    "Unlocked Phones",
    "Phone & CellPhone",
    "CellPhone Charges",
    "Your Video Library",
    "Watch Anywhere",
  ],
  Smart: [
    "Wireless Audio",
    "Premium Audio",
    "Stereo systems components",
    "Headphones",
    "Speakers",
    "Projectors and Screens",
    "Turntables",
  ],
};

menu.onclick = function () {
  if (!menu.classList.contains("active")) {
    category.classList.remove("active");
    menu.classList.add("active");
    menu_mobile.classList.toggle("mobile-item-close");
    menu_mobile.style.display = "block";
    category_mobile.classList.toggle("mobile-item-close");
  }
};

category.onclick = function () {
  if (!category.classList.contains("active")) {
    menu.classList.remove("active");
    category.classList.add("active");
    menu_mobile.style.display = "none";
    category_mobile.classList.toggle("mobile-item-close");
  }
};

function item_slidein() {
  var item_list = document.querySelectorAll(
    ".navbar_item_list .navbar_item_list_mobile .navbar_item_mobile_link[id]"
  );
  Array.from(item_list).forEach((item) => {
    item.onclick = function () {
      let navbar_item_mobile_link_list = document.querySelectorAll(
        ".navbar_item_mobile_link"
      );
      navbar_item_mobile_link_list.forEach((navbar_item) => {
        navbar_item.classList.remove("active");
      });

      this.classList.add("active");

      let header_mid = document.querySelector(".header_mid");
      let item_mobile_list = document.createElement("div");

      // child element 1
      let navbar_item_list_head = document.createElement("div"); // father element
      navbar_item_list_head.classList.add(
        "navbar_item_list_head",
        "d-flex",
        "align-items-center",
        "justify-content-start"
      );
      let close_item = document.createElement("span");
      close_item.innerHTML = ` <i class="icon-arrow-left"></i>`;
      close_item.classList.add("close_item");
      var title = document.createElement("a");

      title.innerHTML = this.id;

      navbar_item_list_head.appendChild(close_item);
      navbar_item_list_head.appendChild(title);
      item_mobile_list.appendChild(navbar_item_list_head);
      // child element 1

      //   child element 2
      let navbar_item_list_mobile = document.createElement("ul");
      navbar_item_list_mobile.classList.add(
        "navbar_item_list_mobile",
        "list-unstyled"
      );
      mobile_item[this.id].forEach((i) => {
        let navbar_item_mobile = document.createElement("li");
        navbar_item_mobile.classList.add("navbar_item_mobile");
        let navbar_item_mobile_link = document.createElement("a");
        navbar_item_mobile_link.classList.add("navbar_item_mobile_link");
        navbar_item_mobile_link.href = "#";
        navbar_item_mobile_link.innerHTML = i;
        navbar_item_mobile.appendChild(navbar_item_mobile_link);
        navbar_item_list_mobile.appendChild(navbar_item_mobile);
      });
      item_mobile_list.appendChild(navbar_item_list_mobile);
      item_mobile_list.classList.add("item_mobile_list", "slidein");
      //   child element 2
      header_mid.appendChild(item_mobile_list);

      close_item.onclick = function () {
        let item_mobile_list = document.querySelector(".item_mobile_list");
        item_mobile_list.classList.remove("slidein");
        item_mobile_list.classList.add("slideout");

        setTimeout(() => {
          item_mobile_list.remove();
        }, 300);
      };
    };
  });
}

var check1 = true;
header_bot_left.onclick = function (e) {
  let dp_item_list = document.querySelector(".dp_item_list");
  let computedStyle = window.getComputedStyle(dp_item_list);
  console.log(e.target)
  if(e.target.closest(".header_bot_left_item")){
    dp_item_list.style.maxHeight =
    computedStyle.maxHeight === "0px" ? dp_item_list.scrollHeight + "px" : "0";
  if (check1) {
    dp_item_list.addEventListener(
      "transitionend",
      () => {
        dp_item_list.classList.add("dp_item_list_shown");
      },
      { capture: false, once: true, passive: false }
    );

    check1 = false;
  } else {
    e.preventDefault();
    dp_item_list.classList.remove("dp_item_list_shown");
    check1 = true;
  }

  layer_item.classList.toggle("layer_item_go_in");
  }

};

if (layer_item) {
  layer_item.onclick = (e) => {
    if(e.target.classList.contains("layer_item")){
      console.log("hi")
      header_bot_left.click();
    }
   
  };
}
header_mid.onclick = (e) => {
  if (e.target.classList.contains("header_mid")) {
    if (close) {
      close.click();
    }
    var close_item = document.querySelector(".close_item");
    if (close_item) {
      close_item.click();
    }
  }
};

/* ======================================== 
  END NAVBARS BUTTONS
   ====================================== */

/* ======================================== 
    FOOTER
   ====================================== */
if (footer_icon) {
  footer_icon.forEach((i) => {
    i.onclick = function () {
      let parentElement = i.parentElement.parentElement;
      let footer_list = parentElement.querySelector(".footer_list");
      // window.getComputedStyle để lấy giá trị của thuộc tính từ kiểu đã tính
      //  (computed style) thay vì từ thuộc tính trực tiếp được thiết lập trong
      //  style attribute.
      // Ví dụ: ở trên nếu sử dụng  footer_list.style.maxHeight thì sẽ ra là = "" nên cần sử dụng  window.getComputedStyle để nó lấy luôn giá trị đã tính
      let computedStyle = window.getComputedStyle(footer_list);

      footer_list.style.maxHeight =
        computedStyle.maxHeight === "0px"
          ? footer_list.scrollHeight + "px"
          : "0";
      footer_list.classList.toggle("footer-list-padding");
      this.classList.toggle("rotate");
    };
  });
}
/* ======================================== 
   END FOOTER
   ====================================== */

/* ======================================== 
    SCROLL
   ====================================== */
var check = true;
window.addEventListener("scroll", () => {
  const windowHeight = document.documentElement.clientHeight;
  const maxScrollHeight = document.documentElement.scrollHeight - windowHeight;
  const back_top = document.querySelector(".back-top");
  const back_top_icon = document.querySelector(".back-top_icon path");

  const scrollYValue = window.scrollY;
  if (scrollYValue > 100) {
    if (check) {
      back_top.classList.add("back-top_show");
      back_top.onclick = function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
      check = false;
    }
  } else {
    if (!check) {
      back_top.classList.remove("back-top_show");
      check = true;
    }
  }

  const percentage = ((scrollYValue / maxScrollHeight) * 100).toFixed(0);

  const test = document.querySelector(".bls_back-top");

  test.style.height = `${percentage}%`;

  let header_top_list = document.querySelector(".header-top-list");
  let computedStyle = window.getComputedStyle(header_top_list);
  header.classList.toggle("sticky", this.window.scrollY > 100);
  header_top_list.classList.toggle("d-none", this.window.scrollY > 100);
});

/* ======================================== 
   END SCROLL
   ====================================== */

/* ======================================== 
    AUTOBUY
   ====================================== */

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

const product = [
  {
    name: "Galaxy S21 Ultra 5G 128GB Unlocked International Version",
    img: "./image/top-selling/products_digital_Phone.jpg",
  },
  {
    name: "Galaxy S21 Ultra 5G 128GB Unlocked International Version",
    img: "./image/top-selling/products_digital_Phone_purple.jpg",
  },
  {
    name: "Galaxy S21 Ultra 5G 128GB Unlocked International Version",
    img: "./image/top-selling/TS_phone2.png",
  },
  {
    name: "Galaxy S21 Ultra 5G 128GB Unlocked International Version",
    img: "./image/top-selling/products_digital_32_1_Watch_2.jpg",
  },
];

var product_auto = setInterval(() => {
  let randomProduct = product[getRandomInt(product.length)];
  let time_random = getRandomInt(10);
  if (auto_delete) {
    clearTimeout(auto_delete);
  }
  if (document.querySelector(".product-purchase")) {
    document.querySelector(".product-purchase").remove();
  }
  var product_purchase = document.createElement("div");
  var close_product = document.createElement("span");
  close_product.innerHTML = "\u00d7";
  close_product.id = "product_close";
  product_purchase.classList.add("product-purchase", "product_animate");
  product_purchase.innerHTML = ` <div class="row gx-1">
    <div class="col-3 d-flex align-items-center">
      <a href="" class="product-purchase_image">
        <img src="${randomProduct.img}" class="w-100" alt="Phone" />
      </a>
    </div>
    <div class="col-9">
      <div class="product-purchase_text">
        <span>Someone purchased a </span>
        <h3><a href="" class="title">${randomProduct.name}</a></h3>
        <div class="product-purchase_time">
          <span class="time">
            <span class="minutes">${time_random + 1}</span> minutes ago
          </span>
          <a href="">
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5 5.03906V5.49609C10.5 6.12109 10.3828 6.70703 10.1484 7.25391C9.91406 7.80078 9.58984 8.27734 9.17578 8.68359C8.76953 9.08984 8.29297 9.41016 7.74609 9.64453C7.19922 9.87891 6.61719 9.99609 6 9.99609C5.375 9.99609 4.78906 9.87891 4.24219 9.64453C3.69531 9.41016 3.21875 9.08594 2.8125 8.67188C2.40625 8.26562 2.08594 7.78906 1.85156 7.24219C1.61719 6.69531 1.5 6.11328 1.5 5.49609C1.5 4.87109 1.61719 4.28906 1.85156 3.75C2.08594 3.20313 2.41016 2.72266 2.82422 2.30859C3.23047 1.90234 3.70703 1.58203 4.25391 1.34766C4.80078 1.11328 5.38281 0.996094 6 0.996094C6.33594 0.996094 6.65625 1.03125 6.96094 1.10156C7.27344 1.17188 7.5625 1.26562 7.82812 1.38281C7.95312 1.44531 8.07812 1.45312 8.20312 1.40625C8.33594 1.35156 8.42969 1.26172 8.48438 1.13672C8.54688 1.01172 8.55078 0.886719 8.49609 0.761719C8.44922 0.628906 8.36328 0.535156 8.23828 0.480469C7.91016 0.324219 7.55469 0.207031 7.17188 0.128906C6.79688 0.0429687 6.40625 0 6 0C5.625 0 5.25781 0.0351562 4.89844 0.105469C4.53906 0.183594 4.19141 0.292969 3.85547 0.433594C3.52734 0.566406 3.21875 0.734375 2.92969 0.9375C2.63281 1.13281 2.35938 1.35547 2.10938 1.60547C1.85938 1.85547 1.63672 2.125 1.44141 2.41406C1.24609 2.71094 1.07812 3.02344 0.9375 3.35156C0.796875 3.67969 0.6875 4.02344 0.609375 4.38281C0.539062 4.74219 0.503906 5.11328 0.503906 5.49609C0.503906 5.87109 0.539062 6.23828 0.609375 6.59766C0.6875 6.95703 0.792969 7.30469 0.925781 7.64062C1.06641 7.96875 1.23828 8.27734 1.44141 8.56641C1.63672 8.86328 1.85938 9.13672 2.10938 9.38672C2.35938 9.63672 2.62891 9.85938 2.91797 10.0547C3.21484 10.2578 3.52734 10.4258 3.85547 10.5586C4.18359 10.6992 4.52734 10.8086 4.88672 10.8867C5.24609 10.957 5.61719 10.9922 6 10.9922C6.375 10.9922 6.74219 10.957 7.10156 10.8867C7.46094 10.8086 7.80469 10.6992 8.13281 10.5586C8.46875 10.4258 8.78125 10.2578 9.07031 10.0547C9.36719 9.85938 9.64062 9.63672 9.89062 9.38672C10.1406 9.13672 10.3633 8.86719 10.5586 8.57812C10.7539 8.28125 10.9219 7.96875 11.0625 7.64062C11.2031 7.3125 11.3125 6.96875 11.3906 6.60938C11.4609 6.25 11.4961 5.87891 11.4961 5.49609V5.03906C11.4961 4.89844 11.4453 4.78125 11.3438 4.6875C11.25 4.58594 11.1367 4.53516 11.0039 4.53516C10.8633 4.53516 10.7422 4.58594 10.6406 4.6875C10.5469 4.78125 10.5 4.89844 10.5 5.03906ZM10.6523 1.14844L6 5.80078L4.85156 4.65234C4.75781 4.55078 4.64062 4.5 4.5 4.5C4.35938 4.5 4.24219 4.55078 4.14844 4.65234C4.04688 4.74609 3.99609 4.86328 3.99609 5.00391C3.99609 5.14453 4.04688 5.26172 4.14844 5.35547L5.64844 6.85547C5.74219 6.95703 5.85938 7.00781 6 7.00781C6.14062 7.00781 6.25781 6.95703 6.35156 6.85547L11.3555 1.85156C11.4492 1.75781 11.4961 1.64062 11.4961 1.5C11.4961 1.35938 11.4492 1.24219 11.3555 1.14844C11.2539 1.04688 11.1328 0.996094 10.9922 0.996094C10.8594 0.996094 10.7461 1.04688 10.6523 1.14844Z"
                fill="#999999"></path>
            </svg>
            Verify
          </a>
        </div>
      </div>
    </div>
  </div>
`;
  product_purchase.appendChild(close_product);
  document.querySelector("body").appendChild(product_purchase);

  var auto_delete = setTimeout(() => {
    product_purchase.classList.remove("product_animate");
    product_purchase.classList.add("product_go_down");
  }, 5000);
  close_product.onclick = (e) => {
    product_purchase.classList.remove("product_animate");
    product_purchase.classList.add("product_go_down");

    clearTimeout(auto_delete);
  };
}, 8000);

/* ======================================== 
        END AUTOBUY
   ====================================== */

function countDown() {
  var day = document.getElementById("day");
  var hour = document.getElementById("hour");
  var minute = document.getElementById("minute");
  var second = document.getElementById("second");

  var countDownDate = new Date("Oct 16, 2024 00:00:00").getTime();

  var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    day.innerHTML = days;
    minute.innerHTML = minutes;
    hour.innerHTML = hours;
    second.innerHTML = seconds;
  }, 1000);
}
countDown();
