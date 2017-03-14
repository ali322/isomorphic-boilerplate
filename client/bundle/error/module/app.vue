<template>
    <div class="error-content">
        <div class="error-layer">
            <div class="error-panel">
                <img src="/client/asset/image/error.png" alt="" />
                <p>{{msg}}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                msg:'123'
            }
        }
    }
</script>
