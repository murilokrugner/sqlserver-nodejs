/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SCQ010', {
    CQ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQ_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CQ_NUMSQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQ_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CQ_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQ_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CQ_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQ_QTSEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CQ_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQ_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CQ_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CQ_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CQ_NUMSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CQ_ITSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CQ_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQ_NUMREQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CQ_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CQ_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CQ_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CQ_DATPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CQ_QTDISP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CQ_STATUSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CQ_ITEMCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CQ_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CQ_NUMAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CQ_ITAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
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
    tableName: 'SCQ010'
  });
};
