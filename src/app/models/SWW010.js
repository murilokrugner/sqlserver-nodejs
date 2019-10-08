/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SWW010', {
    WW_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    WW_HAWB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    WW_DESPESA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                 '
    },
    WW_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    WW_PO_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    WW_NF_COMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    WW_SE_NFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    WW_DT_NFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    WW_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    WW_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    WW_TIPO_NF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    WW_NR_CONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    WW_PGI_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    WW_LOTECTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    WW_INVOICE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    WW_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'SWW010'
  });
};
