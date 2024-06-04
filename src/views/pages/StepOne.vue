<template>
  <div class="row row-cols-1 row-cols-md-4 g-4 gap-4">
    <div class="card card-h-100" v-for="item in allProduits" :key="item.id">
      <div class="card-body">
        <div class="row align-items-center">
          <div>
            <input type="hidden" :value="item.libelle" />
            <label :for="'item-' + item.id">{{ item.libelle }}</label>
          </div>
        </div>
        
        <div class="text-left"></div>
        <ul class="pager wizard twitter-bs-wizard-pager-link">
          <li class="next">
            <button
              class="btn btn-success"
              @click="$emit('changedChecked', item)"
            >
              Suivant<i class="bx bx-chevron-right ms-1"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ClientHttp from "../../libs/ClientHttp";

const allProduits = ref([]);

/* 
  ===========================================
        =======|GET PRODUITS|=======
  ===========================================
 */
onMounted(async () => {
  try {
    const response = await ClientHttp.get(`/api/produits/deleted/false`);

    allProduits.value = response.data;
    console.log("les produits", allProduits);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const selectedOption = ref("");

const functionToEmit = (e) => {
  console.log("e", e);
  this.$emit("changedChecked");
};
</script>
