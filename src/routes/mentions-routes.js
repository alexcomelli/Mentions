const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const mentionsController = require('../controllers/mentions-controller');

//GET
router.get('/', mentionsController.listMentions);

//POST
router.post('/', [
    check('friend').isLength({ min: 2 }).withMessage("O nome precisa ter no mínimo 7 caracteres."),
    check('mention').isLength({ min: 10, max: 280 }).withMessage("A menção precisa ter no mínimo 20 caracteres e no máximo 280.")
], mentionsController.createMention);

//PUT
router.put('/:id', [
    check('friend').optional().isLength({ min: 4 }).withMessage("O nome precisa ter no mínimo 7 caracteres."),
    check('mention').optional().isLength({ min: 10, max: 280 }).withMessage("A menção precisa ter no mínimo 20 caracteres e no máximo 280.")
], mentionsController.updateMention);

//DELETE
router.delete('/:id',mentionsController.deleteMention);

module.exports = router;
