<template>

    <header class="header-global">

        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <a slot="brand" class="navbar-brand mr-lg-5" href="">
                <img src="img/brand/logo.png">
            </a>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="">
                        <img src="img/brand/logo.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/cms" class="nav-link">CMS</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/showroom" class="nav-link">Showroom Template</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/contact" class="nav-link">Contact Us</router-link>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="" target="_blank" class="btn btn-outline-neutral">
                        Request Demo
                    </a>
                </li>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <span class="nav-link-inner--text">EN</span>
                        <span class="fa fa-chevron-down ml-2"></span>
                    </a>
                    <router-link to="/cn" class="dropdown-item">CN</router-link>
                </base-dropdown>
            </ul>
        </base-nav>

    </header>

</template>

<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
    components: {
        BaseNav,
        CloseButton,
        BaseDropdown
    }
};
</script>
