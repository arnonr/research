import { ref, watch, computed, reactive } from "@vue/composition-api";
import store from "@/store";

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import Swal from "sweetalert2";

export default function useProject() {
    const toast = useToast();

    const errorToast = (message) => {
        toast({
            component: ToastificationContent,
            props: {
                title: "Error : " + message,
                icon: "AlertTriangleIcon",
                variant: "danger",
            },
        });
    };

    // Start List
    const searchQuery = ref("");

    const isViewModal = ref(false);
    const isModal = ref(false);
    const isAddModal = ref(false);
    const isSubmit = ref(false);
    const isOverLay = ref(false);

    const items = ref([]);

    const blankPaper = {
        id: null,
        file_old: null,
        file: null,
        project: { label: null, code: null },
        paper_type: { label: null, code: null },
        title: null,
        paper_status: { label: null, code: null },
        pi: { label: null, code: null },
        active: 1,
    };

    const selectOptions = ref({
        project: [],
        pi: [],
        paper_type: [],
        paper_status: [],
    });

    const item = ref(JSON.parse(JSON.stringify(blankPaper)));

    const refetchData = () => {
        refetchClient({
            q: searchQuery.value,
        });
    };

    const refetchClient = (config) => {
        const {
            q = "",
            perPage = 25,
            page = 1,
            sort_by = "id",
            sort_desc = false,
        } = config;

        const queryLowered = q.toLowerCase();
        const filteredData = initialItems.value.filter((data) => {
            return (
                data.name_th?.toLowerCase().includes(queryLowered) ||
                data.name_en?.toLowerCase().includes(queryLowered) ||
                data.province.label?.toLowerCase().includes(queryLowered) ||
                data.amphur.label?.toLowerCase().includes(queryLowered) ||
                data.tumbol.label?.toLowerCase().includes(queryLowered)
            );
        });

        const sortedData = filteredData.sort(sortCompare(sort_by));
        if (sort_desc) sortedData.reverse();

        items.value = paginateArray(sortedData, perPage, page);
        totalProjects.value = filteredData.length;
    };

    const initDataConvert = (data) => {
        return data;
    };

    store
        .dispatch("project/fetchPaperTypes")
        .then((response) => {
            const { data } = response.data;
            selectOptions.value.paper_type = data.map((d) => {
                return {
                    label: d.name,
                    code: d.id,
                };
            });
        })
        .catch((error) => {
            console.log(error);
            toast({
                component: ToastificationContent,
                props: {
                    title: "Error fetching Paper Type's list",
                    icon: "AlertTriangleIcon",
                    variant: "danger",
                },
            });
        });

    store
        .dispatch("project/fetchPaperStatuses")
        .then((response) => {
            const { data } = response.data;
            selectOptions.value.paper_status = data.map((d) => {
                return {
                    label: d.name,
                    code: d.id,
                };
            });
        })
        .catch((error) => {
            console.log(error);
            toast({
                component: ToastificationContent,
                props: {
                    title: "Error fetching Paper Status's list",
                    icon: "AlertTriangleIcon",
                    variant: "danger",
                },
            });
        });

    store
        .dispatch("project/fetchPIs")
        .then((response) => {
            const { data } = response.data;
            selectOptions.value.pi = data.map((d) => {
                return {
                    label: d.name,
                    code: d.id,
                };
            });
        })
        .catch((error) => {
            console.log(error);
            toast({
                component: ToastificationContent,
                props: {
                    title: "Error fetching PI's list",
                    icon: "AlertTriangleIcon",
                    variant: "danger",
                },
            });
        });

    const fetchProjects = (ctx, callback) => {
        isOverLay.value = true;
        store
            .dispatch("project/fetchProjects", {
                year_id: store.state.project.year.id,
                sort_by: 'code'
            })
            .then((response) => {
                const { data } = response.data;

                items.value = data.map((item) => {
                    let papers = item.papers.map((pItem) => {
                        let p = { ...pItem };

                        if (p.file !== undefined) {
                            p.file_old =
                                window.location.origin + "/storage" + p.file;
                            p.file = [];
                        } else {
                            p.file_old = null;
                            p.file = [];
                        }

                        if (
                            store.state.project.year.id == 1 ||
                            store.state.project.year.id == 2
                        ) {
                            p.project = {
                                label: item.code,
                                code: item.id,
                            };
                        } else {
                            p.project = {
                                label: item.code + " " + item.title,
                                code: item.id,
                            };
                        }

                        p.paper_type = {
                            label: p.paper_type.name,
                            code: p.paper_type.id,
                        };

                        p.paper_status = {
                            label: p.paper_status.name,
                            code: p.paper_status.id,
                            color: p.paper_status.color,
                        };

                        p.pi = {
                            label: p.pi.name,
                            code: p.pi.id,
                        };

                        return p;
                    });
                    // project.papers = papers;
                    item.papers = papers;
                    return item;
                });

                selectOptions.value.project = data.map((d) => {
                    if (
                        store.state.project.year.id == 1 ||
                        store.state.project.year.id == 2
                    ) {
                        return {
                            label: d.code,
                            code: d.id,
                        };
                    } else {
                        return {
                            label: d.code + " " + d.title,
                            code: d.id,
                        };
                    }
                });

                isOverLay.value = false;
            })
            .catch((error) => {
                console.log(error);
                toast({
                    component: ToastificationContent,
                    props: {
                        title: "Error fetching Projects' list",
                        icon: "AlertTriangleIcon",
                        variant: "danger",
                    },
                });
                isOverLay.value = false;
            });
    };
    fetchProjects();

    // End List

    // Start Form
    const onSubmit = () => {
        isSubmit.value = true;
        isOverLay.value = true;

        let dataSend = {
            title: item.value.title,
            paper_type_id: item.value.paper_type.code,
            paper_status_id: item.value.paper_status.code,
            pi_id: item.value.pi.code,
            file: item.value.file,
            project_id: item.value.project.code,

            active: 1,
        };

        if (item.value.id == null) {
            store
                .dispatch("project/addPaper", dataSend)
                .then(async (response) => {
                    if (response.status == 200) {
                        let { data } = response;

                        // data = initDataConvert(data);

                        // const index = items.value.findIndex((e) => {
                        //     return data.id === e.id;
                        // });

                        // if (index != -1) {
                        //     items.value.splice(index, 1, { ...data });
                        // } else {
                        //     items.value.push(data);
                        // }

                        // const indexInit = initialItems.value.findIndex((e) => {
                        //     return data.id == e.id;
                        // });
                        // if (indexInit != -1) {
                        //     initialItems.value.splice(indexInit, 1, {
                        //         ...data,
                        //     });
                        // } else {
                        //     initialItems.value.push(data);
                        // }

                        // refetchData();

                        fetchProjects();

                        isSubmit.value = false;
                        isModal.value = false;
                        isOverLay.value = false;

                        toast({
                            component: ToastificationContent,
                            props: {
                                title: "Success : Added Paper",
                                icon: "CheckIcon",
                                variant: "success",
                            },
                        });
                    } else {
                        isSubmit.value = false;
                        isOverLay.value = false;
                        errorToast(response.data);
                    }
                })
                .catch((error) => {
                    isSubmit.value = false;
                    isOverLay.value = false;

                    let errorText =
                        error.response.data.error.message.replaceAll(
                            "project.",
                            ""
                        );
                    errorText = errorText.replaceAll("\n", "<br>");
                    errorText =
                        errorText.slice(0, 0) + "<br>" + errorText.slice(0);
                    errorToast(errorText);
                });
        } else {
            // Update
            dataSend["paper_id"] = item.value.id;

            store
                .dispatch("project/editProject", dataSend)
                .then(async (response) => {
                    if (response.status == 200) {
                        let { data } = response;

                        // data = initDataConvert(data);

                        // const indexInit = initialItems.value.findIndex((e) => {
                        //     return item.value.id === e.id;
                        // });

                        // initialItems.value.splice(indexInit, 1, { ...data });

                        // const index = items.value.findIndex((e) => {
                        //     return item.value.id === e.id;
                        // });
                        // items.value.splice(index, 1, { ...data });

                        fetchProjects();

                        isSubmit.value = false;
                        isModal.value = false;
                        isOverLay.value = false;

                        toast({
                            component: ToastificationContent,
                            props: {
                                title: "Success : Updated Project",
                                icon: "CheckIcon",
                                variant: "success",
                            },
                        });
                    } else {
                        isSubmit.value = false;
                        isOverLay.value = false;

                        errorToast(response.data);
                    }
                })
                .catch((error) => {
                    isSubmit.value = false;
                    isOverLay.value = false;

                    let errorText =
                        error.response.data.error.message.replaceAll(
                            "project.",
                            ""
                        );
                    errorText = errorText.replaceAll("\n", "<br>");
                    errorText =
                        errorText.slice(0, 0) + "<br>" + errorText.slice(0);
                    errorToast(errorText);
                });
        }
    };

    const onDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-outline-danger ml-1",
            },
            buttonsStyling: false,
        }).then((result) => {
            if (result.isConfirmed) {
                isOverLay.value = true;
                store
                    .dispatch("project/deletePaper", { id: item.value.id })
                    .then(async (response) => {
                        if (response.status == 200) {
                            isOverLay.value = false;

                            Swal.fire({
                                icon: "success",
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                customClass: {
                                    confirmButton: "btn btn-success",
                                },
                            });

                            fetchProjects();
                        } else {
                            errorToast(response.data);
                            isOverLay.value = false;
                        }
                    })
                    .catch((error) => {
                        let errorText =
                            error.response.data.error.message.replaceAll(
                                "project.",
                                ""
                            );
                        errorText = errorText.replaceAll("\n", "<br>");
                        errorText =
                            errorText.slice(0, 0) + "<br>" + errorText.slice(0);
                        errorToast(errorText);
                        isOverLay.value = false;
                    });
            }
        });
    };

    watch([searchQuery], () => {
        refetchData();
    });

    watch(
        () => store.state.project.year.id,
        (value) => {
            // item.value.province_id = item.value.province.code;
            fetchProjects();
        }
    );

    // *===============================================---*
    // *--------- UI ---------------------------------------*
    // *===============================================---*
    const paginateArray = (array, perPage, page) =>
        array.slice((page - 1) * perPage, page * perPage);

    const sortCompare = (key) => (a, b) => {
        const fieldA = a[key];
        const fieldB = b[key];

        let comparison = 0;
        if (fieldA > fieldB) {
            comparison = 1;
        } else if (fieldA < fieldB) {
            comparison = -1;
        }
        return comparison;
    };

    return {
        fetchProjects,
        searchQuery,
        blankPaper,
        items,
        item,
        isModal,
        isAddModal,
        isViewModal,
        isSubmit,
        refetchData,
        onSubmit,
        onDelete,
        isOverLay,
        selectOptions,
    };
}
