/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SA1990', {
    A1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A1_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A1_PESSOA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A1_NREDUZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A1_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A1_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A1_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A1_COD_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A1_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    A1_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A1_IBGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    A1_NATUREZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    A1_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A1_DDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A1_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A1_TELEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    A1_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A1_ENDCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A1_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A1_ENDREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A1_ENDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A1_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    A1_CONTATO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A1_INSCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    A1_PFISICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    A1_INSCRM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    A1_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_COMIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_REGIAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A1_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A1_BCO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A1_BCO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A1_BCO3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A1_BCO4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A1_BCO5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A1_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_TPFRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_COND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A1_DESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_PRIOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_RISCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_LC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_VENCLC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A1_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_LCFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_MOEDALC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_MSALDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_MCOMPRA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_METR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_PRICOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A1_ULTCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A1_NROCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_FORMVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A1_TEMVIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_ULTVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A1_TMPVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A1_TMPSTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A1_CLASVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_MENSAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A1_SALDUP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_RECISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_SALPEDL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_NROPAG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_TRANSF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_SUFRAMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    A1_ATR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_VACUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_SALPED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_TITPROT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_DTULTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A1_CHQDEVO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_MATR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_DTULCHQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A1_MAIDUPL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A1_INCISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_SALDUPM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_PAGATR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_CXPOSTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A1_ATIVIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    A1_CARGO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A1_CARGO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A1_CARGO3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A1_ALIQIR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_SUPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_RTEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A1_RG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A1_CALCSUF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_DTNASC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A1_SALPEDB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_CLIFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_GRPTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A1_BAIRROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A1_CEPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A1_MUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A1_ESTC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A1_CEPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A1_BAIRROE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A1_MUNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A1_ESTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A1_SATIV1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_SATIV2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_CODPAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A1_TPESSOA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A1_CODLOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A1_TPISSRS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A1_SATIV3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_SATIV4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_SATIV5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_SATIV6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_SATIV7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_SATIV8: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_CODMARC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_CODAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A1_COMAGE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_TIPCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A1_DEST_1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A1_DEST_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A1_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A1_HPAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A1_DEST_3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A1_CBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    A1_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    A1_CONDPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A1_DIASPAG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_AGREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    A1_CODHIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_RECINSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_RECCOFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_RECCSLL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_RECPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_TIPPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A1_SALFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_CONTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A1_SALFINM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_B2B: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_GRPVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_CLICNV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_INSCRUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    A1_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_SITUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A1_NUMRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A1_SUBCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_CDRDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_FILDEB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A1_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A1_ABICS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    A1_BLEMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_TIPOCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A1_VINCULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A1_DTINIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A1_DTFIMV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A1_LOCCONS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A1_CBAIRRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_CODMUNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A1_PERFIL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_HRTRANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A1_UNIDVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_TIPPRFL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_PRF_VLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A1_PRF_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A1_PRF_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    A1_REGPB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_USADDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_SIMPLES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_IPWEB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A1_ENDNOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_REGESIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_FRETISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_PERCATM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_CODSIAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    A1_CTARE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_CEINSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    A1_ABATIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_FOMEZER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_TIMEKEE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A1_TDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_SIMPNAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_FILTRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A1_CODFID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A1_RECFET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_MINIRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_COMPLEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    A1_CONTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_INCULT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_RECIRRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A1_ENTID: {
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
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    },
    A1_IRBAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A1_INDRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A1_OUTRMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    }
  }, {
    tableName: 'SA1990'
  });
};
