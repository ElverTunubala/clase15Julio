import { productosBD } from "../helpers/database.js";
console.log(productosBD)

import { pintarProductos } from "./controladorPintar.js";
pintarProductos(productosBD)

import { buscarProductos } from "./controladorBuscar.js";
buscarProductos()