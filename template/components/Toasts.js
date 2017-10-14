import Events from '~/components/Events.js'

function show(text, options){
    options = options || {};
    options.text = text;
    Events.publish('toast', options)
}

export default {
    show,
}