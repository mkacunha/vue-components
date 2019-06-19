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
import { Vue, Prop, Component } from 'vue-property-decorator';
import UserAvatar from './user-avatar.class';
import RandomColor from '@/shared/color/color-random';

@Component
export default class UserAvatarComponent extends Vue {
  @Prop({ required: true }) user?: UserAvatar;

  private color = RandomColor.get();

  get name(): string {
    if (this.user && this.user.name) {
      const nameSplited = this.user.name.split(' ');
      const first = nameSplited[0][0].toUpperCase();
      const last = nameSplited[nameSplited.length - 1][0].toUpperCase();
      return `${first}${last}`;
    }
    return '';
  }
}
</script>
<style lang="sass">

</style>
