const {Router} = require('express');
const Image = require('../models/image');

const router = Router();

router.get('/', (req, res) => {

    res.render('category', {
        title: 'Category',
        isCategory: true
    })
});

router.get('/get', async (req, res) => {

    let category = req.query.category;//есть ответ с параметром

    if (category) {
        try {

            await Image.find({category: category}, async (err, docs) => {
                if(err) return console.log(err);

                //await res.json(JSON.stringify(docs));
                await res.json(docs)
            });

        } catch (e) {
            console.log(e);
        }
    }

});

module.exports = router;