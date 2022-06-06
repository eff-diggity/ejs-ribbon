//GET page / (homepage)

exports.homepage = async (req, res) => {
    res.render('index', { title: 'Magic By Ribbon Home' });
}