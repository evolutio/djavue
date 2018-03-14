module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "label": "Project name"
    },
    "description": {
      "type": "string",
      "required": true,
      "label": "Project description",
      "default": "A Vue.js project"
    }
  },
  "skipInterpolation": "frontend/**/*.vue",
  // "completeMessage": "{{#inPlace}}To get started:\n\n  npm install\n  npm run dev.{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev.{{/inPlace}}",
  "metalsmith": function (metalsmith, opts, helpers) {
    function customMetalsmithPlugin (files, metalsmith, done) {
      console.log('files')
      console.log(files)
      done(null, files)
    }
    metalsmith.use(customMetalsmithPlugin)
  },
  complete (data, {logger, chalk}) {
    logger.log('-----------complete')
    logger.log(data)
    // if (!data.inPlace) {
    //   logger.log(`cd ${chalk.yellow(data.destDirName)}`)
    // }
  }
}
