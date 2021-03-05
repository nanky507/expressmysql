exports.index = (req, res, next) => {
    res.status(200).json({
    message: 'Welcome to Product API'});
}

exports.get = (req, res, next) => {
    res.status(200).json({
    message: 'Product get'});
}

exports.post = (req, res, next) => {
    res.status(200).json({
        message: 'Product post'});
}

exports.put = (req, res, next) => {
    res.status(200).json({
        message: 'Product put'});
}

exports.patch = (req, res, next) => {
    res.status(200).json({
        message: 'Product patch'});
}

exports.delete = (req, res, next) => {
    res.status(200).json({
        message: 'Product delete'});
}