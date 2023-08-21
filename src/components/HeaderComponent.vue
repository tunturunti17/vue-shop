<template>
    <v-container>
        <v-responsive class="align-center text-center fill-height">
            <v-app-bar>
                <v-image src="@/assets/logo.png"></v-image>
                <ul>
                    <li v-for="nav, index in navigation" :key="nav[index]">
                        <router-link :to="nav.path">{{ nav.title }}</router-link>
                    </li>
                </ul>
                <a href="tel:+7499999999">+7(499)999999</a>
            </v-app-bar>
        </v-responsive>
    </v-container>
</template>

<script>
export default {
    name: header-component,
    data() {
        return {
            navigation: [
                {path: '/', title: 'VUE-SPA-SHOP'},
                {path: '/category', title: 'Категории'},
                {path: '/news', title: 'Новости'},
                {path: '/about', title: 'О нас'},
            ]
        }
    }
}
</script>

<style>

</style>