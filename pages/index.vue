<template>
    <div>
        <div class="inner-page">
            <CommonPageHeading
                :background-image-url="'../images/banner/18.png'"
                :page-title="'Buttons style'"
                :page-background-text="'Buttons'"
                :page-sub-heading="'Our Buttons Style'"
            />

            <CommonButtons 
                :type="'button'"
                :button-text="'click me'"
                :button-link="'/'"
                :button-style="'styleThree'"
            />

            <HeroBanner 
                :background-image-url="'../images/banner/bg-shape.png'"
                :hero-heading-text="'Test'"
                :hero-paragraph-text="`Our team of experts is dedicated to helping you achieve your digital goals.
                                    From website design and development to SEO, PPC advertising, and social media
                                    marketing.`"
            />

            <div class="service-area rts-section-gapBottom start rts-case-service-area-h2 block-title">
                <div class="water-txt-top rts-has-mask-fill">
                    <span>Our Services</span>
                </div>
                <CommonServicesCarousel/>
            </div>

            <div class="height">
                <div class="container appoinment-area-two plr--120 plr_sm--20 plr_md--20">
                    <form class="appoinment-h2 rts-slide-up-gsap" action="#">
                        <div class="input-line">
                            
                            <div class="input-half">
                                <CommonFormInput
                                    :id="'name'"
                                    :type="'text'"
                                    :label-text="'Your Name'" 
                                    :placeholder-text="'Andrew Davis Kino....'"
                                    :required-status="true"
                                />
                            </div>

                            <div class="input-half">
                                <CommonFormInput
                                    :id="'email'"
                                    :type="'email'"
                                    :label-text="'Your Email'" 
                                    :placeholder-text="'info@mighty.net'"
                                    :required-status="true"
                                />
                            </div>
                        </div>
                        
                        <div class="input-line mt--40">
                            <div class="input-half">
                                <CommonFormInput
                                    :id="'name'"
                                    :label-text="'What you are interested'" 
                                    :placeholder-text="'Design & Branding'"
                                    :required-status="true"
                                    :selection-list="selectionList"
                                />
                            </div>

                            <div class="input-half">
                                <CommonFormInput
                                    :id="'name'"
                                    :label-text="'Project Budget'" 
                                    :placeholder-text="'Design & Branding'"
                                    :required-status="true"
                                    :selection-list="selectionList"
                                />
                            </div>
                        </div>

                        <div class="text-area mt--40">

                            <CommonFormInput
                                :is-textarea="true"
                                :id="'message'"
                                :label-text="'Message'" 
                                :col-number="30"
                                :row-number="10"
                                :placeholder-text="'Let tell us about your projects'"
                                :required-status="false"
                                :selection-list="selectionList"
                            />

                        </div>

                        <CommonButtons class="mt--40"
                            :type="'submit'"
                            :button-text="'Send message'"
                            :button-style="'styleTwo'"
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const selectionList = [
    {id:1, name:'one', value:'One'},
    {id:2, name:'Two', value:'Two'},
    {id:3, name:'Three', value:'Three'},
];
</script>

<style scoped>
.height{
    min-height: 100vh;
    background-color: white
}
</style>