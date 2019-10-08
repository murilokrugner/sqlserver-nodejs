/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CBC010', {
    CBC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CBC_CODINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CBC_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CBC_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CBC_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CBC_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CBC_QTDORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CBC_LOCALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CBC_LOTECT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CBC_NUMLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CBC_NUMSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CBC_CODETI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CBC_CONTOK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CBC_AJUST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CBC_IDUNIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CBC_CODUNI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'CBC010'
  });
};
