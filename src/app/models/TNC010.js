/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TNC010', {
    TNC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNC_ACIDEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNC_DESACI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TNC_HRACID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TNC_DTACID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNC_INDACI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_VITIMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_NUMFIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TNC_NOMFIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TNC_TIPACI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TNC_CODOBJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TNC_NUMRIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TNC_TRANSF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_EMITEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_TIPCAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_AFASTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_QTAFAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNC_DIASDB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNC_DTOBIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNC_TIPREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_AREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_APOSEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_HRTRAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TNC_DTULTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNC_INDLOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_CGCPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    TNC_CIDACI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    TNC_ESTACI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNC_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TNC_PARTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TNC_DESCR1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TNC_DESCR2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TNC_POLICI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_MORTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_CIDAD1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    TNC_ESTAD1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNC_TELEF1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TNC_CIDAD2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    TNC_ESTAD2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNC_TELEF2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TNC_LOCATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TNC_DTATEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNC_INTERN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_HRATEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TNC_DESLES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TNC_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TNC_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TNC_DTEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNC_CODFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TNC_DETALH: {
      type: "IMAGE",
      allowNull: true
    },
    TNC_CATINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    TNC_CONFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TNC_HRRPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TNC_HRRDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TNC_LOCACT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_HORSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TNC_TRAJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TNC_MEIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TNC_LOCACI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TNC_DISTAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNC_MUDANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TNC_ADMITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_CODPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TNC_CODLES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TNC_GRPCID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TNC_CID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNC_FILFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNC_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    TNC_CODCID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TNC_DESLOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TNC_NUMLOG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNC_MTEST1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNC_NUEND1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNC_CIDT1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TNC_MTEST2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNC_NUEND2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNC_CIDT2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TNC_CATORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TNC_DTCATO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNC_TIPOAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_ANALIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNC_OCOPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNC_CNES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    TNC_INDAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNC_TESTE1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TNC_ENDTE1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TNC_BAIRR1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TNC_CEP1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNC_TESTE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TNC_ENDTE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TNC_BAIRR2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TNC_CEP2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNC_DISTUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'TNC010'
  });
};
