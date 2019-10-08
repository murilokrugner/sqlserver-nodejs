/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SUA010', {
    UA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UA_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UA_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UA_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UA_CODCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UA_DESCNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    UA_OPERADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UA_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    UA_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    UA_OPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UA_MIDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UA_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UA_TMK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UA_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UA_CODCAMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UA_CODLIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UA_PROXLIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UA_HRPEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    UA_CODOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UA_VALICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_VALISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_VALIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_FORMPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UA_FRETE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_DESPESA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_COMIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_INICIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UA_FIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UA_CREDITO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    UA_CANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UA_CODCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UA_ENDCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    UA_BAIRROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    UA_ENDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    UA_BAIRROE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    UA_CEPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UA_CEPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UA_ESTC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UA_ESTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UA_MUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    UA_MUNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    UA_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UA_VENDTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UA_DATATEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UA_HORATEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UA_DOCTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    UA_AUTORIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UA_DOCCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    UA_DATCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UA_HORCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UA_INSTITU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    UA_NSUTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    UA_TIPCART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UA_CARTAO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_NUMSL1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UA_NUMSC5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UA_ACRECND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_DIASDAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_PROSPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    UA_HORADAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_EMISNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UA_VALBRUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_DTLIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UA_VALMERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_VLRLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_TXDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_JUROS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_ENTRADA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_DESCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_PARCELA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_FINANC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_ACRESCI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    UA_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    UA_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_TPCARGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UA_PDESCAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_TPFRETE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UA_DOCGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UA_DESC1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_DESC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_DESC3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_DESC4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UA_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    UA_CGCCART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    UA_FORCADA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UA_TIPLIB: {
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
    UA_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    UA_TIPOCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SUA010'
  });
};
