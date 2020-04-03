export default (req, res) => {
    res.status(200).json({
        quote: 'Hello',
        author: 'Karen'
    });
    res.status(404).json({
        message: 'Not found',
    });
};