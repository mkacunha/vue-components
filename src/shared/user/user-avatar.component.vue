<template>
  <div>
    <v-avatar v-if="user.url">
      <img :src="user.url" :alt="user.name">
    </v-avatar>

    <v-avatar v-if="!user.url" :color="color">
      <span class="white--text headline">{{ name }}</span>
    </v-avatar>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import UserAvatar from "./user-avatar.interface";
import RandomColor from '@/shared/color/color-random';

@Component
export default class UserAvatarComponent extends Vue {
  @Prop({ required: true }) user?: UserAvatar;

  get name(): string {
    if (this.user && this.user.name) {
      let nameSplited = this.user.name.split(" ");
      let first = nameSplited[0][0].toUpperCase();
      let last = nameSplited[nameSplited.length - 1][0].toUpperCase();
      return `${first}${last}`;
    }
    return "";
  }

  get color(): string {
    return RandomColor.get();
  }
}
</script>
<style lang="sass">

</style>

