<template>
    <div>

        <hero></hero>

        <div class="container">

            <h1 class="page-header">
                Home
            </h1>

        </div>
        
    </div>
</template>

<script>
    import Hero from "./components/Hero";
    
    export default {
        name: "home",
        components: {
            Hero,
        }
    };
</script>
