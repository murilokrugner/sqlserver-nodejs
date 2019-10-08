/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SL1010', {
    L1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L1_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_COMIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L1_TIPOCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_VLRTOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_DESCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_VLRLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_NROPCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L1_DTLIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L1_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L1_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L1_PDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    L1_EMISNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L1_VALBRUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_VALMERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_DESCNF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_OPERADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L1_DINHEIR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_CHEQUES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_CARTAO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_CONVENI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_VALES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_FINANC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_OUTROS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_ENTRADA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_JUROS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_PARCELA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_INTERV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_COND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_FORMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_VALICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_VALIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_VALISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_TXDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L1_FORMPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L1_CREDITO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L1_VEND2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_VEND3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_CONFVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    L1_MULTNOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L1_NUMCFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L1_FATOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_IMPRIME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    L1_VENDTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_DATATEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L1_HORATEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_DOCTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L1_AUTORIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_DOCCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L1_DATCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L1_HORCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_INSTITU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    L1_NSUTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    L1_TIPCART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_VLRDEBI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_TEFSTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_ADMFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L1_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    L1_OPERACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_SITUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L1_SUBSERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L1_NUMORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_TXMOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_ENDCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    L1_ENDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    L1_TPFRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_BAIRROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    L1_CEPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L1_MUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L1_ESTC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L1_BAIRROE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    L1_CEPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L1_MUNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L1_ESTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L1_FRETE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_DESPESA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_PLIQUI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_PBRUTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_VOLUME: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_ESPECIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L1_MARCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L1_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    L1_PLACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    L1_UFPLACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L1_BLCRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L1_RESERVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_VEICTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_VEIPESQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    L1_NRDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L1_TIPOJUR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_TROCO1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_EMPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L1_FILRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L1_ORCRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_TIPODES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_FORCADA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_ESTACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L1_DOCPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L1_CGCCART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    L1_SERPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L1_BRICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_LOJENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L1_NSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    L1_LOGDESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    L1_ICMSRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_PARCTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L1_ABTOPCC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_VALPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_VALCOFI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_VALCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_DIAFIXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_NUMMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L1_NUMATEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_PEDRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_NUMORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    L1_TPORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_CONTDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L1_CONTONF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L1_CONTRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_CONTCDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L1_CGCCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    L1_TEFBAND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    L1_TRCXGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    L1_MIDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_TREFETI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    L1_STATUES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_COODAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L1_PAFMD5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    L1_SERPDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    L1_CARTFID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_VALIRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_IMPNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    L1_STORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_ORIGEM: {
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
    L1_NUMFRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_ARRED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_VEND1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_VEND4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_VEND5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_USRST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_DTST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L1_HRST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_IFSANST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_IFSCDM1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_IFSCDM2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_DESCFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_MARCVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    L1_MODEVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    L1_ANOFVEI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_PLACVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L1_RNVMVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L1_NUMFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    L1_DVOSORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    L1_KEYNFCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    L1_DOCRPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L1_SERRPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L1_STBATCH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_ERROBTC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    L1_PEDPRS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L1_CODMNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L1_TIMEATE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_TIMEITE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_ECFLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_VALINSS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_VLRARR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_UMOVINF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    L1_UMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    L1_RECISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L1_MENNOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    L1_DOCCCF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L1_ECPEDEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    L1_ERGRVBT: {
      type: "IMAGE",
      allowNull: true
    },
    L1_RETSFZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                '
    },
    L1_VEICUL1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L1_SERSAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L1_SDOCSUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L1_SDOCRPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L1_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L1_SDOCPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L1_CONHTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    L1_VALCOMI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_VLRJUR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_TOTFED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_TOTEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_LTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                         '
    },
    L1_RESEHTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    L1_ECSTATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L1_PRONFCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L1_TOTMUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L1_ECRASTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    L1_HRUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    L1_DTUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'SL1010'
  });
};
