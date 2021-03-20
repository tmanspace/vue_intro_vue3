const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            description: 'Really nice and soft socks',
            image: './assets/images/socks_green.jpg',
            amount: 8,
            details: ['20% cotton', '30% wool', '50% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ],
            cart: 0
        }
    },
    methods: {
        addCart() {
            this.cart += 1;
        },
        updateImage(variantImage) {
            this.image = variantImage;
        }
    },
})