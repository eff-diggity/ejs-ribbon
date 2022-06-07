const Category = require("../models/Category");
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://eff-diggity:m4gicbyribb0n@cluster0.dybqhon.mongodb.net/?retryWrites=true&w=majority");

// , { useNewUrlParser: true, useUnifiedTopology: true });
/**
 * Get/
 * Homepage
 */
exports.homepage = async (req, res) => {
    res.render('index');
}

/**
 * Get/
 * main blog page
 */
exports.blog = async (req, res) => {
    res.render('index');
}

const herbalism = new Category(
    {
        name: "Herbalism",
        image: "gods.png"
    }
)

herbalism.save().then((newHerbalismCategory) => { console.log(newHerbalismCategory) });


// async function insertDummyData() {
//     try {
//         await Category.insertMany([
//             {
//                 "name": "blog title",
//                 "image": "dragon.png"
//             }
//         ]);
//     } catch (error) {
//         console.log('err', + error)
//     }
// }

// insertDummyData();
