<template>
  <div>
    <form @submit.prevent="submit">
      <input type="email" v-model="email" />
      <input type="password" v-model="contraseña" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { authClient } from "~/composables/auth"
const session = authClient.useSession()
const email = ref("")
const contraseña = ref("")

const submit = async () => {
  await client.signOut()
  // console.log(session);
  
  // await session
  // if (session.user) {
  //   alert (`Bienvenido ${session.user.name}`)
  // } else {
  //   alert ("Credenciales incorrectas")
  // }
}
</script>
