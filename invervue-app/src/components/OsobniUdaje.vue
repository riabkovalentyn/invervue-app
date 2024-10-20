<template>  
    <div>
        <h2>Krok 1: Osobní údaje </h2>
        <input v-model="form.firstName" placeholder="Jmeno" />
        <input v-model="form.lastName" placeholder="Primeni" />
        <input v-model="form.phone" type ="tel" placeholder="Tel. cislo" />
        <input v-model="form.email" type ="email" placeholder="Email" />
        <button @click="nextStep" >Dalsi krok</button>

    </div>
</template>

<script>
import { defineComponent, toRefs } from 'vue';
import { InvestmentForm } from '../types';
import { useStore } from 'vuex';

export default defineComponent({ 
    setup() {
        const store = useStore();
        const form = store.state.form as InvestmentForm;

        const nextStep = () => {
            store.commit('nextStep');
        };

        return{
            ...toRefs(form),
            nextStep,
        };
    },
});
</script>