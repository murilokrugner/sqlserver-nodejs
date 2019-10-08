/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCP010', {
    TCP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TCP_CODEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCP_CODLEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TCP_CODRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TCP_QUANTI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TCP_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TCP_SALDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TCP_CODREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCP_ATIVID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TCP_DOCTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TCP_FORNEC: {
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
    tableName: 'TCP010'
  });
};
