module.exports = {
  "complete": function (data, {chalk}) {
    const msg = `${chalk.green('completeEEEEEEEE')}`
    console.log(msg)
    logger.log(msg)
    // logger.log('-----------complete')
    // logger.log(data)
    // if (!data.inPlace) {
    //   logger.log(`cd ${chalk.yellow(data.destDirName)}`)
    // }
  },
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
    // "goiaba": {
    //   "type": "string",
    //   "required": true,
    //   "label": "Quer goiaba?",
    //   "default": "Sim"
    // }
  },
  "skipInterpolation": "frontend/**/*.vue",
  // "completeMessage": "{{#inPlace}}To get started:\n\n  npm install\n  npm run dev.{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev.{{/inPlace}}",
  // "metalsmith": function (metalsmith, opts, helpers) {
  //   function customMetalsmithPlugin (files, metalsmith, done) {
  //     console.log('files')
  //     console.log(files)
  //     done(null, files)
  //   }
  //   metalsmith.use(customMetalsmithPlugin)
  // },
}
