/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QQK010', {
    QQK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QQK_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QQK_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QQK_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QQK_RECURS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QQK_FERRAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QQK_LINHAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QQK_TPLINH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QQK_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QQK_MAOOBR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QQK_SETUP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QQK_FORMST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QQK_LOTEPA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QQK_TEMPAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QQK_TPOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QQK_TPSOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QQK_TEMPSO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QQK_TPDESD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QQK_TEMPDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QQK_DESPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QQK_CTRAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QQK_OPE_OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QQK_SEQ_OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QQK_LAU_OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QQK_REVIPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QQK_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QQK_ROTALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QQK_OPERGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QQK_GRSETU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QQK_GRUPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QQK_NIVMON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QQK_TMAXPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QQK_TPINTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QQK_MAXINC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QQK_FOLMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QQK_HOROTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QQK_CHAVMO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QQK_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QQK_REVIGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'QQK010'
  });
};
