<template>
    <div>
        <h2>Souhrn informací</h2>
        <p>Jmeno: {{ form.firstName }} {{ form.lastName }}</p>
        <p>Tel: {{ form.phone }}</p>
        <p>Email: {{ form.email }}</p>
        <p>Rodne Cislo: {{ form.personalID }}</p>
        <p>Datum Narozeni: {{ form.birthDate }} </p>
        <p>Cislo Obcanskeho Prukazu: {{ form.idNumber }}</p>
        <p>Adresa: {{ form.address }}</p>
        <p>Bankovni ucet: {{ form.bankAccount }}</p>
        <p>Vyse investice: {{ form.amount }}</p>
        <button @click="goBack">Vratit zpratky</button>
    </div>
</template>