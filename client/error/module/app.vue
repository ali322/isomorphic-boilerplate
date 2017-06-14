<template>
    <div class="error-content">
        <div class="error-layer">
            <div class="error-panel">
                <img src="asset/image/500.png" alt="" />
                <p>{{ msg }}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {msg:''}
        }
    }
</script>
