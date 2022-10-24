import axios from "@axios";

export default {
    namespaced: true,
    state: {
        year: {
            id: 3,
            name: "2566",
        },
    },
    getters: {},
    mutations: {
        SET_YEAR(state, val) {
            state.year = val;
        },
    },
    actions: {
        fetchProjects(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/project", { params: queryParams })
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        fetchProject(ctx, { id }) {
            return new Promise((resolve, reject) => {
                axios
                    .get(`/project/${id}`)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        addPaper(ctx, dataSend) {
            var form_data = new FormData();

            for (var key in dataSend) {
                form_data.append(key, dataSend[key]);
            }

            return new Promise((resolve, reject) => {
                axios
                    .post("/paper", form_data, {
                        headers: {
                            "content-type": "multipart/form-data",
                        },
                    })
                    .then((response) => {
                        return resolve(response);
                    })
                    .catch((error) => reject(error));
            });
        },

        editProject(ctx, dataSend) {
            var form_data = new FormData();

            for (var key in dataSend) {
                form_data.append(key, dataSend[key]);
            }

            form_data.append("_method", "PUT");

            return new Promise((resolve, reject) => {
                axios
                    .post(`/paper/${dataSend.paper_id}`, form_data, {
                        headers: {
                            "content-type": "multipart/form-data",
                        },
                    })
                    .then((response) => {
                        return resolve(response);
                    })
                    .catch((error) => reject(error));
            });
        },

        deletePaper(ctx, { id }) {
            return new Promise((resolve, reject) => {
                axios
                    .delete(`/paper/${id}`)
                    .then((response) => {
                        return resolve(response);
                    })
                    .catch((error) => reject(error));
            });
        },

        fetchPIs(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/pi", { params: queryParams })
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },

        fetchPapers(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/paper", { params: queryParams })
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },

        fetchPaperStatuses(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/paper-status", { params: queryParams })
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },

        fetchPaperTypes(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/paper-type", { params: queryParams })
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
    },
};
