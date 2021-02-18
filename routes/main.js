const {Router} = require('express');
const Image = require('../models/image');
//const express.Router() = require('express'); второй вариант

const router = Router();//создание роута

//добавление новых функцый для роута
router.get('/', async (req, res) => {
    res.status(200);

    //const img = await fs.readFile(path.join(__dirname, '/uploads', '1588021467221-1.jpg'));

    const images = await Image.find();

    let img_arr = [];

    for (let item of images) {
        img_arr.push(item._doc);
    }

    res.render('index', {
        title: 'Main page',
        isMain: true,
        images: img_arr
    });
});


module.exports = router;//експорт роута