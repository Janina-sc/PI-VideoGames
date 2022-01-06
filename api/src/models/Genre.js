const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('genre', {
    name: {
      type: DataTypes.ARRAY(DataTypes.STRING),//ver: había puesto STRING
      allowNull: false,
     
    },
    // id:{ no hace falta, se genera solito
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV4,
    //   allowNull:false,
    //   primaryKey:true,
    //   }
      

  });
};
