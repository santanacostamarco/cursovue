new Vue({
  el: "#desafio",
  data: {
    name: "Marco Santana",
    age: "23",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjwUtkUyhoYXEFHe-OjsA2Dwg4uUvoqcCchNuahZIRfWbzWpfx"
  },
  methods: {
    ageTimesTree: () => this.age * 3,
    random: () => Math.random()
  }
});
