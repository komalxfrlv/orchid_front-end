<template>
    <div class="nav-component">
        <div class="logo">
            ORCHID
        </div>
        <div :class="[active ? 'menu-expanded' : 'menu-collapsed', 'error']">
            <div class="bar" @click="active = !active" ></div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Clients</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavComponent',
    data() {
        return {
            active: false,

        }
    },
}
</script>
<style lang="scss">
.logo {
    font-size: 40px;
    padding-left: 5px;
    padding-top: 5px;
}
.nav-component {
    height: 78px;
    padding: 6px;
}
.b-a {
    transition: all .25s;
    content: "";
    position: absolute;
    right: 0;
    height: 8px;
    width: 40px;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.95);
}

.menu-collapsed {
    transition: all .25s;
    position: fixed;
    height: 32px;
    right: 26px;
    top: 24px;
    width: 40px;
    z-index: 1;
    cursor: pointer;

    ul {
        transition: all 0s;
        position: fixed;
        left: -9000px;
    }
}

.bar {
    @extend .b-a;
    z-index: 999;
    position: fixed;
    right: 26px;
    top: 36px;

    &:before {
        @extend .b-a;
        top: -12px;
    }

    &:after {
        @extend .b-a;
        top: 12px;
    }
}

.b-a-expanded {
    transition: all .25s;
    top: -0px;
}

.menu-expanded {
    position: absolute;
    transition: all .25s;
    text-align: center;
    height: 100%;
    width: 100%;
    border-radius: 0px;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.85);

    ul {
        transition: all 0s;
        position: relative;
        left: 0;
        z-index: 2;
        padding-top: 100px;
        padding-left: 0 !important;
    }

    a {
        transition: all .15s;
        text-decoration: none;
        font-size: 2em;
        padding: 5px;
        color: #fff;
        display: block;

        &:hover {
            background-color: rgba(white, .8);
            transition: all .15s;
            letter-spacing: 2px;
            color: #333;
        }
    }

    .bar {
        background-color: transparent;
        transition: all .25s;

        &:before {
            @extend .b-a-expanded;
            transform: rotate(45deg);
            background-color: white;
        }

        &:after {
            @extend .b-a-expanded;
            transform: rotate(-45deg);
            background-color: white;
        }
    }
}
</style>