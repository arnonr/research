<template>
    <div>
        <!-- modal user edit -->
        <b-modal
            ref="modalProjectForm"
            id="modal-project-form"
            cancel-variant="outline-secondary"
            ok-title="Submit"
            cancel-title="Close"
            centered
            size="lg"
            title="Project Form"
            :visible="isModal"
            @ok="submit"
            :ok-disabled="isSubmit"
            :cancel-disabled="isSubmit"
            @change="(val) => $emit('update:is-modal', val)"
        >
            <b-overlay
                :show="isSubmit"
                opacity="0.17"
                spinner-variant="primary"
            >
                <validation-observer ref="simpleRules">
                    <b-form>
                        <div class="row">
                            <b-form-group class="col-md">
                                <validation-provider
                                    #default="{ errors }"
                                    name="Grant No"
                                    rules="required"
                                >
                                    <label for="name">Grant No:</label>
                                    <v-select
                                        input-id="project"
                                        v-model="item.project"
                                        :dir="
                                            $store.state.appConfig.isRTL
                                                ? 'rtl'
                                                : 'ltr'
                                        "
                                        :options="selectOptions.project"
                                        placeholder="Choose Grant No"
                                        :clearable="false"
                                    />
                                    <small class="text-danger">{{
                                        errors[0]
                                    }}</small>
                                </validation-provider>
                            </b-form-group>
                        </div>

                        <div class="row">
                            <b-form-group class="col-md">
                                <validation-provider
                                    #default="{ errors }"
                                    name="Journal List"
                                >
                                    <label for="title">Journal List:</label>
                                    <b-form-textarea
                                        id="title"
                                        placeholder="Journal List"
                                        v-model="item.title"
                                        :state="
                                            errors.length > 0 ? false : null
                                        "
                                    />
                                    <small class="text-danger">{{
                                        errors[0]
                                    }}</small>
                                </validation-provider>
                            </b-form-group>
                        </div>

                        <div class="row">
                            <b-form-group class="col-md">
                                <validation-provider
                                    #default="{ errors }"
                                    name="Journal Type"
                                >
                                    <label for="paper_type"
                                        >Journal Type:</label
                                    >
                                    <v-select
                                        input-id="paper_type_id"
                                        v-model="item.paper_type"
                                        :dir="
                                            $store.state.appConfig.isRTL
                                                ? 'rtl'
                                                : 'ltr'
                                        "
                                        :options="selectOptions.paper_type"
                                        placeholder="Choose Type"
                                        :clearable="false"
                                    />
                                    <small class="text-danger">{{
                                        errors[0]
                                    }}</small>
                                </validation-provider>
                            </b-form-group>

                            <b-form-group class="col-md">
                                <validation-provider
                                    #default="{ errors }"
                                    name="Journal Status"
                                >
                                    <label for="paper_status"
                                        >Journal Status:</label
                                    >
                                    <v-select
                                        input-id="paper_status_id"
                                        v-model="item.paper_status"
                                        :dir="
                                            $store.state.appConfig.isRTL
                                                ? 'rtl'
                                                : 'ltr'
                                        "
                                        :options="selectOptions.paper_status"
                                        placeholder="Choose Status"
                                        :clearable="false"
                                    />
                                    <small class="text-danger">{{
                                        errors[0]
                                    }}</small>
                                </validation-provider>
                            </b-form-group>
                        </div>

                        <div class="row">
                            <b-form-group class="col-md">
                                <validation-provider
                                    #default="{ errors }"
                                    name="Principal Investigator"
                                >
                                    <label for="pi"
                                        >Principal Investigator:</label
                                    >
                                    <v-select
                                        input-id="pi_id"
                                        v-model="item.pi"
                                        :dir="
                                            $store.state.appConfig.isRTL
                                                ? 'rtl'
                                                : 'ltr'
                                        "
                                        :options="selectOptions.pi"
                                        placeholder="Choose PI"
                                        :clearable="false"
                                    />
                                    <small class="text-danger">{{
                                        errors[0]
                                    }}</small>
                                </validation-provider>
                            </b-form-group>
                        </div>

                        <div class="row">
                            <b-form-group class="col-md">
                                <validation-provider
                                    #default="{ errors }"
                                    name="file"
                                >
                                    <label for="file">File:</label>
                                    <b-input-group>
                                        <b-input-group-prepend>
                                            <b-button
                                                :variant="`outline-${
                                                    item.file_old == null
                                                        ? 'dark'
                                                        : 'warning'
                                                }`"
                                                target="_blank"
                                                :disabled="
                                                    item.file_old == null
                                                "
                                                :href="item.file_old"
                                            >
                                                <feather-icon
                                                    icon="FileTextIcon"
                                                />
                                                View File
                                            </b-button>
                                        </b-input-group-prepend>
                                        <b-form-file
                                            id="h-file"
                                            v-model="item.file"
                                            placeholder="Choose a new file or drop it here..."
                                            drop-placeholder="Drop file here..."
                                        />
                                    </b-input-group>
                                    <small class="text-danger">{{
                                        errors[0]
                                    }}</small>
                                </validation-provider>
                            </b-form-group>
                        </div>
                    </b-form>
                </validation-observer>
            </b-overlay>
        </b-modal>
    </div>
</template>

<script>
import {
    BButton,
    BModal,
    VBModal,
    BForm,
    BFormInput,
    BFormGroup,
    BSpinner,
    BOverlay,
    BFormCheckbox,
    BInputGroup,
    BInputGroupPrepend,
    BFormFile,
    BFormTextarea,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import { ref } from "@vue/composition-api";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { required, email } from "@validations";
import vSelect from "vue-select";

export default {
    components: {
        ValidationProvider,
        ValidationObserver,
        BButton,
        BModal,
        BForm,
        BFormInput,
        BFormTextarea,
        BFormGroup,
        BSpinner,
        BOverlay,
        BFormCheckbox,
        BInputGroup,
        BInputGroupPrepend,
        BFormFile,
        required,
        email,
        vSelect,
    },
    directives: {
        "b-modal": VBModal,
        Ripple,
    },
    emits: ["on-submit"],
    model: {
        prop: "isModal",
        event: "update:is-modal",
    },
    props: {
        isModal: {
            type: Boolean,
            required: true,
        },
        isSubmit: {
            type: Boolean,
            required: true,
        },
        item: {
            type: Object,
            required: true,
        },
        selectOptions: {
            type: Object,
            required: true,
        },
    },
    setup(props, { emit }) {
        const simpleRules = ref(null);

        const submit = (bvModalEvent) => {
            bvModalEvent.preventDefault();

            simpleRules.value.validate().then((success) => {
                if (success) {
                    emit("on-submit");
                }
            });
        };

        return {
            submit,
            simpleRules,
        };
    },
};
</script>
