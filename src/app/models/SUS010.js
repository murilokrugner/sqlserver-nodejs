/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SUS010', {
    US_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    US_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    US_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    US_NREDUZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    US_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    US_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    US_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    US_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    US_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    US_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    US_DDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    US_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    US_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    US_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    US_URL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    US_ULTVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    US_CODHIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    US_INSCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    US_SATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_SATIV2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_SATIV3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_SATIV4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_SATIV5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_SATIV6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_SATIV7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_SATIV8: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    US_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    US_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_LOJACLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    US_DTCONV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    US_ALIQIR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    US_GRPTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    US_NATUREZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    US_RECCOFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    US_RECCSLL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    US_RECISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    US_RECINSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    US_RECPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    US_SUFRAMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    US_TRASLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    US_TPESSOA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    US_CONTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    US_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    US_FORMULA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    US_FATANU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    US_QTFUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    US_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    US_MIDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_LC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    US_VENCLC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    US_MOEDALC: {
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
    US_PESSOA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    US_COD_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    US_REGIAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_DSCREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    US_DTCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    US_HRCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    US_HRCONV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    US_ENTORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    US_IMGUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    US_IDESTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    US_NVESTN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    US_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    US_TPCAMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    US_CHVCAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    US_SETPUBL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    US_CODSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_CODTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_CODDESQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_TPMEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    US_OBSDESQ: {
      type: "IMAGE",
      allowNull: true
    },
    US_CODMEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    US_USRDESQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    US_DTDESQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    US_DTREATV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    US_PROPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'SUS010'
  });
};
