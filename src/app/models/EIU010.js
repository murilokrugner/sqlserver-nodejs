/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EIU010', {
    EIU_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EIU_HAWB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    EIU_TIPONF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EIU_ADICAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EIU_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EIU_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EIU_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    }
  }, {
    tableName: 'EIU010'
  });
};
