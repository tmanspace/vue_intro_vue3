const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            description: 'Really nice and soft socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['20% cotton', '30% wool', '50% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
            ],
            cart: 0
        }
    },
    methods: {
        addCart() {
            this.cart += 1;
        },
        updateVariant(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product;
        }, 
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        }
    }
})