import UserAvatar from '@/shared/user/user-avatar.class';

test('Should create new instance with all attributes of UserAvatar', () => {
  const obj = new UserAvatar({
    name: 'Name',
    url: 'url',
  });
  expect(obj.name).toEqual('Name');
  expect(obj.url).toEqual('url');
});

test('Should create new instance without attributes of UserAvatar', () => {
  const obj = new UserAvatar({});
  expect(obj.name).toEqual('');
  expect(obj.url).toEqual('');
});

test('Should create new instance with null value in constructor of UserAvatar', () => {
    const obj = new UserAvatar(null);
    expect(obj.name).toEqual('');
    expect(obj.url).toEqual('');
  });
