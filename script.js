// ===== PRELOADER LOGIC =====
const preloader = document.getElementById('preloader');
const mainContent = document.getElementById('main-content');
window.onload = () => {
    preloader.classList.add('hidden');
    mainContent.style.opacity = '1';
};

// ===== MAIN SCRIPT LOGIC =====
// 'defer' attribute के कारण, DOMContentLoaded की अब आवश्यकता नहीं है, लेकिन यह अच्छी प्रैक्टिस है।
document.addEventListener('DOMContentLoaded', () => {
    // --- CONFIGURATION ---
    const ADMIN_PASSWORD = 'AKASH7777';
    const ADMIN_PHONE_NUMBER = '7822976749';
    
    // --- ALL PRODUCTS ARE STORED HERE ---
    const allProducts = [
        // --- BOY PRODUCTS ---
        { name: 'OXO Printed T-Shirt Combo', price: 160, imageUrl: 'https://rukminim2.flixcart.com/image/704/844/xif0q/t-shirt/t/i/i/m-fk-sap-2-b1261-oxo-pis1238-zoom-jaqque-original-imah28tdj7upwtg2.jpeg?q=60&crop=false', sizes: ['M', 'L', 'XL'], description: 'Min. Order: 2 items', sourceLink: 'https://www.wishlink.com/share/sajvn', category: ['t-shirt'], gender: 'boy', exclusive: false },
        { name: "Men's Checkered Casual Shirt", price: 225, imageUrl: 'https://rukminim3.flixcart.com/image/786/972/xif0q/shopsy-shirt/7/2/n/m-iut-459-mark-leurent-original-imahchatpwhphtvc.jpeg?q=60&crop=false', sizes: ['M', 'L', 'XL'], description: 'Min. Order: 2 items', sourceLink: 'https://www.wishlink.com/share/nm7q2h', category: ['shirt'], gender: 'boy', exclusive: true },
        { name: "Men's Analog Leather Strap Watch", price: 150, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/shopsy-watch/7/c/9/1-sil-jmh-enterprise-men-original-imagw26ugszbhwnm.jpeg?q=60&crop=false', sizes: ['One Size'], description: 'Min. Order: 2 items', sourceLink: 'https://www.wishlink.com/share/7sujc', category: ['watches'], gender: 'boy', exclusive: false },
        { name: "Men's Sport Shorts Combo", price: 132, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/shopsy-short/v/h/z/xxl-shp-d-gry-a-gry-xxl-regular-shorts-flyzen-men-original-imahbtgbn68rbh4v.jpeg?q=60&crop=false', sizes: ['M', 'L', 'XL'], description: 'Min. Order: 2 items', sourceLink: 'https://www.wishlink.com/share/n696ws', category: ['shorts'], gender: 'boy', exclusive: false },
        { name: "Men's Textured Casual Shirt", price: 189, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/shirt/y/1/b/m-f-popcorn-white-black-vrlooks-original-imahbydsrqf4ujfv.jpeg?q=60&crop=false', sizes: ['M', 'L', 'XL'], description: 'Min. Order: 2 items', sourceLink: 'https://www.wishlink.com/share/s29d5', category: ['shirt'], gender: 'boy', exclusive: false },
        { name: 'Men Printed Polo Neck White T-Shirt', price: 499, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/t-shirt/z/j/v/xl-polo-losangeles-culish-original-imah6qzsru23ht5z.jpeg?q=60&crop=false', sizes: ['S', 'M', 'L', 'XL'], description: 'Min. Order: 1 item', sourceLink: 'https://www.shopsy.in/culish-printed-men-polo-neck-white-t-shirt/p/itm3416e08a55e06?pid=TSHH6QZT6VXH65NQ', category: ['t-shirt'], gender: 'boy', exclusive: false },
        { name: 'Men Loose Fit Mid Rise Light Blue Jeans', price: 529, imageUrl: 'https://rukminim2.flixcart.com/image/768/922/xif0q/jean/y/b/f/36-mxn-baggy-103-meixn-original-imahepdffqwhxxzb.jpeg?q=60&crop=false', sizes: ['28', '30', '32', '34', '36'], description: 'Min. Order: 1 item', sourceLink: 'https://dl.flipkart.com/s/fS6rUauuuN', category: ['pant-boys'], gender: 'boy', exclusive: false },
        { name: 'Printed Men Pink, Grey T-Shirt', price: 99, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/shopsy-t-shirt/s/n/n/m-men-typography-round-neck-cotton-blend-red-t-shirt-rimmy-original-imah7dfctrazvfdm.jpeg?q=60&crop=false', sizes: ['M'], description: 'Min. Order: 2 items', sourceLink: 'https://www.shopsy.in/printed-men-pink-grey-t-shirt/p/itm4623010683733?pid=XPTH3Z3PFVBZEZKT', category: ['t-shirt'], gender: 'boy', exclusive: false },
        { name: 'Men Loose Fit Mid Rise Black Jeans', price: 439, imageUrl: 'https://rukminim2.flixcart.com/image/768/1152/xif0q/jean/j/w/w/34-denimj-lb-baggy48-denim-fit-original-imahf55zgnx8r7wb.jpeg?q=60&crop=false', sizes: ['28', '30', '32', '34', '36'], description: 'Min. Order: 1 item', sourceLink: 'https://dl.flipkart.com/s/cmla6jNNNN', category: ['pant-boys'], gender: 'boy', exclusive: false },
        { name: 'Premium Stylish Sneakers For Men', price: 444, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/shoe/h/3/a/10-kus2003-blue-10-kaushal-blue-original-imah2d4vztagfnat.jpeg?q=60&crop=false', sizes: ['6', '7', '8'], description: 'Min. Order: 1 item', sourceLink: 'https://www.shopsy.in/comfortable-premium-stylish-unique-trendy-popular-kus2003-blue-men-sneakers/p/itmd21d52fc3bdde?pid=EOEH4PHKAAJXV2JB', category: ['footwear'], gender: 'boy', exclusive: false },
        { name: 'Men Checkered Zip Neck White T-Shirt', price: 399, imageUrl: 'https://rukminim2.flixcart.com/image/768/922/xif0q/t-shirt/b/r/m/l-64518810-try-this-original-imah9b23gtxksszv.jpeg?q=60&crop=false', sizes: ['M', 'L', 'XL'], description: 'Min. Order: 1 item', sourceLink: 'https://dl.flipkart.com/s/cmKEQpNNNN', category: ['t-shirt'], gender: 'boy', exclusive: false },
        { name: 'Solid Men Track Suit - Black', price: 439, imageUrl: 'https://rukminim3.flixcart.com/image/786/972/xif0q/track-suit/x/6/p/xl-tk-black-02-xl-abdani-original-imah92hzvzxybsnm.jpeg?q=60&crop=false', sizes: ['M', 'L', 'XL'], description: 'Min. Order: 1 item', sourceLink: 'https://www.shopsy.in/abdani-solid-men-track-suit/p/itm5c4bc7dd261f3?pid=TKSHFYDM6CBGVJRH', category: ['t-shirt', 'shorts'], gender: 'boy', exclusive: false },
        { name: 'Solid Men Track Suit - Cream', price: 439, imageUrl: 'https://rukminim3.flixcart.com/image/786/972/xif0q/track-suit/7/i/d/xl-tk-cream-02-xl-abdani-original-imah92hfsf4cfvga.jpeg?q=60&crop=false', sizes: ['M', 'L', 'XL'], description: 'Min. Order: 1 item', sourceLink: 'https://www.shopsy.in/abdani-solid-men-track-suit/p/itmc1546ef02ecc4?pid=TKSHFYDMHFYTSFAF', category: ['t-shirt'], gender: 'boy', exclusive: true },
        { name: 'Printed Men Beige T-Shirt', price: 342, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/shopsy-t-shirt/c/f/h/m-sy-ovts-1401-camel-flect-original-imahbfuqhmupbuvq.jpeg?q=60&crop=false', sizes: ['M', 'L', 'XL', 'XXL'], description: 'Min. Order: 1 item', sourceLink: 'https://www.shopsy.in/printed-men-beige-t-shirt/p/itmc3c3febe346e4?pid=XPTHBFUQXTFW33PX', category: ['t-shirt'], gender: 'boy', exclusive: false },
        { name: 'Printed Men purple T-Shirt', price: 342, imageUrl: 'https://rukminim3.flixcart.com/image/786/972/xif0q/shopsy-t-shirt/p/f/k/l-sy-ovts-1401-lavender-flect-original-imahbfuqasuut5sc.jpeg?q=60&crop=false', sizes: ['M', 'L', 'XL', 'XXL'], description: 'Min. Order: 1 item', sourceLink: 'https://www.shopsy.in/printed-men-purple-t-shirt/p/itm1fdfac4a252d8?pid=XPTHBFUQQWGQ5GKB', category: ['t-shirt'], gender: 'boy', exclusive: true },
        { name: 'Printed Men Black T-Shirt', price: 342, imageUrl: 'https://rukminim3.flixcart.com/image/786/972/xif0q/shopsy-t-shirt/s/1/p/xxl-sy-ovts-1402-black-flect-original-imahbha3xkmyfqjn.jpeg?q=60&crop=false', sizes: ['XL', 'XXL'], description: 'Min. Order: 1 item', sourceLink: 'https://www.shopsy.in/printed-men-black-t-shirt/p/itm8ab8e12ce6385?pid=XPTHBFUQJHTMX7RT', category: ['t-shirt'], gender: 'boy', exclusive: true },
        { name: 'Striped Men Grey T-Shirt', price: 149, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/shopsy-t-shirt/g/t/v/m-shopsy363134-rimmy-textile-original-imahypffzsghcjdm.jpeg?q=60&crop=false', sizes: ['S', 'M', 'L', 'XL'], description: 'Min. Order: 2 items', sourceLink: 'https://www.shopsy.in/striped-men-grey-t-shirt/p/itma4c804c51701a?pid=XPTGHUUKZFZXK9YD', category: ['t-shirt'], gender: 'boy', exclusive: false },
        { name: 'Striped Men Yellow T-Shirt', price: 159, imageUrl: 'https://rukminim3.flixcart.com/image/786/972/xif0q/t-shirt/l/d/9/xl-fk-mu1251-side-patta-3-oishee-original-imah2h9gwcrb8feb.jpeg?q=60&crop=false', sizes: ['S', 'M', 'L', 'XL'], description: 'Min. Order: 2 items', sourceLink: 'https://www.shopsy.in/striped-men-yellow-t-shirt/p/itmdde54bd113163?pid=XPTGHUUKZVHW4MTJ', category: ['t-shirt'], gender: 'boy', exclusive: false },
        { name: 'Color Block Men White, Black T-Shirt', price: 189, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/shopsy-t-shirt/v/q/v/m-cb-wb-516-m-farrowx-original-imah8vrdfdvdnmsf.jpeg?q=60&crop=false', sizes: ['M', 'L', 'XL'], description: 'Min. Order: 1 item', sourceLink: 'https://www.shopsy.in/color-block-men-white-black-t-shirt/p/itm4bbf69efad52c?pid=XPTGNKV2NRVBJYGH', category: ['t-shirt'], gender: 'boy', exclusive: false },
        { name: 'Color Block Men Black T-Shirt', price: 199, imageUrl: 'https://rukminim3.flixcart.com/image/786/972/xif0q/shopsy-t-shirt/j/q/o/m-black-nike-m-farrowx-original-imah8vrdjvauk7rz.jpeg?q=60&crop=false', sizes: ['M', 'L', 'XL'], description: 'Min. Order: 1 item', sourceLink: 'https://www.shopsy.in/color-block-men-black-t-shirt/p/itm7d4f1b834957c?pid=XPTGMPZUMDYTYRQU', category: ['t-shirt'], gender: 'boy', exclusive: false },
        { name: 'Printed Men White, Black T-Shirt', price: 101, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/shopsy-t-shirt/x/r/k/xl-fh-tshirt-combo2-fashionhub-original-imagqvzvpbygtuhe.jpeg?q=60&crop=false', sizes: ['S', 'M', 'L', 'XL'], description: 'Color: White, black', sourceLink: 'https://www.shopsy.in/printed-men-white-black-t-shirt/p/itm20682c2b13e26?pid=XPTGQVZWA58UR8CC', category: ['t-shirt'], gender: 'boy', exclusive: false },
        { name: 'Printed Men Green, Grey T-Shirt', price: 106, imageUrl: 'https://i.ibb.co/Pz6yH4mT/m-zmbs-vrma-original-imah5gecxbyudmgb.png', sizes: ['M'], description: 'Min. Order: 2 items', sourceLink: 'https://www.shopsy.in/printed-men-green-grey-t-shirt/p/itmd914b1d4a871f?pid=XPTH5GECYAVQYXJD', category: ['t-shirt'], gender: 'boy', exclusive: false },
        { name: 'Printed Men Orange, White T-Shirt', price: 150, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/shopsy-t-shirt/l/h/q/m-zmbs-vrma-original-imahcecufy7arzpd.jpeg?q=60&crop=false', sizes: ['L', 'XL'], description: 'Min. Order: 2 items', sourceLink: 'https://www.shopsy.in/printed-men-orange-white-t-shirt/p/itmf16dc2ac6496e?pid=XPTHCEDYNYZGHVKZ', category: ['t-shirt'], gender: 'boy', exclusive: true },
        { name: 'Printed Men White, Black T-Shirt', price: 150, imageUrl: 'https://rukminim3.flixcart.com/image/786/972/xif0q/shopsy-t-shirt/x/p/p/m-zmbs-vrma-original-imahcecu7emq7hhz.jpeg?q=60&crop=false', sizes: ['L', 'XL'], description: 'Min. Order: 2 items', sourceLink: 'https://www.shopsy.in/printed-men-white-black-t-shirt/p/itmc9222be4e6a10?pid=XPTHCEDYFKNDHYZZ', category: ['t-shirt'], gender: 'boy', exclusive: true },
        { name: 'Men Striped Casual Green Shirt', price: 299, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/shopsy-shirt/s/z/o/m-hkv-111-sh-aadi-original-imah4dsgamvb9dpg.jpeg?q=60&crop=false', sizes: ['M', 'L', 'XL'], description: 'Introducing our remarkable Striped Shirt, a true fashion statement that combines classic charm with modern style. Carefully curated and crafted with meticulous attention to detail, this shirt is desig... ', sourceLink: 'https://www.shopsy.in/men-striped-casual-green-shirt/p/itm74dbf0db53d06?pid=XSRGTYZFSHA7ZZK3&marketplace=FLIPKART&cmpid=product.share.pp&_refId=PP.58a85566-04f7-457f-a97c-00d2b6a7f87f.XSRGTYZFSHA7ZZK3&lid=LSTXSRGTYZFSHA7ZZK3DOINEN&_appId=CL', category: ['shirt'], gender: 'boy', exclusive: true },
        { name: 'Men Black Sandals', price: 379, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/l3ahpjk0/shopsy-sandal/v/p/z/9-sportblk-sport-black-original-imagefqysrzchxnh.jpeg?q=60&crop=false', sizes: ['7', '8', '9'], description: 'Min. Order: 1 item', sourceLink: 'https://www.shopsy.in/men-black-sandals/p/itm512d114616e38?pid=XSNGG9Z5DHXZYT3S', category: ['footwear'], gender: 'boy', exclusive: false },
        
        // --- GIRL PRODUCTS ---
        { name: 'Printed Women White, Pink T-Shirt', price: 207, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/shopsy-t-shirt/j/m/b/xl-combo-polyester-women-white-peach-tshirt-attirea-original-imahdp2v7ysgzg9z.jpeg?q=60&crop=false', sizes: ['S', 'M', 'L'], description: 'Min. Order: 2 items', sourceLink: 'https://www.shopsy.in/printed-women-white-pink-t-shirt/p/itmcc30846f493c8?pid=XPTHDP2VKXA7V4EB', category: ['t-shirt', 'shorts'], gender: 'girl', exclusive: false },
        { name: 'Women Red Dress', price: 429, imageUrl: 'https://rukminim3.flixcart.com/image/786/972/xif0q/shopsy-dress/f/t/q/m-dr11324-sheetal-associates-original-imah8q42erzuhuzv.jpeg?q=60&crop=false', sizes: ['S', 'M', 'L', 'XL', 'XXL'], description: 'Min. Order: 1 item', sourceLink: 'https://www.shopsy.in/women-maxi-red-dress/p/itmffbb61d9a40bf?pid=XDRH8Q44ZMKHNE2Z', category: ['dress'], gender: 'girl', exclusive: true },
        { name: 'Women Kurti and Dupatta Set', price: 269, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/shopsy-ethnic-set/g/i/t/xxl-1k1df-einfach-gehen-original-imah3qy3mnehcun5.jpeg?q=60&crop=false', sizes: ['M', 'L', 'XL', 'XXL'], description: 'Min. Order: 1 item', sourceLink: 'https://www.shopsy.in/women-kurta-dupatta-set/p/itmb26ff4f349658?pid=SEVH3QY8HZY2UCTV', category: ['dress'], gender: 'girl', exclusive: false },
        { name: 'Women Kurti and Pant Set', price: 399, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/ethnic-set/8/m/u/xxl-straightpinkbandejset-jmenterprises-original-imahyg89auwzeuhv.jpeg?q=60&crop=false', sizes: ['S', 'M', 'XL', 'XXL'], description: 'Min. Order: 1 item', sourceLink: 'https://www.shopsy.in/women-kurta-pant-set/p/itm3289fed670863?pid=SEVGGJG4HQ5FEDQC', category: ['dress'], gender: 'girl', exclusive: false },
        { name: 'Women Kurti, Pant & Dupatta Set - Black', price: 196, imageUrl: 'https://rukminim1.flixcart.com/image/770/924/xif0q/ethnic-set/c/q/v/xl-fg-1043-black-xl-mf-hayat-original-imaghgyjrh9yjxrf.jpeg?q=60&crop=false', sizes: ['XXS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'], description: 'Min. Order: 1 item', sourceLink: 'https://www.meesho.com/s/p/35pwo2?utm_source=s_cc', category: ['dress'], gender: 'girl', exclusive: false },
        { name: 'Women Kurti, Pant & Dupatta Set - Green', price: 196, imageUrl: 'https://rukminim1.flixcart.com/image/770/924/xif0q/ethnic-set/5/d/a/l-fg-1043-green-l-mf-hayat-original-imaghgyj6jwx2zmz.jpeg?q=60&crop=false', sizes: ['XXS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'], description: 'Min. Order: 1 item', sourceLink: 'https://www.meesho.com/s/p/35pwo3?utm_source=s_cc', category: ['dress'], gender: 'girl', exclusive: false },
        { name: 'Women Kurti, Pant & Dupatta Set - Red', price: 196, imageUrl: 'https://images-r.meesho.com/images/products/75734782/mehny_512.avif', sizes: ['XXS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'], description: 'Min. Order: 1 item', sourceLink: 'https://www.meesho.com/s/p/35pwo4?utm_source=s_cc', category: ['dress'], gender: 'girl', exclusive: false },
        { name: 'Women Embroidered Kurti (Purple)', price: 249, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/shopsy-kurta/p/s/r/xl-mw-sop-01-welcomekurtis-original-imah4n6amz9nrebg.jpeg?q=60&crop=false', sizes: ['S', 'M', 'L', 'XXL'], description: 'Min. Order: 1 item', sourceLink: 'https://www.shopsy.in/women-embroidered-kurta/p/itm093986c15f4dd?pid=KUUGZFWYPZAAMBMX', category: ['dress'], gender: 'girl', exclusive: false },
        { name: 'Women Chikan Embroidery Kurti (Multicolor)', price: 199, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/shopsy-kurta/p/m/m/s-pompom-top-combo-viranchi-original-imagusuz6mhmaykd.jpeg?q=60&crop=false', sizes: ['S', 'M', 'XL', 'XXL'], description: 'Min. Order: 2 items', sourceLink: 'https://www.shopsy.in/women-chikan-embroidery-kurta/p/itm4303220f00595?pid=KUUGWMEFSZH9PFFQ', category: ['dress'], gender: 'girl', exclusive: false },
        { name: 'Women Chikan Embroidery Kurti (Multicolor)', price: 221, imageUrl: 'https://rukminim3.flixcart.com/image/786/972/xif0q/shopsy-kurta/j/y/x/xl-pompom-top-combo-viranchi-original-imagusuzkwshg4bg.jpeg?q=60&crop=false', sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'], description: 'Min. Order: 2 items', sourceLink: 'https://www.shopsy.in/women-chikan-embroidery-kurta/p/itmba19b2c5ea756?pid=KUUGWMDPBYNCAFG7', category: ['dress'], gender: 'girl', exclusive: false },
        { name: 'Women Chikan Embroidery Kurti (Multicolor)', price: 229, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/shopsy-kurta/t/o/3/m-pompom-top-combo-viranchi-original-imagusuzm3akqebb.jpeg?q=60&crop=false', sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'], description: 'Min. Order: 2 items', sourceLink: 'https://www.shopsy.in/women-chikan-embroidery-kurta/p/itmaa309db83d321?pid=KUUGWME2TZGUFZ94', category: ['dress'], gender: 'girl', exclusive: false },
        { name: 'Women Printed Kurti (Multicolor)', price: 264, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/kurta/h/b/p/s-bada-gala-maroon-fingure-pink-auzaai-collection-original-imahdugyrsjtfvhg.jpeg?q=60&crop=false', sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'], description: 'Min. Order: 2 items', sourceLink: 'https://www.shopsy.in/women-printed-kurta/p/itm0e5599a444995?pid=KUUHDVJPRWAQZGHK', category: ['dress'], gender: 'girl', exclusive: false },
        { name: 'Women Kurti and Dupatta Set', price: 499, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/shopsy-kurta/x/a/3/xl-rani-pink-1-fillwork-original-imahbzvpryxg38ey.jpeg?q=60&crop=false', sizes: ['S', 'M', 'L', 'XL', 'XXL'], description: 'Min. Order: 1 item', sourceLink: 'https://www.shopsy.in/women-kurta-dupatta-set/p/itm16ff359cc6539?pid=SEVHBPK76J4RFVZG', category: ['dress'], gender: 'girl', exclusive: false },
        { name: 'Bellavita Date Perfume for Women|Notes of Pink Pepper, Red Fruits| Eau de Parfum - 20 ml (For Women)', price: 148, imageUrl: 'https://bellavitaorganic.com/cdn/shop/files/4_c99b932f-3776-441d-a29d-e78cfd2194c6.jpg?v=1712925686&width=1100', sizes: ['Free Size'], description: 'Min. Order: 2 items', sourceLink: '#', category: ['perfumes'], gender: 'girl', exclusive: false }
    ];
    
    // --- OTHERS CATEGORY PRODUCTS ---
    const otherProducts = [
        { name: 'Wayfarer, Sports, Spectacle , Retro Square, Oval Sunglasses', price: 150, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/sunglass/v/y/k/free-size-rdy076-imported-wayfare-roadway-original-imah3geegppq4gzk.jpeg?q=60&crop=false', sizes: ['Free Size'], description: 'Min. Order: 1 item', sourceLink: 'https://www.shopsy.in/wayfarer-sports-spectacle-retro-square-oval-sunglasses/p/itm14b60b56fa74f?pid=SXNHAKT9CDHMXFYF', category: ['glasses'], gender: 'other', exclusive: true },
        { name: 'winelam SRK tam doa diptyqeu trending Eau de Parfum - 50 ml', price: 699, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/perfume/l/j/u/50-srk-tam-dao-diptyque-trending-perfume-eau-de-parfum-winelam-original-imahbxugzsnwpejh.jpeg?q=60&crop=false', sizes: ['50 ml'], description: 'Min. Order: 1 item', sourceLink: 'https://www.shopsy.in/winelam-srk-tam-doa-diptyqeu-trending-eau-de-parfum-50-ml/p/itm6c347db5fdee3?pid=VSZHDNXYNYZ5Q6TW', category: ['perfumes'], gender: 'other', exclusive: true },
        { name: 'Stainless Steel Cup Stand / Cup Holder Cup Kitchen Rack', price: 242, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/klwmufk0/kitchen-rack/p/g/p/6405-shopme-store-original-imagyxmnh7baktdt.jpeg?q=60&crop=false', sizes: ['Free Size'], description: 'Min. Order: 1 item', sourceLink: '#', category: ['kitchen-products'], gender: 'other', exclusive: false },
        { name: 'Push Chopper (Press and chop Technology ) 950ML with 4 Stainless Steel Blades Vegetable & Fruit Chopper (1 Push Chopper)', price: 199, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/chopper/n/t/g/push-chopper-quick-chopper-chop-churn-vegetables-dry-fruits-push-original-imahbbzfqn6pwesm.jpeg?q=60&crop=false', sizes: ['Free Size'], description: '950ML with 4 Blades', sourceLink: 'https://www.shopsy.in/push-chopper-press-chop-technology-950ml-4-stainless-steel-blades-vegetable-fruit/p/itm1fa2620bb6dd7?pid=XCOGGFHAKNS6HYYY', category: ['kitchen-products'], gender: 'other', exclusive: true },
        { name: 'Attractive push chopper Vegetable & Fruit Chopper (2 in 1 puch chopper)', price: 196, imageUrl: 'https://rukminim3.flixcart.com/image/784/972/xif0q/chopper/k/u/n/kitchen-tool-push-chopper-prajjwalpvt-original-imah23cud6kpnnf2.jpeg?q=60&crop=false', sizes: ['Free Size'], description: '2 in 1 Push Chopper', sourceLink: 'https://www.shopsy.in/attractive-push-chopper-vegetable-fruit/p/itm3aee45a2f5734?pid=XCOH29P8GVQVF2ZC', category: ['kitchen-products'], gender: 'other', exclusive: false }
    ];
    const allProductsCombined = [...allProducts, ...otherProducts];
    
    // --- GLOBAL STATE ---
    let currentGender = 'boy';
    let currentSubcategory = 'all';
    
    // --- DOM ELEMENTS ---
    const productGrid = document.getElementById('product-grid');
    const genderFilterContainer = document.querySelector('.gender-filter-buttons');
    const subcategorySelect = document.getElementById('subcategory-select');
    const adminLoginModal = document.getElementById('admin-login-modal-overlay');
    const adminPanelModal = document.getElementById('admin-panel-modal-overlay');
    const orderModal = document.getElementById('order-modal-overlay');
    const menuButton = document.getElementById('menu-button');
    const mainNav = document.getElementById('main-nav');
    const navBackdrop = document.getElementById('nav-backdrop');
    const navAdminLink = document.getElementById('nav-admin-link');
    const navWhatsappLink = document.getElementById('nav-whatsapp-link');

    // --- HELPER FUNCTIONS ---
    const openModal = (modal) => {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    };
    const closeModal = (modal) => {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    };
    
    function closeAllSelects(exceptThis) {
        document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
            if (wrapper.querySelector('.select-selected') !== exceptThis) {
                wrapper.querySelector('.select-items').style.display = 'none';
                wrapper.closest('.product-card').classList.remove('product-card--focused');
            }
        });
    }
    
    function setupCustomSelects() {
        document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
            const selected = wrapper.querySelector('.select-selected');
            const items = wrapper.querySelector('.select-items');
            const hiddenSelect = wrapper.querySelector('select');
            const card = wrapper.closest('.product-card');
            
            selected.addEventListener('click', e => {
                e.stopPropagation();
                const isAlreadyOpen = items.style.display === 'block';
                closeAllSelects(null);
                if (!isAlreadyOpen) {
                    items.style.display = 'block';
                    card.classList.add('product-card--focused');
                }
            });
            
            items.querySelectorAll('div').forEach(option => {
                option.addEventListener('click', function() {
                    selected.textContent = this.textContent;
                    hiddenSelect.value = this.textContent.replace('Size: ', '').trim();
                    closeAllSelects(null);
                });
            });
        });
    }
    
    // --- RENDERING LOGIC ---
    function renderProducts() {
        if (!productGrid) return;
        let filteredProducts = [];
        const productsInReverse = [...allProductsCombined].reverse();
        
        if (currentGender === 'exclusive') {
            filteredProducts = productsInReverse.filter(p => p.exclusive);
        } else {
            const sourceProducts = (currentGender === 'other') ? otherProducts : allProducts;
            let genderFiltered = [...sourceProducts].reverse().filter(p => p.gender === currentGender);
            
            if (currentSubcategory !== 'all') {
                filteredProducts = genderFiltered.filter(p => p.category.includes(currentSubcategory));
            } else {
                filteredProducts = genderFiltered;
            }
        }
        
        productGrid.innerHTML = filteredProducts.length > 0 ? filteredProducts.map(product => `
            <div class="product-card ${product.exclusive ? 'product-card--exclusive' : ''}">
                <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">₹${product.price} per item</p>
                    <p class="product-description">${product.description}</p>
                    <div class="custom-select-wrapper">
                        <select class="size-selector">${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}</select>
                        <div class="select-selected">Size: ${product.sizes[0] || 'N/A'}</div>
                        <div class="select-items">${product.sizes.map(size => `<div>Size: ${size}</div>`).join('')}</div>
                    </div>
                    <button class="buy-now-btn" data-name="${product.name}" data-price="${product.price}">Buy Now</button>
                </div>
            </div>`).join('') : `<p style="text-align:center; grid-column: 1/-1;">No products found in this category.</p>`;
        
        setupCustomSelects();
    }
    
    function populateSubcategoryDropdown() {
        const subcategoryContainer = document.getElementById('subcategory-container');
        if (currentGender === 'exclusive' || currentGender === 'other') {
            subcategoryContainer.style.display = 'none';
            return;
        }
        
        subcategoryContainer.style.display = 'flex';
        subcategorySelect.innerHTML = '';
        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.textContent = 'All Products';
        subcategorySelect.appendChild(allOption);
        
        const genderProducts = allProducts.filter(p => p.gender === currentGender);
        const categories = [...new Set(genderProducts.flatMap(p => p.category))];
        
        categories.sort().forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            subcategorySelect.appendChild(option);
        });
        currentSubcategory = 'all';
        subcategorySelect.value = 'all';
    }
    
    // --- ADMIN PANEL ---
    function populateAdminPanel() {
        const tbody = document.getElementById('admin-links-tbody');
        tbody.innerHTML = allProductsCombined.map(product => `
            <tr>
                <td>
                    <img src="${product.imageUrl}" alt="${product.name}" class="admin-panel-product-img">
                    <span>${product.name}</span>
                </td>
                <td><a href="${product.sourceLink}" target="_blank">View Source</a></td>
            </tr>`).join('');
    }
    
    // --- EVENT LISTENERS ---
    function closeSideNav() {
        menuButton.classList.remove('active');
        mainNav.classList.remove('open');
        navBackdrop.classList.remove('visible');
        document.body.classList.remove('nav-open');
    }

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('active');
        mainNav.classList.toggle('open');
        navBackdrop.classList.toggle('visible');
        document.body.classList.toggle('nav-open');
    });

    navBackdrop.addEventListener('click', closeSideNav);

    navAdminLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeSideNav();
        setTimeout(() => openModal(adminLoginModal), 300);
    });
    
    const whatsappMessage = encodeURIComponent("Hello! I'm interested in your products.");
    navWhatsappLink.href = `https://wa.me/${ADMIN_PHONE_NUMBER}?text=${whatsappMessage}`;
    
    document.getElementById('admin-login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const passwordInput = document.getElementById('admin-password');
        if (passwordInput.value === ADMIN_PASSWORD) {
            closeModal(adminLoginModal);
            populateAdminPanel();
            setTimeout(() => openModal(adminPanelModal), 300);
            passwordInput.value = '';
        }
    });
    
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => closeModal(e.target.closest('.modal-overlay')));
    });
    
    genderFilterContainer.addEventListener('click', (e) => {
        const clickedButton = e.target.closest('.gender-btn');
        if (!clickedButton || clickedButton.classList.contains('active')) return;
        currentGender = clickedButton.dataset.gender;
        genderFilterContainer.querySelector('.active').classList.remove('active');
        clickedButton.classList.add('active');
        populateSubcategoryDropdown();
        renderProducts();
    });
    
    subcategorySelect.addEventListener('change', () => {
        currentSubcategory = subcategorySelect.value;
        renderProducts();
    });
    
    productGrid.addEventListener('click', e => {
        if (e.target.classList.contains('buy-now-btn')) {
            const card = e.target.closest('.product-card');
            const name = e.target.dataset.name;
            const price = e.target.dataset.price;
            const size = card.querySelector('.size-selector').value;
            
            document.getElementById('form-product-name-display').textContent = name;
            document.getElementById('form-product-price-display').textContent = price;
            document.getElementById('form-product-size-display').textContent = size;
            openModal(orderModal);
        }
    });
    
    document.getElementById('order-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const productName = document.getElementById('form-product-name-display').textContent;
        const productPrice = document.getElementById('form-product-price-display').textContent;
        const productSize = document.getElementById('form-product-size-display').textContent;
        const customerName = document.getElementById('customer-name').value;
        const customerPhone = document.getElementById('customer-phone').value;
        const customerAddress = document.getElementById('customer-address').value;
        const quantity = document.getElementById('customer-quantity').value;
        
        const message = `*🛍️ New Order Request!*\n\n*Product:* ${productName}\n*Price:* ₹${productPrice} per item\n*Size:* ${productSize}\n*Quantity:* ${quantity}\n\n---\n\n*Customer Details:*\n*Name:* ${customerName}\n*Phone:* ${customerPhone}\n*Address:* ${customerAddress}`;
        const whatsappUrl = `https://wa.me/${ADMIN_PHONE_NUMBER}?text=${encodeURIComponent(message.trim())}`;
        
        window.open(whatsappUrl, '_blank');
        closeModal(orderModal);
        e.target.reset();
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-select-wrapper')) {
            closeAllSelects(null);
        }
    });
    
    // --- INITIALIZATION ---
    populateSubcategoryDropdown();
    renderProducts();
});
