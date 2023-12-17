const navbar = document.querySelector(".navbar_item_list");
const navbar_mobile = document.querySelector(".navbar_mobile");
const layer = document.querySelector(".layer");
const close = document.querySelector(".close");
const footer_icon = document.querySelectorAll(".footer_icon");

if (navbar_mobile) {
  navbar_mobile.onclick = function () {
    if (navbar.classList.contains("slideout")) {
      navbar.classList.remove("slideout");
    }
    navbar.classList.add("slidein");
    layer.classList.add("showup");

    // mobile
    item_slidein();
    // mobile
  };
}
if (close) {
  close.onclick = function () {
    navbar.classList.remove("slidein");
    navbar.classList.add("slideout");
    layer.classList.remove("showup");
    let navbar_item_mobile_link_list = document.querySelectorAll(
        ".navbar_item_mobile_link"
      );
      navbar_item_mobile_link_list.forEach((navbar_item) => {
         navbar_item.classList.remove('active')
      })
  };
}
if (footer_icon) {
  footer_icon.forEach((i) => {
    i.onclick = function () {
      let parentElement = i.parentElement.parentElement;
      let footer_list = parentElement.querySelector(".footer_list");
      footer_list.classList.toggle("godown");
      this.classList.toggle("rotate");
    };
  });
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
         navbar_item.classList.remove('active')
      })

      this.classList.add("active");

      let header_mid = document.querySelector(".header_mid");
      let item_mobile_list = document.createElement("div");

      // child element 1
      let navbar_item_list_head = document.createElement("div"); // father element
      navbar_item_list_head.classList.add(
        "navbar_item_list_head",
        "d-flex",
        "align-items-center"
      );
      let close_item = document.createElement("span");
      close_item.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#111111"
             stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             style="transform: translateY(-50%); margin-top: 18px">
             <line x1="18" y1="6" x2="6" y2="18"></line>
             <line x1="6" y1="6" x2="18" y2="18"></line>
           </svg>`;
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
        navbar_item_mobile_link.href = "";
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
