/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SS5010', {
    S5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S5_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    S5_PRV2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_PRV3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_PRV4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_PRV5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_PRV6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_PRV7: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_CEME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    S5_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    S5_CERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_COMPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_DES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    S5_EMB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    S5_EMB2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    S5_ESPESS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_ESTMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_LARG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_QE1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_QE2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_CONVDIP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_DTREFP2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S5_CARPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_DTREFP3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S5_IDADEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_DTREFP4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S5_DTREFP5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S5_DTREFP6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S5_DTREFP7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S5_COMPRLC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_LARGLC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_ALTURLC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_FATARMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_EMPMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_ROTACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_CODCAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S5_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    S5_CODZON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S5_UMIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_SERVENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S5_SERVINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S5_SERVSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S5_LVLEMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_LPSEMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_PERCUB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_IMPGRUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_BENDL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_PINSUMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_PORTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_PRODDNF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_NPULMAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_INSUMO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_VOLRECI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_CODISRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_USOITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_LOCALI2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    S5_CONCENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_DENSID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_FTIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_FTIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_PROPOR1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_PROPOR2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_CRDEST1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_CRDEST2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_SERVEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S5_CALORIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_TOTGOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_TOTGORS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_TOTGORT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_COR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    S5_ALTURA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    S5_ESPECIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    S5_QUALIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    S5_ONU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    S5_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S5_CODTP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S5_CMPEXTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_EAN141: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_EAN142: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_EAN143: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_EAN144: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_EAN145: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_EAN146: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_EAN147: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_EAN148: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_TIPUNIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_QTDVAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_IMPETI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_VLDOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_VLDREQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_DTINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S5_PERIOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S5_NSERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_CDDMDBA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    S5_SITDIEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S5_DESCNFE: {
      type: "IMAGE",
      allowNull: true
    },
    S5_TABINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S5_CODGRU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S5_MARCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    S5_DIASHL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_DIASHF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_REVPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_PRZCQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_FORMMRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_CODATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S5_MONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_INSPAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_FPRZCQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S5_BLQINVD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_AGLUMRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_DIASES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_BLQINVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S5_GRPIVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S5_IDHIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    S5_AMMULTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_AMMULTS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_CODSERC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    S5_DESCSER: {
      type: "IMAGE",
      allowNull: true
    },
    S5_ISEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S5_ZFMULTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_ZFMULTS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_VLRCID: {
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
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_UMDIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S5_QEI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S5_QEL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SS5010'
  });
};
