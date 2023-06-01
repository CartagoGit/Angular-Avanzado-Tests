module.exports = function (config) {
  console.log("Cargando archivo de configuración de karma");
  config.set({
    autoWatch: true,
    files: [
      {
        pattern: "src/**/*.ts",
        type: "js", // to silence the warning. Means load with <script> tag
      },
    ],
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
    frameworks: ["jasmine"],
    plugins: [require("karma-jasmine"), require("karma-chrome-launcher")],
    proxies: {
      "/assets/": "/base/src/assets/",
    },
  });
};
