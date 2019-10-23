let express = require('express');
let morgan = require('morgan');
let bp = require('body-parser');
let jsonParser = bp.json();

let app = express();

app.use(express.static('public'));

app.use(morgan('dev'));

let nameOfPets = [
    {
        name: "Burbuja",
        typeOfPet: "Dog",
        id: 1
    },
    {
        name: "Kia",
        typeOfPet: "Dog",
        id: 2
    },
    {
        name: "Jagger",
        typeOfPet: "Dog",
        id: 3
    },
    {
        name: "Kirby",
        typeOfPet: "Dog",
        id: 4
    }
];

app.post("/api/pets/addPet", jsonParser, (req, res, next) => {
    console.log(req.body);

    if (req.body.name && req.body.typeOfPet && req.body.id) {
        for (let i = 0; i < nameOfPets.length; i++) {
            if (nameOfPets[i].id == req.body.id) {
                res.statusMessage = "Repeated identifier";
                return res.status(406).json({
                    code: 409,
                    message: res.statusMessage
                });
            }
        }

        nameOfPets.push(req.body);

        let pet = nameOfPets[nameOfPets.length - 1];
        res.statusMessage = "Pet added succesfully";
        return res.status(200).json(pet);
    } else {
        res.statusMessage = "Missing field in body";
        return res.status(406).json({
            code: 406,
            message: res.statusMessage,
            body: req.body,
            params: req.params
        });
    }

    
});

app.put("/api/pets/updatePet/:id", jsonParser, (req, res, next) => {
    console.log(req.body);
    console.log(req.params);

    if (req.body.name && req.body.typeOfPet && req.body.id) {
        if (req.body.id == req.params.id) {
            for (let i = 0; i < nameOfPets.length; i++) {
                if (nameOfPets[i].id == req.body.id) {
                    nameOfPets[i] = req.body;
                    res.statusMessage = "Pet updated succesfully";
                    return res.status(200).json(nameOfPets[i]);
                }
            }
            
            res.statusMessage = "Pet not in the list";
            return res.status(404).json({
                code: 404,
                message: res.statusMessage
            });
        } else {
            res.statusMessage = "Bad request id in param most match id in body";
            return res.status(409).json({
                code: 409,
                message: res.statusMessage,
                body: req.body,
                params: req.params
            });
        }
    } else {
        res.statusMessage = "Missing field in body";
        return res.status(406).json({
            code: 406,
            message: res.statusMessage,
            body: req.body,
            params: req.params
        });
    }

});

app.delete("/api/pets/removePet/:id", jsonParser, (req, res, next) => {
    console.log(req.params);

    for (let i = 0; i < nameOfPets.length; i++) {
        if (nameOfPets[i].id == req.params.id) {
            let pet = nameOfPets.splice(i,1);

            res.statusMessage = "Pet erase succesfully";
            return res.status(200).json(pet);
        }
    }

    res.statusMessage = "Pet not found";
    return res.status(404).json({
        code: 404,
        message: res.statusMessage
    });
});

app.get('/api/pets', (req, res, next) => {

    console.log("Req query ", req.query);

    // res.statusMessage = "Something went wrong";
    // return res.status(400).json({
    //     code: 400,
    //     message: res.statusMessage
    // });

    return res.status(200).json(nameOfPets);
});

app.get('/api/pets/byId', (req, res, next) => {

    console.log("Req params", req.params);
    console.log("Req query", req.query);

    let id = req.query.id;

    if (id) {
        if (nameOfPets[id]) {
            res.statusMessage = "The pet was found";
            return res.status(200).json(nameOfPets[id]);
        } else {
            res.statusMessage = "The pet wasn't found";
            return res.status(404).json({
                code: 404,
                message: "The pet wasn't found"
            });
        }
    } else {
        res.statusMessage = "Missing ID param";
        return res.status(406).json({
            code: 406,
            message: "Missing ID param"
        });
    }
});

app.listen('8080', () => {
    console.log("app running on localhost:8080")
});

