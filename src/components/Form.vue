<template>
  <h1>Vue con Tailwinds</h1>
  <h1 v-if="edit == -1">Formulario de registro</h1>
  <h1 v-else>Formulario de Edición</h1>
  <div class="form-register">
    <form @submit.prevent="addUser">
      <div class=".input-register">
        <label for="name" class="w-4/12 ">Nombre: </label>
        <input type="text" name="name" class="w-8/12" v-model="name">
      </div>
      <div class=".input-register">
        <label for="username" class="w-4/10 ">Apellido:</label>
        <input type="text" name="username" class="w-8/12" v-model="surname">
      </div>
      <div class=".input-register">
        <label for="age" class="w-4/10 ">Edad:</label>
        <input type="number" name="age" class="w-8/12" step="any" v-model="age">
      </div>
      <div class=".select-register">
        <label for="civil-estatus" class="w-4/10 ">Estado Civil:</label>
        <select name="civil-estatus" id="" v-model="civil_status">
          <option value="" disabled hidden>Seleccione</option>
          <option v-for="e in estados" v-bind:key="e" v-bind:value="e.id">{{ e.description }}</option>
        </select>
      </div>
      <div class=".input-register">
        <label for="mail" class="w-4/10 ">E-mail:</label>
        <input type="mail" name="mail" class="w-8/12" v-model="mail">
      </div>
      <form @submit.prevent="addHobby">
        <div class=".input-register">
          <label for="hobby" class="w-4/10 ">Pasatiempo:</label>
          <input type="text" name="hobby" class="w-8/12" v-model="hobby">
          <input type="button" value="Agregar" @click="addHobby">
          <div v-if="hobbys.length > 0">
            <h2>Pasatiempos: </h2>
            <ul>
              <li v-for="h, id in hobbys">{{ h }} <button type="button" @click="deleteHobby(id)">x</button></li>
            </ul>
          </div>
        </div>
      </form>
      <div class="checkbox-register">
        <input type="checkbox" name="subscripted" v-model="subscripted">
        <label for="subscripted">Subscribirse al boletín de noticias</label>
      </div>
      <div>
        <input type="submit" v-if="edit == -1" value="Registrar">
        <input type="submit" v-else value="Actualizar">
        <input type="reset" v-if="edit == -1" value="Limpiar">
        <input type="reset" v-else value="Cancelar" @click="addUser">
      </div>
    </form>

  </div>
  <div v-if="usuarios.length > 0">
    <h2>Usuarios registrados:</h2>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Estado Civil</th>
          <th>Correo</th>
          <th>Pasatiempos</th>
          <th>Suscrito</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="u, i in usuarios" v-bind:key="u">
          <td>{{ u.name }}</td>
          <td>{{ u.surname }}</td>
          <td>{{ u.age }}</td>
          <td>{{ u.civil_status }}</td>
          <td>{{ u.mail }}</td>
          <td>
            <ul>
              <li v-for="h, i in u.hobbys" v-bind:key="h">{{ i }}. {{ h }}</li>
            </ul>
          </td>
          <td><input type="checkbox" v-bind="u.subscripted" disabled></td>
          <td>
            <button type="button" @click="updateUser(i)">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </button>
          </td>
          <td>
            <button type="button" @click="deleteUser(i)">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Formulario",
  data() {
    return {
      name: "",
      surname: "",
      age: 0,
      civil_status: "",
      mail: "",
      hobby: "",
      hobbys: [],
      subscripted: false,
      usuarios: [],
      estados: [
        { id: "s", description: "Soltero" },
        { id: "c", description: "Casado" },
        { id: "d", description: "Divorciado" },
        { id: "v", description: "Viudo" },
      ],
      edit: -1,
    }
  },
  methods: {
    resetData() {
      this.name = "";
      this.surname = "";
      this.age = 0;
      this.civil_status = "";
      this.mail = "";
      this.hobbys = [];
      this.subscripted = false;
      this.edit = -1;
    },
    addUser() {
      const indexStatus = this.estados.findIndex(e => e.id == this.civil_status);
      var newUser = {
        id: this.usuarios.length,
        name: this.name,
        surname: this.surname,
        age: this.age,
        civil_status: this.estados[indexStatus]?.description ?? "",
        mail: this.mail,
        hobbys: this.hobbys,
        subscripted: this.subscripted,
      }
      console.log("datos: ", this.edit)
      if (this.edit == -1) {
        this.usuarios.push(newUser);
      }
      else {
        this.usuarios[this.edit] = newUser;
      }
      this.resetData();

    },
    addHobby() {
      this.hobbys.push(this.hobby);
      this.hobby = "";
    },
    deleteHobby(id) {
      this.hobbys.splice(id, 1);
    },
    deleteUser(id) {
      if (!confirm("¿Desea eliminar este registro?")) return;
      this.usuarios.splice(id, 1);
    },
    updateUser(id) {
      const user = this.usuarios[id];
      this.name = user.name;
      this.surname = user.surname;
      this.age = user.age;
      this.civil_status = user.civil_status;
      this.mail = user.mail;
      this.hobby = user.hobby;
      this.hobbys = user.hobbys;
      this.subscripted = user.subscripted;
      this.edit = id;
    },
  },
}
</script>