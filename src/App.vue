<template>
  <div id="app">
    <v-app>
      <v-toolbar app class="primary white--text">
        <v-toolbar-title>Vue-Common</v-toolbar-title>

          <v-flex xs10 class="right">
            <v-layout row justify-center>
              <v-menu
                origin="center center"
                transition="scale-transition"
                bottom
                offset-y
                v-for="item in items"
                :key="item.title"
                class="white--text"
              >
                <v-btn flat dark slot="activator" class="white--text">
                  {{ item.title }}
                </v-btn>
                <v-list>
                  <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click="">
                    <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-layout>
          </v-flex>
      </v-toolbar>
      <main white>
        <v-content white>
          <content1></content1>
        </v-content>
      </main>

    </v-app>

    <!--<router-view/>-->
  </div>
</template>

<script>

  import Content1 from './components/content/Content1';

  export default {
    components: { Content1 },
    name: 'app',
    data: () => ({
      items: [
        {
          title: 'Login',
          items: [
            { title: 'Login 1' },
            { title: 'Login 2' },
            { title: 'Login 3' },
          ],
        },
        {
          title: 'Content',
          items: [
            { title: 'Content 1' },
            { title: 'Content 2' },
            { title: 'Content 3' },
          ],
        },
      ],
    }),
  };
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
