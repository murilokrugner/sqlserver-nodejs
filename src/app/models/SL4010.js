/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SL4010', {
    L4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L4_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L4_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L4_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L4_FORMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L4_ADMINIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    L4_NUMCART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    L4_AGENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L4_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    L4_RG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    L4_TELEFON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L4_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    L4_TERCEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    L4_SITUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L4_DATATEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L4_HORATEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L4_DOCTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L4_AUTORIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L4_DATCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L4_HORCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L4_DOCCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L4_INSTITU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    L4_NSUTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    L4_TIPCART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L4_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L4_MESACTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L4_ANOACTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    L4_TIPOCHQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L4_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    L4_NOMECLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    L4_SERCHQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L4_COMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L4_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L4_FORMPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L4_VENDTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L4_FORMAID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L4_PARCTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L4_TROCO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L4_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L4_ESTORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L4_OPERAES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L4_SERPDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    L4_PAFMD5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    L4_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L4_CONTDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L4_CONTONF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L4_DESPRC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L4_BANPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L4_ACRSFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L4_PROCFID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L4_NUMCFID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
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
    L4_CODVP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L4_DESCMN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L4_BANDEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    L4_REDEAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    L4_CONHTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    L4_IDPGVFP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L4_IDRSPFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    }
  }, {
    tableName: 'SL4010'
  });
};
