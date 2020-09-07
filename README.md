# clothes-retail

### Project setup
`npm install`

### Compiles and hot-reloads for development
`npm run serve`

### Compiles and minifies for production
`npm run build`

### Run Cypress Tests - test cart, coupon codes, etc.
`npm test` or `npm t`

## Coupon codes to try

- `fiveoff` - takes £5 off transaction
- `tenner` - takes £10 off transaction if cart totals £50 or more
- `flipflop` - takes £15 off transaction if cart totals above £75 and cart includes footwear

Products are in one column on mobile, but expand to two or three columns in larger viewports. I acheived this with nested CSSgrids.

## App layout
`App.vue` - has the general html/styles with all children components
Everything is on the same page, so no routing.

`/store/index.js` - includes mutations, actions, and product data. This is Vuex.

`Product.vue` - list of items on the page
`Navbar.vue` - contains logo and cart icon
`Cart.vue` - presents any items added to the cart along with the total and applied discounts.

## Lessons for the future

- Implement testing (I planned on using Cypress) earlier on to reduce time spent manually spot checking bugs I came across.
- Split out the vue `/store/index.js` file into smaller files and use `mapActions` and `mapGetters` to clean up code a bit instead of using `this.$store.getters...` everywhere.
- Use a third party CSS framework to cut down time hand building things. I did however learn a ton this round doing things from scratch.

