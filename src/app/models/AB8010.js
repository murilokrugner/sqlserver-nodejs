/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AB8010', {
    AB8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB8_NUMOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB8_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB8_SUBITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB8_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AB8_DESPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AB8_CODSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB8_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AB8_VUNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AB8_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AB8_ENTREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB8_DTGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB8_NUMPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB8_PRCLIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AB8_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB8_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB8_CODPRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AB8_NUMSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AB8_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AB8_NUMPVF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB8_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB8_LOCALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    tableName: 'AB8010'
  });
};
