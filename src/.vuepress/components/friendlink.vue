<script lang="ts" setup>
import friend from "../public/assets/friend.json";
</script>

<template>
    <div id="linksGrid">
        <div v-for=" { name, link, icon, desc } of friend.links" class="friendLink">
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
        height: var(--friendlink-height);
        border-radius: var(--friendlink-border-radius);
        border-color: var(--friendlink-border-color);
        border-style: solid;
        padding-left: 30px;
        padding-right: 30px;

        .icon {
            width: 96px;
            height: 96px;
            border-radius: 100%;
            margin-right: 0.8vw;
        }

        .name {
            font-size: var(--friendlink-fontsize);
            font-weight: bold;
        }
    }
}
</style>