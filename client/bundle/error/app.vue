<template>
     <div class="container error">
         <p>{{msg}}</p>
         <button @click="goBack">Back</button>
     </div>
</template>
<script>
    export default {
        data() {
            return { msg: '' }
        },
        methods: {
            goBack() {
                window.history.back()
            }
        }
    }
</script>
