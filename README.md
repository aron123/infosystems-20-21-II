# Database of products

The `products.json` file contains an array of product objects. `products.sql` contains a MySQL dump with the same data.

## Schema
```json
{
   "id": "0130350591",
   "title": "Le Creuset Kiwi (Green) Butter Dish Stoneware",
   "description": "Each piece of Le Creuset dinnerware is crafted in the same careful process as all Le Creuset stoneware - with a colorful, durable exterior enamel that matches other stoneware flawlessly while protecting from utensil marks and scratches. Every plate, bowl and mug is designed to complement any collection of stoneware, and is finished with Le Creuset's signature three-ring accent along the exterior.",
   "price": 14.05,
   "imgUrl": "http://ecx.images-amazon.com/images/I/21zcx6RCDoL.jpg",
   "brand": null,
   "categories": [
      "Home & Kitchen",
      "Kitchen & Dining",
      "Dining & Entertaining",
      "Serveware",
      "Butter Dishes"
   ]
},
```

- `id`: ID of the product.
- `title`: Name of the product.
- `description`: Description of the product.
- `price`: Price in US dollars.
- `imgUrl`: URL of the product image.
- `brand`: Brand name.
- `categories`: List of categories the product belongs to.

## Source
The `products.json` file is based on [Amazon product dataset](http://jmcauley.ucsd.edu/data/amazon/links.html) collected by Julian McAuley.