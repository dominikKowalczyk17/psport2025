<script setup lang="ts">
import { ref, onMounted } from "vue";
import { categoryService } from "../mocks/services/categoryService";
import type { Category } from "../types/Category";

const isAMP = false;

const menuItems = ref(<Category[]>[]);

onMounted(async () => {
  try {
    menuItems.value = await categoryService.getCategories();
  } catch (error) {
    throw new Error("Błąd w pobieraniu kategorii");
  }
});
</script>

<template>
  <header
    class="fixed top-0 left-0 z-[2] w-full h-[calc(var(--header-main-height)+var(--header-sub-height))] transform-gpu shadow-[0_-3px_0_#fff]"
    :style="{
      '--header-main-height': '65px',
      '--header-sub-height': '45px',
    }"
  >
    <!-- Sub Header -->
    <div class="absolute top-0 left-0 right-0 h-[var(--header-sub-height)] bg-dark-blue">
      <div class="inside flex justify-end">
        <div
          v-if="!isAMP"
          class="absolute top-1/2 right-[var(--page-padding)] -translate-y-1/2 flex gap-2.5"
        >
          <!-- Przyciski -->
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div
      class="absolute top-0 right-0 left-0 bottom-0 z-[1] h-[var(--header-main-height)] mt-[var(--header-sub-height)] bg-white shadow-lg"
    >
      <div class="inside--header relative z-[2] h-[45px] mx-auto max-w-[1300px]">
        <label class="hidden" for="header_state" tabindex="0">Menu</label>

        <!-- Logo -->
        <div class="logo absolute left-4 top-1/2 -translate-y-1/2">
          <a href="./">
            <img
              alt="polsatsport.pl"
              class="h-[42px] w-[201px]"
              src="../assets/logo.svg"
            />
          </a>
        </div>

        <!-- Nawigacja główna -->
        <nav
          class="nav--main absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full pl-[240px] pr-[50px] h-[60px] content-center"
        >
          <ul class="flex gap-2">
            <!-- Elementy menu -->
            <li v-for="item in menuItems" :key="item.id" class="relative group">
              <input :id="`nav_${item.id}`" type="checkbox" class="sr-only peer" />
              <a class="px-3 py-2 hover:text-blue-500 cursor-pointer font-bold">{{
                item.title
              }}</a>
              <label
                :for="`nav_${item.id}`"
                class="absolute inset-0 cursor-pointer hover:text-blue-700 peer"
              ></label>

              <!-- Submenu -->
              <div
                class="absolute top-full left-0 w-60 bg-white shadow-xl hidden group-hover:block peer-checked:block pt-4"
              >
                <div class="max-h-[60vh] overflow-y-auto">
                  <ul>
                    <li v-for="subItem in item.submenu" :key="subItem.title">
                      <a
                        class="px-4 py-2 cursor-pointer hover:bg-gray-200 hover:text-blue-700 block font-bold text-sm"
                        >{{ subItem.title }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <!-- Przycisk wyszukiwarki -->
        <label
          for="search_state"
          class="search-button absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          tabindex="0"
        >
        </label>
      </div>
    </div>

    <!-- Formularz wyszukiwania -->
    <form class="absolute top-full left-0 right-0 bg-white shadow-md hidden">
      <div class="inside flex p-4">
        <input
          type="search"
          class="flex-1 px-4 py-2 border rounded-l"
          placeholder="szukaj w serwisie"
        />
        <button class="px-6 py-2 bg-blue-500 text-white rounded-r">Szukaj</button>
      </div>
    </form>

    <!-- Sidebar dla AMP -->
    <div
      v-if="isAMP"
      class="fixed bottom-0 left-0 w-full max-w-[767px] h-auto md:max-w-none"
    >
      <!-- Zawartość sidebaru -->
    </div>
  </header>
</template>

<style>
/* Dodatkowe style, które wymagają CSS (opcjonalnie) */
.peer:checked ~ div {
  display: block;
}

@media (max-width: 767px) {
  .nav--main {
    display: none;
  }

  .header__hamburger {
    display: block;
  }
}
</style>
