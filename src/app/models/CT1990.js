/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CT1990', {
    CT1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CT1_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT1_DESC01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CT1_DESC02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CT1_DESC03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CT1_DESC04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CT1_DESC05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CT1_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_NORMAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_RES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CT1_BLOQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_DTBLIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CT1_DTBLFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CT1_DC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_NCUSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CT1_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CT1_CVD02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_CVD03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_CVD04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_CVD05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_CVC02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_CVC03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_CVC04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_CVC05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_CTASUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT1_HP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CT1_ACITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_ACCUST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_ACCLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_DTEXIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CT1_DTEXSF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CT1_CTAVM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT1_CTARED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT1_CTALP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT1_CTAPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT1_BOOK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT1_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CT1_AGLSLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_RGNV1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CT1_RGNV2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CT1_RGNV3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CT1_CCOBRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_ITOBRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_CLOBRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_TRNSEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT1_AGLUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_LALUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_CTLALU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT1_TPLALU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CT1_LALHIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_RATEIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CT1_ESTOUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_CODIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT1_AJ_INF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_NATCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CT1_ACATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_ATOBRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_ACET05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_05OBRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_INDNAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_SPEDST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_NTSPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CT1_ACAT01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_AT01OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_ACAT02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_AT02OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_ACAT03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_AT03OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_ACAT04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_AT04OB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT1_TPO01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CT1_TPO04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CT1_TPO02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CT1_TPO03: {
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
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    }
  }, {
    tableName: 'CT1990'
  });
};
