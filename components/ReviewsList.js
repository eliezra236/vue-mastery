app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template: `<div>
<h3>Product Reviews:</h3>
<ul>
<li v-for="(review, index) in reviews" :key="index">
{{review.name}} gave it {{review.rating}} stars:
{{review.review}}
</li>

</ul>
</div>`
})