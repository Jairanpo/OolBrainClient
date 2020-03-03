<template>
  <div>
    <b-container>
      <Back url="/home"></Back>
      <b-row>
        <b-col>
          <h1 class="mt-3">Filesystem:</h1>
          <p class="mt-3 text-justify">
            This document will aid you in finding your way around folders, so that you have a clear idea on
            how to move inside the storage and correctly save your work in progress or published files.
          </p>
          <a
            class="btn btn-dark m-2"
            href="https://www.draw.io/?lightbox=1&target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Filesystem#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1kTj49TQDRw1wavDr424lOhP_kpKpTHwY%26export%3Ddownload"
          >
            <h1 class="p-2">Diagrams</h1>
          </a>
        </b-col>
      </b-row>
      <b-row class="mb-5">
        <b-col>
          <b-list-group>
            <div v-for="item in folders" :key="item.id">
              <b-list-group-item :style="set_margin(item.level)">
                <b-row>
                  <b-col>
                    <h4>{{item.name}}</h4>
                  </b-col>
                  <b-col>
                    <InfoButton @status_toggle="show_info_toggle($event, item)"></InfoButton>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12" md="6" sm="12">
                    <b-list-group>
                      <b-list-group-item class="mx-3" v-show="item.description.show" variant="dark">
                        <b-list-group-item>
                          <p v-html="item.description.text" class="text-justify"></p>
                          <b-list-group
                            v-for="children in item.subfolders.children"
                            :key="children.id"
                          >
                            <b-list-group-item class="mx-5 px-5">
                              <div class="text-left" v-if="children.link == ''">{{children.name}}</div>
                              <div v-else>
                                <nuxt-link
                                  class="btn btn-info btn-block subfolder text-left"
                                  :to="children.link"
                                >{{children.name}}</nuxt-link>
                              </div>
                            </b-list-group-item>
                          </b-list-group>
                        </b-list-group-item>
                      </b-list-group-item>
                    </b-list-group>
                  </b-col>
                </b-row>
              </b-list-group-item>
            </div>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import folders from "@/static/filesystem/simple_project.json";
import Back from "@/components/Back";
import InfoButton from "@/components/InfoButton";

export default {
  asyncData({ params }) {
    return { folders };
  },
  components: {
    Back,
    InfoButton
  },
  methods: {
    set_margin: function set_margin(level) {
      return "margin-left:" + String(level * 2) + "vw";
    },
    show_info_toggle: function show_children_toggle(status, item) {
      item.description.show = status;
    }
  }
};
</script>

<style>
.subfolder:hover {
  background: rgb(61, 194, 255);
  color: white;
}

.sub-grp {
  margin: 0%;
  padding: 0%;
}
.col-centered {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

</style>