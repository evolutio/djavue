var fs = require('fs');

function onerror(err) {
    if ( err ) console.log('ERROR: ' + err);
}

module.exports = {
  "complete": function (data, {logger, chalk}) {
    const msg = `${chalk.green('completeEEEEEEEE')}`
    logger.log(msg)
    fs.rename('__name__', '__bilu__')
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
  "complete": function (data, {logger, chalk}) {
    const msg = `${chalk.green('completeEEEEEEEE')}`
    logger.log(msg)
    const base = data.inPlace ? '' : data.destDirName + '/'
    fs.rename(`${base}__name__`, `${base}${data.name}`, onerror)
    // logger.log('-----------complete')
    // logger.log(data)
    // if (!data.inPlace) {
    //   logger.log(`cd ${chalk.yellow(data.destDirName)}`)
    // }
  },
}
