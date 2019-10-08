/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEU010', {
    EU_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EU_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EU_CAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EU_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EU_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EU_VIAGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EU_CODVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EU_CODDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EU_HISTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    EU_NRCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    EU_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EU_BENEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    EU_DTDIGIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EU_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EU_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EU_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EU_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    EU_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    EU_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EU_BAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EU_SLDADIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EU_NROADIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EU_SEQCXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EU_LA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EU_CODMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EU_IMPRESS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EU_NRREND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EU_SERCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EU_CONTAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EU_CONTAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EU_CCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EU_CCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EU_ITEMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EU_ITEMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EU_CLVLDB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EU_CLVLCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EU_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EU_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EU_CODAPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EU_CODSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EU_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EU_VLMOED2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EU_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EU_DATALIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EU_USUALIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    EU_OK: {
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
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    EU_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    EU_DESPJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EU_RATJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EU_PROFISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EU_TIPDESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EU_NATUREZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EU_FATJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EU_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EU_IMGUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    EU_LOJACLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EU_CASO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EU_ESCRIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EU_GRPJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EU_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EU_MEMDSCR: {
      type: "IMAGE",
      allowNull: true
    },
    EU_AGENCI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EU_TOTRAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EU_CONTARE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EU_SEQJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EU_STAUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EU_ENVUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EU_SDOCCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EU_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'SEU010'
  });
};
