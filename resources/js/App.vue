<template>
    <div id="app">
        <div>
            <router-view></router-view>
        </div>
        <notifications group="success" classes="success-notify" />
        <notifications group="warning" classes="warning-notify" />
    </div>
</template>

<style lang="scss">
#app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
}

// #nprogress {
//   .bar{
//     background: #f93154;
//   }
//   .spinner-icon{
//     border-top-color: #f93154;
//     border-left-color: #f93154;
//   }
// }
</style>
