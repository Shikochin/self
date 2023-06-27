<script lang="ts" setup>
import friends from '../assets/friends.json'
</script>

<template>
    <div id="linksGrid">
        <div v-for=" { name, link, icon, desc } of friends.links" class="friendLink">
            <img :alt="`${name}-${desc}`" :src="icon" class="icon" />
            <a :href="link">
                <p class="name">{{ name }}</p>
                <p>{{ desc }}</p>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#linksGrid {
    display: grid;
    gap: 1vh 0.7vw;
    grid-template-columns: repeat(auto-fit, minmax(280px, auto));

    .friendLink {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 150px;
        height: 20vh;
        border-radius: 6px;
        border-color: rgba(16, 185, 129, 0.5);
        border-style: solid;
        padding-left: 30px;
        padding-right: 30px;
        background-color: rgba(16, 185, 129, 0.05);

        .icon {
            width: 96px;
            height: 96px;
            border-radius: 100%;
            margin-right: 0.8vw;
        }

        .name {
            font-size: 105%;
            font-weight: bold;
        }
    }
}
</style>
