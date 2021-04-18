<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="6" md="3">
      <h1>API 1 Test</h1>
      <p>{{api1}}</p>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <h1>API 2 Test Other</h1>
      <p>{{api2}}</p>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <h1>API 3 Test Health</h1>
      <p>{{api3}}</p>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <h1>API 4 Test Default</h1>
      <p>{{api4}}</p>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data:()=>{
    return {
      api1: {},
      api2: {},
      api3: {},
      api4: {}
    }
  },
  mounted:function(){
    this.$axios.$get('http://api.sa.homework/api').then(resp=>{
      this.api1 = resp;
    }).catch(err=>{
      console.log(err);
    });
    
    this.$axios.$get('http://api.sa.homework/other').then(resp=>{
      this.api2 = resp;
    }).catch(err=>{
      console.log(err);
    });

    this.$axios.$get('http://api.sa.homework/health').then(resp=>{
      this.api3 = resp;
    }).catch(err=>{
      console.log(err);
    });

    this.$axios.$get('http://api.sa.homework/').then(resp=>{
      this.api4 = resp;
    }).catch(err=>{
      console.log(err);
    });


}
}
</script>
