const searchBtn = document.getElementById('search_by_title');
searchBtn.addEventListener('click', () => {
    let title = document.getElementById('icon_prefix').value;
    let category = document.getElementById('category').value;
    if (title) {
        let url;
        if (category) {
            url = `/search/get?title=${title}&category=${category}`;
        } else {
            url = '/search/get?title=' + title;
        }
        ajax_get(url, data => {
            render_cards(data);
        });
    }
});