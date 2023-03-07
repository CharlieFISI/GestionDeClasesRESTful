import { TipoIngreso } from './enums'

export interface ClaseEntry {
  ClaseId: number
  IngresoId: number
  Cantidad: number
  Precio: number
}

export interface IngresoEntry {
  IngresoId: number
  TipoIngreso: TipoIngreso
  UsuarioId: number
  ClienteId: number
  MontoTotal: number
  Fecha: Date
}

export interface FechaClaseEntry {
  FechaClaseId: number
  ClaseId: number
  Fecha: Date
}

export type ClaseEntryWithoutId = Omit<ClaseEntry, 'ClaseId'>
export type IngresoEntryWithoutId = Omit<IngresoEntry, 'IngresoId', 'TipoIngreso'>
export type FechaClaseEntryWithoutId = Omit<FechaClaseEntry, 'FechaClaseId'>
