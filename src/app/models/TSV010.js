/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TSV010', {
    TSV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TSV_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TSV_PLACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TSV_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TSV_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TSV_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TSV_QTDSER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TSV_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TSV_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TSV_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TSV_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TSV_MMOBS: {
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
    tableName: 'TSV010'
  });
};
