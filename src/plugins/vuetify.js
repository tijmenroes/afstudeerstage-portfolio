import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            purple: '#A74482',
            // pink: '#F84AA7',
            // pink: "#AD11A3",
            yellow: "#FAFA00",
            blue: "#4D7BAC"
          },
        },
      },

});
