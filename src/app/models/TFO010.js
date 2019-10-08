/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TFO010', {
    TFO_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFO_CDMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFO_ITMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFO_ITCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFO_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFO_ARMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFO_CARGA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFO_QTDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFO_LGUIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFO_NRGUIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    TFO_LRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFO_DTRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFO_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    tableName: 'TFO010'
  });
};
