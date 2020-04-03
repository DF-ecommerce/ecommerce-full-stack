//connect to db

const sampleData = [
  {
    product_id: 1,
    product_name: 'MEN U DRIZZLER JACKET',
    product_image: '../client/dist/productIMG/1.jpeg',
    product_price: 49.99,
    product_description:
      'et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus.Nullam scelerisque neque sed sem egestas blandit. Nam',
    product_reviews: [
      {
        body: 'Great fit, would recommend again',
        date: 03 - 15 - 2020,
        rating: 4
      }
    ],
    product_quantity: 150,
    promotion: True,
    in_cart: False
  },
  {
    product_id: 2,
    product_name: 'MEN GREEN T-SHIRT',
    product_image: '../client/dist/productIMG/2.jpeg',
    product_price: 24.99,
    product_description:
      'Aliquam vulputate ullamcorper magna. Sed eu eros. Nam',
    product_reviews: [
      {
        body: "Most valuable shirt EVER purchased. It's just amazing. We feel like royalty.",
        date: 06 - 6 - 2019,
        rating: 5
      }
    ],
    product_quantity: 150,
    promotion: False,
    in_cart: False
  },
  {
    product_id: 3,
    product_name: 'MEN BLUE SPORTS JACKET',
    product_image: '../client/dist/productIMG/3.jpeg',
    product_price: 89.75,
    product_description:
      'Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan',
    product_reviews: [
      {
        body: "Jacket is exactly what I've been lacking. The very best. Thank you!",
        date: 02 - 25 - 2020,
        rating: 5
      }
    ],
    product_quantity: 150,
    promotion: True,
    in_cart: False
  },
  {
    product_id: 4,
    product_name: 'MEN PIZZA STYLISH HOODIE',
    product_image: '../client/dist/productIMG/4.jpeg',
    product_price: 39.99,
    product_description:
      'dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris rhoncus id, mollis nec, cursus a',
    product_reviews: [
      {
        body: "Waste of money. The upper part of the hoodie fit fine. However, the waist line was too short and felt awkward. On top of that, after one wash the color faded. I just gave up after that....smh. I have purchased Hanes products before and never experienced this. I was unable to send back because I did not open until after the option to return was up. I dont recommend item.",
        date: 08 - 1 - 2019,
        rating: 1
      }
    ],
    product_quantity: 150,
    promotion: False,
    in_cart: False
  },
  {
    product_id: 5,
    product_name: 'MEN AWESOME HOODIE BEIGE',
    product_image: '../client/dist/productIMG/5.jpeg',
    product_price: 76.89,
    product_description:
      'Lorem ipsum dolor sit dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris rhoncus id, mollis nec, cursus a',
    product_reviews: [
      {
        body: "I was indecisive on what size to get and I went through all of the questions and reviews to see if anyone who was similar to me provided any helpful info. No one did. So I hope this helps someone. I'm a 5'5 200lb woman, carry my weight in chest and hips. Ordered XXL because I like my hoodies roomy. It was a just a little roomier than I would have liked, but it shrunk a little bit when I laundered it, so now it's perfect. The sleeves are a little long, but not cumbersome. The bottom band hugs my hips not too loose, not too tight. It's very soft, lightweight, and warm. I would have given five stars, but I noticed it has a hole in the seam at the cuff and now I have to return it, which is adds a little chore to my to-do list.",
        date: 04 - 8 - 2017,
        rating: 3
      }
    ],
    product_quantity: 150,
    promotion: False,
    in_cart: False
  },
  {
    product_id: 6,
    product_name: 'PINK SPONGEBOB HOODIE',
    product_image: '../client/dist/productIMG/6.jpeg',
    product_price: 34.99,
    product_description:
      'Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor',
    product_reviews: [
      {
        body: "Got this for my boyfriend as a silly anniversary gift. He absolutely loves it! He usually wears a medium, but I got a large to be safe and to be honest it's not a bad fit, it's just a little on the larger side. I recommend ordering this in the size that you regularly wear!",
        date: 02 - 1 - 2019,
        rating: 4
      }
    ],
    product_quantity: 150,
    promotion: False,
    in_cart: False
  },
  {
    product_id: 7,
    product_name: 'LONG SLEEVE PRINTED DESIGN',
    product_image: '../client/dist/productIMG/7.jpeg',
    product_price: 27.99,
    product_description:
      'vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio',
    product_reviews: [
      {
        body: "I like the thickness of the material and I like that it is all cotton. It shrank after washing and drying so I should have ordered a larger size.",
        date: 12 - 15 - 2019,
        rating: 3
      }
    ],
    product_quantity: 150,
    promotion: True,
    in_cart: False
  },
  {
    product_id: 8,
    product_name: 'SPONGEBOB LONG SLEEVE',
    product_image: '../client/dist/productIMG/8.jpeg',
    product_price: 17.99,
    product_description:
      'Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor',
    product_reviews: [
      {
        body: "I really like this shirt. I gave it four stars because it was actually a little bigger than expected. With that said it is still very soft and comfortable. It holds up well when washed and it does keep you cool when working out. I truly enjoy all of there products and plan on purchasing many more. I would highly recommend this to anyone.",
        date: 09 - 15 - 2019,
        rating: 4
      }
    ],
    product_quantity: 150,
    promotion: False,
    in_cart: False
  },
  {
    product_id: 9,
    product_name: 'ZIP-UP GREY SWEATER',
    product_image: '../client/dist/productIMG/9.jpeg',
    product_price: 99.99,
    product_description:
      'vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio',
    product_reviews: [
      {
        body: "Love my Gildan Tee shirts ,so thought I would see if they made a light hoodie for fall and 'Bam!' here it is on Amazon too. Size chart accurate. Bought a 2x for six foot one, 238 lbs. fits just like it shows in the picture,perfect. Soft fleece on inside is nice,pockets roomy. Great shopping experience overall,Thanks.",
        date: 03 - 15 - 2020,
        rating: 4
      }
    ],
    product_quantity: 150,
    promotion: False,
    in_cart: False
  },
  {
    product_id: 10,
    product_name: 'T-SHIRT WITH PRINTED DESIGN',
    product_image: '../client/dist/productIMG/10.jpeg',
    product_price: 22.99,
    product_description:
      'sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio,',
    product_reviews: [
      {
        body: "I'm 5' 5 and 210 lb female. This shirt was really long and kind of big for an XL (I normally wear men's XL). SUPER fast shipping. I gave three stars because the shirt size, and I was disappointed they don't ship to APO (military) addresses. I wound up sending it to my mom and then having her send it to me. Otherwise the shirt is very thick and great for when I'm working outdoors.",
        date: 01 - 27 - 2020,
        rating: 3
      }
    ],
    product_quantity: 150,
    promotion: True,
    in_cart: False
  }
];
