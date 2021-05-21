<template>
  <div>
      <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/public/styles.css" />
    <title>Sign In</title>
  </head>
  <body>
    <main class="xl:h-screen w-screen">
      <section
        class=""
      >
        <div class="flex flex-row">
          <article
            class="bg-blue-100 mr-2 h-full w-full items-center my-auto
            none8" 
          >            
            <img src="../../src/img/programming.svg" alt="" class="mt-auto"/>
          </article>
          <article class="bg-white ml-2 w-full h-screen">

            <form method="#" action="#" class="mt-10 p-2">
              <div class="mx-24 outline-none w-80 sm:w-96 md:w-96">
                <label
                  class="block text-xl text-gray-700 text-center font-semibold"
                >
                  Regístrate
                  <br/><br/>
                </label>
                <div class="outline-none">
                  <input
                    type="text"
                    placeholder="Nombre"
                    class="mt-1 block border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 w-80 sm:w-96 md:w-96"
                  />
                </div>
                <div class="mt-7 outline-none">
                  <input
                    type="email"
                    placeholder="Correo electronico"
                    class="mt-1 block border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 w-80 sm:w-96 md:w-96"
                  />
                </div>
                <div class="mt-7 outline-none">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    class="mt-1 block border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 w-80 sm:w-96 md:w-96"
                  />
                </div>
                <div class="mt-7 outline-none">
                  <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    class="mt-1 block border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 w-80 sm:w-96 md:w-96"
                  />
                </div>
                <div class="mt-7">
                  <a href="./login.html">
                    <button
                      class="bg-blue-500 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 w-80 sm:w-96 md:w-96"
                    >
                      Registrar
                    </button>
                  </a>
                </div>
                <div class="flex mt-7 items-center text-center w-80 sm:w-96 md:w-96">
                  <hr class="border-gray-300 border-1 w-full rounded-md" />
                  <label class="block font-medium text-sm text-gray-700 w-full">
                    Registrate con
                  </label>
                  <hr class="border-gray-300 border-1 w-full rounded-md" />
                </div>
                <div class="flex mt-7 justify-center w-80 sm:w-96 md:w-96">
                  <button
                    class="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                  >
                    Google
                  </button>
                </div>
                <div class="mt-7">
                  <div class="flex justify-center items-center">
                    <label class="w-full text-sm text-center text-gray-600"
                      >¿Ya tienes una cuenta?</label
                    >
                    <a
                      href="./login.html"
                      class="w-full text-blue-500 text-center transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </article>
        </div>
      </section>
    </main>
  </body>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>