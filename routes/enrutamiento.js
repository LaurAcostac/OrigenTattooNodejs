const express = require('express')
const router = express.Router();
const funciones = require('../controller/funciones');
const funcionesAdmin = require('../controller/funcionesAdmin');

router.get('/principal');
router.get('/administrar');