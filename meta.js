var fs = require('fs');

function onerror(err) {
    if ( err ) console.log('ERROR: ' + err);
}

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
  "complete": function (data, {logger, chalk}) {
    const msg = `${chalk.green('COMPLETE!')}`
    logger.log(msg)
    const base = data.inPlace ? '' : data.destDirName + '/'
    fs.rename(`${base}__name__`, `${base}${data.name}`, onerror)
  },
}
