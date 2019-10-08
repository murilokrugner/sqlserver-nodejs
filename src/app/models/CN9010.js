/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CN9010', {
    CN9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CN9_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CN9_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_DTASSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_UNVIGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN9_VIGE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN9_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CN9_LOJACL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CN9_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN9_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CN9_CODOBJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CN9_TPCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CN9_VLINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN9_VLATU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN9_INDICE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CN9_FLGREJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN9_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CN9_FLGCAU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN9_TPCAUC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN9_MINCAU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN9_DTENCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_TIPREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CN9_REVATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CN9_SALDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN9_MOTPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CN9_DTFIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_DTREIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_CODJUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CN9_CODCLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CN9_DTREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_DTREAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_VLREAJ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN9_VLADIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN9_NUMTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CN9_VLMEAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN9_TXADM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN9_FORMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN9_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_LOCENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CN9_CODENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CN9_DESFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CN9_CONTFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CN9_DTINPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_PERPRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN9_UNIPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN9_VLRPRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN9_DTPROP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_DTULST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_DTINCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CN9_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CN9_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CN9_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CN9_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CN9_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CN9_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CN9_ALCISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN9_INSSMO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN9_INSSME: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN9_APROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CN9_PROXAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_CODED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CN9_VLDCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN9_USUAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CN9_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CN9_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CN9_PROGRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN9_NUMPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CN9_ULTAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_DTVIGE: {
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
    },
    CN9_ASSINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_RESREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN9_GRPAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CN9_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CN9_DREFRJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_ESPCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN9_FILCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CN9_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CN9_NUMCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CN9_DATREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_CODNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CN9_DTRRDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_DTRRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_NUMATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CN9_FILEDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CN9_LOGDAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_LOGHOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CN9_LOGUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CN9_PERI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN9_UNPERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN9_MODORJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN9_PRORAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN9_PROPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CN9_PROREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'CN9010'
  });
};
