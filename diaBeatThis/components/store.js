const postModel = types.model('postModel', {
    name: types.string,
    content: types.maybe(types.string),
    time: types.maybe(types.string),
  });