/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TRB990_SP', {
    TRB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TRB_FILTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TRB_ALIAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TRB_RECNO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    TRB_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TRB_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    TRB_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TRB_NIVSD3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRB_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TRB_DTBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRB_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    TRB_CF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TRB_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRB_SEQPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRB_DTORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRB_RECSD1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    TRB_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TRB_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TRB_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TRB_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRB_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TRB_RECSBD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    TRB_RECTRB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    TRB_TIPONF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRB_QINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    TRB_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    TRB_QFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    TRB_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    TRB_RNOAUX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    TRB_USATRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)',
      primaryKey: true
    }
  }, {
    tableName: 'TRB990_SP'
  });
};
