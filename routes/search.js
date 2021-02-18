const {Router} = require('express');
const Image = require('../models/image');

const router = Router();

router.get('/', (req, res) => {
    res.render('search', {
        title: 'Search on PicArt',
        isSearch: true
    });
});

router.get('/get', async (req, res) => {

    let name = req.query.title;
    let category = req.query.category;

    if (name) {
        if (category) {
            await Image.find({$text: {$search: name}, category: category}, async (err, docs) => {

                if (err) return console.log(err);
                await res.json(docs);

            })
        } else {

            await Image.find({$text: {$search: name}}, async (err, docs) => {

                if (err) return console.log(err);
                await res.json(docs);

            });

        }
    }
});

module.exports = router;