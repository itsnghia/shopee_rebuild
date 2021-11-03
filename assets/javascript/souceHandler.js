const uLogo = document.querySelectorAll(".utilities__logo");

const categoryList = document.querySelectorAll(".category__item-img");

const uLogoUrl = ["./assets/images/content/utilities/utility1.png",
                "./assets/images/content/utilities/utility2.png",
                "./assets/images/content/utilities/utility3.png",
                "./assets/images/content/utilities/utility4.png",
                "./assets/images/content/utilities/utility5.gif",
                "./assets/images/content/utilities/utility6.png",
                "./assets/images/content/utilities/utility7.png",
                "./assets/images/content/utilities/utility8.png",
                "./assets/images/content/utilities/utility9.png",
                "./assets/images/content/utilities/utility10.png"];

const catListUrl = ["./assets/images/content/category/category-menswear.png",
                "./assets/images/content/category/category-phones.png",
                "./assets/images/content/category/category-e-devices.png",
                "./assets/images/content/category/category-laptop.png",
                "./assets/images/content/category/category-camera.png",
                "./assets/images/content/category/category-watches.png",
                "./assets/images/content/category/category-mensfootwear.png",
                "./assets/images/content/category/category-household.png",
                "./assets/images/content/category/category-sport.png",
                "./assets/images/content/category/category-vehicle.png",
                "./assets/images/content/category/category-womenswear.png",
                "./assets/images/content/category/category-babycare.png",
                "./assets/images/content/category/category-life.png",
                "./assets/images/content/category/category-beauty.png",
                "./assets/images/content/category/category-health.png",
                "./assets/images/content/category/category-womensfootwear.png",
                "./assets/images/content/category/category-purse.png",
                "./assets/images/content/category/category-jewellery.png",
                "./assets/images/content/category/category-mall.png",
                "./assets/images/content/category/category-books.png"];
        
for (let i = 0; i < uLogo.length; i++) {
    uLogo[i].style.backgroundImage = `url("${uLogoUrl[i]}")`;
}

for (let i = 0; i < categoryList.length; i++) {
    categoryList[i].style.backgroundImage = `url("${catListUrl[i]}")`;
}