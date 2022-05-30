module.exports = {
  content: ["./src/components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "angel": "#439EFF",
        "angelBlack": "#242237",
        "angelBlackP5": "rgba(18, 71, 128, 0.05)",
        "angelBlueP3": "rgba(18, 71, 128, 0.3)",
        "angelRed": "#372226",
        "angelRedP5": "rgba(128, 18, 51, 0.05)",
        "angelRedM": "#ff434c"
      },
      borderColor: {
        "angel": "#439EFF",
        "angelBlack": "#242237",
        "angelBlackP5": "rgba(18, 71, 128, 0.05)",
        "angelBlueP3": "rgba(18, 71, 128, 0.3)",
        "angelRedP3": "rgba(128, 18, 18, 0.3)",
        "angelRedM": "#ff434c"
      },
      textColor: {
        "white": "#fff",
        "angel": "#439EFF",
        "angelBlack": "#242237",
        "angelBlackP5": "rgba(18, 71, 128, 0.05)",
        "angelBlueP3": "rgba(18, 71, 128, 0.3)",
        "angelRed": "#372226",
        "angelRedP5": "rgba(128, 18, 51, 0.05)",
      }
    },
  },
  plugins: [],
  purge: ["./src/components/**/*.tsx"]
}
