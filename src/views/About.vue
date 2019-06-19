<template>
  <div class="about">
    <user-avatar-component v-for="user in users" v-bind:key="user.name" :user="user"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserAvatarComponent from "@/shared/user/user-avatar.component.vue";
import UserAvatar from "@/shared/user/user-avatar.interface";

@Component({
  components: {
    UserAvatarComponent
  }
})
export default class About extends Vue {
  private users: UserAvatar[] = [
    new UserAvatar({
      name: "Maiko Cunha",
      url:
        "https://scontent.fbfh2-1.fna.fbcdn.net/v/t1.0-1/p160x160/15665843_1670821759610491_226410178205988335_n.jpg?_nc_cat=111&_nc_oc=AQnl26MlxeG2Qyj7QLO-2XLJ0d9NRskETWuRGmPD6puu4-kWQmwc5GwQiFelnNAJIIc&_nc_ht=scontent.fbfh2-1.fna&oh=e6ae9160a59d51ff18153faf6e814d26&oe=5DC14A94"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    }),
    new UserAvatar({
      name: "John Santos Carneiro"
    })
  ];
}
</script>

