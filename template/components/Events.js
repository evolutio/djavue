var UID = 1;

const subscribers = {};

function subscribe(name, func){
    var uid = UID++;
    subscribers[name] = subscribers[name] || {};
    subscribers[name][uid] = func;
}

function unsubscribe(name, uid){
    delete subscribers[name][uid];
}

function publish(name, data){
    const subs = subscribers[name];
    Object.keys(subs).map(function(k){
        subs[k](data);
    });
}

export default {
    subscribe, unsubscribe, publish
};