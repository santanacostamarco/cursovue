new Vue({
  el: "#desafio",
  data: {
    valor: "1"
  },
  methods: {
    handleKeydown: function(e) {
      this.valor = e.target.value;
      console.log(this.valor);
    },
    handleClick: function() {
      alert("test");
    }
  }
});
