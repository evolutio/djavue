# d-jà vue

Being a web-developer for 18 years, I have found that by doing things in a certain way, there will be a higher chance that:

- I and other team members will be more productive
- clients will be happier
- the final product will have higher quality and be easier to change

This is a vue-cli template for a **full-stack**, **production-ready** web application using Django and Vue.js.

It helps me (and it may help you) start new projects that already have a useful set of good practices built into them.

### Você fala português?

Veja o video explicando mais sobre este template ;) --> https://youtu.be/It8Zx0cJYyg

Vc tb pode comprar o curso completo* sobre o djavue e aprender uma PORRADA de coisa sobre desenvolvimento web --> https://evolutio.io/curso/djavue

\* O curso do djavue está em construção. Comprando agora vc paga mais barato e continua tendo acesso ao conteúdo que ainda vai ser produzido ;-)

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g @vue/cli
$ # vue init evolutio/djavue myproject
$ vue init huogerac/djavue mytodolist
$ cd mytodolist
$ docker-compose build
$ docker-compose up -d
$ docker-compose exec django_api ./manage.py migrate
$ docker-compose exec django_api ./manage.py loaddata docker/fixtures/todolist.json
$ docker-compose logs -f django_api
```

For initial setup, follow the README.md that was generated inside your `myproject` folder (which looks a lot like [this one](template/README.md))

### What's Included

- docker-based development environment. Get started with minimum effort
- Executable help. `dev.sh` remembers all the important commands, so you don't have to.
- Django + Postgres in the backend.
- Vue + Nuxt based frontend (detached from the backend)
- [Vuetify.js](https://vuetifyjs.com/en/getting-started/quick-start) components
- Authentication works
- A working TODO-list that saves TODO items to a database
- Backend-less development mode, using [mock-apis](https://medium.com/@tonylampada/javascript-mock-api-why-you-might-want-to-have-one-232b3ba46b12)

![screenshot](http://image.ibb.co/f0ekjc/image.png)

### Contributing

This template is very new in early stage and there is much room for improvement.
If you'd like to improve it somehow, I'd love to hear about it :-)

### What are the good practices (or, how I like to do things):

#### 1. Start by building a backend-less frontend

Software building is tricky, because it's too easy to end up creating the wrong software. To avoid that we need constant feedback about our partial progress. By using [mock-apis](https://medium.com/@tonylampada/javascript-mock-api-why-you-might-want-to-have-one-232b3ba46b12), we can deliver a "fake" piece of our application into the clients hands that looks and feels like the real thing. We know we'll make mistakes. Let us make them cheaply.

Mock apis go into `frontend/components/api/apimock.js` - just follow the patterns in there.
This is also a good time to write the equivalent AJAX calls inside `api.js` (to URLs that don't exist in the backend yet)

#### 2. Start with the output

It's likely that the software you need to build will require input from the user, and give output to the user.
When we act in the world, we see **tools** and **obstacles**.
Your software will be a **tool** when the user gets valuable output from it.
And it will be an **obstacle** when the user has to input info to get the value that they want.

Input is cost. Output is value.

You should start by creating the fake screens (mockapi-based) for the output (value) part of your software. Validate that with the client. The result of that process will give you useful information that will orient the design of the next parts of your software, the input (cost).

#### 3. Deploy early, deploy often

I like to setup my projects with two online live test-environments that will be deployed with every commit

- **fronttest**: runs the application using the mockapis
- **test**: runs the funn application

During the early stages of development, having the client validate things in the **fronttest** environment speeds up the feedback loop. A LOT.

This project will come with a `.gitlab-ci.yml` file. If you host your code in a private Gitlab instance, this should make it easier for you to deploy to "fronttest" and "test" to AWS by using [Gitlab continuous integration and deploy](https://about.gitlab.com/features/gitlab-ci-cd/)

#### 4. TDD is the fastest way

When you have a mockapi, that code is not just junk that you don't need. On the contrary. It contains a **valuable, unambiguous specification of how your backend must behave**. At that point, the fastest way to build your backend is to look at your mock apis as an orienting guide for test cases. 

Look at mock apis --> write tests --> implement the backend --> repeat

