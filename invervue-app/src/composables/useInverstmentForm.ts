import { reactive } from 'vue';
import { useRouter } from 'vue-router';

export function useInvestmentForm() {
    const router = useRouter();



    const investmentForm = reactive({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        personalID: '',
        birthDate: '',
        idNumber: '',
        adress: '',
        bankAccount: '',
        amount: 0,
        termsAndConditions: false
    });

    const nextStep = () => {
        if (validateForm()) {
            router.push('/next-step');
        
    };
    
    const validateForm = () => {
        if(!)
    };
}
