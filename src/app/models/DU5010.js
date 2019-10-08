/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DU5010', {
    DU5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DU5_TABSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DU5_TPTSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DU5_COMSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DU5_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DU5_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DU5_INTERV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DU5_CDRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DU5_CDRDES: {
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
    }
  }, {
    tableName: 'DU5010'
  });
};
