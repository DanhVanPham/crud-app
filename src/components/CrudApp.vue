<template>
    <div style="">
        <Panel header="Crud App" />
        <DataTable :value="personas" :paginator="true" :rows="10">
            <Column field="id" header="ID"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="address" header="Address"></Column>
        </DataTable>
    </div>
</template>

<script>
import PersonaService from '../service/PersonaService';
export default {
    name: 'CrudApp',
    data() {
        return {
            personas: null
        }
    },
    personaService : null,
    created() {
        this.personaService = new PersonaService();
    },
    mounted() {
        this.personaService.getAll().then(data => {
           this.personas = data.data;
           console.log(this.personas);
        });

    }

}
</script>

<style >

</style>