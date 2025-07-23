new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/foto1.jpeg",
          img2: "images/foto2.jpeg",
          img3: "images/foto3.jpeg",
          title: "WHY YOU LOOK SO CUTE?",
          isOpen: false,
        },
        {
          img1: "images/foto4.jpeg",
          img2: "images/foto5.jpeg",
          img3: "images/foto6.jpeg",
          title: "PERFECT",
          isOpen: false,
        },
        {
          img1: "images/foto8.jpeg",
          img2: "images/foto6.jpeg",
          img3: "images/foto7.jpeg",
          title: "BEAUTIFUL",
          isOpen: false,
        },
        {
          img1: "images/foto9.jpeg",
          img2: "images/foto10.jpeg",
          img3: "images/foto11.jpeg",
          title: "SWEET",
          isOpen: false,
        },
        {
          img1: "images/foto15.jpeg",
          img2: "images/foto13.jpeg",
          img3: "images/foto14.jpeg",
          title: "ME, MELTED",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
