<script setup>
import { ref, onMounted } from "vue";
import PageTitle from "../../components/layouts/PageTitle.vue";
import ClientHttp from "../../libs/ClientHttp";
import { toast } from "vue3-toastify";
import StepOne from "./StepOne.vue";
import StepTwo from "./StepTwo.vue";
import RecapStep from "./RecapStep.vue";

// Données réactives
const nuid = ref(null);
const userData = ref(null);
const error = ref(null);
const selectedDataFromStepOne = ref(null);
const allCitoyens = ref([]);

const name = ref(null);

const uniqueCitoyen = ref({
  name: "",
  nom: "",
  dateNaissance: "",
  paysOrigine: "",
  coutume: "",
  prefecture: "",
  sousPrefecture: "",
  produitId: "",
  userId: "",
});

const storePiece = ref({
  value: "",
});

const savePiece = async () => {
  try {
    if (!storePiece.value.value.trim()) {
      const message = "Veuillez sélectionner une pièce";
      toast.error(message, { position: toast.POSITION.TOP_RIGHT });
      return;
    }
    const documnts = await ClientHttp.post("/api/pieces", {
      value: storePiece.value.value,
    });
    console.log(documnts);
    toast.success("Pièces enregistrer avec succès!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (error) {
    console.error(error);
    const message = "Erreur lors de l'enregistrement de la pièce";
    toast.error(message, { position: toast.POSITION.TOP_RIGHT });
  }
};

const searchByNiud = async (nuid) => {
  try {
    const response = await ClientHttp.get(`/afisApi/searchByNiud/${nuid}`);
    uniqueCitoyen.value = response.data.object;
    if (uniqueCitoyen.value) {
      localStorage.setItem("infoCitoyen", JSON.stringify(uniqueCitoyen.value));
    }
    console.log("Informations du citoyen récupérées :", uniqueCitoyen);
  } catch (error) {
    console.error("Erreur lors de la recherche par NIUD :", error);
    throw error;
  }
};

const handleSubmit = async (event) => {
  event.preventDefault();
  if (nuid.value) {
    try {
      userData.value = await searchByNiud(nuid.value);
      error.value = null;
    } catch (err) {
      error.value = err.message || "Une erreur est survenue.";
    }
  }
};

const getSelected = (selectedData) => {
  selectedDataFromStepOne.value = selectedData.libelle;
};
</script>

<template>
  <div class="container-fluid">
    <PageTitle title="Nouvelle demande" />
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title mb-0">
              Enrégistrement d'une nouvelle demande
            </h4>
          </div>
          <div class="card-body">
            <div id="progrss-wizard" class="twitter-bs-wizard">
              <ul class="twitter-bs-wizard-nav nav nav-pills nav-justified">
                <li class="nav-item">
                  <a
                    href="#progress-start-details"
                    class="nav-link"
                    data-toggle="tab"
                  >
                    <div
                      class="step-icon"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="start Details"
                    >
                      <i class="bx bx-list-ul"></i>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#progress-nuid-document"
                    class="nav-link"
                    data-toggle="tab"
                  >
                    <div
                      class="step-icon"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="nuid Document"
                    >
                      <i class="bx bx-book-bookmark"></i>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#progress-pieces-detail"
                    class="nav-link"
                    data-toggle="tab"
                  >
                    <div
                      class="step-icon"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="pieces Details"
                    >
                      <i class="bx bxs-bank"></i>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#progress-resume-detail"
                    class="nav-link"
                    data-toggle="tab"
                  >
                    <div
                      class="step-icon"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="resume Details"
                    >
                      <i class="bx bxs-bank"></i>
                    </div>
                  </a>
                </li>
              </ul>
              <!-- wizard-nav -->

              <div id="bar" class="progress mt-4">
                <div
                  class="progress-bar bg-[1E2A5A] progress-bar-striped progress-bar-animated"
                ></div>
              </div>
              <div class="tab-content twitter-bs-wizard-tab-content">
                <!-- Première Etape -->
                <div class="tab-pane" id="progress-start-details">
                  <div class="text-center mb-4">
                    <h5>Listes des documents</h5>
                    <p class="card-title-desc">
                      Les différentes types de certificats
                    </p>
                  </div>
                  <form @submit.prevent="handleSubmit">
                    <div class="row">
                      <div class="col-lg-12">
                        <StepOne @changedChecked="getSelected" />
                        <ul class="pager wizard twitter-bs-wizard-pager-link">
                          <li class="next">
                            <button class="btn btn-success">
                              Suivant<i class="bx bx-chevron-right ms-1"></i>
                            </button>
                          </li>
                        </ul>
                        {{ selectedDataFromStepOne }}
                      </div>
                    </div>
                  </form>
                </div>
                <!-- Deuxième Etape -->
                <div class="tab-pane" id="progress-nuid-document">
                  <div>
                    <div class="text-center mb-4">
                      <h5>{{ selectedDataFromStepOne }}</h5>
                      <p class="card-title-desc">
                        Formulaire du {{ selectedDataFromStepOne }}
                      </p>
                    </div>
                    <!-- formulaire -->
                    <div class="row mt-4">
                      <div class="col-lg-6">
                        <form
                          class="row gx-3 gy-2 align-items-center mb-3"
                          id="search"
                          @submit.prevent="handleSubmit"
                        >
                          <div class="hstack gap-3">
                            <input
                              class="form-control me-auto"
                              type="text"
                              placeholder="Search nuid..."
                              name="query"
                              v-model="nuid"
                            />
                            <input
                              type="submit"
                              value="Search"
                              class="btn btn-secondary"
                            />
                            <div class="vr"></div>
                            <button type="reset" class="btn btn-outline-danger">
                              Reset
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <StepTwo
                      :selectoption="selectedDataFromStepOne"
                      :unique-citoyen="uniqueCitoyen"
                      @updateUniqueCitoyen="updateUniqueCitoyen"
                    />
                  </div>
                </div>
                <!-- Troisième Etape Enregistrement Pièces -->
                <div class="tab-pane" id="progress-pieces-detail">
                  <div>
                    <div class="text-center mb-4">
                      <h5>pièces</h5>
                      <p class="card-title-desc">
                        Remplissez toutes les informations ci-dessous
                      </p>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <form @submit.prevent="savePiece">
                          <div class="drop_box">
                            <div class="mb-3">
                              <i
                                class="display-4 text-muted bx bx-cloud-upload"
                              ></i>
                            </div>
                            <h5 class="mb-3">
                              Déposez les fichiers ici ou cliquez pour
                              télécharger.
                            </h5>
                            <input
                              type="text"
                              name="file"
                              class="form-control"
                              v-model="storePiece.value"
                            />
                          </div>
                        </form>
                      </div>
                    </div>

                    <ul class="pager wizard twitter-bs-wizard-pager-link">
                      <li class="previous">
                        <a href="javascript: void(0);" class="btn btn-success"
                          ><i class="bx bx-chevron-left me-1"></i> Précédent</a
                        >
                      </li>
                      <li class="float-end next">
                        <button @click="savePiece" class="btn btn-success">
                          Suivant <i class="bx bx-chevron-right ms-1"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- Quatrième Etape Résumé-->
                <div class="tab-pane" id="progress-resume-detail">
                  <div>
                    <div class="text-center mb-4">
                      <h5>Recap</h5>
                      <p class="card-title-desc">Récap des informations</p>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <RecapStep
                          :selectoption="selectedDataFromStepOne"
                          :unique-citoyen="uniqueCitoyen"
                          @updateUniqueCitoyen="updateUniqueCitoyen"
                        />
                      </div>
                    </div>

                    <ul class="pager wizard twitter-bs-wizard-pager-link">
                      <li class="previous">
                        <a href="javascript: void(0);" class="btn btn-success"
                          ><i class="bx bx-chevron-left me-1"></i> Précédent</a
                        >
                      </li>
                      <li class="float-end">
                        <button
                          class="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target=".confirmModal"
                        >
                          Enregistrer
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
  </div>
  <div class="modal fade confirmModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="text-center">
            <div class="mb-3">
              <i class="bx bx-check-circle display-4 text-success"></i>
            </div>
            <h5>Confirmer la création du document</h5>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn btn-light w-md"
            data-bs-dismiss="modal"
          >
            Fermer
          </button>
          <button
            type="button"
            class="btn btn-primary w-md"
            data-bs-dismiss="modal"
          >
            Creer le Document
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
