import { TipoIngreso } from './enums'
import { IngresoEntryWithoutId, FechaClaseEntryWithoutId, ClaseEntryWithoutId } from './types'

const parsePrecio = (numberFromRequest: any): number => {
  if (!isNumber(numberFromRequest)) {
    throw new Error('Precio inexistente o incorrecta')
  }
  return numberFromRequest
}

const parseIngresoId = (numberFromRequest: any): number => {
  if (!isInt(numberFromRequest)) {
    throw new Error('IngresoId inexistente o incorrecta')
  }
  return numberFromRequest
}

const parseCantidad = (numberFromRequest: any): number => {
  if (!isInt(numberFromRequest)) {
    throw new Error('Cantidad inexistente o incorrecta')
  }
  return numberFromRequest
}

const parseTipoIngreso = (weatherFromRequest: any): TipoIngreso => {
  if (!isString(weatherFromRequest) || !isTipoIngreso(weatherFromRequest)) {
    throw new Error('Tipo de ingreso inexistente o incorrecto')
  }
  return weatherFromRequest
}

const parseUsuarioId = (numberFromRequest: any): number => {
  if (!isInt(numberFromRequest)) {
    throw new Error('UsuarioId inexistente o incorrecta')
  }
  return numberFromRequest
}

const parseClienteId = (numberFromRequest: any): number => {
  if (!isInt(numberFromRequest)) {
    throw new Error('ClienteId inexistente o incorrecta')
  }
  return numberFromRequest
}

const parseMontoTotal = (numberFromRequest: any): number => {
  if (!isNumber(numberFromRequest)) {
    throw new Error('Monto total inexistente o incorrecta')
  }
  return numberFromRequest
}

const parseFecha = (dateFromRequest: any): Date => {
  if (!isDate(dateFromRequest)) {
    throw new Error('Fecha inexistente o incorrecta')
  }
  return dateFromRequest
}

const parseClaseId = (numberFromRequest: any): number => {
  if (!isInt(numberFromRequest)) {
    throw new Error('ClaseId inexistente o incorrecta')
  }
  return numberFromRequest
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isNumber = (precio: number): boolean => {
  return (typeof precio === 'number' && !isNaN(precio))
}

const isInt = (int: number): boolean => {
  return ((typeof int === 'number' && !isNaN(int)) && Number.isInteger(int))
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isTipoIngreso = (param: any): boolean => {
  return Object.values(TipoIngreso).includes(param)
}

export const addClaseEntry = (object: any): ClaseEntryWithoutId => {
  const newEntry: ClaseEntryWithoutId = {
    IngresoId: parseIngresoId(object.IngresoId),
    Cantidad: parseCantidad(object.Cantidad),
    Precio: parsePrecio(object.Precio)
  }
  return newEntry
}

export const addIngresoEntry = (object: any): IngresoEntryWithoutId => {
  const newEntry: IngresoEntryWithoutId = {
    TipoIngreso: parseTipoIngreso('clases'),
    UsuarioId: parseUsuarioId(object.UsuarioId),
    ClienteId: parseClienteId(object.ClienteId),
    MontoTotal: parseMontoTotal(object.MontoTotal),
    Fecha: parseFecha(object.Fecha)
  }
  return newEntry
}

export const addFechaClaseEntry = (object: any): FechaClaseEntryWithoutId => {
  const newEntry: FechaClaseEntryWithoutId = {
    ClaseId: parseClaseId(object.ClaseId),
    Fecha: parseFecha(object.Fecha)
  }
  return newEntry
}
