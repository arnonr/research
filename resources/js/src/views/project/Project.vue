<template>
    <!-- Table Container Card -->
    <b-card no-body>
        <b-overlay :show="isOverLay" opacity="0.3" spinner-variant="primary">
            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <b-col>
                        <h3 class="text-center">
                            Know-Drive-Research Fund-Project ({{
                                store.state.project.year.name
                            }})
                        </h3>
                        <b-button
                            variant="primary"
                            @click="handleAddFormClick()"
                        >
                            ADD
                        </b-button>
                    </b-col>
                </b-row>
            </div>
            <div class="m-2">
                <b-row>
                    <b-col class="table-responsive">
                        <table
                            ref="refProjectListTable"
                            show-empty
                            empty-text="No matching records found"
                            class="table table-bordered table-relative table-striped"
                        >
                            <thead>
                                <!-- PAPER TITLE	STATUS	TYPE	PRINCIPAL INVESTIGATOR (PI)	ATTACHED FILES -->
                                <th class="text-center">PAPER</th>
                                <th class="text-center">STATUS</th>
                                <th class="text-center">TYPE</th>
                                <th class="text-center">
                                    PRINCIPAL INVESTIGATOR (PI)
                                </th>
                                <th class="text-center">ATTACHED FILES</th>
                            </thead>
                            <tbody v-for="it in items">
                                <tr>
                                    <td colspan="5" class="bg-secondary">
                                        <h4 class="text-white">
                                            {{ it.code }} ( {{ it.pm.name }} )
                                            <br />
                                            <span
                                                v-if="
                                                    $store.state.project.year
                                                        .id != 1 &&
                                                    $store.state.project.year
                                                        .id != 2
                                                "
                                                >{{ it.title }}</span
                                            >
                                        </h4>
                                    </td>
                                </tr>

                                <tr v-for="paper in it.papers">
                                    <td>{{ paper.title }}</td>
                                    <td
                                        class="text-center font-weight-bold"
                                        :style="{
                                            'background-color':
                                                paper.paper_status.color,
                                            color: '#000000',
                                        }"
                                    >
                                        {{ paper.paper_status.label }}
                                    </td>
                                    <td class="text-center">
                                        {{ paper.paper_type.label }}
                                    </td>
                                    <td class="text-center">
                                        {{ paper.pi.label }}
                                    </td>
                                    <td class="text-center" style="width:20%">
                                        <b-button
                                            class="btn-warning"
                                            @click="
                                                handleFormClick({ ...paper })
                                            "
                                        >
                                            <feather-icon icon="EditIcon"
                                        /></b-button>
                                        <b-button
                                            class="btn-success"
                                            target="_blank"
                                            :href="paper.file_old"
                                        >
                                            <feather-icon icon="FileIcon"
                                        /></b-button>
                                        <b-button
                                            class="btn-danger"
                                            @click="
                                                handleDeleteClick({ ...paper })
                                            "
                                        >
                                            <feather-icon icon="TrashIcon"
                                        /></b-button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </b-col>
                </b-row>
            </div>

            <project-form
                v-model="isModal"
                :isSubmit="isSubmit"
                :item="item"
                :selectOptions="selectOptions"
                @on-submit="onSubmit()"
            />

            <!-- <project-view v-model="isViewModal" :item="item" /> -->
        </b-overlay>
    </b-card>
</template>

<script>
import {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BTooltip,
    BSpinner,
    BOverlay,
    BFormCheckbox,
} from "bootstrap-vue";
import vSelect from "vue-select";
import { onUnmounted } from "@vue/composition-api";
import store from "@/store";
import useProject from "./useProject";

import ProjectForm from "./ProjectForm.vue";
// import ProjectView from "./ProjectView.vue";

import projectStoreModule from "./projectStoreModule";

export default {
    components: {
        BCard,
        BRow,
        BCol,
        BFormInput,
        BButton,
        BTable,
        BMedia,
        BAvatar,
        BLink,
        BBadge,
        BDropdown,
        BDropdownItem,
        BPagination,
        BTooltip,
        BSpinner,
        BOverlay,
        BFormCheckbox,
        vSelect,
        ProjectForm,
        // ProjectView,
    },
    setup() {
        const PROJECT_APP_STORE_MODULE_NAME = "project";

        // Register module
        if (!store.hasModule(PROJECT_APP_STORE_MODULE_NAME))
            store.registerModule(
                PROJECT_APP_STORE_MODULE_NAME,
                projectStoreModule
            );

        // UnRegister on leave
        onUnmounted(() => {
            // if (store.hasModule(PROJECT_APP_STORE_MODULE_NAME))
                // store.unregisterModule(PROJECT_APP_STORE_MODULE_NAME);
        });

        const {
            fetchProjects,
            searchQuery,
            blankPaper,
            items,
            item,
            isModal,
            isAddModal,
            // isViewModal,
            isSubmit,
            refetchData,
            onSubmit,
            onDelete,
            isOverLay,
            selectOptions,
        } = useProject();

        const handleFormClick = (data) => {
            item.value = data;
            isModal.value = true;
        };

        const handleAddFormClick = () => {
            item.value = JSON.parse(JSON.stringify(blankPaper));
            isModal.value = true;
        };

        // const handleViewClick = (data) => {
        //     item.value = data.item;
        //     isViewModal.value = true;
        // };

        const handleDeleteClick = (data) => {
            item.value = data;
            onDelete();
        };

        const handleChangeYear = (val) => {
            store.commit("project/SET_YEAR", val);
        };

        return {
            fetchProjects,
            searchQuery,
            items,
            item,
            isModal,
            isAddModal,
            // isViewModal,
            isSubmit,
            refetchData,
            onSubmit,
            onDelete,
            // handleViewClick,
            handleFormClick,
            handleAddFormClick,
            handleDeleteClick,
            handleChangeYear,
            isOverLay,
            store,
            selectOptions,
        };
    },
};
</script>

<style lang="scss" scoped>
.per-page-selector {
    width: 90px;
}

.invoice-filter-select {
    min-width: 190px;

    ::v-deep .vs__selected-options {
        flex-wrap: nowrap;
    }

    ::v-deep .vs__selected {
        width: 100px;
    }
}
</style>

<style lang="scss">
// @import "@core/scss/vue/libs/vue-select.scss";
</style>
