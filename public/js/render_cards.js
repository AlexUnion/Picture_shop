const render_cards = function (data) {
    const img_container = document.getElementById('img-container');
    img_container.innerHTML = '';
    for (let item of data) {
        img_container.innerHTML +=
            `<div class="img-item">
                    <div class="row">
                        <div class="col s12">
                            <div class="card">
                                <div class="card-image">
                                    <img src="./static/img/${item.path}" alt="">
                                    <span class="card-title">${item.title}</span>
                                    <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                                </div>
                                <div class="card-content">
                                    <div class="main__description">
                                        <div class="main__text">Category: </div>
                                        <a class="main__category" href="/category/{{this._doc.category}}">${item.category}</a>
                                        <p class="main__price price">${item.price}</p>
                                    </div>
                                </div>
                                <div class="card-action">
                                    <div class="flex__direction">
                                        <a href="/edit?id=${item._id}" class="link">Редактировать</a>
                                        <a href="#" class="link">Купить</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    }

    beautiPrice();
};