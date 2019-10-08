/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SHE010', {
    HE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    HE_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    HE_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    HE_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    HE_FERRAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    HE_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HE_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HE_HRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    HE_HRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    HE_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
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
    tableName: 'SHE010'
  });
};
