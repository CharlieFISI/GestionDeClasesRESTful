"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateIdEntry = exports.deleteIdEntry = exports.getIdEntry = exports.addEntry = exports.getAllEntries = void 0;
const conexion_1 = require("../conexion");
const utils_1 = require("../utils");
async function getAllEntries(_req, res) {
    try {
        const conn = await (0, conexion_1.connect)();
        const getAll = await conn.query('SELECT * FROM FechaClases');
        return res.json(getAll[0]);
    }
    catch (e) {
        let message;
        if (e instanceof Error)
            message = e.message;
        else
            message = String(e);
        return res.status(400).send(message);
    }
}
exports.getAllEntries = getAllEntries;
async function addEntry(req, res) {
    try {
        const newEntry = (0, utils_1.addFechaClaseEntry)(req.body);
        const conn = await (0, conexion_1.connect)();
        const ClaseIdExist = await conn.query('SELECT * FROM Clases WHERE ClaseId = ?', [newEntry.ClaseId]);
        const [CantidadMax] = await conn.query('SELECT Cantidad FROM Clases WHERE ClaseId = ?', [newEntry.ClaseId]);
        const [CantidadFecha] = await conn.query('SELECT ClaseId FROM FechaClases WHERE ClaseId = ?', [newEntry.ClaseId]);
        if (ClaseIdExist[0].length === 0) {
            return res.status(404).json({ message: 'El registro con el ClaseId especificado no existe' });
        }
        else {
            if (CantidadFecha.length < CantidadMax[0].Cantidad) {
                await conn.query('INSERT INTO FechaClases SET ?', [newEntry]);
                return res.json({
                    message: 'Entrada de Fecha de la clase añadida'
                });
            }
            else {
                return res.status(404).json({ message: 'Se supera la cantidad maxima de fechas para la ClaseId especificada' });
            }
        }
    }
    catch (e) {
        let message;
        if (e instanceof Error)
            message = e.message;
        else
            message = String(e);
        return res.status(400).send(message);
    }
}
exports.addEntry = addEntry;
async function getIdEntry(req, res) {
    try {
        const { id } = req.params;
        const conn = await (0, conexion_1.connect)();
        const getId = await conn.query('SELECT * FROM FechaClases WHERE FechaClaseId = ?', [id]);
        if (getId[0].length === 0) {
            return res.status(404).json({ message: 'El registro con el id especificado no existe' });
        }
        else {
            return res.json(getId[0]);
        }
    }
    catch (e) {
        let message;
        if (e instanceof Error)
            message = e.message;
        else
            message = String(e);
        return res.status(400).send(message);
    }
}
exports.getIdEntry = getIdEntry;
async function deleteIdEntry(req, res) {
    try {
        const { id } = req.params;
        const conn = await (0, conexion_1.connect)();
        const deleteId = await conn.query('SELECT * FROM FechaClases WHERE FechaClaseId = ?', [id]);
        await conn.query('DELETE FROM FechaClases WHERE FechaClaseId = ?', [id]);
        if (deleteId[0].length === 0) {
            return res.status(404).json({ message: 'El registro con el id especificado no existe' });
        }
        else {
            return res.json({
                message: 'Entrada de Fecha de la clase eliminada'
            });
        }
    }
    catch (e) {
        let message;
        if (e instanceof Error)
            message = e.message;
        else
            message = String(e);
        return res.status(400).send(message);
    }
}
exports.deleteIdEntry = deleteIdEntry;
async function updateIdEntry(req, res) {
    try {
        const { id } = req.params;
        const updateEntry = req.body;
        const conn = await (0, conexion_1.connect)();
        const updateId = await conn.query('SELECT * FROM FechaClases WHERE FechaClaseId = ?', [id]);
        await conn.query('UPDATE FechaClases set ? WHERE FechaClaseId = ?', [updateEntry, id]);
        if (updateId[0].length === 0) {
            return res.status(404).json({ message: 'El registro con el id especificado no existe' });
        }
        else {
            return res.json({
                message: 'Entrada de Fecha de la clase actualizada'
            });
        }
    }
    catch (e) {
        let message;
        if (e instanceof Error)
            message = e.message;
        else
            message = String(e);
        return res.status(400).send(message);
    }
}
exports.updateIdEntry = updateIdEntry;
