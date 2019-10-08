/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T4G010', {
    T4G_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T4G_MESSPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T4G_ANOSPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    T4G_REG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    T4G_DT_INI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    T4G_DT_FIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    T4G_COD_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    T4G_COD_IT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    T4G_QTD_PO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T4G_QTD_NE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T4G_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T4G_BLK_CO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    T4G_PRGORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    tableName: 'T4G010'
  });
};
