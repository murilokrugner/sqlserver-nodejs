/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CZJ010', {
    CZJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CZJ_NRMRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CZJ_NRLV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CZJ_PROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CZJ_OPCORD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CZJ_NRRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CZJ_OPC: {
      type: "IMAGE",
      allowNull: true
    },
    CZJ_MOPC: {
      type: "IMAGE",
      allowNull: true
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'CZJ010'
  });
};
