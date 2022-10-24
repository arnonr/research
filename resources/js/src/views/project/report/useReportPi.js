import { ref, watch, computed, reactive } from "@vue/composition-api";
import store from "@/store";

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import Swal from "sweetalert2";

export default function useReportPi() {
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
    const isOverLay = ref(false);

    const items = ref([]);

    // colors
    const chartColors = {
        column: {
            series1: "#826af9",
            series2: "#F9D4B4",
            bg: "#f8d3ff",
        },
    };

    const apexChatData = ref({});
    console.log(apexChatData)
    const initDataConvert = (data) => {
        return data;
    };

    const fetchPIs = (ctx, callback) => {
        isOverLay.value = true;
        store
            .dispatch("project/fetchPIs", { sort_by: "name" })
            .then((response) => {
                const { data } = response.data;
                items.value = data;
                fetchPapers();

                return data;
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
                isOverLay.value = false;
            });
    };

    const fetchPapers = (ctx, callback) => {
        isOverLay.value = true;
        store
            .dispatch("project/fetchPapers", {
                year_id: store.state.project.year.id,
            })
            .then((response) => {
                const { data } = response.data;

                let chartPi = [];
                let chartJournal = [];
                let chartConference = [];

                let pi = items.value.map((p) => {
                    p.journal = 0;
                    p.conference = 0;
                    data.forEach((d) => {
                        if (d.pi_id == p.id) {
                            if (d.paper_type_id == 1) {
                                p.journal += 1;
                            } else {
                                p.conference += 1;
                            }
                        }
                    });

                    chartPi.push(p.name)
                    chartJournal.push(p.journal)
                    chartConference.push(p.conference)

                    return p;
                });

                items.value = pi;


                apexChatData.value = {
                    columnChart: {
                        series: [
                            {
                                name: "Journal",
                                data: chartJournal,
                            },
                            {
                                name: "Conference",
                                data: chartConference,
                            },
                        ],
                        chartOptions: {
                            chart: {
                                stacked: true,
                                type: 'bar',
                                toolbar: {
                                    show: false,
                                },
                            },
                            colors: [
                                chartColors.column.series1,
                                chartColors.column.series2,
                            ],
                            plotOptions: {
                                bar: {
                                    horizontal: false,
                                    columnWidth: '30%',
                                    endingShape: 'rounded',
                                    // columnWidth: "15%",
                                    // colors: {
                                    //     backgroundBarColors: [
                                    //         chartColors.column.bg,
                                    //         chartColors.column.bg,
                                    //         chartColors.column.bg,
                                    //         chartColors.column.bg,
                                    //         chartColors.column.bg,
                                    //     ],
                                    //     backgroundBarRadius: 20,
                                    // },
                                },
                            },
                            dataLabels: {
                                enabled: false,
                            },
                            legend: {
                                show: true,
                                position: "top",
                                fontSize: "14px",
                                fontFamily: "Montserrat",
                                horizontalAlign: "left",
                            },
                            stroke: {
                                // show: true,
                                // width: 10,
                                colors: ["transparent"],
                            },
                            grid: {
                                xaxis: {
                                    lines: {
                                        show: false,
                                    },
                                },
                            },
                            xaxis: {
                                categories: chartPi,
                            },
                            yaxis: {
                                // opposite: isRtl,
                            },
                            fill: {
                                opacity: 1,
                            },
                        },
                    },
                };

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

    fetchPIs();

    watch(
        () => store.state.project.year.id,
        (value) => {
            fetchPIs();
        }
    );

    // *===============================================---*
    // *--------- UI ---------------------------------------*
    // *===============================================---*

    return {
        items,
        isOverLay,
        apexChatData,
    };
}
