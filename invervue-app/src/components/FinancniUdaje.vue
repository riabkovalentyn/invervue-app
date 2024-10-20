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
import {defineComponent} from 'vue-class-component';
import {useInverstmentForm} from '../store/investmentFormStore';
import {submitForm} from '../api/formapi';

export default defineComponent({
    setup() {
        const {form } = useInverstmentForm();

        const submitForm = async () => {
            try {
                await submitForm(form);
                alert('Formular byl odeslán');
            } catch (error) {
                console.error('Chyba při odesílání formuláře:', error);
            }
        };
        
        return { form, submitForm };
    }
});       
</script>
