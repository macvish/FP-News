import { toCamel, toSnake } from 'snake-camel'
import { GenericObject } from './models'

export const toCamelCase = <T extends unknown>(arg: GenericObject) => toCamel(arg) as T

export const toSnakeCase = <T extends unknown>(arg: GenericObject) => toSnake(arg) as T
