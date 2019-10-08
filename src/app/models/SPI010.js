/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPI010', {
    PI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PI_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PI_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PI_PD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PI_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PI_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PI_QUANTV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PI_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PI_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PI_DTBAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PI_POSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PI_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PI_CODFUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    PI_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    PI_PERIODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PI_ROTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PI_NUMPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    PI_TPBAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SPI010'
  });
};
