/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SB7010', {
    B7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B7_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B7_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B7_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B7_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    B7_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B7_QTSEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B7_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B7_LOTECTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    B7_NUMLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B7_DTVALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B7_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B7_NUMSERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    B7_TPESTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B7_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    B7_ESCOLHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B7_CONTAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B7_NUMDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    B7_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B7_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B7_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B7_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B7_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B7_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B7_CODUNI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B7_IDUNIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B7_SLDTERC: {
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
    tableName: 'SB7010'
  });
};
