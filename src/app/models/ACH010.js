/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ACH010', {
    ACH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACH_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACH_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACH_RAZAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    ACH_NFANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    ACH_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACH_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    ACH_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    ACH_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    ACH_CIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    ACH_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACH_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ACH_DDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACH_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ACH_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    ACH_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    ACH_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    ACH_URL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    ACH_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACH_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACH_LOJPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACH_DTCONV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ACH_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    ACH_FATANU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ACH_QTFUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACH_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ACH_MIDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACH_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    ACH_CONCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACH_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACH_CODTMK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACH_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACH_RESERV: {
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
    ACH_PESSOA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACH_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ACH_REGIAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACH_DSCREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ACH_DTCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ACH_HRCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ACH_HRCONV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ACH_IMGUMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    ACH_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACH_INTUMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACH_ENTORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACH_IDESTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    ACH_NVESTN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ACH_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACH_TPCAMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACH_CHVCAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    ACH_CODTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACH_CODESQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACH_OBSDES: {
      type: "IMAGE",
      allowNull: true
    },
    ACH_TPMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACH_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACH_CODSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACH_CODUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    ACH_DTDESQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ACH_DTREAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ACH_PROPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'ACH010'
  });
};
