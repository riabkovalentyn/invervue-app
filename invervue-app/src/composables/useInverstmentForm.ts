import { ref, computed } from 'vue';

export function useInvestmentForm() {
  const name = ref('');
  const email = ref('');
  const phone = ref('');
  const investmentAmount = ref(0);
  
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  const isFieldValid = (field: string) => field.trim() !== '';
  
  const isValidInvestmentAmount = (amount: number) => amount > 0;

  const isFormValid = computed(() => 
    isFieldValid(name.value) && 
    isValidEmail(email.value) && 
    isFieldValid(phone.value) && 
    isValidInvestmentAmount(investmentAmount.value)
  );

  return {
    name,
    email,
    phone,
    investmentAmount,
    isFormValid,
    isValidEmail,
    isFieldValid,
    isValidInvestmentAmount,
  };
}
