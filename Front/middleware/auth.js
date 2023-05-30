export default  function ({ store, redirect }) {
  // Проверяем наличие записи пользователя в localStorage
  const user = localStorage.getItem('user')

  if (user) {
    store.dispatch('user/getUser', JSON.parse(user).id)
  }
  else{
    redirect('/auth')
  }

  // Если запись пользователя присутствует, сохраняем ее в хранилище Vuex

}
