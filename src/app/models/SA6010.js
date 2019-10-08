/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SA6010', {
    A6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A6_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A6_AGENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A6_NOMEAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A6_DVAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A6_NUMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    A6_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A6_DVCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A6_NREDUZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A6_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A6_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A6_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A6_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A6_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A6_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A6_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A6_TELEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    A6_CONTATO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A6_RETENCA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A6_CXPOSTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A6_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A6_RETDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A6_SALANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A6_SALATU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A6_TXCOBSI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A6_TXCOBDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A6_TAXADES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A6_LAYOUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                             '
    },
    A6_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A6_BOLETO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    A6_MENSAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                '
    },
    A6_LAYIPMF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                               '
    },
    A6_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A6_FLUXCAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A6_DIASCOB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A6_DATAABR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A6_DATAFCH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A6_HORAFCH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A6_HORAABR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A6_LIMCRED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A6_UNIDFED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A6_COD_P: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A6_TAXA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A6_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A6_MOEDAP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A6_SALANT2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A6_CONTABI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    A6_SALATU2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A6_COD_BC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A6_MOEEASY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A6_CONEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A6_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A6_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A6_PAISBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A6_NUMBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A6_CORRENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A6_BORD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A6_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A6_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A6_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    A6_BLOCKED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A6_DTBLOQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A6_TIPOCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A6_CLASCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A6_RECVIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    A6_CODCXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    A6_CARTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A6_TIPOCAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A6_CODCED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A6_CLASENT: {
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
    A6_MSEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'SA6010'
  });
};
