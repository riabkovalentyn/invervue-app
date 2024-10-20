<template>  
    <div>
        <h2>Krok 2: Osobní identifikace</h2>
        <div>
            <label for="">Rodne Cislo</label>
            <input v-model="form.personalID" placeholder="Rodne Cislo" required />
        </div>
        <div>
            <label for="">Datum Narozeni</label>
            <input type="date" v-model="form.birthDate" required />
        </div>
        <div>
            <label for="">Cislo Obcanskeho Prukazu</label>
            <input v-model="form.idNumber" placeholder="Cislo Obcanskeho Prukazu" required />
        </div>    
        <button @click="nextStep">Pokracovat</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useInverstmentForm } from '@/composation/useInverstmentForm';

export default defineComponent({
    setup() {
        const { form, nextStep } = useInverstmentForm();
        return { form, nextStep };
    }
});
</script>