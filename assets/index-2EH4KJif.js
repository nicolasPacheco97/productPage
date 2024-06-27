import { importShared } from './__federation_fn_import-iRn10MJH.js';
import App, { j as jsxRuntimeExports } from './__federation_expose_App-CdGe2Mxq.js';
import { r as reactDomExports } from './__federation_shared_react-dom-81eQxVv-.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
