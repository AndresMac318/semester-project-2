<template>
    <div>
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!--TAILWIND CSS-->
            <!--<link href="./CSS/tailwind.css" rel="stylesheet">-->
            <link href="../styles.css" rel="stylesheet" />

            <title>Propuesta Proyecto</title>
        </head>
        <body class="bg-gray-300 text-gray-600 flex flex-col h-screen">
            <div
            class="h-12 bg-white flex items-center justify-between border-1 border-blue-200"
            >
            <div class="flex items-center">
                <svg
                class="h-12 w-12"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
                    fill="#4C51BF"
                    stroke="#4C51BF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>
                <path
                    d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
                    fill="white"
                ></path>
                </svg>
                <div class="px-4">
                <span class="text-gray-900 text-xl">Dashboard Admin</span>
                </div>
            </div>
            <div class="flex items-center px-4">
                <span>Nombre Usuario</span>
                <div class="ml-2">
                <button class="block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-purple-400" id="btn-profile">
                    <img
                    src="../../src/img/profile.png"
                    alt="avatar"
                    class="h-full w-full object-cover"
                    />
                </button>
                <div class="hidden origin-top-right absolute right-0 mt-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" id="dropdown">
                    <a href="./404.html" class="block px-4 py-2 hover:bg-gray-100 hover:text-purple-600">Acount Settings</a>
                    <a href="./404.html" class="block px-4 py-2 hover:bg-gray-100  hover:text-purple-600">Support</a>
                    <a href="./404.html" class="block px-4 py-2 hover:bg-gray-100 hover:text-purple-600">License</a>
                    <a href="./login.html">
                    <button class="block w-full text-left px-4 py-2 
                    text-base hover:bg-gray-100 hover:text-purple-600" 
                    role="menuitem">
                        Sign out
                    </button>
                    </a>
                </div>
                </div>
            </div>
            </div>

            <div class="flex h-full">
            <div class="bg-gray-800 p-6 w-64">
                <ul>
                <li>
                    <a
                    href="./404.html"
                    class="flex items-center px-4 py-6 rounded hover:bg-gray-900 hover:text-gray-400 my-2"
                    >
                    <div class="h-4 text-gray-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-house-fill"
                        viewBox="0 0 16 16"
                        >
                        <path
                            fill-rule="evenodd"
                            d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                        />
                        <path
                            fill-rule="evenodd"
                            d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                        />
                        </svg>
                    </div>
                    <span class="ml-2">Home</span>
                    </a>
                </li>

                <li>
                    <a
                    href="#"
                    class="flex items-center px-4 py-6 rounded hover:bg-gray-900 hover:text-gray-400 bg-gray-900 text-gray-400 my-2"
                    >
                    <div class="h-4 text-gray-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-clipboard-data"
                        viewBox="0 0 16 16"
                        >
                        <path
                            d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"
                        />
                        <path
                            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                        />
                        <path
                            d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
                        />
                        </svg>
                    </div>
                    <span class="ml-2">Dashboard</span>
                    </a>
                </li>

                <li>
                    <a
                    href="./404.html"
                    class="flex items-center px-4 py-6 rounded hover:bg-gray-900 hover:text-gray-400 my-2"
                    >
                    <div class="h-4 text-gray-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-handbag-fill"
                        viewBox="0 0 16 16"
                        >
                        <path
                            d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"
                        />
                        </svg>
                    </div>
                    <span class="ml-2">Orders</span>
                    </a>
                </li>

                <li>
                    <a
                    href="./404.html"
                    class="flex items-center px-4 py-6 rounded hover:bg-gray-900 hover:text-gray-400 my-2"
                    >
                    <div class="h-4 text-gray-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-journal-richtext"
                        viewBox="0 0 16 16"
                        >
                        <path
                            d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"
                        />
                        <path
                            d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
                        />
                        <path
                            d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
                        />
                        </svg>
                    </div>
                    <span class="ml-2">Products</span>
                    </a>
                </li>

                <li>
                    <a
                    href="./404.html"
                    class="flex items-center px-4 py-6 rounded hover:bg-gray-900 hover:text-gray-400 my-2"
                    >
                    <div class="h-4 text-gray-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-square"
                        viewBox="0 0 16 16"
                        >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"
                        />
                        </svg>
                    </div>
                    <span class="ml-2">Customers</span>
                    </a>
                </li>

                <li>
                    <a
                    href="./404.html"
                    class="flex items-center px-4 py-6 rounded hover:bg-gray-900 hover:text-gray-400 my-2"
                    >
                    <div class="h-4 text-gray-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-truck"
                        viewBox="0 0 16 16"
                        >
                        <path
                            d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                        />
                        </svg>
                    </div>
                    <span class="ml-2">Vendors</span>
                    </a>
                </li>
                </ul>
            </div>

            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <h3 class="text-gray-700 text-3xl font-medium py-3 px-3">Dashboard</h3>
                <!--Grafics-->
                <!--Cards-->
                <div class="container mx-auto px-6 py-8">
                <div class="mt-4">
                    <div class="flex flex-wrap -mx-6">
                    <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
                        <div
                        class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white"
                        >
                        <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                            <svg
                            class="h-8 w-8 text-white"
                            viewBox="0 0 28 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                                fill="currentColor"
                            ></path>
                            </svg>
                        </div>

                        <div class="mx-5">
                            <h4 class="text-2xl font-semibold text-gray-700">482</h4>
                            <div class="text-gray-500">Client</div>
                        </div>
                        </div>
                    </div>

                    <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                        <div
                        class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white"
                        >
                        <div class="p-3 rounded-full bg-yellow-300 bg-opacity-75">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            fill="currentColor"
                            class="bi bi-handbag-fill"
                            viewBox="0 0 16 16"
                            >
                            <path
                                d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"
                            />
                            </svg>
                        </div>

                        <div class="mx-5">
                            <h4 class="text-2xl font-semibold text-gray-700">255</h4>
                            <div class="text-gray-500">Total Orders</div>
                        </div>
                        </div>
                    </div>

                    <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                        <div
                        class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white"
                        >
                        <div class="p-3 rounded-full bg-pink-600 bg-opacity-75">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            fill="currentColor"
                            class="bi bi-journal-richtext"
                            viewBox="0 0 16 16"
                            >
                            <path
                                d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"
                            />
                            <path
                                d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
                            />
                            <path
                                d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
                            />
                            </svg>
                        </div>

                        <div class="mx-5">
                            <h4 class="text-2xl font-semibold text-gray-700">
                            215,542
                            </h4>
                            <div class="text-gray-500">Available Products</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="mt-8"></div>
                <!--Tabla Products-->
                <div class="flex flex-col mt-8 mb-10">
                    <div
                    class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
                    >
                    <div
                        class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
                    >
                        <table class="min-w-full">
                        <thead>
                            <tr>
                            <th
                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Product
                            </th>
                            <th
                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Type
                            </th>
                            <th
                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Stock
                            </th>
                            <th
                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Price
                            </th>
                            <th
                                class="px-6 py-3 border-b border-gray-200 bg-gray-50"
                            ></th>
                            </tr>
                        </thead>

                        <tbody class="bg-white">
                            <tr>
                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                            >
                                <div class="flex items-center">
                                <div class="flex-shrink-0 h-10 w-10">
                                    <img
                                    class="h-10 w-10 rounded-full"
                                    src="../../src/img/carnes.jpg"
                                    alt="name-carne"
                                    />
                                </div>

                                <div class="ml-4">
                                    <div
                                    class="text-sm leading-5 font-medium text-gray-900"
                                    >
                                    <span class="bg-gray-50">Name Product</span>
                                    </div>
                                    <div class="text-sm leading-5 text-gray-500">
                                    <span class="bg-gray-50"> Description</span>
                                    </div>
                                </div>
                                </div>
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                            >
                                <div class="text-sm leading-5 text-gray-900">
                                <span class="bg-gray-50"> Product type</span>
                                </div>
                                <div class="text-sm leading-5 text-gray-500">
                                <span class="bg-gray-50"> Description Type</span>
                                </div>
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                            >
                                <span
                                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                                >60</span
                                >
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                            >
                                $15000/lb
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                            >
                                <div class="flex">
                                <a
                                    href="#"
                                    class="text-indigo-600 hover:text-indigo-900 flex items-center"
                                >
                                    <div class="flex justify-around">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-pencil-square"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                        />
                                        <path
                                        fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                        />
                                    </svg>
                                    </div>
                                    <span class="ml-2 mr-10">Edit</span>
                                </a>
                                <a
                                    href="#"
                                    class="text-red-500 hover:text-red-600 flex items-center"
                                >
                                    <div class="flex justify-around">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-trash"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                                        />
                                        <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                        />
                                    </svg>
                                    </div>
                                    <span class="ml-2">Delete</span>
                                </a>
                                </div>
                            </td>
                            </tr>
                            <!--row-->
                            <tr>
                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                            >
                                <div class="flex items-center">
                                <div class="flex-shrink-0 h-10 w-10">
                                    <img
                                    class="h-10 w-10 rounded-full"
                                    src="../../src/img/carnes.jpg"
                                    alt="name-carne"
                                    />
                                </div>

                                <div class="ml-4">
                                    <div
                                    class="text-sm leading-5 font-medium text-gray-900"
                                    >
                                    <span class="bg-gray-50">Name Product</span>
                                    </div>
                                    <div class="text-sm leading-5 text-gray-500">
                                    <span class="bg-gray-50"> Description</span>
                                    </div>
                                </div>
                                </div>
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                            >
                                <div class="text-sm leading-5 text-gray-900">
                                <span class="bg-gray-50"> Product type</span>
                                </div>
                                <div class="text-sm leading-5 text-gray-500">
                                <span class="bg-gray-50"> Description Type</span>
                                </div>
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                            >
                                <span
                                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                                >60</span
                                >
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                            >
                                $12000/lb
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                            >
                                <div class="flex">
                                <a
                                    href="#"
                                    class="text-indigo-600 hover:text-indigo-900 flex items-center"
                                >
                                    <div class="flex justify-around">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-pencil-square"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                        />
                                        <path
                                        fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                        />
                                    </svg>
                                    </div>
                                    <span class="ml-2 mr-10">Edit</span>
                                </a>
                                <a
                                    href="#"
                                    class="text-red-500 hover:text-red-600 flex items-center"
                                >
                                    <div class="flex justify-around">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-trash"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                                        />
                                        <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                        />
                                    </svg>
                                    </div>
                                    <span class="ml-2">Delete</span>
                                </a>
                                </div>
                            </td>
                            </tr>
                            <!--row-->
                            <tr>
                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                            >
                                <div class="flex items-center">
                                <div class="flex-shrink-0 h-10 w-10">
                                    <img
                                    class="h-10 w-10 rounded-full"
                                    src="../../src/img/carnes.jpg"
                                    alt="name-carne"
                                    />
                                </div>

                                <div class="ml-4">
                                    <div
                                    class="text-sm leading-5 font-medium text-gray-900"
                                    >
                                    <span class="bg-gray-50">Name Product</span>
                                    </div>
                                    <div class="text-sm leading-5 text-gray-500">
                                    <span class="bg-gray-50"> Description</span>
                                    </div>
                                </div>
                                </div>
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                            >
                                <div class="text-sm leading-5 text-gray-900">
                                <span class="bg-gray-50"> Product type</span>
                                </div>
                                <div class="text-sm leading-5 text-gray-500">
                                <span class="bg-gray-50"> Description Type</span>
                                </div>
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                            >
                                <span
                                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                                >80</span
                                >
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                            >
                                $10000/lb
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                            >
                                <div class="flex">
                                <a
                                    href="#"
                                    class="text-indigo-600 hover:text-indigo-900 flex items-center"
                                >
                                    <div class="flex justify-around">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-pencil-square"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                        />
                                        <path
                                        fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                        />
                                    </svg>
                                    </div>
                                    <span class="ml-2 mr-10">Edit</span>
                                </a>
                                <a
                                    href="#"
                                    class="text-red-500 hover:text-red-600 flex items-center"
                                >
                                    <div class="flex justify-around">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-trash"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                                        />
                                        <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                        />
                                    </svg>
                                    </div>
                                    <span class="ml-2">Delete</span>
                                </a>
                                </div>
                            </td>
                            <!--row-->
                            </tr>
                            <tr>
                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                            >
                                <div class="flex items-center">
                                <div class="flex-shrink-0 h-10 w-10">
                                    <img
                                    class="h-10 w-10 rounded-full"
                                    src="../../src/img/carnes.jpg"
                                    alt="name-carne"
                                    />
                                </div>

                                <div class="ml-4">
                                    <div
                                    class="text-sm leading-5 font-medium text-gray-900"
                                    >
                                    <span class="bg-gray-50">Name Product</span>
                                    </div>
                                    <div class="text-sm leading-5 text-gray-500">
                                    <span class="bg-gray-50"> Description</span>
                                    </div>
                                </div>
                                </div>
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                            >
                                <div class="text-sm leading-5 text-gray-900">
                                <span class="bg-gray-50"> Product type</span>
                                </div>
                                <div class="text-sm leading-5 text-gray-500">
                                <span class="bg-gray-50"> Description Type</span>
                                </div>
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                            >
                                <span
                                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                                >15</span
                                >
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                            >
                                $30000/lb
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                            >
                                <div class="flex">
                                <a
                                    href="#"
                                    class="text-indigo-600 hover:text-indigo-900 flex items-center"
                                >
                                    <div class="flex justify-around">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-pencil-square"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                        />
                                        <path
                                        fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                        />
                                    </svg>
                                    </div>
                                    <span class="ml-2 mr-10">Edit</span>
                                </a>
                                <a
                                    href="#"
                                    class="text-red-500 hover:text-red-600 flex items-center"
                                >
                                    <div class="flex justify-around">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-trash"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                                        />
                                        <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                        />
                                    </svg>
                                    </div>
                                    <span class="ml-2">Delete</span>
                                </a>
                                </div>
                            </td>
                            <!--row-->
                            </tr>
                            <tr>
                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                            >
                                <div class="flex items-center">
                                <div class="flex-shrink-0 h-10 w-10">
                                    <img
                                    class="h-10 w-10 rounded-full"
                                    src="../../src/img/carnes.jpg"
                                    alt="name-carne"
                                    />
                                </div>

                                <div class="ml-4">
                                    <div
                                    class="text-sm leading-5 font-medium text-gray-900"
                                    >
                                    <span class="bg-gray-50">Name Product</span>
                                    </div>
                                    <div class="text-sm leading-5 text-gray-500">
                                    <span class="bg-gray-50"> Description</span>
                                    </div>
                                </div>
                                </div>
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                            >
                                <div class="text-sm leading-5 text-gray-900">
                                <span class="bg-gray-50"> Product type</span>
                                </div>
                                <div class="text-sm leading-5 text-gray-500">
                                <span class="bg-gray-50"> Description Type</span>
                                </div>
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                            >
                                <span
                                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                                >40</span
                                >
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                            >
                                $35000/lb
                            </td>

                            <td
                                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                            >
                                <div class="flex">
                                <a
                                    href="#"
                                    class="text-indigo-600 hover:text-indigo-900 flex items-center"
                                >
                                    <div class="flex justify-around">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-pencil-square"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                        />
                                        <path
                                        fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                        />
                                    </svg>
                                    </div>
                                    <span class="ml-2 mr-10">Edit</span>
                                </a>
                                <a
                                    href="#"
                                    class="text-red-500 hover:text-red-600 flex items-center"
                                >
                                    <div class="flex justify-around">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-trash"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                                        />
                                        <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                        />
                                    </svg>
                                    </div>
                                    <span class="ml-2">Delete</span>
                                </a>
                                </div>
                            </td>
                            </tr>
                            <!--row-->
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </main>
            </div>
            
        </body>
        </html>
    </div>    
</template>
<!--
<script src="../../src/js/dropdown.js">
export default {

}
</script>
-->
<style>

</style>