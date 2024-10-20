<template>  
    <div>
        <h2>Pravidelna vyse invetice</h2>
        <input type="range" v-model="form.amount" min="100" max="999999">
        <p>{{ form.amount }} Kc</p>
        <button @click="nextStep">Dalsi krok</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useInverstmentForm } from "@/composables/useInverstmentForm";


export default defineComponent({
    setup() {
        const { form , nextStep } = useInverstmentForm();
        return { form, nextStep };
    }
});
</script>