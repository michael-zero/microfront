import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: () => location.pathname === '/',
});

registerApplication({
  name: "@mc/react-single",  
  app: () => System.import("@mc/react-single"),
  activeWhen: () => location.pathname === '/react-single',
});

registerApplication({
  name: "@mc/react-multiples",  
  app: () => System.import("@mc/react-multiples"),
  activeWhen: () => location.pathname === '/react-multiples',
});

start({
  urlRerouteOnly: true,
});
