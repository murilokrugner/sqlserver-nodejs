/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEE010', {
    EE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE_AGENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EE_DVAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EE_DVCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_SUBCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE_ULTDSK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE_NUMBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE_DC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_NUMAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_CEPDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_OPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    EE_IOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE_INSTPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EE_INSTSEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EE_EXTEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE_FAXINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    EE_FAXFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    EE_FAXATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    EE_CODEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    EE_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE_DESPCRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE_NRBYTES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE_TIPODAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE_LOTECP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE_BYTESXT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE_COBELET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_CODCOBE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE_FIMLIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_RETAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_AGLCTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_ATUMOE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_DIRPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    EE_DIRREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    EE_CFGPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    EE_CFGREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    EE_BKPPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    EE_BKPREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    EE_DESCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_CNABPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_CNABRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_PROCFL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_MULTNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_CTBTRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_RETBCO: {
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
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE_FORMEN1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    EE_FORMEN2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    EE_FOREXT1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    EE_FOREXT2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    EE_DIASPRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE_CODCART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE_NUMCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EE_TIPCART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE_TPCOBRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_TAMOCOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE_DTVALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE_CODOFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE_AGEOFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EE_DVAGOFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_CTAOFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EE_DVCTOFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE_PERMPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SEE010'
  });
};
