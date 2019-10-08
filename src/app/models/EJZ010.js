/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EJZ010', {
    EJZ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJZ_TPPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJZ_REGIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EJZ_SEQREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EJZ_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EJZ_SEQPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EJZ_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EJZ_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJZ_NBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EJZ_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EJZ_MODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJZ_DTPRIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJZ_DTPRFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJZ_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJZ_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJZ_QTDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJZ_PRCUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJZ_VL_MOE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJZ_TX_MOE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJZ_VL_REA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJZ_COMPL: {
      type: "IMAGE",
      allowNull: true
    },
    EJZ_ENQ01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EJZ_RC01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJZ_ENQ02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EJZ_RC02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJZ_ENQ03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EJZ_RC03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJZ_STTSIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJZ_DTREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJZ_DTRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJZ_PRAZO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJZ_SEQAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EJZ_NROREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EJZ_MOVTEM: {
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
    tableName: 'EJZ010'
  });
};
