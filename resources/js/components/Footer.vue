<template>
<div>
  <!-- footer section -->

  <footer>
    <div class="row gx-0 container-fluid">
      <div class="col-md-2 mx-auto mb-4 mt-3 text-center">
        <h6 class="text-uppercase font-weight-bold">General</h6>
        <ul class="list-unstyled">
          <li class="footerList">
            <!-- <a href="/about" class="footerLink">About Us</a> -->
            <router-link :to="{ name: 'About Us' }" class="footerLink">About Us</router-link>
          </li>
          <li class="footerList">
            <!-- <a href="/contact" class="footerLink">Contact Us</a> -->
            <router-link :to="{ name: 'Contact Us' }" class="footerLink" >Contact Us</router-link>
          </li>
          <li class="footerList">
            <!-- <a href="/become-a-partner" class="footerLink">Become a Partner</a> -->
            <router-link :to="{ name: 'Become A Partner' }" class="footerLink" >Become a Partner</router-link>
          </li>
          <li class="footerList">
            <a href="https://operators.safari-trek-beach.com/" class="footerLink" target="_blank">Operator Login</a>
          </li>
          <li class="footerList">
            <!-- <a href="/terms" class="footerLink">Terms &amp; Conditions</a> -->
            <router-link :to="{ name: 'Terms and Condition' }" class="footerLink">Terms &amp; Conditions</router-link>
          </li>
        </ul>
      </div>
      <div class="col-md-2 mx-auto mb-4 mt-3 text-center">
        <h6 class="text-uppercase font-weight-bold">Our Tours</h6>
        <ul class="list-unstyled">
          <li class="footerList">
            <a href="/our-tours/Serengeti" class="footerLink">Serengeti</a>
            <!-- <router-link :to="{ name: 'Our Tours2', params: {destination: 'Serengeti'} }" class="footerLink">Serengeti</router-link> -->
          </li>
          <li class="footerList">
            <a href="/our-tours/Kilimanjaro" class="footerLink">Kilimanjaro</a>
            <!-- <router-link :to="{ name: 'Our Tours2', params: {destination: 'kilimanjaro'} }" class="footerLink">Kilimanjaro</router-link> -->
          </li>
          <li class="footerList">
            <a href="/our-tours/Zanzibar" class="footerLink">Zanzibar</a>
            <!-- <router-link :to="{ name: 'Our Tours2', params: {destination: 'zanzibar'} }" class="footerLink">Zanzibar</router-link> -->
          </li>
          <li class="footerList">
            <a href="/our-tours/Ngorongoro" class="footerLink">Ngorongoro</a>
            <!-- <router-link :to="{ name: 'Our Tours2', params: {destination: 'Ngorongoro'} }" class="footerLink">Ngorongoro</router-link> -->
          </li>
          <li class="footerList">
            <a href="/our-tours/ruaha-national-park" class="footerLink">Ruaha</a>
            <!-- <router-link :to="{ name: 'Our Tours2', params: {destination: 'ruaha-national-park'} }" class="footerLink">Ruaha National Park</router-link> -->
          </li>
        </ul>
      </div>
      <div class="col-md-2 mx-auto mb-4 mt-3 text-center">
        <h6 class="text-uppercase font-weight-bold">Blog</h6>
        <ul class="list-unstyled">
          <li class="footerList">
            <a href="/blog/ukerewe-island" class="footerLink">UKEREWE ISLAND</a>
            <!-- <router-link :to="{ name: 'Blog Inner Page', params: {slug: 'ukerewe-island'} }" class="footerLink">UKEREWE ISLAND</router-link> -->
          </li>
          <li class="footerList">
            <a href="/blog/rubondo-island-national-park" class="footerLink">RUBONDO ISLAND</a>
            <!-- <router-link :to="{ name: 'Blog Inner Page', params: {slug: 'rubondo-island-national-park'} }" class="footerLink">RUBONDO ISLAND</router-link> -->
          </li>
          <li class="footerList">
            <a href="/blog/mount-kilimanjaro" class="footerLink">Kilimanjaro</a>
            <!-- <router-link :to="{ name: 'Blog Inner Page', params: {slug: 'mount-kilimanjaro'} }" class="footerLink">Kilimanjaro</router-link> -->
          </li>
          <li class="footerList">
            <a href="/blog/kigosi-national-park" class="footerLink">KIGOSI</a>
            <!-- <router-link :to="{ name: 'Blog Inner Page', params: {slug: 'kigosi-national-park'} }" class="footerLink">KIGOSI</router-link> -->
          </li>
          <li class="footerList">
            <a href="/blog/saadani-national-park" class="footerLink">Saadani</a>
            <!-- <router-link :to="{ name: 'Blog Inner Page', params: {slug: 'saadani-national-park'} }" class="footerLink">Saadani</router-link> -->
          </li>
        </ul>
      </div>
      <div class="col-md-2 mx-auto mb-4 mt-3 text-center">
        <h6 class="text-uppercase font-weight-bold">Destination</h6>
        <ul class="list-unstyled">
          <li class="footerList">
            <a href="/destination/tanzania" class="footerLink">Tanzania</a>
            <!-- <router-link :to="{ name: 'Destination Package', params: {slug: 'tanzania'} }" class="footerLink">Tanzania</router-link> -->
          </li>
          <li class="footerList">
            <a href="/destination/stone-town." class="footerLink">STONE TOWN</a>
            <!-- <router-link :to="{ name: 'Destination Package', params: {slug: 'stone-town.'} }" class="footerLink">STONE TOWN</router-link> -->
          </li>
          <li class="footerList">
            <a href="/destination/materuni-watertfalls" class="footerLink">Materuni Watertfalls</a>
            <!-- <router-link :to="{ name: 'Destination Package', params: {slug: 'materuni-watertfalls'} }" class="footerLink">Materuni Watertfalls</router-link> -->
          </li>
          <li class="footerList">
            <a href="/destination/dhow" class="footerLink">Dhow</a>
            <!-- <router-link :to="{ name: 'Destination Package', params: {slug: 'dhow'} }" class="footerLink">Dhow</router-link> -->
          </li>
          <li class="footerList">
            <a href="/destination/spice" class="footerLink">Spice</a>
            <!-- <router-link :to="{ name: 'Destination Package', params: {slug: 'spice'} }" class="footerLink">Spice</router-link> -->
          </li>
        </ul>
      </div>
      <div class="col-md-3 mx-auto mb-4 mt-3 text-center text-md-start">
        <h6 class="text-uppercase font-weight-bold">Safari-Trek-Beach</h6>
        <ul class="list-unstyled">
          <li class="footerList">
            <a href="http://maps.google.com/?q=Mafao House Arusha Tanzania" target="_blank" class="footerLink"><span class="fa fa-map-marker me-3"></span> NSSF Mafao House
              Arusha Tanzania</a>
          </li>
          <li class="footerList on-mob">
            <a href="tel:+255758022567" class="footerLink"><span class="fa fa-phone-square me-2"></span> +255
              758-022-567</a>
          </li>
          <li class="footerList on-mob-info">
            <a href="mailto:info@safari-trek-beach.com" class="footerLink"><span class="fa fa-envelope me-2"></span>
              info@safari-trek-beach.com</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Social icons -->
    <div class="container">
      <div class="row gx-0 d-flex py-4 align-item-center">
        <div class="col-md-12 text-center">
          <a href="#"><i class="fa fa-facebook-f fa-2x text-light me-4"></i></a>
          <a href="#"><i class="fa fa-instagram fa-2x text-light me-4"></i></a>
          <a href="#"><i class="fa fa-twitter fa-2x text-light me-4"></i></a>
          <a href="#"><i class="fa fa-youtube fa-2x text-light"></i></a>
        </div>
      </div>
    </div>
  </footer>

  <!-- footer copyright section -->
  <div class="footer-copyright py-1 bg-dark">
    <p class="text-light text-center mt-3">
      © 2021 Safari Trek Beach
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>

<style scoped>
.footerLink:hover {
  color: white;
}
</style>