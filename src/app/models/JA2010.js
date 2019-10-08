/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('JA2010', {
    JA2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    JA2_CODFAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JA2_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    JA2_NUMRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    JA2_CODINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    JA2_PROSEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JA2_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    JA2_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JA2_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    JA2_NUMEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    JA2_COMPLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    JA2_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    JA2_CIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    JA2_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    JA2_FRESID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    JA2_FCELUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    JA2_FCONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    JA2_NOMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    JA2_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    JA2_DTNASC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JA2_NATURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    JA2_NACION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    JA2_ECIVIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    JA2_PAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    JA2_MAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    JA2_SEXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    JA2_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JA2_CPF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    JA2_TIPCPF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    JA2_RG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    JA2_DTRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JA2_ESTRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    JA2_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    JA2_CIDTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    JA2_ESTTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    JA2_ZONA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    JA2_CMILIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    JA2_ENDCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    JA2_NUMCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    JA2_BAICOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    JA2_COMCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    JA2_ESTCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    JA2_CIDCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    JA2_CEPCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JA2_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    JA2_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JA2_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    JA2_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JA2_INSTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JA2_DATAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    JA2_CLASSF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JA2_PONTUA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    JA2_FORING: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    JA2_DATADI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JA2_MEMO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JA2_WPSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JA2_PROFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    JA2_CEPPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JA2_ENDPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    JA2_NUMPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    JA2_COMPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    JA2_CIDPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    JA2_ESTPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    JA2_BAIPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    JA2_FCOML: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    JA2_RAMAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    JA2_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JA2_CONCLU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    JA2_ACAOJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    JA2_VERCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    JA2_PRONTU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    JA2_PASTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    JA2_ARQMOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    JA2_DIARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    JA2_PUBLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    JA2_DATAPU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JA2_MEMO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JA2_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    JA2_ALUNOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    JA2_TEMPOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JA2_FRASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    JA2_OPTIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    JA2_EMICER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JA2_TIPENS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    JA2_DCOLAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JA2_DTQUAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JA2_DTDEFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JA2_TPCAND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    JA2_TIPDEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    JA2_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JA2_RAANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    JA2_RELIGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    JA2_NASCMN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    JA2_PAIPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    JA2_PAICAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    JA2_PAILCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    JA2_PAIFON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    JA2_MAEPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    JA2_MAECAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    JA2_MAELCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    JA2_MAEFON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    JA2_RACACO: {
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
    }
  }, {
    tableName: 'JA2010'
  });
};
