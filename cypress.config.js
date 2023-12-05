import allureWriter from "@shelex/cypress-allure-plugin/writer.js";
//const allureWriter =require('@shelex/cypress-allure-plugin/writer');
import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'hzg1bd',
  e2e: {
    baseUrl:"https://woocommerce.showcase-wallee.com/",
    chromeWebSecurity:false,
    // experimentalModifyObstructiveThirdPartyCode: true
   // experimentalSessionAndOrigin:true,
    defaultCommandTimeout: 10000, 
    pageLoadTimeout: 10000,
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config;
  },
  },
});
