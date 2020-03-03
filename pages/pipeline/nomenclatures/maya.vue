<template>
  <div>
    <b-container>
      <Back url="/pipeline/nomenclatures"></Back>
      <b-row>
        <b-col>
          <h1 class="mt-5">Maya Nodes Nomenclatures</h1>
        </b-col>
      </b-row>
      <b-row>
        <div class="m-4" v-for="(section, name, index) in nodes_sort(sections)" :key="index">
          <h4 class="text-capitalize">{{name}}:</h4>
          <b-list-group>
            <div v-for="node in nodes_sort(section)" :key="node.id">
              <b-list-group-item :title="node.name">
                {{node.name}} :
                <b>{{node.code}}</b>
              </b-list-group-item>
            </div>
          </b-list-group>
        </div>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import Back from "@/components/Back";

export default {
  components: {
    Back
  },
  data: function create() {
    return {
      sections: {
        general: {
          group: {
            name: "Group",
            code: "GRP",
            description: ""
          },
          locator: {
            name: "Locator",
            code: "LOC",
            description: ""
          },
          files: {
            name: "File",
            code: "FLE"
          }
        },
        previs: {
          camera: {
            name: "Camera",
            code: "CAM",
            description: ""
          },
          shot: {
            name: "Shot",
            code: "SHT",
            description: ""
          }
        },
        lighting: {
          light: {
            name: "Light",
            code: "LGT",
            description: ""
          },
          hdr: {
            name: "HDR",
            code: "HDR",
            description: ""
          },
        shader: {
            name: "Shader",
            code: "SHD",
            description: ""
          },
          aov: {
            name: "AOV",
            code: "AOV"
          },
          layer: {
            name: "Render Layer",
            code: "RLY"
          },
          collections: {
            name: "collections",
            code: "COL"
          }
        },
        modeling: {
          geometry: {
            name: "Geometry",
            code: "GEO",
            description: ""
          },
          curve: {
            name: "Curves",
            code: "CRV",
            description: ""
          }
        },
        fx: {
          follicles: {
            name: "Follicles",
            code: "FOL",
            description: ""
          },
          emmiter: {
            name: "Emitter",
            code: "EMI",
            description: ""
          }
        },
        rigging: {
          control: {
            name: "Controller (for animation)",
            code: "CTL",
            description: ""
          },
          blendshape: {
            name: "Blendshape",
            code: "BSH",
            description: ""
          },
          cluster: {
            name: "Cluster",
            code: "CLU",
            description: ""
          },
          blendcolor: {
            name: "Blend Color",
            code: "BLC",
            description: ""
          },
          multiply_divide: {
            name: "Multiply Divide",
            code: "MDI",
            description: ""
          },
          remap_value: {
            name: "Remap Value",
            code: "RMV",
            description: ""
          },
          constraint_parent: {
            name: "Constraint (parent)",
            code: "PCN",
            description: ""
          },
          constraint_parent: {
            name: "Constraint (point)",
            code: "PCN",
            description: ""
          },
          constraint_orient: {
            name: "Constraint (orient)",
            code: "OCN",
            description: ""
          },
          constraint_scale: {
            name: "Constraint (scale)",
            code: "SCN",
            description: ""
          }
        }
      }
    };
  },
  methods: {
    nodes_sort: function sort(nodes) {
      var ordered = {};
      Object.keys(nodes)
        .sort()
        .forEach(function sorted(key) {
          ordered[key] = nodes[key];
        });

      return ordered;
    }
  }
};
</script>