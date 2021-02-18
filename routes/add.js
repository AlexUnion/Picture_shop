const {Router} = require('express');
const Image = require('../models/image');
const router = Router();

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Добавить изображение',
        isAdd: true
    })
});


router.post('/', async (req, res, next) => {

    try {
        /*Проверка успешной загрузки файла*/
        let imgFile = req.file;
        if (!imgFile) {
            console.log('file is not defined');
        } else {

            const image = new Image({
                title: req.body.title,
                category: req.body.category,
                price: req.body.price,
                path: req.file.filename
            });

            await image.save();
        }

        res.redirect('/');

    }catch (e) {
        console.log(e)
    }
});

module.exports = router;