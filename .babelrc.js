module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          assets: "./assets",
          components: "./components",
          db: "./db",
          helpers: "./helpers",
          config: "./config",
          style: "./style"
        }
      }
    ],
    ["styled-components", { ssr: true }]
  ]
}
