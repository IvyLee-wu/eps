<template>
  <div class="mt-15">
    <app-bar />
    <v-card
      outlined
      tile
      class="d-flex"
      v-for="(item, index) in schedule"
      :key="index"
      @click="
        dialog = true;
        setDialog(item);
      "
    >
      <v-card-text>
        {{ item.name }}
      </v-card-text>
    </v-card>
    <template>
      <v-row justify="center">
        <v-dialog v-model="dialog" width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ dialogData.name }}</span>
            </v-card-title>
            <v-card-text>
              {{ dialogData.date }}
              <p>{{ dialogData.name }}</p>
              <p>{{ dialogData.detail }}</p>
              {{ dialogData.phone }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="info darken-1"
                text
                @click="setFav"
                :disabled="dialogText === '已在最愛'"
              >
                {{ dialogText }}
              </v-btn>
              <v-btn color="info darken-1" text @click="dialog = false">
                關閉
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </div>
</template>

<script>
import AppBar from "../components/AppBar";

export default {
  components: {
    AppBar,
  },

  data: () => ({
    dialog: false,
    schedule: [
      {
        date: "04/01 ~ 04/04",
        name: "孕媽咪與寶貝活動",
        detail:
          "10/07-10台北世貿一館！全球百大精品孕嬰領導品牌、破萬件婦幼夯品強勢出擊！廣蒐全球最新、詢問度最高之人氣婦嬰商品，並邀請各路婦幼翹楚與育兒專家共同分享孕期與育兒知識，更有多款優質明星商品折扣優惠，展場獨家超值限定商品！展覽商品包含孕婦服裝、孕哺衣、哺乳枕、媽媽包、保養品、營養補給品、塑身衣、彌月蛋糕/油飯/餅乾、彌月禮品、嬰兒食品、營養補充、玩具、推車、安全坐椅、幼兒衛浴、嬰兒床寢、各式教材器具、兒童圖書等，所有商品應有盡有，展覽現場更有限量福袋免費領、萬元推車一元抽、上聯獨家優惠商品、寶寶運動會等活動!",
        phone: "886-2-27597167",
      },
      {
        date: "04/08 ~ 04/11",
        name: "2022台北國際酒展-純酒展",
        detail:
          "Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit.Nostra urna at, magna at neque sed sed ante imperdiet, dolormauris cursus velit, velit non, sem nec. Volutpat sem ridiculusplacerat leo, augue in, duis erat proin condimentum in a eget, sedfermentum sed vestibulum varius ac, vestibulum volutpat orci utelit eget tortor. Ultrices nascetur nulla gravida ante arcu.Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsumpellentesque, vitae id quam ut mauris dui tempor, aptent non.Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus.Amet donec vestibulum mattis commodo, nulla aliquet, nibhpraesent, elementum nulla. Sit lacus pharetra tempus magna nequepellentesque, nulla vel erat. Justo ex quisque nulla accusamusvenenatis, sed quis. Nibh phasellus gravida metus in, fusce aeneanut erat commodo eros. Ut turpis, dui integer, nonummy pede placeatnec in sit leo. Faucibus porttitor illo taciti odio, amet viverrascelerisque quis quis et tortor, curabitur morbi a. Enim temporat, rutrum elit condimentum, amet rutrum vitae tempor torquentnunc.",
        phone: "886-2--26596000#172",
      },
      {
        date: "04/08 ~ 04/11",
        name: "第32屆台北電器空調３Ｃ大展",
        detail:
          "Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit.Nostra urna at, magna at neque sed sed ante imperdiet, dolormauris cursus velit, velit non, sem nec. Volutpat sem ridiculusplacerat leo, augue in, duis erat proin condimentum in a eget, sedfermentum sed vestibulum varius ac, vestibulum volutpat orci utelit eget tortor. Ultrices nascetur nulla gravida ante arcu.Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsumpellentesque, vitae id quam ut mauris dui tempor, aptent non.Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus.Amet donec vestibulum mattis commodo, nulla aliquet, nibhpraesent, elementum nulla. Sit lacus pharetra tempus magna nequepellentesque, nulla vel erat. Justo ex quisque nulla accusamusvenenatis, sed quis. Nibh phasellus gravida metus in, fusce aeneanut erat commodo eros. Ut turpis, dui integer, nonummy pede placeatnec in sit leo. Faucibus porttitor illo taciti odio, amet viverrascelerisque quis quis et tortor, curabitur morbi a. Enim temporat, rutrum elit condimentum, amet rutrum vitae tempor torquentnunc.",
        phone: "886-2-25064871Ext26",
      },
      {
        date: "04/14 ~ 04/16",
        name: "台灣電子遊戲機國際產業展",
        detail:
          "Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit.Nostra urna at, magna at neque sed sed ante imperdiet, dolormauris cursus velit, velit non, sem nec. Volutpat sem ridiculusplacerat leo, augue in, duis erat proin condimentum in a eget, sedfermentum sed vestibulum varius ac, vestibulum volutpat orci utelit eget tortor. Ultrices nascetur nulla gravida ante arcu.Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsumpellentesque, vitae id quam ut mauris dui tempor, aptent non.Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus.Amet donec vestibulum mattis commodo, nulla aliquet, nibhpraesent, elementum nulla. Sit lacus pharetra tempus magna nequepellentesque, nulla vel erat. Justo ex quisque nulla accusamusvenenatis, sed quis. Nibh phasellus gravida metus in, fusce aeneanut erat commodo eros. Ut turpis, dui integer, nonummy pede placeatnec in sit leo. Faucibus porttitor illo taciti odio, amet viverrascelerisque quis quis et tortor, curabitur morbi a. Enim temporat, rutrum elit condimentum, amet rutrum vitae tempor torquentnunc.",
        phone: "886-2-27607407-204",
      },
      {
        date: "04/21 ~ 04/24",
        name: "2022台北國際禮品文具暨文創展",
        detail:
          "Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit.Nostra urna at, magna at neque sed sed ante imperdiet, dolormauris cursus velit, velit non, sem nec. Volutpat sem ridiculusplacerat leo, augue in, duis erat proin condimentum in a eget, sedfermentum sed vestibulum varius ac, vestibulum volutpat orci utelit eget tortor. Ultrices nascetur nulla gravida ante arcu.Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsumpellentesque, vitae id quam ut mauris dui tempor, aptent non.Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus.Amet donec vestibulum mattis commodo, nulla aliquet, nibhpraesent, elementum nulla. Sit lacus pharetra tempus magna nequepellentesque, nulla vel erat. Justo ex quisque nulla accusamusvenenatis, sed quis. Nibh phasellus gravida metus in, fusce aeneanut erat commodo eros. Ut turpis, dui integer, nonummy pede placeatnec in sit leo. Faucibus porttitor illo taciti odio, amet viverrascelerisque quis quis et tortor, curabitur morbi a. Enim temporat, rutrum elit condimentum, amet rutrum vitae tempor torquentnunc.",
        phone: "886-2-27255200",
      },
      {
        date: "04/21 ~ 04/24",
        name: "台北國際禮品文具暨文創展",
        detail:
          "台北世界貿易中心,中華民國對外貿易發展協會、 台灣區藝品禮品輸出業同業公會、 台灣區教育用品工業同業公會、 台灣區手提包輸出業同業公會、 台灣區玩具暨孕嬰童用品工業同業公會",
        phone: "886-2-27255200",
      },
      {
        date: "04/22 ~ 04/24",
        name: "2022台北國際婚紗展、2022台北國際珠寶玉石展",
        detail:
          "Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit.Nostra urna at, magna at neque sed sed ante imperdiet, dolormauris cursus velit, velit non, sem nec. Volutpat sem ridiculusplacerat leo, augue in, duis erat proin condimentum in a eget, sedfermentum sed vestibulum varius ac, vestibulum volutpat orci utelit eget tortor. Ultrices nascetur nulla gravida ante arcu.Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsumpellentesque, vitae id quam ut mauris dui tempor, aptent non.Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus.Amet donec vestibulum mattis commodo, nulla aliquet, nibhpraesent, elementum nulla. Sit lacus pharetra tempus magna nequepellentesque, nulla vel erat. Justo ex quisque nulla accusamusvenenatis, sed quis. Nibh phasellus gravida metus in, fusce aeneanut erat commodo eros. Ut turpis, dui integer, nonummy pede placeatnec in sit leo. Faucibus porttitor illo taciti odio, amet viverrascelerisque quis quis et tortor, curabitur morbi a. Enim temporat, rutrum elit condimentum, amet rutrum vitae tempor torquentnunc.",
        phone: "886-2-27597167#113",
      },
    ],
    dialogData: {},
    dialogText: "加到最愛",
  }),

  methods: {
    setDialog(item) {
      this.dialogData = item;
      let data = JSON.parse(localStorage.getItem("favList"));
      let findIndex = 0;
      if (data) {
        findIndex = data.findIndex((e) => e.phone === item.phone);
      }
      console.log("findIndex", findIndex);
      if (findIndex == -1) {
        this.dialogText = "加到最愛";
      } else {
        this.dialogText = "已在最愛";
      }
    },
    setFav() {
      this.dialog = false;
      // this.$store.commit("setFav", { list: this.dialogData });
      let data = null;
      if (localStorage.getItem("favList")) {
        data = JSON.parse(localStorage.getItem("favList"));
        data.push(this.dialogData);
      } else {
        data = [this.dialogData];
      }
      localStorage.setItem("favList", JSON.stringify(data));
    },
  },
};
</script>