/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI1010', {
    I1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    I1_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    I1_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    I1_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    I1_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    I1_RES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    I1_NORMAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    I1_ESTADO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_DC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    I1_HP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    I1_CTAVM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    I1_NCUSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CV2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    I1_CV3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    I1_CV4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    I1_CV5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    I1_DEBM01: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CRDM01: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_DEBM02: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CRDM02: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_DEBM03: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CRDM03: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_DEBM04: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CRDM04: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_DEBM05: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CRDM05: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_DEBM06: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CRDM06: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_DEBM07: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CRDM07: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_DEBM08: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CRDM08: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_DEBM09: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CRDM09: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_DEBM10: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CRDM10: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_DEBM11: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CRDM11: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_DEBM12: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CRDM12: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_DEBM13: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CRDM13: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_DEBM14: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CRDM14: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_DEBM15: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CRDM15: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_DEBM16: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CRDM16: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_DEBM17: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CRDM17: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    I1_CCOBRIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    I1_CTARED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    I1_DESCEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    I1_CODINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    I1_CTASUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    I1_ACITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    I1_ACCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    I1_CTAVMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    I1_PERLP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    I1_VLRLPD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_VLRLPC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_ESTOUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    I1_SALANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    I1_INDNAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    I1_DTEXIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    I1_AJ_INF: {
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
    }
  }, {
    tableName: 'SI1010'
  });
};
