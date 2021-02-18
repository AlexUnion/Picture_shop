const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const multer = require('multer');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mainRouts = require('./routes/main.js');
const addRouts = require('./routes/add');
const editRouts = require('./routes/edit');
const categoryRouts = require('./routes/category');
const searchRouts = require('./routes/search');

const { mongoUrl } = require('./config');

const app = express();//результат работы функции - аналог работы сервер

// создаем парсер для данных application/x-www-form-urlencoded
const  urlencodedParser = bodyParser.urlencoded({extended: false});

/*Настройка конфига сохранения файлов multer*/
const storageConfig = multer.diskStorage({
    /*Определяет место сохранения файлов*/
    destination: (req, file, cd) => {
        cd(null, 'public/img');
    },
    filename: (req, file, cd) => {
        cd(null,  Date.now() + '-' + file.originalname);
    }
});

/*Определение фильтра сохранения файлов*/
const fileFilter = (req, file, cd) => {
    if (file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg') {
        cd(null, true);
    } else {
        cd(null, false);
    }
};

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'pages');

/*use позволяет добавлять новые middleware*/

app.use(bodyParser.urlencoded({
    encoded: true
}));

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(multer({storage: storageConfig, fileFilter}).single('filedata'));

app.use('/', mainRouts);
app.use('/add', addRouts);
app.use('/edit', editRouts);
app.use('/category', categoryRouts);
app.use('/search', searchRouts);

async function start() {
    try {

        console.log('Connecting to MongoDB');
        await mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`)
        });

    }catch (e) {
        console.log(e)
    }

}

start();