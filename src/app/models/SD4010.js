/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SD4010', {
    D4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D4_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D4_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D4_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    D4_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D4_QSUSP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D4_SITUACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D4_QTDEORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D4_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D4_TRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D4_LOTECTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D4_NUMLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D4_DTVALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D4_OPORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    D4_QTSEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D4_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D4_POTENCI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D4_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D4_NUMPVBN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D4_ITEPVBN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D4_SLDEMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D4_SLDEMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D4_EMPROC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D4_CBTM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D4_CODLAN: {
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
    D4_IDDCF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D4_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D4_ROTEIRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D4_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D4_CODAEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D4_PRDORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    }
  }, {
    tableName: 'SD4010'
  });
};
