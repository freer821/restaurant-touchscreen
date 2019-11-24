export function calcExtraPrice(content) {
    let extra_price = 0;
    for (let key in content) {
        extra_price += content[key].selected_choice
    }

    return extra_price
}

export function getCartMen(menu) {
    let cartmenu_content = []
    for (let key in menu.content) {
        let selected_choice = menu.content[key].selected_choice;
        cartmenu_content.push(menu.content[key].choices[selected_choice])
    }

    return {
        id: uuidv4(),
        name: menu.name,
        label: menu.label,
        img: menu.img,
        price: menu.price,
        num : 1,
        content:cartmenu_content
    };
}

export function calcTotalPrice(procducts) {
    let total_price = 0;
    for (let key in procducts) {
        total_price += procducts[key].price * procducts[key].num;
    }
    return total_price;
}

export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
