<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark px-5" style="background: rgba(15, 26, 46, 0.938); color: white">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img :src="'/images/logo.png'" alt="logo" />
            </a>
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa fa-bars" style="color: #fe435b"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/home" :class="$route.name =='Home Page' ? 'active' : ''">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/our-tours" :class="$route.name =='Our Tours' || $route.name =='Our Tours2' ? 'active' : ''" target="_blank">OUR TOURS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/tour-operators/page/1" :class="$route.name =='Tour Operators' ? 'active' : ''">TOUR OPERATORS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact" :class="$route.name =='Contact Us' ? 'active' : ''">CONTACT US</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about" :class="$route.name =='About Us' ? 'active' : ''">ABOUT US</a>
                    </li>
                    <li class="nav-item d-flex align-items-center">
                        <div id="google_translate_element"></div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {};
    },
};
</script>
