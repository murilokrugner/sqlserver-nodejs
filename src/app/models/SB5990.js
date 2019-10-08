/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SB5990', {
    B5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B5_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_PRV2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PRV3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PRV4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PRV5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PRV6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PRV7: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_CEME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    B5_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_CERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_COMPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_DES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_EMB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    B5_EMB2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    B5_ESPESS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_ESTMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_LARG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_QE1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_QE2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_QUAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    B5_CONVDIP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_UMDIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_DTREFP2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_CARPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_IDADEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_DTREFP3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_DTREFP4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_DTREFP5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_DTREFP6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_DTREFP7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_COMPRLC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_LARGLC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_ALTURLC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_FATARMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_EMPMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_ROTACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_CODCAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B5_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_CODZON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B5_UMIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_SERVENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_SERVINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_SERVSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_LVLEMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_LPSEMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PERCUB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_IMPGRUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_BENDL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_PINSUMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_PORTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_NPULMAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_PRODDNF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_INSUMO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_VOLRECI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_CODISRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_USOITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_LOCALI2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_CONCENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_DENSID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_FTIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_FTIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PROPOR1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PROPOR2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_CRDEST1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_CRDEST2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_SERVEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_CALORIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_TOTGOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_TOTGORS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_TOTGORT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_COR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_ALTURA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    B5_ESPECIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    B5_QUALIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    B5_ONU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    B5_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B5_CODTP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_CMPEXTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_EAN141: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_EAN142: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_EAN143: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_EAN144: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_EAN145: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_EAN146: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_EAN147: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_EAN148: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_TIPUNIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_QTDVAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_IMPETI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_VLDOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_VLDREQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_DTINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_PERIOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_NSERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_QEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    B5_QEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    B5_CDDMDBA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    B5_SITDIEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B5_DESCNFE: {
      type: "IMAGE",
      allowNull: true
    },
    B5_INSPAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_CODATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    tableName: 'SB5990'
  });
};
