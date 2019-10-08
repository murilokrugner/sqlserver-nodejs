/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CPY010', {
    CPY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CPY_NUMATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CPY_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CPY_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CPY_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    CPY_REMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    CPY_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CPY_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CPY_UM2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CPY_QUANT2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CPY_SALDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CPY_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CPY_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CPY_CODNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CPY_ITEMNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CPY_QTDLIC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CPY_VLUNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CPY_VLTOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CPY_VALATU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CPY_LOTE: {
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
    tableName: 'CPY010'
  });
};
