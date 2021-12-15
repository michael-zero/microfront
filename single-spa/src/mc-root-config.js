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
  activeWhen: ['/react-multiples'],
});

registerApplication({
  name: "@mc/react-route",  
  app: () => System.import("@mc/react-route"),
  activeWhen: () => location.pathname === '/react-route',
});


start({
  urlRerouteOnly: true,
});
