/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EJ7010', {
    EJ7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJ7_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EJ7_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    EJ7_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJ7_HTML: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EJ7_HTMLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EJ7_HTMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EJ7_ASSUNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    EJ7_TIMEOU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJ7_TIMEHR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJ7_TIMEMI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJ7_FUNCEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    EJ7_FUNCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    EJ7_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJ7_FUNCVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    EJ7_TIPORE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJ7_TIPSRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJ7_SERVID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    EJ7_FASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EJ7_MODULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EJ7_VMDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                        '
    },
    EJ7_COPIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                        '
    },
    EJ7_COPOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                        '
    },
    EJ7_CHAVES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
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
    tableName: 'EJ7010'
  });
};
