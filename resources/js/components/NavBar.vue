<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark px-5" style="background: rgba(15, 26, 46, 0.938); color: white">
        <div class="container-fluid">
            <router-link :to="{ name: 'Home Page' }" class="navbar-brand">
                <img :src="'/images/logo.png'" alt="logo" />
            </router-link>

            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa fa-bars" style="color: #fe435b"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link :to="{ name: 'Home Page' }" class="nav-link" :class="$route.name =='Home Page' ? 'active' : ''">HOME</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Our Tours' }" class="nav-link" :class="$route.name =='Our Tours' || $route.name =='Our Tours2' ? 'active' : ''">OUR TOURS</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Tour Operators', params: {id: '1'} }" class="nav-link" :class="$route.name =='Tour Operators' ? 'active' : ''">TOUR OPERATORS</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Contact Us' }" class="nav-link" :class="$route.name =='Contact Us' ? 'active' : ''">CONTACT US</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'About Us' }" class="nav-link" :class="$route.name =='About Us' ? 'active' : ''">ABOUT US</router-link>
                    </li>
                    <!-- <li class="nav-item d-flex align-items-center">
                        <div id="google_translate_element"></div>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>