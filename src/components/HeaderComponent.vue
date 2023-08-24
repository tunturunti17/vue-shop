<template>
    <v-app-bar style="background-color: #C9DEF1;">
        <v-img src="../assets/logo.png" :width="71"></v-img>
        <ul class="list">
            <li class="list__item" v-for="nav, index in navigation" :key="nav[index]">
                <router-link :to="nav.path">{{ nav.title }}</router-link>
            </li>
        </ul>
        <v-spacer />
        <div class="container">
            <a href="tel:+7499999999" class="phone">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" fill="black"/>
                </svg>
                +7(499)999999
            </a>
            <v-spacer />
            <router-link class="cart" to="/cart">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 23.3333C7.14583 23.3333 5.84792 24.6458 5.84792 26.25C5.84792 27.8542 7.14583 29.1667 8.75 29.1667C10.3542 29.1667 11.6667 27.8542 11.6667 26.25C11.6667 24.6458 10.3542 23.3333 8.75 23.3333ZM0 0V2.91667H2.91667L8.16667 13.9854L6.19792 17.5583C5.96458 17.9667 5.83333 18.4479 5.83333 18.9583C5.83333 20.5625 7.14583 21.875 8.75 21.875H26.25V18.9583H9.3625C9.15833 18.9583 8.99792 18.7979 8.99792 18.5938L9.04167 18.4188L10.3542 16.0417H21.2188C22.3125 16.0417 23.275 15.4438 23.7708 14.5396L28.9917 5.075C29.1083 4.87083 29.1667 4.62292 29.1667 4.375C29.1667 3.57292 28.5104 2.91667 27.7083 2.91667H6.13958L4.76875 0H0ZM23.3333 23.3333C21.7292 23.3333 20.4312 24.6458 20.4312 26.25C20.4312 27.8542 21.7292 29.1667 23.3333 29.1667C24.9375 29.1667 26.25 27.8542 26.25 26.25C26.25 24.6458 24.9375 23.3333 23.3333 23.3333Z" fill="black"/>
                </svg>
            </router-link>
        </div>
    </v-app-bar>
</template>

<script>
export default {
    name: 'header-component',
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

<style scoped>
.list {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    width: 50%;
}

.list__item {
    list-style: none;
}

a {
    color: #000000;
    font-weight: 400;
    font-size: 18px;
    text-decoration: none;
}

.container {
    display: flex;
    flex-direction: row;
    column-gap: 50px;
    align-items: center;
    width: 50%;
    max-width: 350px;
    margin-left:auto;
}
.phone {
    display: flex;
    flex-direction: row;
    column-gap: 3px;
    align-items: center;
}

.cart{
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>