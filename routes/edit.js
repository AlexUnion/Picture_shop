const {Router} = require('express');
const Image = require('../models/image');

const router = Router();

router.get('/', async (req, res) => {
    const id = req.query.id;
    const img = await Image.findOne({
        _id: id
    }, (err, data) => {
        if (err) {
            return console.log(err);
        } else {
            return data;
        }
    });
    res.render('edit', {
        title: img._doc.title,
        img: img._doc
    });
});

router.post('/', async (req, res) => {
    try {

        await Image.updateOne({_id: req.body.id}, {
            title: req.body.title,
            category: req.body.category,
            price: req.body.price,
        });

    }catch (e) {
        console.log(e)
    }

    res.redirect('/');
});

router.post('/delete', async (req, res) => {
    try{
        const id = req.body.id;
        await Image.deleteOne({_id: id}, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Success to delete ' + id);
            }
        });
    }catch (e) {
        console.log(e)
    }
    res.redirect('/');
});

module.exports = router;