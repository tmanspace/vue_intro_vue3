app.component('product-display', {
    template: 
    /*html*/
    `<div class="product-display">
        <div class="product-container">
        <div class="product-image">
            <img :src="image" :class="{'out-of-stock-img': !inStock}" :alt="description">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <ul>
            <li v-for="detail in details">
                {{detail}}
            </li>
            </ul>
            <div 
            class="variant color-circle" 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)"
            :style="{backgroundColor: variant.color}">
            </div>
            <p>{{ description }}</p>
            <button class="button" :class="{disabledButton: !inStock}" :disabled="!inStock" v-on:click="addCart">Add to cart</button>
        </div>
        </div>
    </div>`,
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
});