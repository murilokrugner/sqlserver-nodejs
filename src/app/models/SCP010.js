/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SCP010', {
    CP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CP_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CP_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CP_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CP_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CP_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CP_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CP_QTSEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CP_DATPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CP_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CP_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                               '
    },
    CP_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CP_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CP_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CP_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CP_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CP_SOLICIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    CP_QUJE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CP_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CP_PREREQU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CP_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CP_NUMOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CP_SEQRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CP_ITEMCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CP_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CP_PROJETO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CP_NUMSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CP_ITSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CP_STATSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CP_SALBLQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CP_MEDIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CP_SULCMI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CP_SULCMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CP_TIPMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CP_LOTE: {
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
    CP_CODSOLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CP_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CP_RATEIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CP_CONSEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CP_NRBPIMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CP_VUNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SCP010'
  });
};
