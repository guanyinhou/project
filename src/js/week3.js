const vue = new Vue({
    el: '#app',
    data: {
        normal: true,
        openPanel: false,
        openConfirm: false,
        products: [
            {
                id: 1586934917210,
                unit: '台',
                category: '掌上主機',
                title: 'Switch',
                origin_price: 20000,
                price: 9980,
                description: '想玩就玩',
                content: '動森太好玩惹',
                is_enabled: 1,
                imageUrl: 'https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            },
            {
                id: 1196934917910,
                unit: '台',
                category: '主機',
                title: 'PS5 Wifi',
                origin_price: 29999,
                description: '次世代超強規格',
                content: '我也想要換一台 PS5 Wifi',
                price: 9487,
                is_enabled: 0,
                imageUrl: 'https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            },
        ],
        tempProd: {},
    },
    methods: {
        openModal(status,product) {
            switch (status) {
                case 'new':
                    this.normal = false
                    this.openPanel = true
                    this.tempProd = {};
                    break;
                case 'edit':
                    this.normal = false
                    this.openPanel = true
                    this.tempProd = Object.assign({}, product);
                    break;
                case 'delete':
                    this.normal = false
                    this.openConfirm = true
                    this.tempProd = JSON.parse(JSON.stringify(product));
                    break;
            }
        },
        closeModal() {
            this.normal = true
            this.openPanel = false
            this.openConfirm = false
        },
        uploadData(){
            if(this.tempProd.id){
                let id = this.tempProd.id;
                this.products.forEach((item,i)=>{
                    if(item.id===id){
                        this.products[i]=this.tempProd;
                    }
                })
            }else{
                let time = (new Date()).getTime();
                this.tempProd.id = time;
                this.products.push(this.tempProd)
            }
            this.closeModal()
        },
        removeData(){
            if(this.tempProd.id){
                let id = this.tempProd.id;
                this.products.forEach((item,i)=>{
                    if(item.id===id){
                        this.products.splice(i,1);
                        this.tempProd = {}
                    }
                })
            }
            this.closeModal();
        }
    }
})