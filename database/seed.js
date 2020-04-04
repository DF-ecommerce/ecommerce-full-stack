//connect to db
const mongoose = require('mongoose')
const Ecommerce = require('./schema')


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
    promotion: true,
    in_cart: false
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
    promotion: false,
    in_cart: false
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
    promotion: true,
    in_cart: false
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
    promotion: false,
    in_cart: false
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
    promotion: false,
    in_cart: false
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
    promotion: false,
    in_cart: false
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
    promotion: true,
    in_cart: false
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
    promotion: false,
    in_cart: false
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
    promotion: false,
    in_cart: false
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
    promotion: true,
    in_cart: false
  }
  ,
  {
    product_id: 11,
    product_name: 'HENLEY SHIRT',
    product_image: '../client/dist/productIMG/11.jpeg',
    product_price: 14.99,
    product_description:
      'gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat',
    product_reviews: [
      {
        body: 'I believe that wearing this t-shirt has made me a better man, which is remarkable because, well....Im a chick.',
        date: 06 - 06 - 2019,
        rating: 5
      }
    ],
    product_quantity: 150,
    promotion: false,
    in_cart: false
  },
  {
    product_id: 12,
    product_name: 'SWEATSHORTS',
    product_image: '../client/dist/productIMG/12.jpeg',
    product_price: 9.99,
    product_description:
      'erat. Vivamus nisi. Mauris nulla. Integer urna.',
    product_reviews: [
      {
        body: "Wow three pockets! I’ve always needed some shorts like this when attempting as minimalist a workout as possible until each pocket fell apart. First the right front 2 months ago, now the left. I’ve been using the back pocket now cause god I just love working out while sitting on my phone (/sarcasm). Don’t buy these shorts unless you don’t plan to use the pockets.",
        date: 12 - 01 - 2015,
        rating: 4
      }
    ],
    product_quantity: 150,
    promotion: false,
    in_cart: false
  },
  {
    product_id: 13,
    product_name: 'OPEN-SHOULDER-TOP',
    product_image: '../client/dist/productIMG/13.jpeg',
    product_price: 15.99,
    product_description:
      'orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean',
    product_reviews: [
      {
        body: "Fabric is not the quality I expect from under armor. It got a pull the very first day I wore it (into the office, nothing physical) and is now super noticeable and turning into a hole. Not worth the money. Find a different fabric.",
        date: 02 - 06 - 2013,
        rating: 2
      }
    ],
    product_quantity: 150,
    promotion: false,
    in_cart: false
  },
  {
    product_id: 14,
    product_name: 'STRAW-HAT-WITH-EARS',
    product_image: '../client/dist/productIMG/14.jpeg',
    product_price: 24.99,
    product_description:
      'erat. Vivamus nisi. Mauris nulla. Integer urna',
    product_reviews: [
      {
        body: "I don't know if it's possible to get a straw hat that comes without broken or missing pieces of straw. This is a very fragile hat. I have a hard time believing it would survive a day at the beach. Right out of the box, the edges of the brim are jagged and there are missing or broken straw pieces. Maybe perfection for a straw hat is too high an expectation?",
        date: 07 - 06 - 2014,
        rating: 3
      }
    ],
    product_quantity: 150,
    promotion: false,
    in_cart: false
  },
  {
    product_id: 15,
    product_name: 'SEAMLESS SPORTS LEGGINGS',
    product_image: '../client/dist/productIMG/15.jpeg',
    product_price: 24.99,
    product_description:
      'lectus quis massa. Mauris vestibulum, neque sed',
    product_reviews: [
      {
        body: "I think I'm in love with these pants! I've wore them twice now. I'm only 5'5 but have a good amount of muscle so I struggle with pants fitting right. They're either too high in the waist, there's too much fabric in the legs, or I can't fit them over my thighs. These pants fit like a T and I will be getting more.",
        date: 10 - 06 - 2017,
        rating: 5
      }
    ],
    product_quantity: 150,
    promotion: false,
    in_cart: false
  },
  {
    product_id: 16,
    product_name: 'LOOSE FLORAL TOP',
    product_image: '../client/dist/productIMG/16.jpeg',
    product_price: 24.99,
    product_description:
      'elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis',
    product_reviews: [
      {
        body: "My husband loves this top but after only one washing it came apart on the left side at the seam . I have purchased these before with no problems and disappointed with this one. I'm in the process of sewing the seam but for the price of these shirts I shouldn't have to be fixing it.",
        date: 03 - 12 - 2020,
        rating: 5
      }
    ],
    product_quantity: 150,
    promotion: false,
    in_cart: false
  },
  {
    product_id: 17,
    product_name: 'FLORAL SKIRT',
    product_image: '../client/dist/productIMG/17.jpeg',
    product_price: 19.99,
    product_description:
      'vitae aliquam eros turpis non enim. Mauris',
    product_reviews: [
      {
        body: "I bought one and it feels GREAT!!!! I was surprised because I'm a big girl and the price was so low I'm buying 3 now.",
        date: 09 - 18 - 2015,
        rating: 5
      }
    ],
    product_quantity: 150,
    promotion: false,
    in_cart: false
  },
  {
    product_id: 18,
    product_name: 'PLAID-PATTERENED SKIRT',
    product_image: '../client/dist/productIMG/18.jpeg',
    product_price: 24.99,
    product_description:
      'pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum.',
    product_reviews: [
      {
        body: "Excellent material and perfect color for velma! I defiently recommend this skirt.",
        date: 12 - 14 - 2016,
        rating: 5
      }
    ],
    product_quantity: 150,
    promotion: false,
    in_cart: false
  },
  {
    product_id: 19,
    product_name: 'WOMENS BLACK BLAZER',
    product_image: '../client/dist/productIMG/19.jpeg',
    product_price: 44.99,
    product_description:
      'Ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec,',
    product_reviews: [
      {
        body: "WOWZA! This jacket is stunning and the quality is top of the line! I will need to order bigger size, but it could just be my 36DD's that are the problem... If you are smaller chested, it probably runs more true to size.",
        date: 02 - 18 - 2019,
        rating: 5
      }
    ],
    product_quantity: 150,
    promotion: false,
    in_cart: false
  },
  {
    product_id: 20,
    product_name: 'WOMENS LONG BLAZER COAT',
    product_image: '../client/dist/productIMG/20.jpeg',
    product_price: 54.99,
    product_description:
      'Aliquam vulputate ullamcorper magna. Sed eu eros. Nam',
    product_reviews: [
      {
        body: "This blazer came very before date estimated, it fit true to size. Very comfortable. Was given many compliments on how nice it was",
        date: 11 - 30 - 2016,
        rating: 5
      }
    ],
    product_quantity: 150,
    promotion: false,
    in_cart: false
  }
];

const seedSampleData = function() {
  Ecommerce.insertMany(sampleData)
    .then(()=>{
      console.log("seeded")
      mongoose.connection.close()
    })
    .catch(err => console.log(err));
};

seedSampleData()

