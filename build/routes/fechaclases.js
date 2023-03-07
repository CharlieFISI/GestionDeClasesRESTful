"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const fechaclasesServicio_1 = require("../services/fechaclasesServicio");
const router = express_1.default.Router();
router.route('/')
    .get(fechaclasesServicio_1.getAllEntries)
    .post(fechaclasesServicio_1.addEntry);
router.route('/:id')
    .get(fechaclasesServicio_1.getIdEntry)
    .delete(fechaclasesServicio_1.deleteIdEntry)
    .put(fechaclasesServicio_1.updateIdEntry);
exports.default = router;
