module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8, // optional, recommended 6+
  },
  env: {
    "browser": true,
    "node": true,
  },
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
  }
}