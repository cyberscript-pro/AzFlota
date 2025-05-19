
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  nickname: 'nickname',
  nombre: 'nombre',
  ci: 'ci',
  password: 'password',
  role: 'role',
  isAvailable: 'isAvailable',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ChoferScalarFieldEnum = {
  nombre: 'nombre',
  edad: 'edad',
  sexo: 'sexo',
  ci: 'ci',
  licencia: 'licencia',
  telefono: 'telefono',
  isAvailable: 'isAvailable'
};

exports.Prisma.AreaTrabajoScalarFieldEnum = {
  uuid: 'uuid',
  nombre: 'nombre',
  centro_costo: 'centro_costo',
  jefe: 'jefe',
  isAvailable: 'isAvailable'
};

exports.Prisma.TarjetaCombustibleScalarFieldEnum = {
  numero: 'numero',
  pin: 'pin',
  estado: 'estado',
  fecha_vencimiento: 'fecha_vencimiento',
  tipo: 'tipo',
  saldo: 'saldo',
  isAvailable: 'isAvailable'
};

exports.Prisma.VehiculoScalarFieldEnum = {
  chapa: 'chapa',
  marca: 'marca',
  tipo: 'tipo',
  isAvailable: 'isAvailable',
  consumo_km: 'consumo_km',
  areaTrabajoUuid: 'areaTrabajoUuid',
  choferCI: 'choferCI',
  tarjetaNumero: 'tarjetaNumero'
};

exports.Prisma.ControlCargasScalarFieldEnum = {
  uuid: 'uuid',
  folio: 'folio',
  comprobante: 'comprobante',
  fecha: 'fecha',
  existencia: 'existencia',
  importe: 'importe',
  consumo_dinero: 'consumo_dinero',
  vehiculoChapa: 'vehiculoChapa'
};

exports.Prisma.TarjetaCombustibleBajaScalarFieldEnum = {
  tarjetaNumero: 'tarjetaNumero'
};

exports.Prisma.ChoferesDespedidosScalarFieldEnum = {
  choferCI: 'choferCI'
};

exports.Prisma.VehiculosMantenimientoScalarFieldEnum = {
  uuid: 'uuid',
  descripcion: 'descripcion',
  inicio: 'inicio',
  fin: 'fin',
  vehiculoChapa: 'vehiculoChapa'
};

exports.Prisma.VehiculosBajaScalarFieldEnum = {
  vehiculoChapa: 'vehiculoChapa'
};

exports.Prisma.ViajesVehiculosScalarFieldEnum = {
  uuid: 'uuid',
  fechaSalida: 'fechaSalida',
  fechaLlegada: 'fechaLlegada',
  lugarDestino: 'lugarDestino',
  combustibleConsumido: 'combustibleConsumido',
  vehiculoChapa: 'vehiculoChapa'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  nickname: 'nickname',
  nombre: 'nombre',
  ci: 'ci',
  password: 'password'
};

exports.Prisma.ChoferOrderByRelevanceFieldEnum = {
  nombre: 'nombre',
  sexo: 'sexo',
  ci: 'ci',
  licencia: 'licencia',
  telefono: 'telefono'
};

exports.Prisma.AreaTrabajoOrderByRelevanceFieldEnum = {
  uuid: 'uuid',
  nombre: 'nombre',
  centro_costo: 'centro_costo',
  jefe: 'jefe'
};

exports.Prisma.TarjetaCombustibleOrderByRelevanceFieldEnum = {
  numero: 'numero',
  pin: 'pin'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.VehiculoOrderByRelevanceFieldEnum = {
  chapa: 'chapa',
  marca: 'marca',
  tipo: 'tipo',
  areaTrabajoUuid: 'areaTrabajoUuid',
  choferCI: 'choferCI',
  tarjetaNumero: 'tarjetaNumero'
};

exports.Prisma.ControlCargasOrderByRelevanceFieldEnum = {
  uuid: 'uuid',
  folio: 'folio',
  comprobante: 'comprobante',
  vehiculoChapa: 'vehiculoChapa'
};

exports.Prisma.TarjetaCombustibleBajaOrderByRelevanceFieldEnum = {
  tarjetaNumero: 'tarjetaNumero'
};

exports.Prisma.ChoferesDespedidosOrderByRelevanceFieldEnum = {
  choferCI: 'choferCI'
};

exports.Prisma.VehiculosMantenimientoOrderByRelevanceFieldEnum = {
  uuid: 'uuid',
  descripcion: 'descripcion',
  vehiculoChapa: 'vehiculoChapa'
};

exports.Prisma.VehiculosBajaOrderByRelevanceFieldEnum = {
  vehiculoChapa: 'vehiculoChapa'
};

exports.Prisma.ViajesVehiculosOrderByRelevanceFieldEnum = {
  uuid: 'uuid',
  lugarDestino: 'lugarDestino',
  vehiculoChapa: 'vehiculoChapa'
};
exports.Role = exports.$Enums.Role = {
  DIRECTOR: 'DIRECTOR',
  SUPERVISOR: 'SUPERVISOR',
  ECONOMICO: 'ECONOMICO',
  ENCARGADO: 'ENCARGADO'
};

exports.State = exports.$Enums.State = {
  Active: 'Active',
  Inactive: 'Inactive',
  Blocked: 'Blocked',
  Expired: 'Expired'
};

exports.TipoCombustible = exports.$Enums.TipoCombustible = {
  Diesel: 'Diesel',
  Especial: 'Especial',
  B91: 'B91',
  B83: 'B83'
};

exports.Prisma.ModelName = {
  User: 'User',
  Chofer: 'Chofer',
  AreaTrabajo: 'AreaTrabajo',
  TarjetaCombustible: 'TarjetaCombustible',
  Vehiculo: 'Vehiculo',
  ControlCargas: 'ControlCargas',
  TarjetaCombustibleBaja: 'TarjetaCombustibleBaja',
  ChoferesDespedidos: 'ChoferesDespedidos',
  VehiculosMantenimiento: 'VehiculosMantenimiento',
  VehiculosBaja: 'VehiculosBaja',
  ViajesVehiculos: 'ViajesVehiculos'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
