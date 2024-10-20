<template>  
<div>

    <h2>Krok 3: Finanční údaje</h2>
    <div>
        <label>Adresa trvaleho pobytu</label>
        <input v-model="form.address" placeholder="Adresa trvaleho pobytu" required />
    </div>
    <div>
        <label>Cislo Bankovniho uctu</label>
        <input v-model="form.bankAccount" placeholder="Cislo bankovniho uctu" required />
    </div>
    <div>
        <label> 
            <input type="checkbox" v-model="form.termsAndConditions" required />
            Souhlasím s podmínkami ochrany osobních údajů a zpracováním osobních dat
        </label>
    </div>
    <button @click="submitForm">Odeslat formular</button>

</div>
</template>

<script lang="ts">
import {defineComponent, toRefs} from 'vue-class-component';
import {InvestmentForm} from '../store/investmentFormStore';
import {useStore} from 'vuex'; 

export default defineComponent({
    setup() {
        const store = useStore();
        const form = store.state.form as InvestmentForm;

        const nextStep = () => {
            store.commit('nextStep');
        };

        return {
            ...toRefs(form),
            nextStep,
        };
    },
});
</script>

