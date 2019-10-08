/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SF3010', {
    F3_REPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F3_ENTRADA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F3_NFISCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F3_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F3_CLIEFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F3_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F3_CFO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    F3_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F3_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F3_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F3_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    F3_ALIQICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_BASEICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ISENICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_OUTRICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_BASEIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ISENIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_OUTRIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    F3_VALOBSE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ICMSRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F3_LANCAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F3_DOCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F3_ICMSCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_IPIOBS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_NRLIVRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F3_ICMAUTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_BASERET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F3_ESPECIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    F3_FORMULA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F3_DESPESA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_PDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F3_BASIMP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_BASIMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_BASIMP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_BASIMP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_BASIMP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_BASIMP6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ALQIMP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ALQIMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ALQIMP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ALQIMP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ALQIMP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ALQIMP6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALIMP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALIMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALIMP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALIMP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALIMP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALIMP6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_RETIMP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_RETIMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_RETIMP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_RETIMP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_RETIMP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_RETIMP6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_DTLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F3_DTCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F3_DOCPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    F3_ISSST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F3_MDCAT79: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    F3_CREDST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F3_CRDPRES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_TPPRODE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F3_CRPRELE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_NFEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                          '
    },
    F3_ICMSDIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_TRFICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_OBSICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_OBSSOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_SOLTRIB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CFOEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F3_SIMPLES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CRDZFM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_RECISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F3_IDENTFT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F3_CRPRST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CPPRODE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALCF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_DESCZFR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_NUMINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F3_CRDTRAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_NUMRPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    F3_NFELETR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    F3_NUMFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F3_ECF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F3_VALFECP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CRDEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CFPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F3_BASECF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CHVNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    F3_VALFAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CRPRSIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ANTICMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F3_VALANTI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ESTCRED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CODNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    F3_ALIQCF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CPRESPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALPS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALFET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CREDNFE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VFECPST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_EMINFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F3_ISSSUB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALFAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_HORNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F3_CODRSEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F3_CREDACU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F3_CRPRERO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F3_BASEPS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ALIQPS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F3_VALTST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ISSMAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CROUTSP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALFDS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VLSENAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALFUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CRPREPE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_DS43080: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CAT102: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F3_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F3_CRPRESP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_LOJENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F3_CRPREPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_BASETST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VLINCMG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VL43080: {
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
    F3_CODRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F3_DESCRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    F3_CREDPRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VFECPRN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VFESTRN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VFECPMG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VFESTMG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VFECPMT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VFESTMT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VREINT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_BSREIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CSTISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F3_CROUTGO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALTPDP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CLASCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F3_CRDPCTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_DIFAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VFCPDIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_BASEDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CSTPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F3_ABATISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CSTCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F3_CODBCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F3_TRIBMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    F3_PROTOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    F3_VALCPM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_BASECPM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ALQCPM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ALQFMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_BASEFMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALFMD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALFMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ALIQIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALPEDG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_PERCINP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F3_SERSAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F3_SDOCMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F3_DTFIMNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F3_GRUPONC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F3_INDNTFR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F3_MALQCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_MOTICMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F3_MVALCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_TNATREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    F3_VALII: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ALIQCPB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ATIVCPB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F3_BASECPB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_BASNDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_ICMNDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALCPB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CNATREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F3_VALINP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_BASEINP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_CLIDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F3_LOJDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F3_BSICMOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALFUND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALIMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_VALFASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F3_LOJDVMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F3_CLIDVMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F3_NFISCAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    }
  }, {
    tableName: 'SF3010'
  });
};
