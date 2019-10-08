/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SLQ010', {
    LQ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LQ_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_COMIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LQ_TIPOCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LQ_VLRTOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_DESCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_VLRLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_NROPCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LQ_DTLIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LQ_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LQ_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LQ_PDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LQ_EMISNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LQ_VALBRUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_VALMERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LQ_DESCNF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_OPERADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LQ_DINHEIR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_CHEQUES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_CARTAO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_CONVENI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_VALES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_FINANC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_OUTROS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_ENTRADA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_JUROS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_PARCELA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_INTERV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_COND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_FORMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_VALICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_VALIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_VALISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_TXDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LQ_FORMPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LQ_CREDITO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LQ_VEND2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_VEND3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_CONFVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LQ_MULTNOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LQ_NUMCFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LQ_FATOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_IMPRIME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LQ_VENDTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LQ_DATATEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LQ_HORATEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_DOCTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LQ_AUTORIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_DOCCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LQ_DATCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LQ_HORCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_INSTITU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    LQ_NSUTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    LQ_TIPCART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_VLRDEBI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_TEFSTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LQ_ADMFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LQ_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LQ_OPERACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LQ_SITUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LQ_NUMORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_TXMOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_ENDCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    LQ_ENDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    LQ_TPFRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LQ_BAIRROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LQ_CEPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LQ_MUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LQ_ESTC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LQ_SUBSERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LQ_BAIRROE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LQ_CEPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LQ_MUNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LQ_ESTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LQ_FRETE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_DESPESA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_PLIQUI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_PBRUTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_VOLUME: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_ESPECIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LQ_MARCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LQ_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LQ_PLACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LQ_UFPLACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LQ_BLCRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LQ_RESERVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LQ_VEICTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LQ_VEIPESQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LQ_NRDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LQ_TIPOJUR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_EMPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LQ_FILRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LQ_ORCRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_TIPODES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LQ_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LQ_DOCPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LQ_SERPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LQ_PARCTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LQ_ABTOPCC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_VALPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_VALCOFI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_VALCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_DIAFIXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LQ_NUMMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LQ_NUMATEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_PEDRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_NUMORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LQ_TPORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LQ_CONTDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LQ_CONTONF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LQ_CONTRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_CONTCDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LQ_CGCCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    LQ_MIDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_TEFBAND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    LQ_CARTFID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_VALIRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_IMPNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    LQ_STORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LQ_ORIGEM: {
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
    LQ_TRCXGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    LQ_TREFETI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    LQ_ARRED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_VEND1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_VEND4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_VEND5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_USRST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_DTST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LQ_HRST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_IFSANST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LQ_IFSCDM1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_IFSCDM2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_DESCFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_MARCVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    LQ_MODEVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    LQ_ANOFVEI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_PLACVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LQ_RNVMVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LQ_NUMFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    LQ_DVOSORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LQ_KEYNFCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    LQ_DOCRPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LQ_SERRPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LQ_PAFMD5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    LQ_COODAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LQ_SERPDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LQ_STATUES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LQ_CODMNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LQ_PEDPRS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_STBATCH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LQ_TIMEATE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_TIMEITE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_ECFLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LQ_VALINSS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_VLRARR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_DTUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LQ_HRUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LQ_RECISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LQ_UMOVINF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    LQ_UMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LQ_MENNOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    LQ_DOCCCF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LQ_NUMFRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LQ_ERGRVBT: {
      type: "IMAGE",
      allowNull: true
    },
    LQ_RETSFZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                '
    },
    LQ_SDOCPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LQ_SERSAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LQ_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LQ_SDOCSUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LQ_SDOCRPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LQ_VEICUL1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LQ_CONHTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    LQ_VALCOMI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_TOTMUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_ECSTATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LQ_TOTFED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_ECRASTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LQ_LTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                         '
    },
    LQ_TOTEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_PRONFCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LQ_VLRJUR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LQ_RESEHTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    }
  }, {
    tableName: 'SLQ010'
  });
};
