<template>
    <div>
      <div v-if="selectoption === 'CERTIFICAT DE MARIAGE'">
        <div class="text-center mb-4">
          <h5>CERTIFICAT DE MARIAGE</h5>
          <p class="card-title-desc">Formulaire du Certificat de Mariage</p>
        </div>
        <form>
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="progresspill-firstname-input">First name</label>
                <input
                  type="text"
                  class="form-control"
                  id="progresspill-firstname-input"
                  placeholder="Enter your First Name"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="progresspill-lastname-input">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="progresspill-lastname-input"
                  placeholder="Enter your Last Name"
                />
              </div>
            </div>
          </div>
  
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="progresspill-phoneno-input">Phone</label>
                <input
                  type="text"
                  class="form-control"
                  id="progresspill-phoneno-input"
                  placeholder="Enter your Phone No"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="progresspill-email-input">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="progresspill-email-input"
                  placeholder="Enter your Email"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label for="progresspill-address-input">Address</label>
                <textarea
                  id="progresspill-address-input"
                  class="form-control"
                  rows="2"
                  placeholder="Enter your address"
                ></textarea>
              </div>
            </div>
          </div>
        </form>
        <ul class="pager wizard twitter-bs-wizard-pager-link">
          <li class="previous">
            <a href="javascript: void(0);" class="btn btn-success"
              ><i class="bx bx-chevron-left me-1"></i> Precédent</a
            >
          </li>
          <li class="next">
            <a href="javascript: void(0);" class="btn btn-success"
              >Suivant <i class="bx bx-chevron-right ms-1"></i
            ></a>
          </li>
        </ul>
      </div>
      <div v-else-if="selectoption === 'COUTME CERTIFICAT'">
        <form @submit.prevent="saveCoutume">
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="progresspill-firstname-input">Nom</label>
                <input
                  type="text"
                  class="form-control"
                  id="progresspill-firstname-input"
                  placeholder="Entrer vôtre nom"
                  v-model="uniqueCitoyen.name"
                  required
                  readonly
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Id de l'utilisateur</label>
                <input
                  type="text"
                  class="form-control"
                  id="progresspill-firstname-input"
                  placeholder="Entrer vôtre nom"
                  :value="userInfo.username"
                  required
                  readonly
                />
              </div>
            </div>
          </div>
  
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="progresspill-phoneno-input">Date de Naissance</label>
                <input
                  type="date"
                  class="form-control"
                  v-model="uniqueCitoyen.dateNaissance"
                  required
                  readonly
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="progresspill-email-input">Lieu de Naissance</label>
                <input
                  type="text"
                  class="form-control"
                  id="progresspill-email-input"
                  placeholder="Entrer le lieu de naissance"
                  v-model="uniqueCitoyen.paysOrigine.libelle"
                  required
                  readonly
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="progresspill-phoneno-input">Est de Coutume</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Coutume"
                  v-model="uniqueCitoyen.coutume.libelle"
                  required
                  readonly
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="progresspill-email-input">Préfecture de </label>
                <input
                  type="text"
                  class="form-control"
                  id="progresspill-email-input"
                  placeholder="Enter your Email"
                  v-model="uniqueCitoyen.prefecture.libelle"
                  required
                  readonly
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="progresspill-phoneno-input">Sous Préfecture de</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Coutume"
                  v-model="uniqueCitoyen.sousPrefecture.libelle"
                  required
                  readonly
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Produit</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Coutume"
                  :value="selectoption"
                  required
                  readonly
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="progresspill-phoneno-input">Nom de la pièce</label>
                {{ latestPiece }}
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Coutume"
                  :value="latestPieceName"
                  required
                  readonly
                />
              </div>

            </div>
          </div>
        </form>
      </div>
      <div v-else>
        Nothing !
        {{ selectoption }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, onMounted, defineEmits,computed } from "vue";
  import ClientHttp from "../../libs/ClientHttp";
  import { toast } from "vue3-toastify";
  import router from "@/router";
  
  const allProduits = ref([]);
  const allUsers = ref([]);
  const allPieces = ref([]);
  const searchQuery = ref("");
  
  const user = ref();
  user.value = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(user.value);
  
  // const uniqueCitoyen = ref(uniqueCitoyen);
  
  // Props
  defineProps({
    selectoption: Array,
    uniqueCitoyen: Object,
  });
  
  /* @
    =================================================
              =======|GET USERS|=======
    =================================================
   @  */
  onMounted(async () => {
    try {
      const response = await ClientHttp.get("/api/users/deleted/false");
      allUsers.value = response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });

    /* @
    =================================================
              =======|GET PIECE|=======
    =================================================
   @  */
   onMounted(async () => {
    try {
      const response = await ClientHttp.get("/api/pieces/deleted/false");
      allPieces.value = response.data;
      allPieces.value.sort((a, b) => b.id - a.id);
      const latestPiece = allPieces.value[0];
      console.log('Latest piece:', latestPiece);
     // Computed property to extract the latest piece ID
    }
    
    catch (error) {
      console.error("Error fetching data:", error);
    }
  });

  const latestPieceName = computed(() => allPieces.value[0]?.value);
  
  /* @
    =================================================
              =======|GET PRODUITS|=======
    =================================================
   @  */
  onMounted(async () => {
    try {
      const response = await ClientHttp.get("/api/produits/deleted/false");

      allProduits.value = response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });

  const emits = defineEmits(["updateUniqueCitoyen"]);



  // Fonction pour enregistrer la demande de certificat de coutume
  const saveCoutume = async () => {
    try {
      // Envoi de la demande à l'API
      const response = await ClientHttp.post(
        "/api/demandes/certificats/coutumes",
        demandeCoutume
      );

      // Vérification de la réponse de l'API
      if (response.ok) {
        toast.success("Certificat de coutume enregistré avec succès !");
        router.push("/");
      } else {
        const errorMessage = await response.text();
        throw new Error(
          errorMessage ||
            "Une erreur s'est produite lors de l'enregistrement du certificat de coutume"
        );
      }
    } catch (error) {
      console.error(error);
      const message = "Echec lors de la sauvegarde du certificat de coutume";
      toast.error(message, { position: toast.POSITION.TOP_RIGHT });
    }
  };
  </script>
  