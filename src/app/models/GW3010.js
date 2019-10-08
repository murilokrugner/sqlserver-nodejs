/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GW3010', {
    GW3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GW3_CDESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GW3_EMISDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GW3_SERDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GW3_NRDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    GW3_DTEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GW3_TPDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GW3_DTENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GW3_CFOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GW3_SIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GW3_USUIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    GW3_CDREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GW3_CDDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GW3_VLDF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_TAXAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_FRPESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_FRVAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_PEDAG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_PDGFRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GW3_ICMPDG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GW3_PDGPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GW3_QTDCS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_QTVOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_VOLUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_PESOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_PESOC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_VLCARG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_TRBIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GW3_BASIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_PCIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_VLIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_IMPRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_PCRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    GW3_CRDICM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GW3_CTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    GW3_MOTBLQ: {
      type: "IMAGE",
      allowNull: true
    },
    GW3_DTBLQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GW3_USUBLQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    GW3_MOTAPR: {
      type: "IMAGE",
      allowNull: true
    },
    GW3_DTAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GW3_USUAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    GW3_EMIFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GW3_SERFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GW3_NRFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    GW3_DTEMFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GW3_FILFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GW3_CDCONS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GW3_ORINR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    GW3_ORISER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GW3_ORIDTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GW3_ACINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GW3_DTFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GW3_SITFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GW3_DTREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GW3_SITREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GW3_BASCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_VLCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_BASPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_MOTFIS: {
      type: "IMAGE",
      allowNull: true
    },
    GW3_VLPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GW3_CRDPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GW3_MOTREC: {
      type: "IMAGE",
      allowNull: true
    },
    GW3_NATFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GW3_TPCTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GW3_PRITDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    GW3_DTVNFT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GW3_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GW3_TPCTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GW3_CPDGFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    GW3_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    GW3_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GW3_ITEMCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    GW3_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    GW3_SITMLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GW3_MOTMLA: {
      type: "IMAGE",
      allowNull: true
    },
    GW3_HRAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
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
    GW3_CDTPSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GW3_SITCUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GW3_DESCUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    GW3_DTCUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GW3_USUCUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    GW3_MOTCUS: {
      type: "VARBINARY",
      allowNull: true
    }
  }, {
    tableName: 'GW3010'
  });
};
