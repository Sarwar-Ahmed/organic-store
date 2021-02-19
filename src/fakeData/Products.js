const Products = [
    {
        "category": "dairy",
        "title": "Full Cream Milk Powder",
        "price": 300,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Full-Cream-Milk-Powder_5f90a1611dd9d4b866f559523fa9666d-2.jpg"
    },
    {
        "category": "dairy",
        "title": "Milk",
        "price": 85,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Milk.jpg"
    },
    {
        "category": "dairy",
        "title": "Milk (Sylhet Only)",
        "price": 75,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/6382fc16-9eda-4d7f-834c-ec755f2ae7e3.jpg"
    },
    {
        "category": "dairy",
        "title": "Yogurt (Bogurar Doi)",
        "price": 280,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/dhoi-300x300.jpg"
    },
    {
        "category": "dryFish",
        "title": "Chapa Dry Fish",
        "price": 320,
        "image": "https://www.khaasfood.com/wp-content/uploads/2019/11/Chapa-Shutki-300x300.jpeg"
    },
    {
        "category": "dryFish",
        "title": "Lakkha Dry Fish",
        "price": 1730,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/11/lakkha-300x300.jpg"
    },
    {
        "category": "dryFish",
        "title": "Organic Churi Dry Fish",
        "price": 725,
        "image": "https://www.khaasfood.com/wp-content/uploads/2019/12/Churi-Shutki-300x300.jpeg"
    },
    {
        "category": "dryFish",
        "title": "Organic Faissha (Oceanic Chapa)",
        "price": 90,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/fff_e80adc401d4ef1b67102f0af1809c956.jpg"
    },
    {
        "category": "dryFish",
        "title": "Organic Icha (Loila) Dry Fish",
        "price": 250,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Organic-Icha-Loila-Dry-Fish.jpg"
    },
    {
        "category": "dryFish",
        "title": "Organic Koral Dry Fish",
        "price": 725,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/d18ada7f-67b3-4220-9a05-427708cf5f1b.jpg"
    },
    {
        "category": "dryFish",
        "title": "Organic Loitta Dry Fish",
        "price": 270,
        "image": "https://www.khaasfood.com/wp-content/uploads/2019/12/Loittah-Shutki-300x300.jpeg"
    },
    {
        "category": "dryFish",
        "title": "Organic Mola Dry Fish",
        "price": 125,
        "image": "https://www.khaasfood.com/wp-content/uploads/2019/12/Mola-Shutki-300x300.jpeg"
    },
    {
        "category": "dryFish",
        "title": "Organic Powa Dry Fish",
        "price": 299,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Organic-Powa-Dry-Fish.jpg"
    },
    {
        "category": "dryFish",
        "title": "Organic Rupchada (Small Dry Fish)",
        "price": 580,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/Rupchandha-shutki-300x300.jpeg"
    },
    {
        "category": "dryFish",
        "title": "Organic Rupchada Dry Fish",
        "price": 1390,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/Rupchandha-shutki-300x300.jpeg"
    },
    {
        "category": "dryFish",
        "title": "Organic Surma Dry Fish",
        "price": 875,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Organic-Surma-Dry-Fish.jpg"
    },
    {
        "category": "dryFish",
        "title": "Organic Tuna Dry Fish",
        "price": 725,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Organic-Tuna-Dry-Fish.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Arjun Powder",
        "price": 60,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Arjun-Powder.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Ashwagandha powder",
        "price": 135,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Ashwagandha-powder_be93dc148c51e6ec38b36e4e32617469.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Basil (Tulshi) Powder",
        "price": 85,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Basil-Tulshi-Powder_47f94b60265a48e2a1f8b6e5341f138f.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Berry Powder",
        "price": 95,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/bbbbb.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Black Seed",
        "price": 70,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Black-Seed_a8b26e16a5c0b979b4fb27aff934ba01.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Black Seed Oil",
        "price": 220,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Black-seed-oil-100ml_1d8392af3eb9663bc8adf8f099f48cae.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Black Seed Powder",
        "price": 80,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Black-Seed-Powder-100gm.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "BRAGG Organic Apple Cider Vinegar (Raw)",
        "price": 529,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/fb53310a-1c62-4fbe-a0e0-478aa55bc7ef.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Castor Oil",
        "price": 210,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/bc2854d8-b99e-4436-ac48-3bcb1937739c.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Chia Seed",
        "price": 195,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/ea96ab44-acbd-4645-a442-1f187923cf26.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Chirota Powder",
        "price": 85,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Chirota-Powder.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Flaxseed (Tishi) oil",
        "price": 180,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Flaxseed-Tishi-Oil.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Ginger Powder",
        "price": 85,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Ginger-Powder_4b1e9d199f0dfad111981797106de40a.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Grinded Fenugreek (Methi)",
        "price": 60,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/0a0854a6-fcd6-4557-a33f-d8eb2f224469.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Grinded Three Myrobalan (Trifola)",
        "price": 60,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Grinded-Three-Myrobalan-Trifola.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Licorice (zosti modhu) Powder",
        "price": 100,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Licorice-zosti-modhu-Powder_27ce1a8848de638dc92e37d2f4132662.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Moringa Powder",
        "price": 200,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/5d44727e-ab6f-4531-95fe-c465b7db1cae.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Moringa Tea",
        "price": 95,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/4f4189cd-803d-47f1-bcba-2ab24cdad5d3.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Neem Oil",
        "price": 200,
        "image": "https://www.khaasfood.com/wp-content/uploads/2019/12/nimer-tel.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Neem Powder",
        "price": 65,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Neem-Powder-1_135ca89f63add1d8ab2047ab30876d68.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Olive (Jaitun) Oil",
        "price": 300,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Olive-Jaitun-Oil.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Palm Candy (Talmisri)",
        "price": 57,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/11/palm-candy-300x300.png"
    },
    {
        "category": "foodForHealth",
        "title": "Peanut Butter (Diabetics)",
        "price": 230,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/51426efa-8918-47b1-bb65-4195fb8ce587.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Peanut Butter (Sweetened)",
        "price": 240,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/1420a066-730a-4c86-bbfe-03d30f24f059.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Peanut Oil",
        "price": 185,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/8e964b58-03fb-4abe-a8aa-cfef5767c14b.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Psyllium Husk (Isopguler Bhusi)",
        "price": 125,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Psyllium-Husk-Isopguler-Bhusi.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Raisins (Kismis)",
        "price": 50,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/17133c26-3c8b-4a42-a2a2-620260cc8445.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Senna Leaf (Sona Pata) Powder",
        "price": 75,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Senna-Leaf-Sona-Pata-Powder.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Sesame (Teel) Oil",
        "price": 160,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Sesame-Teel-Oil.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Silk Cotton (Shimul) Powder",
        "price": 85,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Silk-Cotton-Shimul-Powder.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Tokma Dana",
        "price": 40,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Tokma-Dana.jpg"
    },
    {
        "category": "foodForHealth",
        "title": "Wood Apple (Bel) Powder",
        "price": 75,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/wood-apple_00e0708b35762ba6918eb56a6dbe9a2c.jpg"
    },
    {
        "category": "fruits",
        "title": "Ajwa Dates",
        "price": 425,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Ajwa-Dates_783220399efc307eda1393af4c885189.jpg"
    },
    {
        "category": "fruits",
        "title": "Apricot",
        "price": 395,
        "image": "https://www.khaasfood.com/wp-content/uploads/2021/02/Untitled-1-300x300.png"
    },
    {
        "category": "fruits",
        "title": "Dried Figs (Teen)",
        "price": 495,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/0e7ac0e1-8d4b-4f65-91a9-a44b8e0c44dc.jpg"
    },
    {
        "category": "fruits",
        "title": "Mariyum Dates",
        "price": 290,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Mariyum-Dates.jpg"
    },
    {
        "category": "fruits",
        "title": "Papaya (Red Lady)",
        "price": 120,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Papaya-Red-Lady.jpg"
    },
    {
        "category": "grocery",
        "title": "Agar Agar Powder",
        "price": 270,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/e5ddba5a-d242-42cf-b0b4-c721e78fa593.jpg"
    },
    {
        "category": "grocery",
        "title": "Aman Rice",
        "price": 75,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/10/Amon-Rice-300x300.png"
    },
    {
        "category": "grocery",
        "title": "Beef Kalabhuna Masala",
        "price": 170,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/fd22ed96-b01c-4949-86ae-c3a794fe77ca.jpg"
    },
    {
        "category": "grocery",
        "title": "Bhuri Bhuna Masala",
        "price": 190,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/9c164fd2-e2c4-4d64-b76b-2c8e33a57c85.jpg"
    },
    {
        "category": "grocery",
        "title": "Black Mustard Powder",
        "price": 80,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/f5e226ee-2e26-4452-9d0d-8f71de67c712.jpg"
    },
    {
        "category": "grocery",
        "title": "Black pepper",
        "price": 49,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/10/Untitled-1-300x300.jpg"
    },
    {
        "category": "grocery",
        "title": "Black Pepper (Gol Morich) Powder",
        "price": 160,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Black-Pepper-Gol-Morich-Powder_1ee388c1e41e8b2e7a217d641b4f6945-1.jpg"
    },
    {
        "category": "grocery",
        "title": "Black Seed Oil",
        "price": 220,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Black-seed-oil-100ml_1d8392af3eb9663bc8adf8f099f48cae.jpg"
    },
    {
        "category": "grocery",
        "title": "Black Seed Powder",
        "price": 80,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Black-Seed-Powder-100gm.jpg"
    },
    {
        "category": "grocery",
        "title": "Bombay Chili Pickle",
        "price": 160,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/09/93079d15-dcb4-4c47-9f22-2282d188fa42-1-300x300.gif"
    },
    {
        "category": "grocery",
        "title": "Booter Dal",
        "price": 120,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/10/1aae9672-bc1d-44bc-b56c-d16bf5a6d0bd.jpg"
    },
    {
        "category": "grocery",
        "title": "Boroi Pickle",
        "price": 145,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/09/009ad449-cb33-4459-a24c-7155a3a4ef70-300x300.gif"
    },
    {
        "category": "grocery",
        "title": "Brown Atta",
        "price": 55,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Brown-Atta.jpg"
    },
    {
        "category": "grocery",
        "title": "Brown Rice",
        "price": 325,
        "image": "https://www.khaasfood.com/wp-content/uploads/2019/12/brown-300x300.jpg"
    },
    {
        "category": "grocery",
        "title": "Cardamom (Elach)",
        "price": 280,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/11/Cardamon-3D-300x300.jpg"
    },
    {
        "category": "grocery",
        "title": "Cardamam (Elach) Powder",
        "price": 295,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/1c5aa215-9646-4ed1-b25d-415c79f97384.jpg"
    },
    {
        "category": "grocery",
        "title": "Chaler Gura",
        "price": 70,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Chaler-Gura.jpg"
    },
    {
        "category": "grocery",
        "title": "Chaler Gurar Suji",
        "price": 60,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/cfd790de-b693-4440-84dd-1c72b704c367-1.jpg"
    },
    {
        "category": "grocery",
        "title": "Chicken KalaBhuna Masala",
        "price": 225,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/09/9730aff7-18e9-4206-8283-7ba40f372366.png"
    },
    {
        "category": "grocery",
        "title": "Chicken Tandoori Masala",
        "price": 260,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/fdb294f2-b020-415d-aed3-0db897963521.jpg"
    },
    {
        "category": "grocery",
        "title": "Chili Powder",
        "price": 65,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Chili-Powder-100.jpg"
    },
    {
        "category": "grocery",
        "title": "Cinnamon",
        "price": 99,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/10/daruchini-300x300.jpg"
    },
    {
        "category": "grocery",
        "title": "Cinnamon (Daruchini) Powder",
        "price": 90,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Cinnamon-Daruchini-Powder.jpg"
    },
    {
        "category": "grocery",
        "title": "Clove (Lobongho)",
        "price": 125,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/10/clove-300x300.jpg"
    },
    {
        "category": "grocery",
        "title": "Coriander Powder",
        "price": 50,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Coriander-Powder_726d2dfac1c8a212fdd6ead44a2fbba2.jpg"
    },
    {
        "category": "grocery",
        "title": "Cumin Powder",
        "price": 90,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/cumin-1oo.jpg"
    },
    {
        "category": "grocery",
        "title": "Daler Bori",
        "price": 115,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Daler-Bori.jpg"
    },
    {
        "category": "grocery",
        "title": "Deshi Polao Rice",
        "price": 120,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/chinigura.jpg"
    },
    {
        "category": "grocery",
        "title": "Flaxseed (Tishi) Oil",
        "price": 180,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Flaxseed-Tishi-Oil.jpg"
    },
    {
        "category": "grocery",
        "title": "Flour made of barley (Chatu)",
        "price": 65,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/8137700e-b4b1-429d-9a5d-332e634a1839.jpg"
    },
    {
        "category": "grocery",
        "title": "Fried Cumin Powder",
        "price": 175,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/6d912666-95fd-4bc0-aa23-7dad27de5a65.jpg"
    },
    {
        "category": "grocery",
        "title": "Full Cream Milk Powder",
        "price": 155,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Full-Cream-Milk-Powder_5f90a1611dd9d4b866f559523fa9666d-2.jpg"
    },
    {
        "category": "grocery",
        "title": "Ganjia Rice",
        "price": 65,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Ganjia-Rice.jpg"
    },
    {
        "category": "grocery",
        "title": "Garam Masala",
        "price": 160,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Garam-Masala.jpg"
    },
    {
        "category": "grocery",
        "title": "Garlic (Rosun) Paste",
        "price": 75,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/f8348ec7-027f-4a1b-a0f0-a36472889efe-1.jpg"
    },
    {
        "category": "grocery",
        "title": "Himalayan Pink Salt",
        "price": 149,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/11165313-2301-4f28-9c2d-904cf6f1a801.jpg"
    },
    {
        "category": "grocery",
        "title": "Jirashali Rice",
        "price": 335,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/09/7c10eb82-10ae-4287-a866-4dbe2b21b50b-300x300.gif"
    },
    {
        "category": "grocery",
        "title": "Kabab Chini",
        "price": 445,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/b4f99935-8d68-44f9-81ec-d8d47121af4b.jpg"
    },
    {
        "category": "grocery",
        "title": "Kalijira Rice",
        "price": 125,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Kalijira-Rice.jpg"
    },
    {
        "category": "grocery",
        "title": "Katari Najir Rice",
        "price": 360,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/katari-Najir-Rice.jpg"
    },
    {
        "category": "grocery",
        "title": "Khejur Gur (Jhola)",
        "price": 160,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/11/jhula-300x300.jpg"
    },
    {
        "category": "grocery",
        "title": "Khejur Gur (Patali)",
        "price": 175,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/11/pathali-300x300.jpg"
    },
    {
        "category": "grocery",
        "title": "Lentil (Moshur Dal)",
        "price": 65,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Lentil-Moshur-Dal.jpg"
    },
    {
        "category": "grocery",
        "title": "Mace",
        "price": 110,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/10/mace-300x300.jpg"
    },
    {
        "category": "grocery",
        "title": "Mace (Joyotri) Powder",
        "price": 280,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/15a5d9f5-2128-451e-a8c7-4deea31a751c.jpg"
    },
    {
        "category": "grocery",
        "title": "Magic Mix Masala",
        "price": 39,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/12/Magic-Mix-Masala-50gm-400-X-400-300x300.png"
    },
    {
        "category": "grocery",
        "title": "Mango Pickle (Kashmiri)",
        "price": 220,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/Mango-Pickle-Kashmiri-400gm-300x300.jpg"
    },
    {
        "category": "grocery",
        "title": "Mashalai Dai",
        "price": 79,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Mashkalai-Dal.jpg"
    },
    {
        "category": "grocery",
        "title": "Mung (Mug Dal)",
        "price": 79,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Mung-mug-Dal.jpg"
    },
    {
        "category": "grocery",
        "title": "Mushroom Powder",
        "price": 240,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Mushroom-Powder.jpg"
    },
    {
        "category": "grocery",
        "title": "Mustard Oil",
        "price": 30,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Mustard-Oil.jpg"
    },
    {
        "category": "grocery",
        "title": "Mutton Kalabhuna Masala",
        "price": 225,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/9d068129-15d9-4af2-976d-2ab95710295c.jpg"
    },
    {
        "category": "grocery",
        "title": "Natural Egg",
        "price": 139,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/11/egg-300x300.jpg"
    },
    {
        "category": "grocery",
        "title": "Neem Oil",
        "price": 200,
        "image": "https://www.khaasfood.com/wp-content/uploads/2019/12/nimer-tel.jpg"
    },
    {
        "category": "grocery",
        "title": "Nehari Mix Masala",
        "price": 195,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/6790d59c-0326-4064-99e4-3160f986249b.jpg"
    },
    {
        "category": "grocery",
        "title": "Nutmeg (Joyofol) Powder",
        "price": 140,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/0489c174-c15a-4942-b2ec-bece037c3319.jpg"
    },
    {
        "category": "grocery",
        "title": "Olive (Jaitun) Oil",
        "price": 300,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Olive-Jaitun-Oil.jpg"
    },
    {
        "category": "grocery",
        "title": "Organic Egg",
        "price": 185,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Organic-Egg_5dd146f954f8498c1974c9b4f623fc20.jpg"
    },
    {
        "category": "grocery",
        "title": "Panch Phoron Powder",
        "price": 95,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/09/dc000aa2-bb91-4d34-a048-237c5d356f77.jpg"
    },
    {
        "category": "grocery",
        "title": "Peanut Oil",
        "price": 185,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/8e964b58-03fb-4abe-a8aa-cfef5767c14b.jpg"
    },
    {
        "category": "grocery",
        "title": "Pineapple Jelly",
        "price": 350,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/09/pineapple-300x300.jpg"
    },
    {
        "category": "grocery",
        "title": "Pappy Seed (Posta dana) Powder",
        "price": 270,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/09/76287635-a40c-40fb-a945-74f50f399eb0.jpg"
    },
    {
        "category": "grocery",
        "title": "Pumpkin Seed",
        "price": 190,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/09/ae23dbdf-60af-4f7c-b2bf-8c901277358f-1-300x300.gif"
    },
    {
        "category": "grocery",
        "title": "Pure Ghee",
        "price": 285,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Pure-G.jpg"
    },
    {
        "category": "grocery",
        "title": "Red (Brown) Sugar",
        "price": 75,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Red-Brown-Sugar.jpg"
    },
    {
        "category": "grocery",
        "title": "Saffron (Jafran)",
        "price": 290,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/10/Saffron-1gm-300x300.jpeg"
    },
    {
        "category": "grocery",
        "title": "Sesame (Teel) Oil",
        "price": 160,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Sesame-Teel-Oil.jpg"
    },
    {
        "category": "grocery",
        "title": "Shahi Cumin Powder",
        "price": 185,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/810c1980-e52f-4936-902a-9d1bb19ad450.jpg"
    },
    {
        "category": "grocery",
        "title": "Turmeric Powder",
        "price": 45,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Turmeric-Powder-4.jpg"
    },
    {
        "category": "grocery",
        "title": "Virgin Coconut Oil",
        "price": 240,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Virgin-Coconut-Oil-200.jpg"
    },
    {
        "category": "grocery",
        "title": "White Pepper Powder",
        "price": 105,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/4d8f08c6-6d84-4900-a3a4-6b87104dd3e7.jpg"
    },
    {
        "category": "grocery",
        "title": "Yeast",
        "price": 60,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/10/yeast-300x300.jpg"
    },
    {
        "category": "honey",
        "title": "Litchi Flower Honey",
        "price": 350,
        "image": "https://www.khaasfood.com/wp-content/uploads/2019/12/litchi-300x300.jpg"
    },
    {
        "category": "honey",
        "title": "Mixed Flower Honey",
        "price": 590,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/72b2a6e0-ac84-43cc-bd6a-92665c298194.jpg"
    },
    {
        "category": "honey",
        "title": "Mustard Flower Honey",
        "price": 245,
        "image": "https://www.khaasfood.com/wp-content/uploads/2021/01/Untitled-1-300x300.png"
    },
    {
        "category": "honey",
        "title": "Sundarban Box Honey",
        "price": 400,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Sundarban-Box-Honey-500_f73975488f894d8701d823dd7cf3cb48.jpg"
    },
    {
        "category": "honey",
        "title": "Sundarban Natural Honey",
        "price": 690,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Sundarban-Natural-Honey-500_bdd695ac45efbd1d36add7d2e7275d76.jpg"
    },
    {
        "category": "meat",
        "title": "Deshi Chicken (with Skin)",
        "price": 750,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/19562001-a9b7-424d-91be-17743fd63639_5e49920eb9ccd2227d58a29b2eb9f56e.jpg"
    },
    {
        "category": "meat",
        "title": "Deshi Duck (Hash)",
        "price": 445,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-05-at-5.42.52-PM-300x300.jpeg"
    },
    {
        "category": "meat",
        "title": "Duck (Hash)",
        "price": 415,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/10/duck-300x300.jpg"
    },
    {
        "category": "meat",
        "title": "Meat Broiler Chicken (Skin Off)",
        "price": 299,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/11/Untitled-1-300x300.jpg"
    },
    {
        "category": "meat",
        "title": "Sonali Chicken (Curry)",
        "price": 260,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/10/dd859f56-c691-4951-a0d0-66c0b960e3cf.jpg"
    },
    {
        "category": "meat",
        "title": "Sonali Chicken (Roast)",
        "price": 360,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/10/dd859f56-c691-4951-a0d0-66c0b960e3cf.jpg"
    },
    {
        "category": "meat",
        "title": "Turkey Meat",
        "price": 510,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/9d26906a-4e7c-4157-8006-6e251d7e6207.jpg"
    },
    {
        "category": "pickle",
        "title": "Bombay Chili Pickle",
        "price": 160,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/09/93079d15-dcb4-4c47-9f22-2282d188fa42-1-300x300.gif"
    },
    {
        "category": "pickle",
        "title": "Boroi Pickle",
        "price": 145,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/09/009ad449-cb33-4459-a24c-7155a3a4ef70-300x300.gif"
    },
    {
        "category": "pickle",
        "title": "Dates Chutney",
        "price": 110,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/dethchuni-1.jpg"
    },
    {
        "category": "pickle",
        "title": "Elephant Apple (Chalta) Pickle",
        "price": 170,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/11/elephant-300x300.jpg"
    },
    {
        "category": "pickle",
        "title": "Garlic Pickle",
        "price": 155,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/Garlic-Pickle-200gm-300x300.jpg"
    },
    {
        "category": "pickle",
        "title": "Hog Plum (amrar achar) Pickle",
        "price": 170,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/10/c606d21f-1dcb-4aca-990f-4c188b70c8f6-300x300.jpg"
    },
    {
        "category": "pickle",
        "title": "Mango Pickle (Kashmiri)",
        "price": 220,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/Mango-Pickle-Kashmiri-400gm-300x300.jpg"
    },
    {
        "category": "pickle",
        "title": "Mango Pickle (Regular)",
        "price": 190,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/08/Mango-Pickle-400gm-300x300.jpg"
    },
    {
        "category": "pickle",
        "title": "Mixed Fruit Chutney",
        "price": 115,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Mixed-Fruit-Chutney.jpg"
    },
    {
        "category": "pickle",
        "title": "Olive Pickle",
        "price": 170,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/11/olive-300x300.jpg"
    },
    {
        "category": "pickle",
        "title": "Prunes (Alubukhar) Chutney",
        "price": 145,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Prunes-Alubukhara-Chutney.jpg"
    },
    {
        "category": "pickle",
        "title": "Tamarind Chutney",
        "price": 80,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/tamarind-chutney-225-gm_44b3d8972a89e7a1ed07f9cda0a22bc5.jpg"
    },
    {
        "category": "snacksAndRefreshment",
        "title": "Almond (Kath Badam)",
        "price": 110,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Almond-Kath-Badam-500_17e39b9920d1ac55526799f3bada8737.jpg"
    },
    {
        "category": "snacksAndRefreshment",
        "title": "Coconut Laddu (Narikeler Naru)",
        "price": 145,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Coconut-Laddu-Narikeler-Naru.jpg"
    },
    {
        "category": "snacksAndRefreshment",
        "title": "Green Tea",
        "price": 170,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Green-Tea.jpg"
    },
    {
        "category": "snacksAndRefreshment",
        "title": "Guava Jelly",
        "price": 195,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/09/guva_jelly-300x300.jpg"
    },
    {
        "category": "snacksAndRefreshment",
        "title": "Hand Made Puffed Rice",
        "price": 35,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Hand-Made-Puffed-Rice-From-Barishal_460ae53a99bb70bb00d22465e4ab3fa2.jpg"
    },
    {
        "category": "snacksAndRefreshment",
        "title": "Khejur Gur (Jhola)",
        "price": 160,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/11/jhula-300x300.jpg"
    },
    {
        "category": "snacksAndRefreshment",
        "title": "Khejur Gur Patali",
        "price": 175,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/11/pathali-300x300.jpg"
    },
    {
        "category": "snacksAndRefreshment",
        "title": "Laccha Semai",
        "price": 70,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Laccha-Semai-400gm.jpg"
    },
    {
        "category": "snacksAndRefreshment",
        "title": "Orange Jelly",
        "price": 220,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/11/orange-300x300.jpg"
    },
    {
        "category": "snacksAndRefreshment",
        "title": "Pineapple Jelly",
        "price": 350,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/09/pineapple-300x300.jpg"
    },
    {
        "category": "snacksAndRefreshment",
        "title": "Premium Black Tea",
        "price": 160,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/e728df7b-5e9e-4950-8dc9-edd8b4f19887_9af5b044135de6039a6e47afe0e67b21.jpg"
    },
    {
        "category": "snacksAndRefreshment",
        "title": "Red Flattened Rice (lal cira)",
        "price": 60,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Red-Flattened-Rice-lal-cira-1_5c94bdedcd074ca61ccb3089ccb1b073.jpg"
    },
    {
        "category": "snacksAndRefreshment",
        "title": "Roasted Cashew Nuts (Nona Kazu Badam)",
        "price": 149,
        "image": "https://www.khaasfood.com/wp-content/uploads/2020/06/Roasted-Cashew-Nuts-Nona-Kazu-Badam.jpg"
    }


]
export default Products;