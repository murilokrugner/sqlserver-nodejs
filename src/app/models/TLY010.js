/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TLY010', {
    TLY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TLY_PROGRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TLY_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TLY_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TLY_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TLY_CODEPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TLY_QUANTI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TLY_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TLY_NUMSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TLY_ITEMSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TLY_DATASA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TLY_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TLY_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TLY_NUMCAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
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
    tableName: 'TLY010'
  });
};
