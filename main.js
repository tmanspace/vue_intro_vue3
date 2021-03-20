const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            description: 'Really nice and soft socks',
            image: './assets/images/socks_green.jpg',
            amount: 8,
            details: ['20% cotton', '30% wool', '50% polyester'],
            variants: [
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'}
            ]
        }
    }
})