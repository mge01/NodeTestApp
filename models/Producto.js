var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Producto_Schema = new Schema({
    Nombre:{
        type:String,
        required:true
    },
    Subcategoria:{
        type:Number
    },  
    Modelo:{
        type:String
    },  
    Estado:{
        type:Number
    },  
    Descripcion:{
        type:String
    },  
    Inventario:{
        type:Number,
        required:true
    },  
    CantidadVendidos:{
        type:Number
    },  
    Precio:{
        type:Number,
        required:true
    },  
    FechaCreacion:{
        type:Date,
        required:true
    },  
    FechaModificacion:{
        type:Date
    },  
    Disponible:{
        type:Number
    }

    }
);

var Producto = mongoose.model("Producto",Producto_Schema);
module.exports.Producto = Producto;