require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:json/recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/valid-v-for": "off",
    "linebreak-style": 0,
    "antfu/if-newline": "off",
    "vue/v-on-event-hyphenation": "off",
    "no-console": "off",
    "vue/no-setup-props-destructure": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  globals: {
    defineNuxtConfig: true,
    defineNuxtPlugin: true,
    useFetch: true,
    ref: true,
    useSchemaOrg: true,
    defineWebSite: true,
    defineWebPage: true,
    defineOrganization: true,
    useSeoMeta: true,
    useRoute: true,
    useHead: true,
    definePageMeta: true,
    useRouter: true,
    inject: true,
    useRuntimeConfig: true,
    onMounted: true,
    $fetch: true,
    useAsyncData: true,
    queryContent: true,
    fetchContentNavigation: true,
    useContent: true,
    useCourseAsideStore: true,
    navigationItem: true,
    reactive: true,
    useSakura: true,
    useSignUpStore: true,
    useSignInStore: true,
    useSessionStore: true,
    defineNuxtRouteMiddleware: true,
    navigateTo: true,
    defineModel: true,
    useFormValidator: true,
    computed: true,
    provide: true,
    useSlots: true,
    watch: true,
    useCookie: true,
    useEnrollmentModalStore: true,
    useSearchModalStore: true,
    useUserStore: true,
    authenticate: true,
    defineNitroPlugin: true,
    Ref: true,
    useShortcuts: true,
    defineExpose: true,
    nextTick: true,
    useSubmissionsStore: true,
    useCoursesStore: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  env: {
    node: true,
  },
};
