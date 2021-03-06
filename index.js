const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const userList = require("./user.json");

let posts = require("./user.json");

const router = require("./router");
app.use(router);

let isAuthenticated = false;

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', authen, (req, res) => {
    res.render('home.ejs', { authen: isAuthenticated })
});

app.post('/logout', (req, res) => {
    isAuthenticated = false;

    return res.redirect('/login');
})

app.get('/login', notAuthen, (req, res) => res.render('login.ejs'))

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const checkUsername = userList.filter(user => {
        return username === user.username
    });

    const checkPassword = checkUsername.filter(user => {
        return password === user.password
    });
 
    if (checkPassword.length > 0) {
        isAuthenticated = true;
       return res.redirect('/');
    }

    return res.redirect('/login');
})

app.get('/chapter-3', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/chapter-3/homepage.html'));
});
app.get('/chapter-4', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/chapter-4/index.html'));
});

app.listen(port, () => {
    console.log(`running at localhost: ${port}`);
})

function authen(req, res, next) {
    if (isAuthenticated) {
        return next();
    }

    return res.redirect('/login')
}

function notAuthen(req, res, next) {
    if (!isAuthenticated) {
        return next();
    }

    return res.redirect('/')
}

app.get("/api/v1/user", (req, res) => {
    res.status(200).json(posts);
  });
  
  app.get("/api/v1/user/:id", (req, res) => {
    const post = posts.find((i) => i.id === +req.params.id);
    res.status(200).json(posts);
  });
  
  app.post("/api/v1/user", (req, res) => {
    const { username, password } = req.body;
  
    const id = posts[posts.length - 1].id + 1;
    const post = {
      id,
      username,
      password,
    };
  
    posts.push(post);
  
    res.status(201).json(posts);
  });

  app.use(function (req, res, next) {
	res.status(404).send("Ups, Anda Kesasar, silahkan balik kembali atau ketik alamat sesuai yang lebih tepat.");
});