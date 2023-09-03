<template>
    <!-- Table Container Card -->
    <b-card no-body>
        <b-overlay :show="isOverLay" opacity="0.3" spinner-variant="primary">
            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <b-col>
                        <h3 class="text-center">
                            Report Principal Investigator ({{
                                store.state.project.year.name
                            }})
                        </h3>
                    </b-col>
                </b-row>
            </div>
            <div class="m-2">
                <b-row>
                    <b-col>
                        <!-- Graph -->
                        <vue-apex-charts
                            v-if="Object.keys(apexChatData).length !== 0"
                            type="bar"
                            height="400"
                            :options="apexChatData.columnChart.chartOptions"
                            :series="apexChatData.columnChart.series"
                        />
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
                                <th class="text-center">
                                    Principal Investigator (PI)
                                </th>
                                <th class="text-center">JOURNAL</th>
                                <th class="text-center">CONFERENCE</th>
                            </thead>
                            <tbody>
                                <tr v-for="it in items">
                                    <td class="text-center">{{ it.name }}</td>
                                    <td class="text-center">
                                        {{ it.journal }}
                                    </td>
                                    <td class="text-center">
                                        {{ it.conference }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </b-col>
                </b-row>
            </div>
        </b-overlay>
    </b-card>
</template>

<script>
import {
    BCard,
    BRow,
    BCol,
    BButton,
    BTable,
    BLink,
    BBadge,
    BTooltip,
    BSpinner,
    BOverlay,
} from "bootstrap-vue";
import { onUnmounted } from "@vue/composition-api";
import store from "@/store";
import useReportPi from "./useReportPi";

import projectStoreModule from "../projectStoreModule";
// import reportPiStoreModule from "./reportPiStoreModule";
import VueApexCharts from "vue-apexcharts";

export default {
    components: {
        BCard,
        BRow,
        BCol,
        BButton,
        BTable,
        BLink,
        BBadge,
        BTooltip,
        BSpinner,
        BOverlay,
        VueApexCharts,
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

        const { items, isOverLay, apexChatData } = useReportPi();

        return {
            items,
            isOverLay,
            apexChatData,
            store,
        };
    },
};
</script>
