<template>
  <div class="modal-add-passenger">
    <div @click="$emit('closeModal')" class="out-side"/>
    <div class="modal">
      <div class="content">
        <h3>Введите ФИО</h3>
        <input type="text" v-model="Name">
        <h3>Введите Дату Рождения</h3>
        <input placeholder="2002-01-01" type="text" v-model="DateBirthday">
        <h3>Введите паспорт</h3>
        <input type="text" v-model="passport">
        <button @click="AddPass" class="save">
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Name: '',
      DateBirthday: '',
      passport: '',
    }
  },
  methods:{
    async AddPass(){
      let user_id = await this.$store.getters['user/user'].id
      let res = await this.$axios.post('/user/add-pass',{params:{user_id:user_id,name:this.Name,birthday:this.DateBirthday,passport:this.passport}})
      this.$emit("closeModal")
    }
  }
}
</script>

<style scoped>
.modal-add-passenger {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.out-side {
  width: 100vw;
  height: 100vh;
}
.modal{
  position: fixed;
  background-color: white;
  padding: 20px;
  border: #7B61FF 1px solid;
  border-radius: 8px;
}
input{
  border: #7B61FF 1px solid;
}
</style>
