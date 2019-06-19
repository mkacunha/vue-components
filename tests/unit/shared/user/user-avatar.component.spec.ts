import { shallowMount } from '@vue/test-utils';
import UserAvatarComponent from '@/shared/user/user-avatar.component.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(UserAvatarComponent, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});