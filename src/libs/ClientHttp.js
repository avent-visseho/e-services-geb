import axios from "axios";

/* const baseURL = "http://192.168.0.117:8080"; */
const baseURL = "http://127.0.0.1:8000";

//création d'une instance Axios avec la configuration de base
const clientHtt = axios.create({
    baseURL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    }
});

//ajout d'un intercepteur pour les reqêtes sortantes
clientHtt.interceptors.request.use(
    async (config) => {
            try {
                //Récupérer le token du cookie
                const token = localStorage.getItem('token');

                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            } catch (error) {
                console.log("Erreur lors de la récupération et de l'ajout du token : ", error.message);
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }

);

export default clientHtt;