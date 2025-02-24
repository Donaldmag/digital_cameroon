<template>
    <div>
        <div class="rts-header-area-two header--sticky">
            <div class="container-150">
                
                <div class="row">
                    <div class="col-lg-12">
                        <div class="header-top-two">
                            <div class="left">
                                <p>Welcome To Digital Cameroon</p>
                            </div>
                            <div class="right">
                                <div class="male">
                                    <a href="mailto:asso@digitalcameroon.org">asso@digitalcameroon.org</a>
                                </div>
                                <div class="number">
                                    <a href="tel:+237621131563">+237621131563</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="main-header-two">
                            <!-- <div class="header-left-area"> -->
                                <div class="logo-area max-w-144">
                                    <a @click="navigateTo('/')" href="javascript:void(0)" class="loog">
                                        <img src="/images/logo/digitalcameroon-logo-white.png" alt="Brand__logo" />
                                    </a>
                                </div>
                                <!-- <a href="portfolio-grid.html" class="rts-btn btn-radious btn-dark">View Showcase</a> -->
                            <!-- </div> -->

                            <div class="header-nav-area">
                                <nav class="nav-area drop-down-rts">
                                    <ul class="navbar-nav-1">

                                        <li v-for="(menu, index) in headerMenu" :key="menu.id" class="menu-item main-nav-on" :class="{'menu-item-has-children': menu.submenu.length > 0}">
                                            <NuxtLink :to="menu.link">
                                                <span class="rolling-text">{{ menu.menu }}</span>
                                            </NuxtLink>

                                            <!-- First-Level Submenu -->
                                            <ul v-if="menu.submenu.length" class="sub-menu">
                                                <li v-for="(sub, subIndex) in menu.submenu" :key="sub.id" class="menu-item menu-item-home" :class="{'has-children-sub': sub.subsubmenu.length > 0}">
                                                    <NuxtLink class="menu-link" :to="sub.link">{{ sub.sub_menu }}</NuxtLink>

                                                    <!-- Second-Level Submenu -->
                                                    <ul v-if="sub.subsubmenu.length" class="sub-menu third-lvl base">
                                                        <li v-for="(subsub, subsubIndex) in sub.subsubmenu" :key="subsub.id" class="menu-item menu-item-home">
                                                            <NuxtLink class="nav-link" :to="subsub.link">{{ subsub.menu }}</NuxtLink>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div class="header-right">
                                <div class="language-check">
                                    <div class="input-group">
                                    <button type="button" @click="toggleDropdown">
                                        {{ selectedLanguage }}
                                        <i class="fa-sharp fa-light fa-chevron-down"></i>
                                    </button>
                                    <ul class="dropdown-menu" :class="{'show' : isOpen}">
                                        <li v-for="language in languages" :key="language">
                                        <a class="dropdown-item" href="#" @click="selectLanguage(language)">{{ language }}</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <!-- social area start -->
                                <div class="social-transparent-wrapper">
                                    <ul>
                                        <CommonSociallinksBlock :icon="'facebook'" :link="'www.facebok.com'"/>
                                        <CommonSociallinksBlock :icon="'twitter'" :link="'www.twitter.com'"/>
                                        <CommonSociallinksBlock :icon="'whatsapp'" :link="'www.whatsapp.com'"/>
                                        <CommonSociallinksBlock :icon="'skype'" :link="'www.skype.com'"/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { headerMenu } from '/assets/data/menu';

const languages = ['English', 'Chinese', 'Spanish', 'Arabic', 'Portuguese'];
const selectedLanguage = ref('English');
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectLanguage = (language) => {
  selectedLanguage.value = language;
  isOpen.value = false;
};

</script>

<style scoped>
.img-adjustment{
    max-width: 20% !important;
}
.max-w-144{
    max-width: 144px;
}
/* .nav-area .navbar-nav-1 .menu-item .sub-menu li.menu-item a{ */
    .nav-area .navbar-nav-1 .menu-item .sub-menu li.menu-item:hover .menu-link{
    color: red !important;
}
.nav-area .navbar-nav-1 .menu-item .sub-menu li.menu-item .menu-link::before {
    background-color: red;
}
</style>
