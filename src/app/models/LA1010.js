/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LA1010', {
    LA1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LA1_SEQNUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LA1_MODULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LA1_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    LA1_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LA1_MESDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LA1_ANTECI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LA1_HABILI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LA1_ACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    LA1_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LA1_PRAZO: {
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
    }
  }, {
    tableName: 'LA1010'
  });
};
