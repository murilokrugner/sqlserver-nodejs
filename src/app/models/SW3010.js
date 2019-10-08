/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SW3010', {
    W3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W3_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    W3_SI_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W3_COD_I: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    W3_PART_N: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    W3_FABR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W3_FABLOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W3_FLUXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W3_REG_TRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W3_QTDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W3_SALDO_Q: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W3_PRECO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W3_DT_EMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W3_DT_ENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    W3_PORTARI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W3_TEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    W3_EX_NCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W3_EX_NBM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W3_FABR_01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W3_FAB1LOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W3_FABR_02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W3_FAB2LOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W3_FABR_03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W3_FAB3LOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W3_FABR_04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W3_FAB4LOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W3_FABR_05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W3_FAB5LOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W3_POSICAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    W3_PO_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    W3_PGI_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    W3_PRECOVE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W3_SEQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W3_REG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W3_NR_CONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W3_SLD_ELI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W3_FORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    W3_FORLOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W3_FORECAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W3_SOFTWAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W3_PO_DA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    W3_POSI_DA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    W3_PGI_DA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    W3_PESOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W3_CTCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    W3_CODOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W3_PESO_BR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W3_GRUPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    W3_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W3_QTSEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W3_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    W3_ALTANU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    W3_FRETE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W3_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W3_INLAND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W3_DESCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    W3_PACKING: {
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
    }
  }, {
    tableName: 'SW3010'
  });
};
