const searchBtn = document.getElementById('search_category');
searchBtn.addEventListener('click', () => {

    let category = document.getElementById('category').value;
    if (category) {
        let url = '/category/get?category=' + category;
        ajax_get(url, data => {

            render_cards(data);
        });
    }
});