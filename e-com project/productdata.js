var productdata = [
    { image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHyvpDdpHNd-NLONEvNrFdgm_XV2syULU1NQdwJkSx_ZjrbQtF", title: "Anime key ring", subtitle: "key ring for anime lover", newprice: "500", oldprice: "700" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pTJLB_DWlKwsFdVmskrnxGy1ymJRHcLnoedP8-G2WBsOFh8z", title: "Anime t-shirt", subtitle: "Anime Premium Quality T-shirt", newprice: "1100", oldprice: "2000" },
    { image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQlgkpH8m9Kv_QsD3EfdMVW8eZLK2DlfjKABTkrdFSliypj8VS3", title: "Anime Summer Joggers", subtitle: "Premium Quality Fabric", newprice: "1300", oldprice: "1400" },
    { image: " https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBI_-kUPqyDDfVV_HgGQYcwiXeUZlHFY_k55IdBAU2fzR9ERwt", title: "Demon Slayer Katanas", subtitle: "Demon Slayer Katanas", newprice: "2000", oldprice: "2500" },
    { image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ_e2QGtlN06MSSGvjFVUtPsHSPY1mCGWqmjeJebDmet3q14Soq", title: "Deathnote", subtitle: "Deathnote Notebook", newprice: "1500", oldprice: "1800" },
    { image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS9MUVViJs8fQ_RXUoVFMfu0nPsbviRhzJBD_jizvqO4kn_c4H7", title: "Butterfly Knife", subtitle: "Butterfly Knife", newprice: "700", oldprice: "1000" },
    { image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsBAvFKN9ETmI-0p8-30J4mukOgxRSkfj5f9ARDTvSBvEO0m96", title: "Anime Haori", subtitle: "Anime Haori t-shirt", newprice: "1800", oldprice: "2000" },
    { image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTmGj3xIGKeTRUjuzxptJvcDfZVJqEa31OQlkoaGFY7PPhkNdF5", title: "Naruto Split Shoes", subtitle: "Size: 40 & 42 only", newprice: "4000", oldprice: "4500" },







];


function addproduct() {
    var clutter = "";
    productdata.forEach(function (product) {
        clutter += `<div class="product">
    <div class="img">
        <img
            src="${product.image}" alt="">
    </div>
    <div class="title">
        <h2>${product.title}</h2>
    </div>
    <div class="sub-title">
        <p>${product.subtitle}</p>
    </div>
    <div class="rating">
        <i class='yellow bx bxs-star'></i>
        <i class='yellow bx bxs-star'></i>
        <i class='yellow bx bxs-star'></i>
        <i class='yellow bx bxs-star'></i>
        <i class='bx bx-star'></i>
    </div>
    <div class="price">
        <div class="new-price">
            <p>रु॰ ${product.newprice}</p>
        </div>
        <div class="old-price">
            <p>रु॰ ${product.oldprice}</p>
        </div>
    </div>
    <div class="btn">
        <button>Add To Cart</button>
    </div>
</div>`;
    })

    document.querySelector(".products").innerHTML = clutter;

}

addproduct()
