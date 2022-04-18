import {
  r as $,
  o as m,
  c as p,
  a as s,
  n as V,
  b as u,
  d as x,
  S as v,
  w as j,
  e as h,
  v as f,
  F as g,
  f as l,
  g as d,
  h as F,
  p as C,
} from "./vendor.354ff9f4.js";
const L = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) n(e);
  new MutationObserver((e) => {
    for (const a of e)
      if (a.type === "childList")
        for (const i of a.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(e) {
    const a = {};
    return (
      e.integrity && (a.integrity = e.integrity),
      e.referrerpolicy && (a.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (a.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    const a = r(e);
    fetch(e.href, a);
  }
};
L();
const N = { class: "py-10" },
  z = { class: "mx-auto fixed bg-slate inset-x-0 opacity-60 top-0 z-10" },
  E = { class: "flex justify-between text-cyan items-center mx-4" },
  M = u(
    '<div class="text-cyan px-2 py-5 font-extrabold"><a href="/"><h2><span class="text-sky">M</span>i <span class="text-sky">P</span>ortafolio</h2></a></div><div class="hidden md:flex gap-5"><a href="" class="hover:text-skyd transition duration-500">Inicio</a><a href="#herramientas" class="hover:text-skyd transition duration-500">Mis Herramientas</a><a href="#proyectos" class="hover:text-skyd transition duration-500">Proyectos</a><a href="#footer" class="hover:text-skyd transition duration-500">Contacto</a></div>',
    2
  ),
  P = { class: "text-sky md:hidden w-5 hover:scale-110" },
  T = s("i", { class: "fas fa-bars" }, null, -1),
  D = [T],
  H = s(
    "a",
    {
      href: "/",
      class:
        "hover:bg-sky hover:text-slate transition duration-500 block py-2 px-4",
    },
    "Inicio",
    -1
  ),
  B = s(
    "a",
    {
      href: "#herramientas",
      class:
        "hover:bg-sky hover:text-slate transition duration-500 block py-2 px-4",
    },
    "Mis Herramientas",
    -1
  ),
  I = s(
    "a",
    {
      href: "#proyectos",
      class:
        "hover:bg-sky hover:text-slate transition duration-500 block py-2 px-4",
    },
    "Proyectos",
    -1
  ),
  O = s(
    "a",
    {
      href: "#footer",
      class:
        "hover:bg-sky hover:text-slate transition duration-500 block py-2 px-4",
    },
    "Contacto",
    -1
  ),
  S = [H, B, I, O],
  U = {
    setup(o) {
      const t = $(!0);
      return (r, n) => (
        m(),
        p("div", N, [
          s("div", z, [
            s("nav", E, [
              M,
              s("div", P, [
                s(
                  "button",
                  { onClick: n[0] || (n[0] = (e) => (t.value = !t.value)) },
                  D
                ),
              ]),
            ]),
          ]),
          s(
            "div",
            {
              class: V([
                "md:hidden bg-slatedos text-sky fixed inset-x-0 opacity-80 top-16 z-50",
                { hidden: t.value },
              ]),
              md: "",
            },
            S,
            2
          ),
        ])
      );
    },
  };
var A = "/assets/undraw.92f10935.svg",
  c = (o, t) => {
    const r = o.__vccOpts || o;
    for (const [n, e] of t) r[n] = e;
    return r;
  };
const Q = {},
  q = {
    class:
      "flex flex-col items-center justify-center min-h-screen gap-7 sm:gap-2 lg:flex-row",
  },
  J = u(
    '<div class="sm:w-8/12 mx-auto w-1/2 sm:p-8 md:w-7/12 lg:w-1/2 overflow-hidde"><img src="' +
      A +
      '" class="block rounded-lg" alt=""></div><div class="flex flex-col items-center lg:items-start"><div class="w-3/4"><h1 class="font-bold text-3xl sm:text-5xl mb-3"><span class="text-sky">W</span>eb <span class="text-sky">D</span>esigner and Backend</h1><p class="text-2xl mb-5 font-semibold"><span class="text-sky">S</span>talin <span class="text-sky">V</span>alarezo</p></div><div><a href="https://drive.google.com/file/d/1Nqp8Bcr-lcRpzwIqXgGJ4mAPc0Hbczq4/view?usp=sharing" target="_blank"><button class="text-slatedos bg-skyd font-semibold hover:bg-slate hover:text-sky transition delay-300 duration-300 ease-in-out border-solid rounded-md hover:border-transparent text-lg py-3 px-4 sm:py-4 sm:px-5 sm:text-xl md:mb-6 sm:mb-6">Descargar Cv</button></a></div></div>',
    2
  ),
  K = [J];
function R(o, t, r, n, e, a) {
  return m(), p("section", q, K);
}
var W = c(Q, [["render", R]]),
  G = "/assets/html-5.d4dc8538.svg",
  X = "/assets/css-3.1d9e56c8.svg",
  Y = "/assets/tailwindcss-icon.da161fa0.svg",
  Z = "/assets/javascript.3691c274.svg",
  ee = "/assets/express.acff8a3b.svg",
  se = "/assets/vue.2cbec2c1.svg",
  te = "/assets/mongodb.ef34064c.svg",
  ae = "/assets/nodejs-icon.e3af091e.svg";
const oe = {},
  re = u(
    '<div class="bg-slatedos"><a href="" class="text-cyan hover:text-sky" name="herramientas"><h2 class="text-center p-6 font-semibold text-lg lg:text-2xl">Mis Herramientas</h2></a></div><div class="max-w-7xl mx-auto mt-10"><picture class="grid lg:grid-cols-4 md:grid-cols-3 place-items-center sm:gap-4 grid-cols-2 md:gap-y-6 lg:gap-y-20 gap-y-10"><img class="w-28" src="' +
      G +
      '" alt=""><img class="w-28" src="' +
      X +
      '" alt=""><img class="w-28" src="' +
      Y +
      '" alt=""><img class="w-28" src="' +
      Z +
      '" alt=""><img class="w-28" src="' +
      ee +
      '" alt=""><img class="w-28" src="' +
      se +
      '" alt=""><img class="w-28" src="' +
      te +
      '" alt=""><img class="w-28" src="' +
      ae +
      '" alt=""></picture></div>',
    2
  );
function ne(o, t, r, n, e, a) {
  return re;
}
var ie = c(oe, [["render", ne]]),
  le = "/assets/Paises.05fffdac.png",
  de = "/assets/interfazlogin.083e2f51.png",
  ce = "/assets/modelo.67deeb49.png";
const me = {},
  pe = u(
    '<div class="bg-slatedos mt-6"><a href="" name="proyectos" class="text-cyan hover:text-sky"><h2 class="text-center p-6 font-semibold text-lg lg:text-2xl">Mis Proyectos</h2></a></div><div class="max-w-7xl mx-auto mt-10"><div class="grid grid-cols-1 place-items-center gap-y-6 sm:grid-cols-2 sm:gap-x-3 sm:mx-4"><div class="max-w-xs md:max-w-sm lg:max-w-lg lg:mx-4 rounded overflow-hidden shadow-lg transition ease-in hover:scale-105 hover:translate-y-1"><img src="' +
      le +
      '" alt="" class="w-full"><div class="px-4 py-6"><div class="font-bold text-xl mb-2 text-center">Consumo de api rest paises</div><div class="flex justify-evenly"><button class="text-sky bg-slatedos p-2 font-semibold hover:bg-skyd hover:text-slatedos transition delay-300 duration-300 ease-in-out border-solid rounded-md hover:border-transparent text-lg"><a href="https://apibanderastk.netlify.app/" target="_blank">Visualizar</a></button><button class="text-sky bg-slatedos p-2 font-semibold hover:bg-skyd hover:text-slatedos transition delay-300 duration-300 ease-in-out border-solid rounded-md hover:border-transparent text-lg"><a href="https://github.com/stam96/banderap.git" target="_blank">Descargar</a></button></div></div></div><div class="max-w-xs md:max-w-sm lg:max-w-lg lg:mx-4 rounded overflow-hidden shadow-lg transition ease-in hover:scale-105 hover:translate-y-1"><img src="' +
      de +
      '" alt="" class="w-full"><div class="px-4 py-6"><div class="font-bold text-xl mb-2 text-center">Proyecto login y registro + deploy heroku</div><div class="flex justify-evenly"><button class="text-sky bg-slatedos p-2 font-semibold hover:bg-skyd hover:text-slatedos transition delay-300 duration-300 ease-in-out border-solid rounded-md hover:border-transparent text-lg"><a href="https://proyectologinauth.herokuapp.com/" target="_blank">Visualizar</a></button><button class="text-sky bg-slatedos p-2 font-semibold hover:bg-skyd hover:text-slatedos transition delay-300 duration-300 ease-in-out border-solid rounded-md hover:border-transparent text-lg"><a href="https://github.com/stam96/loginauth.git" target="_blank">Descargar</a></button></div></div></div><div class="max-w-xs md:max-w-sm lg:max-w-lg lg:mx-4 rounded overflow-hidden shadow-lg transition ease-in hover:scale-105 hover:translate-y-1"><img src="' +
      ce +
      '" alt="" class="w-full"><div class="px-4 py-6"><div class="font-bold text-xl mb-2 text-center">relaciones con mongoose typescript</div><div class="flex justify-evenly"><button class="text-sky bg-slatedos p-2 font-semibold hover:bg-skyd hover:text-slatedos transition delay-300 duration-300 ease-in-out border-solid rounded-md hover:border-transparent text-lg"><a href="https://github.com/stam96/modeltypescript.git" target="_blank">Descargar</a></button></div></div></div></div></div>',
    2
  );
function ue(o, t, r, n, e, a) {
  return pe;
}
var ve = c(me, [["render", ue]]);
const xe = {},
  he = { class: "bg-slatedos" },
  fe = u(
    '<div class="bg-slatedos mt-6"><a href="" class="text-cyan hover:text-sky" name="footer"><h2 class="text-center p-5 font-semibold text-lg lg:text-2xl">Contactos</h2></a></div><div class="flex justify-center gap-x-20"><div class="mb-4 text-center"><i class="fas fa-phone p-5 bg-sky rounded-full hover:bg-skyd hover:text-cyan transition delay-300 duration-300"></i><h2 class="text-cyan text-sm lg:text-xl">Telefono</h2><h2 class="text-cyan text-sm">0979853522</h2></div><div class="mb-4 text-center"><i class="far fa-envelope p-5 bg-sky rounded-full hover:bg-skyd hover:text-cyan transition delay-300 duration-300"></i><h2 class="text-cyan text-sm lg:text-xl">Email</h2><h2 class="text-cyan text-sm">svalarezo62@gmail.com</h2></div></div>',
    2
  ),
  ge = [fe];
function _e(o, t, r, n, e, a) {
  return m(), p("footer", he, ge);
}
var be = c(xe, [["render", _e]]);
const ye = {
    data() {
      return { data: { name: "", email: "", descripcion: "" }, mensaje: "" };
    },
    methods: {
      async insertarForm() {
        try {
          const o = await x.post("/jform", this.data);
          console.log(o.data.mensaje),
            (this.mensaje = o.data.mensaje),
            v
              .mixin({
                toast: !0,
                position: "top-end",
                showConfirmButton: !1,
                timer: 3e3,
                timerProgressBar: !0,
                didOpen: (r) => {
                  r.addEventListener("mouseenter", v.stopTimer),
                    r.addEventListener("mouseleave", v.resumeTimer);
                },
              })
              .fire({ icon: "success", title: this.mensaje }),
            (this.data = { name: "", email: "", descripcion: "" });
        } catch (o) {
          console.log(o.response.data.errors[0].msg),
            (this.mensaje = o.response.data.errors[0].msg),
            v.fire({ icon: "error", text: this.mensaje });
        }
      },
    },
  },
  ke = s(
    "div",
    { class: "bg-slatedos mt-6" },
    [
      s("a", { href: "", class: "text-cyan hover:text-sky" }, [
        s(
          "h2",
          { class: "text-center p-6 font-semibold text-lg lg:text-2xl" },
          "Formulario"
        ),
      ]),
    ],
    -1
  ),
  we = { class: "w-full sm:max-w-md p-5 mx-auto" },
  $e = { class: "mb-4" },
  Ve = s("label", { class: "block mb-1" }, "Nombre", -1),
  je = { class: "mb-4" },
  Fe = s("label", { class: "block mb-1", for: "email" }, "Email", -1),
  Ce = { class: "flex items-center" },
  Le = s(
    "div",
    { class: "mt-6" },
    [
      s(
        "button",
        {
          class:
            "w-full inline-flex items-center justify-center px-4 py-2 border-transparent rounded-md capitalize text-slatedos bg-skyd font-semibold hover:bg-slate hover:text-sky transition delay-300 duration-300 ease-in-out",
        },
        "Enviar"
      ),
    ],
    -1
  );
function Ne(o, t, r, n, e, a) {
  return (
    m(),
    p(
      g,
      null,
      [
        ke,
        s("div", we, [
          s(
            "form",
            {
              onSubmit:
                t[3] ||
                (t[3] = j(
                  (...i) => a.insertarForm && a.insertarForm(...i),
                  ["prevent"]
                )),
            },
            [
              s("div", $e, [
                Ve,
                h(
                  s(
                    "input",
                    {
                      id: "email",
                      type: "text",
                      placeholder: "Ingresar Nombre",
                      "onUpdate:modelValue":
                        t[0] || (t[0] = (i) => (e.data.name = i)),
                      class:
                        "py-2 px-3 border rounded-md shadow-sm mt-1 block w-full",
                    },
                    null,
                    512
                  ),
                  [[f, e.data.name]]
                ),
              ]),
              s("div", je, [
                Fe,
                h(
                  s(
                    "input",
                    {
                      id: "email",
                      type: "email",
                      placeholder: "Ingresar Email",
                      "onUpdate:modelValue":
                        t[1] || (t[1] = (i) => (e.data.email = i)),
                      class:
                        "py-2 px-3 border rounded-md shadow-sm mt-1 block w-full",
                    },
                    null,
                    512
                  ),
                  [[f, e.data.email]]
                ),
              ]),
              s("div", Ce, [
                h(
                  s(
                    "textarea",
                    {
                      class:
                        "resize-none basis-full border rounded-md h-52 py-2 px-3",
                      "onUpdate:modelValue":
                        t[2] || (t[2] = (i) => (e.data.descripcion = i)),
                      placeholder: "Ingresar sugerencia",
                    },
                    null,
                    512
                  ),
                  [[f, e.data.descripcion]]
                ),
              ]),
              Le,
            ],
            32
          ),
        ]),
      ],
      64
    )
  );
}
var ze = c(ye, [["render", Ne]]);
const Ee = {
  components: {
    NavbarVue: U,
    HeaderVue: W,
    CardsVue: ie,
    ListasTarjetasVue: ve,
    FooterVue: be,
    FormularioVue: ze,
  },
};
function Me(o, t, r, n, e, a) {
  const i = l("NavbarVue"),
    _ = l("HeaderVue"),
    b = l("CardsVue"),
    y = l("ListasTarjetasVue"),
    k = l("FormularioVue"),
    w = l("FooterVue");
  return m(), p(g, null, [d(i), d(_), d(b), d(y), d(k), d(w)], 64);
}
var Pe = c(Ee, [["render", Me]]);
x.defaults.baseURL = "https://misitiowebs.herokuapp.com/api";
F(Pe).use(C, x).mount("#app");
