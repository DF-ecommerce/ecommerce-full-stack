//connect to db
const mongoose = require('mongoose')
const Ecommerce = require('./schema')


const sampleData = [
  {
    product_id: 1,
    product_name: 'MEN U DRIZZLER JACKET',
    product_image: 'https://lp2.hm.com/hmgoepprod?set=quality[79],source[/31/90/3190c3f910f8b9053c3ff0199d5b1fcf9cf02867.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[LOOKBOOK],res[w],hmver[1]&call=url[file:/product/main]',
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
    product_image: 'https://lh3.googleusercontent.com/Jn5I8eEXlxTMqg1ahJZslUSb3gHwYOVwDmamscByoHM82QHdQeutde25-SLktREDgi3W5iURljPHwEor3hcfaDs5wyDwVe9eP4sUUjzBkxiv3xse5CdGmRSs7eaiVjBhhqFHiaPyOGoyz2ua0pfhmOWm_Yg3dixseHXyKOCqYfAvPxJF_CNnENOVGZ_LO_1fi4SBZk1SmuGaME9Eqf6qEvTqS33POVGk1Run3xvbPLjDjpYx6Nh9daPwkhuY3UnlZQIWaCrVWxtDdgbmXFRr6xR8r-xDMStibCi7YCSwWn4CQhtMu-x71lceS79bwbc3h4Krvg16kQj1uHNiNzYy7bHxS-sUsbw6_N5Jzn99cmqtEUGALajB3tKPq8xVOb2FJ43LLID23CUmPCYFQF_sS2qtKfoDDy1zuPY6MuxXFtPtETUI7x_A2SDExF18n1VtqMl_MaHCclaWxZxOX6q9iWLnEit6URPtO_diI8CFwKWrdmhY5XRdeC9VcyZu2XS9GMC8NnMakRdzpsEOGarsfAtnSAvpvvfwJGLsJMEWEGH9kIMPuvlS5rOGlGMi_ayN9pBocvWs_G3saYjieHYmzuXTOWB8f4FNF1FrmmEv30WNROGg1TvCDeEB-DkyHYDzfHGs23mGwy4JuWh1Vzw7U1b97t5u-Va70VAR3GKbtTw0d5fLXEL3UmGK2L-5Gw=w652-h978-no',
    product_price: 24.99,
    product_description:
      'Aliquam vulputate ullamcorper magna. Sed eu eros. Nam',
    product_reviews: [
      {
        body: "Most valuable shirt EVER purchased. It's just amazing. We feel like royalty.",
        date: 06 - 06 - 2019,
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
    product_image: 'https://lh3.googleusercontent.com/mBnnvrDcgGxpqM8AOmCebQtSNQK6iNy3z-PmrbH6oQlnlYky9CZGbim9BbYBGAidM-Y2lilL-X2BLydZx6KKMZ0dh_g8nl_D0kXU9ivDFQJReYBuKIgChnLzSJe_LdT7sk_2D78ZEh8OHGTUWKKX9J73-HDmlOBi1b48PRV2pUlXtW6KltLt7LoUty-ktGiZp9H0rghbJp-zDG4hTs2X8rmu5h0UFUnY0-FpTDhrba26IgvrQhHa4EFMad5F8gUJgb2zFS6vSs3KUc15BlZ2Y4MXKPets_VbozlICsYdk3RDS3y32-cpamic1Glj3IOyy41gI681mx_28aT9M25clTosygDrlcZFiVW0-jXuT7jXaZC9z9utiU9NXRb7ksDI5Sknel5IeMqDLxs3cf04ACuIfsLI-wWQuo6hRrvH2iJQQVNW2sHhvKILm0BQ5HDGMuWv-dkpeNwY3c7E_4hT68uvdCHnnImWD15Thb7AgZbdbs_2yD6AKgpQraUdf4wnvZ7j174cQ071oRRVmUS-XrD87fpGC-lz6TLoN_2OX8VO_ob7Furbw6DA9ZtR5mWVwKAiYqMVkdN3US9j-wK963Z2BlnrzkxxXieUBWh6X35f_Qp_FGqLT2AfRvfpZVrGzyGFJT4zmEJKIvE5d6oa25AfEJddGwpbdhlr9EMaIIBsGxN-81HofY39USpLpQ=w652-h978-no',
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
    product_image: 'https://lh3.googleusercontent.com/MnAgX4CaBG3Yaukq3tFCQiOKIa3rITwwBP_LaP_m5QgJ9pgAso8L6Oj3lj5q8W56KE5wbHpMoDdZyCSfEHJym46dW7gXNulfdsvT8fIUc_w2bVT6pWcjfYcFV_slGJyH5o_rBocgKwlPJ_3qLa8DuZvS9TnMAEf_Ol-VoAlKmTvz98pkJUDPytcSJq3GFErpA3fFCw4mq8UcoE6NgwtZZ_MEMiMcCWmfU54dN3zY2DLJSkiXq_8LavgMbKe56He9tkMrJAy29Cer9UsswWE96ig1knwvmNUQRLXCsxB5C52K-ok-lwa-IjZ94iMM4tOnIZmNdxnpSwu-uFYzwPD7_2-ZoImdWQTGDbVLqcBhoOdtTjUIjF4GeioOI8aa-5PvAFHdcVixSKXsLeYSj2ey2ZJQxi97kcJcxlVOMMt1V_-WgxRDMcetcTviNhWzAEZKDB2KXGTaDQ98yJojfg0T0vlloRW-ffi4Lw9RY4-fajTP-RMDzg-g6FzPNZE7PkjDzHQs0ecoN5aJQujtQIXHDpqdyywHPrHM7L2w_Hcda4nKeuwM-KklK9d1Yve93dQ0ydcGfsZjx-MIrs6t-DqzykhO1QXGyhP62K5hZzNcU-a-RXfmEr-SzIvoOl_mcnhgfaiXlhs3Gcnr9_MBkOjJaDuknoD9p2AlGrnwY1QLru0fGIC1sfFjZ-ckIpuB5A=w396-h594-no',
    product_price: 39.99,
    product_description:
      'dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris rhoncus id, mollis nec, cursus a',
    product_reviews: [
      {
        body: "Waste of money. The upper part of the hoodie fit fine. However, the waist line was too short and felt awkward. On top of that, after one wash the color faded. I just gave up after that....smh. I have purchased Hanes products before and never experienced this. I was unable to send back because I did not open until after the option to return was up. I dont recommend item.",
        date: 08 - 01 - 2019,
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
    product_image: 'https://lh3.googleusercontent.com/GeJdtw3VphckdPZ4DfY5cFYWKC-puHHDY-GaCQCd-FtgrvIgcO9sXHgtAQt3Zq5BgHvBt1dcNaiw6VoFFReBDfu1L1i6yWaVWJzDOp97AoTX0rudrd0Wtlgo6svuJh2zNuebJHsZVpXCCtwH-mOwe7Ypv3DtKlBnQ6V2xKW6ediplS-lRs4_-wwlNtotHYxLjyUH_4j3gMtkRv1AfdJVD2Qvws-uZBQh8FF_Egbpk06_7ao_7NjV40P9gtF8uzGKLkl_4HlWcS56pA-JtG5Xdq3pj63OsfIybrDIhiToOLfw29G-fBS0XM-yHhhfmFgQva7tKS_lI7dR0Xz9XZrZizhQ-TVIDUmRYdSVvaiExKrWQ_qReKF1acEggG_GV6UZOYmpexdMCnZiRLA9wg9mqGQi3WMurvrMzf_qqNEURuvdyg6eDBdZgprGOXcDG3wTJlQs7_QhlqiH6pi3L9l5N57olg9Gisgum3jDZyVNWqW1PwKy4qpQtjg1ZnMqfxIDWPhdBH958cR9bK4gRtYkQHjvvNP-NJSwHc_InC4Udo8MUVslk9m9hDRNsiwggz_y0BU98SQO6z3QMOrwm1pnCCQ-kfuO-f2dmLwOKyn9k-FW8tlKtce1Qtb6WZz5pR6Y9BNDcDRWien6Famfdi4lTd8_Z8h9AXxcrAOXkUDyAeGvcwFKaRUcE0_FfWuBcg=w652-h978-no',
    product_price: 76.89,
    product_description:
      'Lorem ipsum dolor sit dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris rhoncus id, mollis nec, cursus a',
    product_reviews: [
      {
        body: "I was indecisive on what size to get and I went through all of the questions and reviews to see if anyone who was similar to me provided any helpful info. No one did. So I hope this helps someone. I'm a 5'5 200lb woman, carry my weight in chest and hips. Ordered XXL because I like my hoodies roomy. It was a just a little roomier than I would have liked, but it shrunk a little bit when I laundered it, so now it's perfect. The sleeves are a little long, but not cumbersome. The bottom band hugs my hips not too loose, not too tight. It's very soft, lightweight, and warm. I would have given five stars, but I noticed it has a hole in the seam at the cuff and now I have to return it, which is adds a little chore to my to-do list.",
        date: 04 - 08 - 2017,
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
    product_image: 'https://lh3.googleusercontent.com/JE62gwbk6I5Jj1N-MqdtJEJFcP52uuOra1-gjQkfPA2BJFzflj3JKr1RZ27hrKiIKAqwiVdlDzoZIbrU9YIOd6QPUODX5VeRLip5woHLixihk3xU4U7CCZ2eS62CHHss4-8L66TKME9Vjelnfx4YPDRiTAzqC4GwwDH5Hxv6lOehLTVlpf9YLQFcijydRkezNfxqn5VI1y6fbItgUNwYSQOqaB81Q2a3rsrh5AbodBxkglcpcYkhPQi8_dwPc8dBpNIbI50a2-NgqPmGoN55BFQpM3-f9Vd07wdcCLME5AWUJsLZgmb8rGQeo_nAA277HBcTS-AdmBk82tCi1-9j-LJ2pywiR67RQsGQzWgRd_yN-dPeIgWUy8K2pjR5OhjNkmZtOx3CAG3523Uqn3Mbcf47KpLUN-LpRzJK-P-XyITz9JE-WcIdgaqVDBnwEbysBUfTHMNFeSEAkYUZvV6mJeph1o9mWvw3Iogo3Eb-lVBkUuvCCd6dnq0sHiQH2Wfmc9FHrrZnD-VJXpoZHcUg8mWm6jt-6Z-0O8ppS3NpNk1PFIsqDgYFaVoRNH2GlBJM9vzzSNSXCq1QVxAyjibNy9C8_0W3WysBREdBd2mKTeFYcJoP8Y1KgnozuIHoTjE0RQSTs7wcxHaw5yJsSc2feGe6Lxqk7zD3z_6NGv4QI36WUesn_a0CeKMpaL_8OQ=w396-h594-no',
    product_price: 34.99,
    product_description:
      'Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor',
    product_reviews: [
      {
        body: "Got this for my boyfriend as a silly anniversary gift. He absolutely loves it! He usually wears a medium, but I got a large to be safe and to be honest it's not a bad fit, it's just a little on the larger side. I recommend ordering this in the size that you regularly wear!",
        date: 02 - 01 - 2019,
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
    product_image: 'https://lh3.googleusercontent.com/at2nS8qWPqXQrQOIezA3jN2VKzZQytSGA8RDgIUl-RPuVt1VI67Fl5RTnbO4N4xV7TuBypYyUgSXvD8mzBXLkSvGkb01rI-4jV7NBZ99O78paAG2iJf_8gVqXylV0XJtT89zJQMPTJkchAfnaPSuEh4M-U3IQjIMa6v1hEB9g_BH9fciqwYD-ImOLnowvsQeRGLVAhHw-6rP06r9_IkqKdZDOxKECBa820NAtFNxtpE-3bZOpz1GvmbkJWvWscMC-s0XhCf8NpV-V8BIASzZgx8HkFYNAMiLAer_Q1jHNJ9f8xQoXOUy9nw8IuOGDrRJ8JcxEynDI0MoFutkRuDjTUkR45HTULmEXmUcFHhXp38TBDx8SBRgeUjeO_gxClszb_JTf-6NAucUzdcChsvBtBHvex5wAz9kxQLtbSrXa2MxQSV2lbD91DU8fpMv2szfSr-ErGqYKEvWxraKNLNx8GG1rLGa7PmQ_B5Dxt-gpzBFfQeLwxhY01L1Q43c-7EUOWZsDQmyWeznu_k1oFrfKuoIHt3kg3dqqSs7eOrkr9Z8X0PMe91iD1bWoQZNs6DJTLGLywYbulXC-sKSep79_lHphPbe7yF1gamIBpPCCTbgDu1YXQYI35dzVU3AiZrVPg6awRpa7S99c2nt2JtlaxAvzEajFs-lJIiOy3jkOTsywjgrM4xnm-PMBNoAyA=w652-h978-no',
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
    product_image: 'https://lh3.googleusercontent.com/bWGOkUq7zuNXq9sK7V-fe0xR9qDCz3cKA-x7AOqi9PLQt_U1cio9XgP6xVIckDVaXzVk2Di0uU_1GsaZmn0bw3cKnZrH8AVpDc99cfOBBr9KIoclYA2HPGWbqEU0UzLe24IxvNYDil53_on0Ab4NPBejIDxKLw70UR5xkcC32Yn-qF4gDUz3jYhSksxx1ps-EoQ3m_Ei1Of9WetVYMIb9gl2xN626zopsy7Jed5vUUEoyM7AYXqbJjlaSMj5W9ihIgNhBBX4lyYqCc_ENfy8MbqsBXmjDRe90TISYgo51UkdmWJTnzfMnXSGyY3NN2z5CEALqW2RO4iLnPQhOjJ2uHvIXUXiXvuy1_dxOJWBHOYhNM69wbHqP7e7DOuH96OLhiGCuZuEuVkRmofq7mVUL_rDF8moPxUyTmMn_LYghtpix2_u_fh-s5WvkpHd19GVvfOs0wqRU1UXlHopTZCfiiHhgDIoIIteZ3WpvyjKdD3J-rdpP0Y-GXIlTzfXfXGkwUVDSzmnKV3m9JnrtIJ4xyKFQ50k1RHfe3o0dCuKzD4RTm8CVONJ_jlHV5v3m2CkBAjoZ0PuJCaP-4DrFA6nHCg1xofYHZ0PxJo5kCCRCcqBTFDvkWYA4bPeUvON4kcw5YOJW77NH5YRaqB8hG-6kDR2gT7NhhN4A4qR1FAHsi79AJZu67NGYlNyojNGyQ=w652-h978-no',
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
    product_image: 'https://lh3.googleusercontent.com/mUz09lNBDteBGWNEs_3gEsO-voJt08fIc54K_mA5zzHvcDVohfJK3W5G_KUJRX1-JmPpVdT60sxQTkcx5A54gvy380aSkO0qoVcZbxlxcDmgy8eTtU7gR9ZQK4c_px91bvKS3KICc2dcSiCEsvXTHtuXONtKWThUnHsABuYXY2JWv-taks44R3rzjzGuuR1Mc2e4xMOJRfCZn6kFkaI0x2PmknVsiBHYip8e5my-P8piXmOqV-wQyUfeX8QOcrBqKGLNT1hs4BGH0nEQOqW47auN6Gitg2x5bBVfzqwcSFA_ymkmtx_JsGazPr8ReFHjrMbfrdx-LgBZym0rNJ_govS2acwcphvhOYNQxze79YRA8M61A1BY6h5Hvisl5lo5K9s68x4xCwgPeCAbdC-pV4SSyNFF_BiPh3EI-RCfjJRUmBaSwHRr5eFykrdWoV13dp2e1jR_SKzGf8XpYrYH8n4gr59-2D-hvSDeI_18PfmOnPHymL1ytRsIB_mcypA3Dq4Vfw6tusHURCy6nYZvF0jBRUp25o4bvL059BreTcYXPNRnls6HkBgvi0LXelYcCHSqc7W0MyykwIAwZpH6F1lE5JSBoeM3CIJ6dcUscvJz0uNjpf3d2ugw3OrCyWBgNPaVYBd8U0R_wDwRf9cPzprYf-gQ_Rhqluc0hTvJ4zp-ml2NyE5IJdpuJvjD4A=w652-h978-no',
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
    product_image: 'https://lh3.googleusercontent.com/dxsnBgSENavVw6L5bNtaf8pp8GKVN8LK_Y2brOylNwDRkN3hOoCAPVmerIiUFSMGNUolytSbweaBivA5EbpIj3fQDI92Iv6b3vbZRwNXDazOF5sQDqcMKOwQxTGuOQs3OZuaRLDrQV3bgAbcu8wxvbX-2ZEQ8SM7qkWtDdH1fdKVJxc2FFfV92r7YbBd5dNWecpBlPbqb4g5H5I08e9B_8U9MvscUrJOyDuTwenjxMZnqJjXbX6_zWRXTQDGcpWgqI5CQMv6MqUI6VVQDjyL2ysjAsK5TdIN_IDhcQadvsC0JLAk_M5HiF6fZ3gALFypiBit9kQwfwfwTZjw00oS7cyO4zYlWaRyAQK3spEuUb_jL5AsjcDiSl9ZGfpCOiZFlp8wmvKmoqYETkgvqIAOwgSgLa-V-HOKPDKBhLJNAFDYwnrDV4SZgshg8NVMq0C6R0y4RcMAXs2u8UNbA2m4C_GSYkXnX3KEwE8U4JaPXvLWwTqEzDuUwLi9gxC2wYJ-Nt_9lTt2bAZZqxiLy_pMl4oSzr5U6MDbdvL2lDIf2LRWM8Qz4OkfbsJu8xerJt5Ed6UJXoTjJYMjneKgHYLA_3TbS5IK7_Tw3TMfTMiK-iJuQpKSnfIITGMN-_O0-I3IZdclsAFMJLLIAzq6HkGVaBPn1ycN7p-hTnJmhOAXGpvNOzXex393tVywb451NA=w396-h594-no',
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

