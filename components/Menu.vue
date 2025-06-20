<template>
    <div>
        <ul v-if="items.length" class="navbar-nav-button">
            <li v-for="item in items" :key="item.id" class="menu-item"
                :class="{ 'menu-item-has-children': item.submenu.length }">
                <a :href="item.link">
                    {{ item.menu || item.sub_menu }}
                    <span v-if="item.submenu.length">
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path class="heroicon-ui"
                                d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z">
                            </path>
                        </svg>
                    </span>
                </a>
                <!-- <Menu v-if="item.submenu.length" :items="item.submenu" /> -->
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps(['items']);
</script>

<style scoped>
.navbar-nav-button {
  list-style: none;
  padding: 0;
}

.menu-item {
  position: relative;
}

.menu-item-has-children .sub-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-item-has-children:hover .sub-menu {
  display: block;
}
</style>