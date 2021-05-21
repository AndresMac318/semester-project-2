<template>
  <div>
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!--LINK CSS-->
    <link rel="stylesheet" href="../styles.css"/>
  </head>
    <body
      class="h-screen"
      style="background: #edf2f7"
    >
      <main>
        <section class="flex flex-col md:flex-row h-screen items-center">
          <div
            class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen"
          >
            <img
              src="../../src/img/programming.svg"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
          >
            <div class="w-full h-100">
              <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
                Ingrese a su cuenta
              </h1>
              <form class="mt-6">
                <div>
                  <label class="block text-gray-700">Correo</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Ingrese su correo"
                    class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    autofocus
                    autocomplete
                  />
                </div>
                <div class="mt-4">
                  <label class="block text-gray-700">Contraseña</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Ingrese su contraseña"
                    class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
                <div class="text-right mt-2">
                  <a
                    href="#"
                    class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                    >Olvidó su contraseña?</a
                  >
                </div>
              </form>
              <a href="./dashboard.html">
                <button
                  class="w-full block bg-indigo-500 hover:bg-indigo-400 
                focus:bg-indigo-400 text-white font-semibold rounded-lg 
                  px-4 py-3 mt-6"
                >
                  Ingresar
                </button>
              </a>
              <hr class="my-6 border-gray-300 w-full" />
              <p class="mt-8 mr-4">
                No tienes cuenta?
                <a
                  href="./sign-in.html"
                  class="text-blue-500 hover:text-blue-700 font-semibold"
                  >Crea una cuenta</a
                >
              </p>
            </div>
          </div>
        </section>
      </main>
    </body>
    </html>
  </div>

</template>

<script>

export default {

}
</script>

<style>
  
</style>