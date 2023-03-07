"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFechaClaseEntry = exports.addIngresoEntry = exports.addClaseEntry = void 0;
const enums_1 = require("./enums");
const parsePrecio = (numberFromRequest) => {
    if (!isNumber(numberFromRequest)) {
        throw new Error('Precio inexistente o incorrecta');
    }
    return numberFromRequest;
};
const parseIngresoId = (numberFromRequest) => {
    if (!isInt(numberFromRequest)) {
        throw new Error('IngresoId inexistente o incorrecta');
    }
    return numberFromRequest;
};
const parseCantidad = (numberFromRequest) => {
    if (!isInt(numberFromRequest)) {
        throw new Error('Cantidad inexistente o incorrecta');
    }
    return numberFromRequest;
};
const parseTipoIngreso = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isTipoIngreso(weatherFromRequest)) {
        throw new Error('Tipo de ingreso inexistente o incorrecto');
    }
    return weatherFromRequest;
};
const parseUsuarioId = (numberFromRequest) => {
    if (!isInt(numberFromRequest)) {
        throw new Error('UsuarioId inexistente o incorrecta');
    }
    return numberFromRequest;
};
const parseClienteId = (numberFromRequest) => {
    if (!isInt(numberFromRequest)) {
        throw new Error('ClienteId inexistente o incorrecta');
    }
    return numberFromRequest;
};
const parseMontoTotal = (numberFromRequest) => {
    if (!isNumber(numberFromRequest)) {
        throw new Error('Monto total inexistente o incorrecta');
    }
    return numberFromRequest;
};
const parseFecha = (dateFromRequest) => {
    if (!isDate(dateFromRequest)) {
        throw new Error('Fecha inexistente o incorrecta');
    }
    return dateFromRequest;
};
const parseClaseId = (numberFromRequest) => {
    if (!isInt(numberFromRequest)) {
        throw new Error('ClaseId inexistente o incorrecta');
    }
    return numberFromRequest;
};
const isString = (string) => {
    return typeof string === 'string';
};
const isNumber = (precio) => {
    return (typeof precio === 'number' && !isNaN(precio));
};
const isInt = (int) => {
    return ((typeof int === 'number' && !isNaN(int)) && Number.isInteger(int));
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isTipoIngreso = (param) => {
    return Object.values(enums_1.TipoIngreso).includes(param);
};
const addClaseEntry = (object) => {
    const newEntry = {
        IngresoId: parseIngresoId(object.IngresoId),
        Cantidad: parseCantidad(object.Cantidad),
        Precio: parsePrecio(object.Precio)
    };
    return newEntry;
};
exports.addClaseEntry = addClaseEntry;
const addIngresoEntry = (object) => {
    const newEntry = {
        TipoIngreso: parseTipoIngreso('clases'),
        UsuarioId: parseUsuarioId(object.UsuarioId),
        ClienteId: parseClienteId(object.ClienteId),
        MontoTotal: parseMontoTotal(object.MontoTotal),
        Fecha: parseFecha(object.Fecha)
    };
    return newEntry;
};
exports.addIngresoEntry = addIngresoEntry;
const addFechaClaseEntry = (object) => {
    const newEntry = {
        ClaseId: parseClaseId(object.ClaseId),
        Fecha: parseFecha(object.Fecha)
    };
    return newEntry;
};
exports.addFechaClaseEntry = addFechaClaseEntry;
