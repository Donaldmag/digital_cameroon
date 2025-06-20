<template>
    <div>
        <div class="rts-footer-two-area bg_image-1 bg--dark">
            <div class="container-140">
                <div class="row">
                    <div class="col-lg-12 pt--130 pt_sm--60 pb--100 pb_sm--60">
                        <div class="footer-two-wrapper-content">
                           
                            <div class="footer-left-two">
                                <a href="index-2.html" class="logo">
                                    <!-- <img src="/images/logo/03.svg" alt="logo"> -->
                                </a>
                                <p class="disc max-320">
                                    The leading innovator driving Cameroon’s digital transformation through cutting-edge initiatives, AI solutions, and global tech collaborations.
                                </p>
                                
                                <div class="rts-social-area-one">
                                    <ul>
                                        <CommonSociallinksBlock :icon="'facebook'" :link="'www.facebok.com'"/>
                                        <CommonSociallinksBlock :icon="'twitter'" :link="'www.twitter.com'"/>
                                        <CommonSociallinksBlock :icon="'whatsapp'" :link="'www.whatsapp.com'"/>
                                        <CommonSociallinksBlock :icon="'skype'" :link="'www.skype.com'"/>
                                    </ul>
                                </div>
                            </div>

                            <div class="footer-right-two">
                                <div class="contact-information max-224">
                                    <h5 class="title">Contact Info</h5>
                                    <a v-for="(menu, index) in contactInfos" 
                                        :menu="menu" 
                                        :key="menu.id"
                                        :href="getHref(menu.link)"
                                        :class="getClass(menu.link)" 
                                        >{{ menu.title }}
                                    </a>
                                </div>

                                <div class="contact-information input max-400">
                                    <h5 class="title">Subscribe Newsletter</h5>
                                    <p class="map">Subscribe to our newsletter for future updates.</p>

                                    <form @submit.prevent="subscribe" class="form-footer-2">
                                        <label for="email"><i class="fa-regular fa-envelope"></i></label>
                                        <input id="email" type="email" placeholder="Enter your email..." required>
                                        <button @click="subscribe" type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12">
                        <div class="copy-right-area-start-two">
                            <p class="left">{{ year }} © Digital Cameroon. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import useDateFunction from '../composables/useDate';
const { year } = useDateFunction();

const contactInfos = [
    {id:1, title:'BP 35130 Mahdong Building, Essos Chapel, Yaounde.', link:''},
    {id:2, title:'asso@digitalcameroon.org', link:'asso@digitalcameroon.org'},
    {id:3, title:'+237621131563', link:'+237621131563'},
];

const getClass = (link) => {
  if (link.includes('@')) return 'mail';
  if (link.startsWith('+')) return 'number';
  return 'map';
};

const getHref = (link) => {
    if (link.includes('@')) return `mailto:${link}`;
    if (link.startsWith('+')) return `tel:${link}`;
    if (link.includes('@') || link.startsWith('+')) return 'javascript:void(0)';
};

const subscribe = () =>{
    // subscribe
}
</script>

<style scoped></style>