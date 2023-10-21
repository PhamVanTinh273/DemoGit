const express = require("express");
const app = express();


const dogs = [
    {
        id: 1,
        name: "Shirt",
        breed: "FMSTYLE",
        price: "1000",
        description: "Fashionable men and women",
        imageUrl:
          "https://media.istockphoto.com/id/1067252946/vi/anh/m%E1%BB%99t-ch%C3%A0ng-trai-tr%E1%BA%BB-%C4%91%E1%BA%B9p-trai-ng%C6%B0%E1%BB%9Di-m%E1%BA%ABu-%C4%91i%E1%BB%83n-trai-20-29-tu%E1%BB%95i-t%E1%BA%A1o-d%C3%A1ng-trong-studio-ch%E1%BB%A5p-%E1%BA%A3nh-n%E1%BB%81n.jpg?s=1024x1024&w=is&k=20&c=svKqid8-GFMaR5CatkUGUVEhN7WbEdeOhZuJrdi9Wog=",
      },
      {
        id: 2,
        name: "Ao Dai",
        breed: "HUE",
        price: "1500",
        description: "Fashionable men and women",
        imageUrl:
          "https://cafefcdn.com/203337114487263232/2022/1/5/photo-1-1641349267968282067556.jpg",
      },
      {
        id: 3,
        name: "Vest",
        breed: "YODY",
        price: "2500",
        description:
          "Fashionable men and women",
        imageUrl:
          "https://nhipsongonline.vn/wp-content/uploads/2023/08/2-d1sd21-D.png",
      },
      {
        id: 4,
        name: "Leather jacket",
        breed: "BOVIND",
        price: "1700",
        description:
          "Fashionable men and women",
        imageUrl:
          "https://www.lofficielvietnam.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F56778%2F1682305339-1682244240-1252014221.jpeg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75",
      },
      {
        id: 5,
        name: "Long skirt",
        breed: "LV",
        price: "2000",
        description: "Fashionable men and women",
        imageUrl:
          "https://vtv1.mediacdn.vn/zoom/640_400/562122370168008704/2023/5/12/photo1683882646094-16838826463401700575253.jpg",
      },
      {
        id: 6,
        name: "Shirt white",
        breed: "SAVANI",
        price: "2700",
        description: "Fashionable men and women",
        imageUrl:
          "https://inkythuatso.com/uploads/thumbnails/800/2023/02/1-cach-tao-dang-chup-anh-cho-hoc-sinh-nam-inkythuatso-15-15-24-02.jpg",
      },
      {
        id: 7,
        name: "Vest",
        breed: "YODY",
        price: "2500",
        description: "Fashionable men and women",
        imageUrl:
          "https://shop.aristino.com/Data/ResizeImage/images/1-01x500x500x4.webp",
      },
      {
        id: 8,
        name: "Crop",
        breed: "SAVANI",
        price: "4700",
        description: "Fashionable men and women",
        imageUrl:
          "https://vcdn1-ngoisao.vnecdn.net/2020/08/19/TH-01-JPG-8864-1597824125.jpg?w=460&h=0&q=100&dpr=1&fit=crop&s=Zsh8YSkuKGoD-Nkj55mxaA",
      },

];


app.get("/v1/dogs", (req,res)=>{
    res.status(200).json(dogs);
});

app.listen("8080",()=>{
    console.log("Server is running...");
});