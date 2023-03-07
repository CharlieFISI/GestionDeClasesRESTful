"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateIdEntry = exports.deleteIdEntry = exports.getIdEntry = exports.addEntry = exports.getAllEntries = void 0;
const conexion_1 = require("../conexion");
const utils_1 = require("../utils");
async function getAllEntries(_req, res) {
    try {
        const conn = await (0, conexion_1.connect)();
        const getAll = await conn.query('SELECT * FROM Clases');
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
        const newEntry = (0, utils_1.addClaseEntry)(req.body);
        const conn = await (0, conexion_1.connect)();
        const IngresoIdUnique = await conn.query('SELECT * FROM Clases WHERE IngresoId = ?', [newEntry.IngresoId]);
        const IngresoIdExist = await conn.query('SELECT * FROM Ingresos WHERE IngresoId = ?', [newEntry.IngresoId]);
        const [IngresoIsClase] = await conn.query('SELECT TipoIngreso FROM WHERE IngresoId = ?', [newEntry.IngresoId]);
        if (IngresoIsClase[0].TipoIngreso !== 'clases') {
            return res.status(404).json({ message: 'El registro con el IngresoId especificado no es un ingreso para Clases' });
        }
        else {
            if (IngresoIdExist[0].length === 0) {
                return res.status(404).json({ message: 'El registro con el id especificado no existe' });
            }
            else {
                if (IngresoIdUnique[0].length !== 0) {
                    return res.status(404).json({ message: 'Existe un registro con el mismo IngresoId' });
                }
                else {
                    await conn.query('INSERT INTO Clases SET ?', [newEntry]);
                    return res.json({
                        message: 'Entrada de Ingreso de plan añadida'
                    });
                }
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
        const getId = await conn.query('SELECT * FROM Clases WHERE ClaseId = ?', [id]);
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
        const deleteId = await conn.query('SELECT * FROM Clases WHERE ClaseId = ?', [id]);
        await conn.query('DELETE FROM Clases WHERE ClaseId = ?', [id]);
        if (deleteId[0].length === 0) {
            return res.status(404).json({ message: 'El registro con el id especificado no existe' });
        }
        else {
            return res.json({
                message: 'Entrada de Ingreso de clase eliminada'
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
        const updateId = await conn.query('SELECT * FROM Clases WHERE ClaseId = ?', [id]);
        const IngresoIdUnique = await conn.query('SELECT * FROM Clases WHERE IngresoId = ?', [updateEntry.IngresoId]);
        const IngresoIdExist = await conn.query('SELECT * FROM Ingresos WHERE IngresoId = ?', [updateEntry.IngresoId]);
        if (IngresoIdExist[0].length === 0) {
            return res.status(404).json({ message: 'El registro con el id especificado no existe' });
        }
        else {
            if (IngresoIdUnique[0].length !== 0) {
                return res.status(404).json({ message: 'Existe un registro con el mismo IngresoId' });
            }
            else {
                await conn.query('UPDATE Clases set ? WHERE PlanIngresoId = ?', [updateEntry, id]);
                if (updateId[0].length === 0) {
                    return res.status(404).json({ message: 'El registro con el id especificado no existe' });
                }
                else {
                    return res.json({
                        message: 'Entrada de Ingreso de clase actualizada'
                    });
                }
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
exports.updateIdEntry = updateIdEntry;
