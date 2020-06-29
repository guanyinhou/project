var obj = {
    data: {
        uuid: 'bba8c8a3-a5f2-4a81-91ef-9273532ebb26',
        products: [],
    },
    getData: function () {
        var vm = this;
        var url = `https://course-ec-api.hexschool.io/api/${this.data.uuid}/ec/products`;

        axios.get(url)
            .then(function (response) {
                vm.data.products = response.data.data;
                vm.render();
            })
    },
    render: function () {
        var app = document.querySelector('.prod-area');
        var products = this.data.products;
        var str = '';
        products.forEach(function (item) {
            str += `
            <div class="prod">
                <div class="prod-frame">
                    <div class="prod-img">
                        <img src="${item.imageUrl[0]}" alt="">
                    </div>
                </div>
                <a class="prod-title" href="">${item.title}</a>
                <div class="prod-type"><em>${item.category}</em></div>
                <div class="prod-content">${item.content}</div>
                <a href="" class="cont-read">. . . 繼續閱讀</a>
                <div class="prod-price">
                    ${item.price}<span class="old">${item.origin_price}</span>
                    <a href=""><i class="fa fa-cart-plus"></i></a>
                </div>
            </div>`;
        });
        app.innerHTML = str;
    }
}

obj.getData();