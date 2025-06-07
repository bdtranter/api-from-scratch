const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
)

//adding my first endpoint to the api
app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'shirt',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;
    if (!logo) {
        res.status(418).send({ message: 'We need a logo !'})
    }
    res.send({
        tshirt: `Shirt with your ${logo} and ID of ${id}`,
    });
}); 
//note: express does not parse json in the body by default--> need middleware
//next, check openAPI specification and swaggerhub