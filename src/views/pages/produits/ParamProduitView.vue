<script setup>
import PageTitle from "../../../components/layouts/PageTitle.vue";
import { ref, onMounted } from "vue";
import ClientHttp from "../../../libs/ClientHttp";
import { toast } from "vue3-toastify";
import router from "@/router";

const error = ref("");
const storeParametreProduit = ref({
  produitId: "",
  devise: "",
  validite: "",
  realAmount: "",
  gebAmount: "",
  etatAmount: "",
  etatPercent: "",
  gebPercent: "",
  isFree: true,
});
const allProduits = ref([]);
const allParametreProduitListes = ref([]);

const selectedProduitId = ref(null);

const mode = ref("creer");

/* @
  =================================================
            =======|CREATE OR UPDATE PARAMSPRODUIT|=======
  =================================================
 @  */

const SaveParam = async () => {
  try {
    if (
      isNaN(storeParametreProduit.value.produitId) || // Vérifie si ce n'est pas un nombre
      storeParametreProduit.value.produitId === null || // Vérifie si c'est null
      storeParametreProduit.value.produitId === undefined || // Vérifie si c'est undefined
      storeParametreProduit.value.produitId === "" ||
      !storeParametreProduit.value.devise.trim() ||
      !storeParametreProduit.value.validite.trim() ||
      !storeParametreProduit.value.realAmount.trim() ||
      !storeParametreProduit.value.gebAmount.trim() ||
      !storeParametreProduit.value.etatAmount.trim() ||
      !storeParametreProduit.value.etatPercent.trim() ||
      !storeParametreProduit.value.gebPercent.trim()
    ) {
      const message = "Tous les champs sont requis";
      toast.error(message, { position: toast.POSITION.TOP_RIGHT });
      return;
    }

    if (mode.value === "creer") {
      // Si on est en mode création
      const parametreproduit = await ClientHttp.post("/api/params-produits", {
        produitId: storeParametreProduit.value.produitId,
        devise: storeParametreProduit.value.devise,
        validite: storeParametreProduit.value.validite,
        realAmount: storeParametreProduit.value.realAmount,
        gebAmount: storeParametreProduit.value.gebAmount,
        etatAmount: storeParametreProduit.value.etatAmount,
        etatPercent: storeParametreProduit.value.etatPercent,
        gebPercent: storeParametreProduit.value.gebPercent,
        isFree: storeParametreProduit.value.isFree,
      });

      console.log(parametreproduit.data);
      toast.success("Produit paramétré avec succès !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      // Si on est en mode modification
      await ClientHttp.put("/api/params-produits/${id}", {
        produitId: storeParametreProduit.value.produitId,
        devise: storeParametreProduit.value.devise,
        validite: storeParametreProduit.value.validite,
        realAmount: storeParametreProduit.value.realAmount,
        gebAmount: storeParametreProduit.value.gebAmount,
        etatAmount: storeParametreProduit.value.etatAmount,
        etatPercent: storeParametreProduit.value.etatPercent,
        gebPercent: storeParametreProduit.value.gebPercent,
        isFree: storeParametreProduit.value.isFree,
      });
      toast.success("Produit paramétré modifié avec succès !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    // Réinitialisation du formulaire après la création ou la modification réussie
    storeParametreProduit.value = {
      produitId: "",
      devise: "",
      validite: "",
      realAmount: "",
      gebAmount: "",
      etatAmount: "",
      etatPercent: "",
      gebPercent: "",
      isFree: "",
    };

    router.push("/param-produits");
  } catch (e) {
    console.error(e);
    const message = "Echec lors du paramétrage du produit";
    toast.error(message, { position: toast.POSITION.TOP_RIGHT });
  }
};

/* @
  =================================================
        =======|GET PRODUITS|=======
  =================================================
 @  */

onMounted(async () => {
  try {
    const response = await ClientHttp.get("/api/produits/deleted/false");
    console.log("listes des produits : ", allProduits);

    allProduits.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

/* @
  =================================================================
        =======|GET LES INFORMATIONS DU PARAMETRAGE DE PRODUITS|=======
  =================================================================
 @  */

onMounted(async () => {
  try {
    const response = await ClientHttp.get("/api/params-produits/deleted/false");
    console.log(
      "listes des parametre de produits : ",
      allParametreProduitListes
    );

    allParametreProduitListes.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

/* @
  =================================================
            =======|DELETE PARAMS PRODUI|=======
  =================================================
 @  */

const deleteparametreProduit = async (id) => {
  try {
    await ClientHttp.delete(`/api/params-produits/${id}`);
    allParametreProduitListes.value = allParametreProduitListes.value.filter(
      (item) => item.id !== id
    );
  } catch (error) {
    console.error("Erreur lors de la suppression du param produit:", error);
  }
};

// Fonction pour charger les informations du param à modifier
const editparametreProduit = async (param) => {
  mode.value = "modifier"; // Passage au mode modification
  selectedProduitId.value = param.id; // Enregistrement de l'ID du param sélectionné
  storeParametreProduit.value = { ...param }; // Remplissage des champs du formulaire avec les informations du param sélectionné
};
</script>

<template>
  <div class="container-fluid">
    <!-- Modal -->
    <div class="card">
      <div class="card-body">
        <div>
          <!-- Static Backdrop Modal -->
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            role="dialog"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div
              class="modal-dialog modal-dialog-centered modal-dialog modal-lg"
              role="document"
            >
              <div class="modal-content">
                <div class="modal-header">
                  <PageTitle
                    :title="
                      mode === 'creer'
                        ? 'Paramétrage d\'un Produit'
                        : 'Modifier le Paramétrage d\'un Produit'
                    "
                  />
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="card">
                        <div class="card-body">
                          <form @submit.prevent="SaveParam">
                            <div class="row">
                              <div class="col-lg-6">
                                <div class="mb-3">
                                  <label class="form-label">Produit</label>
                                  <select
                                    class="form-select"
                                    v-model="storeParametreProduit.produitId"
                                  >
                                    <option disabled value="">
                                      Sélectionnez un produit
                                    </option>
                                    <option
                                      v-for="produit in allProduits"
                                      :value="produit.id"
                                    >
                                      {{ produit.libelle }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="mb-3">
                                  <label for="progresspill-phoneno-input"
                                    >devise</label
                                  >
                                  <select
                                    name=""
                                    id=""
                                    class="form-select"
                                    v-model="storeParametreProduit.devise"
                                  >
                                    <option disabled value="">
                                      Sélectionnez une devise
                                    </option>
                                    <option value="EUR">EUR</option>
                                    <option value="GPB">GPB</option>
                                    <option value="USD">USD</option>
                                    <option value="XOF">XOF</option>
                                    <option value="XAF">XAF</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-lg-6">
                                <div class="mb-3">
                                  <label for="progresspill-phoneno-input"
                                    >validite</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter gebAmount"
                                    v-model="storeParametreProduit.validite"
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="mb-3">
                                  <label for="progresspill-phoneno-input"
                                    >Montant réel</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter realAmountail"
                                    v-model="storeParametreProduit.realAmount"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-lg-6">
                                <div class="mb-3">
                                  <label for="progresspill-phoneno-input"
                                    >Montant de Geb</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter gebAmount"
                                    v-model="storeParametreProduit.gebAmount"
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="mb-3">
                                  <label for="progresspill-phoneno-input"
                                    >Montant Etat</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter etatAmount"
                                    v-model="storeParametreProduit.etatAmount"
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-lg-6">
                                <div class="mb-3">
                                  <label for="progresspill-phoneno-input"
                                    >Pourcentage de Geb</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter gebPercent"
                                    v-model="storeParametreProduit.gebPercent"
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="mb-3">
                                  <label for="progresspill-phoneno-input"
                                    >Pourcentage Etat</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter etatPercent"
                                    v-model="storeParametreProduit.etatPercent"
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="row justify-content-start">
                              <div class="col-sm-9">
                                <div class="form-check mb-4">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="horizontal-customCheck"
                                    v-model="storeParametreProduit.isFree"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="horizontal-customCheck"
                                    >isFree</label
                                  >
                                </div>

                                <div></div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>

                  <form action="" @submit.prevent="SaveParam">
                    <button type="submit" class="btn btn-success"  data-bs-dismiss="modal">
                      {{ mode === "creer" ? "Créer" : "Modifier" }}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- table -->
    <div class="row">
      <div class="col">
        <div class="card shadow">
          <div
            class="card-header border-0 d-flex align-items-center justify-content-between"
          >
            <h3 class="mb-0">Listes des Officiers</h3>
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-light btn-sm py-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Ajouter un Officier
            </button>
          </div>
          <div class="table-responsive">
            <table class="table align-items-center table-flush">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Produit</th>
                  <th scope="col">Devise</th>
                  <th scope="col">Validité</th>
                  <th scope="col">Montant réel</th>
                  <th scope="col">Montant de Geb</th>
                  <th scope="col">Montant Etat</th>
                  <th scope="col">Pourcentage de Geb</th>
                  <th scope="col">Pourcentage Etat</th>
                  <th scope="col">Gratuit</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="param in allParametreProduitListes" :key="param.id">
                  <th scope="row">
                    <div class="media align-items-center">
                      <div class="media-body">
                        <span class="mb-0 text-sm">{{
                          param.produit.libelle
                        }}</span>
                      </div>
                    </div>
                  </th>

                  <td>{{ param.devise }}</td>
                  <td>{{ param.validite }}</td>
                  <td>{{ param.realAmount }}</td>
                  <td>{{ param.gebAmount }}</td>
                  <td>{{ param.etatAmount }}</td>
                  <td>{{ param.gebPercent }}</td>
                  <td>{{ param.etatPercent }}</td>
                  <td>{{ param.isFree ? "Oui" : "Non" }}</td>
                  <td>
                    <ul class="icos">
                      <li
                        style="color: red"
                        @click="deleteparametreProduit(param.id)"
                      >
                        <i class="bx bxs-trash-alt"></i>
                      </li>
                      <li
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style="color: orange"
                        @click="editparametreProduit(item)"
                      >
                        <i class="bx bx-pencil"></i>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer py-4">
            <nav aria-label="...">
              <ul class="pagination justify-content-end mb-0">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1">
                    <i class="fas fa-angle-left"></i>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#"
                    >2 <span class="sr-only">(current)</span></a
                  >
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    <i class="fas fa-angle-right"></i>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
select[multiple] {
  height: 40px;
}

.icos {
  display: flex;
  gap: 25px;
  list-style: none;
}

.icos li i {
  font-size: 24px;
  cursor: pointer;
}

@-ms-viewport {
  width: device-width;
}

figcaption,
footer,
main,
nav,
section {
  display: block;
}

body {
  font-family: Open Sans, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  text-align: left;
  color: #525f7f;
  background-color: #f8f9fe;
}

[tabindex="-1"]:focus {
  outline: 0 !important;
}

h2,
h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

ul {
  margin-top: 0;
  margin-bottom: 1rem;
}

ul ul {
  margin-bottom: 0;
}

dfn {
  font-style: italic;
}

strong {
  font-weight: bolder;
}

a {
  text-decoration: none;
  color: #5e72e4;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

a:hover {
  text-decoration: none;
  color: #233dd2;
}

a:not([href]):not([tabindex]) {
  text-decoration: none;
  color: inherit;
}

a:not([href]):not([tabindex]):hover,
a:not([href]):not([tabindex]):focus {
  text-decoration: none;
  color: inherit;
}

a:not([href]):not([tabindex]):focus {
  outline: 0;
}

img {
  vertical-align: middle;
  border-style: none;
}

table {
  border-collapse: collapse;
}

caption {
  padding-top: 1rem;
  padding-bottom: 1rem;
  caption-side: bottom;
  text-align: left;
  color: #8898aa;
}

th {
  text-align: inherit;
}

button {
  border-radius: 0;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

input,
button {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button {
  text-transform: none;
}

button,
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type="radio"],
input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
}

input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  -webkit-appearance: listbox;
}

legend {
  font-size: 1.5rem;
  line-height: inherit;
  display: block;
  width: 100%;
  max-width: 100%;
  margin-bottom: 0.5rem;
  padding: 0;
  white-space: normal;
  color: inherit;
}

progress {
  vertical-align: baseline;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: none;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

[hidden] {
  display: none !important;
}

h2,
h3,
.h2,
.h3 {
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  color: #32325d;
}

h2,
.h2 {
  font-size: 1.25rem;
}

h3,
.h3 {
  font-size: 1.0625rem;
}

.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.row {
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  flex-wrap: wrap;
}

.col,
.col-xl-6 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
  max-width: 100%;
  flex-basis: 0;
  flex-grow: 1;
}

@media (min-width: 1200px) {
  .col-xl-6 {
    max-width: 50%;
    flex: 0 0 50%;
  }
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}

.table th,
.table td {
  padding: 1rem;
  vertical-align: top;
  border-top: 1px solid #e9ecef;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #e9ecef;
}

.table tbody + tbody {
  border-top: 2px solid #e9ecef;
}

.table .table {
  background-color: #f8f9fe;
}

.table-dark,
.table-dark > th,
.table-dark > td {
  background-color: #c1c2c3;
}

.table .thead-dark th {
  color: #f8f9fe;
  border-color: #1f3a68;
  background-color: #172b4d;
}

.table .thead-light th {
  color: #8898aa;
  border-color: #e9ecef;
  background-color: #f6f9fc;
}

.table-dark {
  color: #f8f9fe;
  background-color: #172b4d;
}

.table-dark th,
.table-dark td,
.table-dark thead th {
  border-color: #1f3a68;
}

.table-responsive {
  display: block;
  overflow-x: auto;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

.btn {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  display: inline-block;
  padding: 0.625rem 1.25rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  border: 1px solid transparent;
  border-radius: 0.375rem;
}

@media screen and (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}

.btn:hover,
.btn:focus {
  text-decoration: none;
}

.btn:focus {
  outline: 0;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.btn.disabled,
.btn:disabled {
  opacity: 0.65;
  box-shadow: none;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn:not(:disabled):not(.disabled):active,
.btn:not(:disabled):not(.disabled).active {
  box-shadow: none;
}

.btn:not(:disabled):not(.disabled):active:focus,
.btn:not(:disabled):not(.disabled).active:focus {
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08),
    none;
}

a.btn.disabled {
  pointer-events: none;
}

.btn-sm {
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  font-size: 1rem;
  position: absolute;
  z-index: 1000;
  top: 100%;
  left: 0;
  display: none;
  float: left;
  min-width: 10rem;
  margin: 0.125rem 0 0;
  padding: 0.5rem 0;
  list-style: none;
  text-align: left;
  color: #525f7f;
  border: 0 solid rgba(0, 0, 0, 0.15);
  border-radius: 0.4375rem;
  background-color: #fff;
  background-clip: padding-box;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

.dropdown-menu[x-placement^="top"],
.dropdown-menu[x-placement^="right"],
.dropdown-menu[x-placement^="bottom"],
.dropdown-menu[x-placement^="left"] {
  right: auto;
  bottom: auto;
}

.dropdown-item {
  font-weight: 400;
  display: block;
  clear: both;
  width: 100%;
  padding: 0.25rem 1.5rem;
  text-align: inherit;
  white-space: nowrap;
  color: #212529;
  border: 0;
  background-color: transparent;
}

.dropdown-item:hover,
.dropdown-item:focus {
  text-decoration: none;
  color: #16181b;
  background-color: #f6f9fc;
}

.dropdown-item.active,
.dropdown-item:active {
  text-decoration: none;
  color: #fff;
  background-color: #5e72e4;
}

.dropdown-item.disabled,
.dropdown-item:disabled {
  color: #8898aa;
  background-color: transparent;
}

.nav {
  display: flex;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  flex-wrap: wrap;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.375rem;
  background-color: #fff;
  background-clip: border-box;
}

.card-header {
  margin-bottom: 0;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background-color: #fff;
}

.card-header:first-child {
  border-radius: calc(0.375rem - 1px) calc(0.375rem - 1px) 0 0;
}

.card-footer {
  padding: 1.25rem 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  background-color: #fff;
}

.card-footer:last-child {
  border-radius: 0 0 calc(0.375rem - 1px) calc(0.375rem - 1px);
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.375rem;
}

.page-link {
  line-height: 1.25;
  position: relative;
  display: block;
  margin-left: -1px;
  padding: 0.5rem 0.75rem;
  color: #8898aa;
  border: 1px solid #dee2e6;
  background-color: #fff;
}

.page-link:hover {
  z-index: 2;
  text-decoration: none;
  color: #8898aa;
  border-color: #dee2e6;
  background-color: #dee2e6;
}

.page-link:focus {
  z-index: 2;
  outline: 0;
  box-shadow: none;
}

.page-link:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}

.page-item:last-child .page-link {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}

.page-item.active .page-link {
  z-index: 1;
  color: #fff;
  border-color: #5e72e4;
  background-color: #5e72e4;
}

.page-item.disabled .page-link {
  cursor: auto;
  pointer-events: none;
  color: #8898aa;
  border-color: #dee2e6;
  background-color: #fff;
}

.badge {
  font-size: 66%;
  font-weight: 600;
  line-height: 1;
  display: inline-block;
  padding: 0.35rem 0.375rem;
  text-align: center;
  vertical-align: baseline;
  white-space: nowrap;
  border-radius: 0.375rem;
}

.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

@keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }

  to {
    background-position: 0 0;
  }
}

.progress {
  font-size: 0.75rem;
  display: flex;
  overflow: hidden;
  height: 1rem;
  border-radius: 0.375rem;
  background-color: #e9ecef;
  box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
}

.progress-bar {
  display: flex;
  flex-direction: column;
  transition: width 0.6s ease;
  text-align: center;
  white-space: nowrap;
  color: #fff;
  background-color: #5e72e4;
  justify-content: center;
}

@media screen and (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}

.media {
  display: flex;
  align-items: flex-start;
}

.media-body {
  flex: 1 1;
}

.tooltip {
  font-family: Open Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  position: absolute;
  z-index: 1070;
  display: block;
  margin: 0;
  text-align: left;
  text-align: start;
  white-space: normal;
  text-decoration: none;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  word-wrap: break-word;
  word-break: normal;
  opacity: 0;
  text-shadow: none;
  line-break: auto;
}

.tooltip.show {
  opacity: 0.9;
}
.tooltip .arrow {
  position: absolute;

  display: block;

  width: 0.8rem;
  height: 0.4rem;
}

.tooltip .arrow::before {
  position: absolute;

  content: "";

  border-style: solid;
  border-color: transparent;
}

.bs-tooltip-top,
.bs-tooltip-auto[x-placement^="top"] {
  padding: 0.4rem 0;
}
.bs-tooltip-top .arrow,
.bs-tooltip-auto[x-placement^="top"] .arrow {
  bottom: 0;
}
.bs-tooltip-top .arrow::before,
.bs-tooltip-auto[x-placement^="top"] .arrow::before {
  top: 0;

  border-width: 0.4rem 0.4rem 0;
  border-top-color: #000;
}

.bs-tooltip-right,
.bs-tooltip-auto[x-placement^="right"] {
  padding: 0 0.4rem;
}
.bs-tooltip-right .arrow,
.bs-tooltip-auto[x-placement^="right"] .arrow {
  left: 0;

  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-right .arrow::before,
.bs-tooltip-auto[x-placement^="right"] .arrow::before {
  right: 0;

  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: #000;
}

.bs-tooltip-bottom,
.bs-tooltip-auto[x-placement^="bottom"] {
  padding: 0.4rem 0;
}
.bs-tooltip-bottom .arrow,
.bs-tooltip-auto[x-placement^="bottom"] .arrow {
  top: 0;
}
.bs-tooltip-bottom .arrow::before,
.bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
  bottom: 0;

  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: #000;
}

.bs-tooltip-left,
.bs-tooltip-auto[x-placement^="left"] {
  padding: 0 0.4rem;
}
.bs-tooltip-left .arrow,
.bs-tooltip-auto[x-placement^="left"] .arrow {
  right: 0;

  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-left .arrow::before,
.bs-tooltip-auto[x-placement^="left"] .arrow::before {
  left: 0;

  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #000;
}

.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;

  text-align: center;

  color: #fff;
  border-radius: 0.375rem;
  background-color: #000;
}

.bg-success {
  background-color: #2dce89 !important;
}

a.bg-success:hover,
a.bg-success:focus,
button.bg-success:hover,
button.bg-success:focus {
  background-color: #24a46d !important;
}

.bg-info {
  background-color: #11cdef !important;
}

a.bg-info:hover,
a.bg-info:focus,
button.bg-info:hover,
button.bg-info:focus {
  background-color: #0da5c0 !important;
}

.bg-warning {
  background-color: #fb6340 !important;
}

a.bg-warning:hover,
a.bg-warning:focus,
button.bg-warning:hover,
button.bg-warning:focus {
  background-color: #fa3a0e !important;
}

.bg-danger {
  background-color: #f5365c !important;
}

a.bg-danger:hover,
a.bg-danger:focus,
button.bg-danger:hover,
button.bg-danger:focus {
  background-color: #ec0c38 !important;
}

.bg-default {
  background-color: #172b4d !important;
}

a.bg-default:hover,
a.bg-default:focus,
button.bg-default:hover,
button.bg-default:focus {
  background-color: #0b1526 !important;
}

.bg-transparent {
  background-color: transparent !important;
}

.border-0 {
  border: 0 !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.d-flex {
  display: flex !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

@media (min-width: 1200px) {
  .justify-content-xl-between {
    justify-content: space-between !important;
  }
}

.sr-only {
  position: absolute;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  width: 1px;
  height: 1px;
  padding: 0;
  white-space: nowrap;
  border: 0;
}

.shadow {
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.mr-2 {
  margin-right: 0.5rem !important;
}

.mr-3 {
  margin-right: 1rem !important;
}

.mr-4 {
  margin-right: 1.5rem !important;
}

.mt-5 {
  margin-top: 3rem !important;
}

.mb-5 {
  margin-bottom: 3rem !important;
}

.mt-7 {
  margin-top: 6rem !important;
}

.py-4 {
  padding-top: 1.5rem !important;
}

.py-4 {
  padding-bottom: 1.5rem !important;
}

.m-auto {
  margin: auto !important;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.text-white {
  color: #fff !important;
}

.text-light {
  color: #adb5bd !important;
}

a.text-light:hover,
a.text-light:focus {
  color: #919ca6 !important;
}

.text-white {
  color: #fff !important;
}

a.text-white:hover,
a.text-white:focus {
  color: #e6e6e6 !important;
}

media print {
  *,
  *::before,
  *::after {
    box-shadow: none !important;
    text-shadow: none !important;
  }

  a:not(.btn) {
    text-decoration: underline;
  }

  thead {
    display: table-header-group;
  }

  tr,
  img {
    page-break-inside: avoid;
  }

  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }

  h2,
  h3 {
    page-break-after: avoid;
  }

  page {
    size: a3;
  }

  body {
    min-width: 992px !important;
  }

  .container {
    min-width: 992px !important;
  }

  .badge {
    border: 1px solid #000;
  }

  .table {
    border-collapse: collapse !important;
  }

  .table td,
  .table th {
    background-color: #fff !important;
  }

  .table-dark {
    color: inherit;
  }

  .table-dark th,
  .table-dark td,
  .table-dark thead th,
  .table-dark tbody + tbody {
    border-color: #e9ecef;
  }

  .table .thead-dark th {
    color: inherit;
    border-color: #e9ecef;
  }
}

figcaption,
main {
  display: block;
}

main {
  overflow: hidden;
}

@keyframes floating-lg {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(15px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes floating-sm {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(5px);
  }

  100% {
    transform: translateY(0px);
  }
}

[class*="shadow"] {
  transition: all 0.15s ease;
}

.text-sm {
  font-size: 0.875rem !important;
}

.text-white {
  color: #fff !important;
}

a.text-white:hover,
a.text-white:focus {
  color: #e6e6e6 !important;
}

.text-light {
  color: #ced4da !important;
}

a.text-light:hover,
a.text-light:focus {
  color: #b1bbc4 !important;
}

.avatar {
  font-size: 1rem;
  display: inline-flex;
  width: 48px;
  height: 48px;
  color: #fff;
  border-radius: 50%;
  background-color: #adb5bd;
  align-items: center;
  justify-content: center;
}

.avatar img {
  width: 100%;
  border-radius: 50%;
}

.avatar-sm {
  font-size: 0.875rem;
  width: 36px;
  height: 36px;
}

.avatar-group .avatar {
  position: relative;
  z-index: 2;
  border: 2px solid #fff;
}

.avatar-group .avatar:hover {
  z-index: 3;
}

.avatar-group .avatar + .avatar {
  margin-left: -1rem;
}

.badge {
  text-transform: uppercase;
}

.badge a {
  color: #fff;
}

.btn .badge:not(:first-child) {
  margin-left: 0.5rem;
}

.btn .badge:not(:last-child) {
  margin-right: 0.5rem;
}

.badge-dot {
  font-size: 0.875rem;
  font-weight: 400;
  padding-right: 0;
  padding-left: 0;
  text-transform: none;
  background: transparent;
}

.badge-dot strong {
  color: #32325d;
}

.badge-dot i {
  display: inline-block;
  width: 0.375rem;
  height: 0.375rem;
  margin-right: 0.375rem;
  vertical-align: middle;
  border-radius: 50%;
}

.btn {
  font-size: 0.875rem;
  position: relative;
  transition: all 0.15s ease;
  letter-spacing: 0.025em;
  text-transform: none;
  will-change: transform;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.btn:not(:last-child) {
  margin-right: 0.5rem;
}

.btn i:not(:first-child) {
  margin-left: 0.5rem;
}

.btn i:not(:last-child) {
  margin-right: 0.5rem;
}

.btn-sm {
  font-size: 0.75rem;
}

[class*="btn-outline-"] {
  border-width: 1px;
}

.btn-icon-only {
  width: 2.375rem;
  height: 2.375rem;
  padding: 0;
}

a.btn-icon-only {
  line-height: 2.5;
}

.btn-icon-only.btn-sm {
  width: 2rem;
  height: 2rem;
}

.main-content {
  position: relative;
}

.dropdown {
  display: inline-block;
}

.dropdown-menu {
  min-width: 12rem;
}
.dropdown-menu.show {
  display: block;
}

.dropdown-menu .dropdown-item {
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
}

.dropdown-menu .dropdown-item > i {
  font-size: 1rem;
  margin-right: 1rem;
  vertical-align: -17%;
}

.dropdown-menu a.media > div:first-child {
  line-height: 1;
}

.dropdown-menu a.media p {
  color: #8898aa;
}

.dropdown-menu a.media:hover p {
  color: #172b4d !important;
}

.footer {
  padding: 2.5rem 0;
  background: #f7fafc;
}

.footer .copyright {
  font-size: 0.875rem;
}

@keyframes hide-navbar-dropdown {
  from {
    opacity: 1;
  }

  to {
    transform: translate(0, 10px);
    opacity: 0;
  }
}

@keyframes show-navbar-collapse {
  0% {
    transform: scale(0.95);
    transform-origin: 100% 0;
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes hide-navbar-collapse {
  from {
    transform: scale(1);
    transform-origin: 100% 0;
    opacity: 1;
  }

  to {
    transform: scale(0.95);
    opacity: 0;
  }
}

.page-item.active .page-link {
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.page-item .page-link,
.page-item span {
  font-size: 0.875rem;
  display: flex;
  width: 36px;
  height: 36px;
  margin: 0 3px;
  padding: 0;
  border-radius: 50% !important;
  align-items: center;
  justify-content: center;
}

.progress {
  overflow: hidden;
  height: 8px;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  background-color: #e9ecef;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.progress .sr-only {
  font-size: 13px;
  line-height: 20px;
  left: 0;
  clip: auto;
  width: auto;
  height: 20px;
  margin: 0 0 0 30px;
}

.progress-bar {
  height: auto;
  border-radius: 0;
  box-shadow: none;
}

.table thead th {
  font-size: 0.65rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-bottom: 1px solid #e9ecef;
}

.table th {
  font-weight: 600;
}

.table td .progress {
  width: 120px;
  height: 3px;
  margin: 0;
}

.table td,
.table th {
  font-size: 0.8125rem;
  white-space: nowrap;
}

.table.align-items-center td,
.table.align-items-center th {
  vertical-align: middle;
}

.table .thead-dark th {
  color: #4d7bca;
  background-color: #1c345d;
}

.table .thead-light th {
  color: #8898aa;
  background-color: #f6f9fc;
}

.table-flush td,
.table-flush th {
  border-right: 0;
  border-left: 0;
}

.table-flush tbody tr:first-child td,
.table-flush tbody tr:first-child th {
  border-top: 0;
}

.table-flush tbody tr:last-child td,
.table-flush tbody tr:last-child th {
  border-bottom: 0;
}

.card .table {
  margin-bottom: 0;
}

.card .table td,
.card .table th {
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}

p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .btn {
    margin-bottom: 10px;
  }
}
</style>
