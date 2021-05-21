<template>
    <div>
        <h1 class="mb-6 text-3xl font-extrabold">Home</h1>
        <p class="mb-6">El nombre en la tienda es: {{name}} </p>

        <input v-model="newName" type="text" class="p-2 mr-4 border border-gray-600 rounded">
        <button @click="saveName" class="p-2 text-white bg-indigo-600 rounded">Enviar</button>
    </div>
    
  
</template>

<script setup>

    import { computed, ref } from 'vue'
    import { useStore } from 'vuex'

    const store = useStore()

    const name = computed(() => {
        return store.state.user.name
    })

    const newName = ref('')

    function saveName(){
        store.dispatch('saveName', newName.value)
        newName.value=''
    }

</script>

