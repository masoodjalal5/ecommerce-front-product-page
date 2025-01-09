function headersFun(){
    document.title = "DomCOOL";
}
function catalogueFun(){

    const item_title = [
        "Mini Minion",
        "Mini Minion",
        "Mini Minion",
        "Mini Minion",
        "Mini Minion",
        "Mini Minion",
        "Mini Minion",
        "Mini Minion",
        "Mini Minion",
        "Mini Minion" 

    ];
    const item_image = [
        "sources/minion.PNG",
        "sources/minion.PNG",
        "sources/minion.PNG",
        "sources/minion.PNG",
        "sources/minion.PNG",
        "sources/minion.PNG",
        "sources/minion.PNG",
        "sources/minion.PNG",
        "sources/minion.PNG",
        "sources/minion.PNG"
        
    ]
    const item_price = [
        "12.99$",
        "32.99$",
        "12.99$",
        "123.99$",
        "42.99$",
        "67.99$",
        "16.99$"

    ];
    const rating_text = [
        "12",
        "18",
        "170",
        "12",
        "19",
        "45",
        "86"

    ];

    const catalogue_section = document.getElementsByClassName('catalogue');
    var items = item_title.length;
    var item_counter = 0
    for (i = 0; i < (items/4); i++){

        let c_list_container = document.createElement('div');
        c_list_container.className = 'list_container';
        
        for (j = 0; j < 4; j++){
            if (item_counter >= items){
                break;
            }
            
            // link of every item
            let c_item = document.createElement('a');
            c_item.className = 'item';
            
            // image of every item
            let c_item_img = document.createElement('img');
            c_item_img.src = item_image[item_counter];

            // Item Details Title and Price
            let c_item_text = document.createElement('div');
            c_item_text.className = 'item_text';

            let c_item_title = document.createElement('h2');
            c_item_title.className = 'item_title';
            c_item_title.textContent = item_title[item_counter];
            let c_item_price = document.createElement('h1');
            c_item_price.className = 'item_price';
            c_item_price.textContent = item_price[item_counter];

            c_item_text.appendChild(c_item_title)
            c_item_text.appendChild(c_item_price)

            // Rating and Review
            let c_rating = document.createElement('div');
            c_rating.className = 'rating';

            let c_rating_stars = document.createElement('img');
            c_rating_stars.className = 'rating_stars';
            c_rating_stars.src = "sources/stars.png";
            let c_rating_text = document.createElement('p');
            c_rating_text.className = 'rating_text';
            c_rating_text.textContent = 'From ' + rating_text[item_counter] + ' reviews';

            c_rating.appendChild(c_rating_stars);
            c_rating.appendChild(c_rating_text);

            // appending to the a tag
            c_item.appendChild(c_item_img);
            c_item.appendChild(c_item_text);
            c_item.appendChild(c_rating);
            // appending to div container
            c_list_container.appendChild(c_item);

            item_counter += 1;
        }
        
        // appending to section tag
        catalogue_section[0].appendChild(c_list_container);
    }
    
    
}

function socialFun(){

    const social_img = [
        'sources/facebook.png',
        'sources/instagram.png',
        'sources/amazon.png'
    ];

    const socials_section = document.getElementsByClassName('socials');

    let c_social_container = document.createElement('div');
    c_social_container.className = 'social_container';

    for (i = 0; i < 3; i++){
        // social links
        let c_social_links = document.createElement('a');
        c_social_links.className = 'social_links';
        c_social_links.href = '#';

        // Social images
        let c_images = document.createElement('img');
        c_images.src = social_img[i];
        c_images.setAttribute("alt","Social 1");

        c_social_links.appendChild(c_images);
        c_social_container.appendChild(c_social_links);
    }
    socials_section[0].appendChild(c_social_container);
    
}

function scriptFunctions(){

    headersFun();
    catalogueFun();
    socialFun()
}