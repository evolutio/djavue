import axios from '~/plugins/axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

export default {
    login,
    logout,
    whoami,
    list_courses,
    get_course,
    save_perfil,
};

function login(username, password){
    return post('/api/login', {username: username, password: password});
}

function social_login(provider){
    var url = {
        'google': '/login/google-oauth2',
        'facebook': '/login/facebook',
        'github': '/login/github',
    }[provider]
    if(url){
        window.location = url
    }
}

function logout(){
    return post('/api/logout');
}

function whoami(){
    return get('/api/whoami');
}

function list_courses(){
    return get('/api/list_courses');
}

function get_course(code){
    return get('/api/get_course', {code: code});
}

function save_perfil(user){
    return post('/api/save_perfil', {user: JSON.stringify(user)});
}

function get(url, params){
    return axios.get(url, {params: params});
}

function post(url, params){
    var fd = new FormData();
    params = params || {}
    Object.keys(params).map((k) => {
        fd.append(k, params[k]);
    })
    return axios.post(url, fd);
}