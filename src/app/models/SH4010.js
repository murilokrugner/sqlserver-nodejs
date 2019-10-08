/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SH4010', {
    H4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    H4_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H4_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    H4_VIDAUTI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H4_TIPOVID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    H4_DTAQUIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    H4_VIDAACU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H4_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    H4_EFEITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H4_RESTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    H4_TURNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    H4_CGRAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H4_CORMAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H4_CORMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    H4_CUSTOH: {
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
    tableName: 'SH4010'
  });
};
