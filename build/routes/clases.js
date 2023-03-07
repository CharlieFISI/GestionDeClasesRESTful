"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const clasesServicio_1 = require("../services/clasesServicio");
const router = express_1.default.Router();
router.route('/')
    .get(clasesServicio_1.getAllEntries)
    .post(clasesServicio_1.addEntry);
router.route('/:id')
    .get(clasesServicio_1.getIdEntry)
    .delete(clasesServicio_1.deleteIdEntry)
    .put(clasesServicio_1.updateIdEntry);
exports.default = router;
