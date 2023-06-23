<script setup>
import {ref} from "vue";
import {useToast} from "vue-toastification";

import Navbar from "./components/partials/Navbar.vue";
import PostCard from "./components/partials/PostCard.vue";

const toast = useToast();

let posts = ref([])
let ready = ref(false)
let page = ref(1)
const limit = ref(10)

const getPosts = async () => {
  ready.value = false;
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await response.json()
  } catch (error) {
    toast.error('Error al obtener los posts')
  } finally {
    ready.value = true
  }
}

getPosts()

</script>

<template>
  <main>
    <section class="row-cols-1">
      <Navbar/>
    </section>
    <section class="row-cols-1">
      <h1 class="text-center my-5">Todos tus posts en un solo lugar</h1>
      <h3 class="text-center my-5">Posts recientes</h3>
    </section>
    <section class="row justify-content-center w-100 m-0 p-0">
      <div v-if="ready" class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group mx-auto" role="group" aria-label="First group">
          <button type="button" class="btn btn-outline-primary" @click="--page"
          :disabled="page === 1">
            Anterior
          </button>
          <button type="button"
                  @click="page = k+1"
                  :class="`btn btn-${k+1 === page ? '' : 'outline-'}primary`"
                  v-for="(e, k) in Array(Number.isInteger(posts.length/limit)
                  ? posts.length/limit
                  : Math.trunc(((posts.length/limit) + 1)))">
            {{ k + 1 }}
          </button>
          <button type="button" class="btn btn-outline-primary" @click="++page"
          :disabled="Array(Number.isInteger(posts.length/limit)
                  ? posts.length/limit
                  : Math.trunc(((posts.length/limit) + 1))).length === page">
            Siguiente
          </button>
        </div>
      </div>
    </section>
    <section class="row justify-content-center">
      <template v-if="ready" v-for="post in posts.slice((page - 1) * limit, ((page - 1) * limit) + limit)">
        <PostCard :id="post.id" :title="post.title" :body="post.body"
                  class="m-3 col-4"/>
      </template>
      <VueSpinnerIos v-else size="60" color="gray" class="my-5"/>
    </section>
  </main>
</template>