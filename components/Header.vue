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
                            <div class="header-left-area">
                                <div class="logo-area">
                                    <a href="index-2.html" class="loog">
                                        <img src="/images/logo/03.svg" alt="Brand__logo" />
                                    </a>
                                </div>
                                <a href="portfolio-grid.html" class="rts-btn btn-radious btn-dark">View Showcase</a>
                            </div>

                            <div class="header-nav-area">
                                <nav class="nav-area drop-down-rts">
                                    <ul class="navbar-nav-1">

                                        <li v-for="(menu, index) in headerMenu" :key="menu.id" class="menu-item main-nav-on" :class="{'menu-item-has-children': menu.submenu.length > 0}">
                                            <a href="javascript:void(0);">
                                                <span class="rolling-text">{{ menu.menu }}</span>
                                            </a>

                                            <!-- First-Level Submenu -->
                                            <ul v-if="menu.submenu.length" class="sub-menu">
                                                <li v-for="(sub, subIndex) in menu.submenu" :key="sub.id" class="menu-item menu-item-home has-children-sub" :class="{'has-children-sub': sub.subsubmenu.length > 0}">
                                                    <a class="menu-link" href="javascript:void(0);">{{ sub.sub_menu }}</a>

                                                    <!-- Second-Level Submenu -->
                                                    <!-- <ul v-if="sub.subsubmenu.length" class="sub-menu third-lvl base">
                                                        <li v-for="(subsub, subsubIndex) in sub.subsubmenu" :key="subsub.id" class="menu-item menu-item-home">
                                                        <a class="nav-link" href="javascript:void(0);">{{ subsub.menu }}</a>
                                                        </li>
                                                    </ul> -->
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div class="header-right">
                                <div class="language-check">
                                    <!-- check -->
                                    <div class="input-group">
                                        <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            English
                                            <i class="fa-sharp fa-light fa-chevron-down"></i>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Chinese</a></li>
                                            <li><a class="dropdown-item" href="#">Spanish</a></li>
                                            <li><a class="dropdown-item" href="#">Arabic</a></li>
                                            <li><a class="dropdown-item" href="#">Portuguese</a></li>
                                        </ul>
                                    </div>
                                    <!-- check -->
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
const headerMenu = [
    {id:1, menu:'Home', submenu:[]},
    {id:2, menu:'About us', submenu:[
        {id:1, sub_menu:'Association Overview', subsubmenu: []},
        {id:2, sub_menu:'Strategic Team', subsubmenu: [
            {id:1, menu:'The founder'},
            {id:2, menu:'Partnerships'},
        ]},
    ]},
    {id:3, menu:'Services', submenu:[]}
];
</script>

<style scoped></style>
