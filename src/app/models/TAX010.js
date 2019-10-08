/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAX010', {
    TAX_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TAX_CODRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TAX_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TAX_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TAX_CODFON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TAX_TPGERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TAX_DENSID: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAX_RSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TAX_IBAMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TAX_IDENTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TAX010'
  });
};
