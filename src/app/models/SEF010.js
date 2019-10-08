/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEF010', {
    EF_FILORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EF_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EF_AGENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EF_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EF_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EF_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EF_VALORBX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EF_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EF_VENCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EF_PREFIXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EF_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EF_PARCELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EF_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EF_BENEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    EF_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EF_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EF_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EF_LOJACLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EF_CPFCNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    EF_EMITENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    EF_NUMNOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EF_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EF_HIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EF_HISTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EF_ALINEA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EF_DTALIN1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EF_ALINEA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EF_DTALIN2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EF_DTREPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EF_CART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EF_CHDEVOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EF_COMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EF_DEPOSIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EF_GARANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                           '
    },
    EF_IMPRESS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EF_LA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EF_LIBER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EF_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EF_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EF_PORTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EF_RG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EF_SEQUENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EF_TERCEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    EF_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EF_KEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    EF_DTCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EF_DEBITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EF_CCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EF_ITEMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EF_CLVLDB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EF_CREDIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EF_CCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EF_ITEMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EF_CLVLCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EF_USADOBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EF_NATUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EF_TALAO: {
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
    EF_FILCHQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EF_IDSEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    EF_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'SEF010'
  });
};
