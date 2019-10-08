/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SBC010', {
    BC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BC_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    BC_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BC_LOCORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BC_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BC_NUMSERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BC_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BC_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BC_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BC_QTSEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BC_CODDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BC_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BC_LOCDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BC_NSEDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BC_QTDDEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BC_QTDDES2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BC_OPERADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BC_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BC_RECURSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BC_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BC_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BC_LOTECTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BC_NUMLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BC_DTVALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BC_SEQSD3: {
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
    BC_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    BC_CODLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BC_IDENSH6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BC_OBSERVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    }
  }, {
    tableName: 'SBC010'
  });
};
