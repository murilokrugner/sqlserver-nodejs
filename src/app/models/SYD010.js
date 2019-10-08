/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYD010', {
    YD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    YD_TEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    YD_EX_NCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    YD_EX_NBM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    YD_DESTAQU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    YD_DESC_P: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    YD_TEXTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    YD_UNID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    YD_NALADI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    YD_ALADI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    YD_NAL_SH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    YD_PER_II: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    YD_PER_IPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    YD_ICMS_RE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    YD_DL_NALA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    YD_DL_GATT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    YD_TIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    YD_NUM_EX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    YD_SISTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    YD_SISCEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    YD_ANUENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    YD_CATTEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    YD_PER_PIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    YD_VLU_PIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    YD_RED_PIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    YD_PER_COF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    YD_VLU_COF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    YD_RED_COF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    YD_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    YD_MOT_II: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    YD_MOT_IPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    YD_GRVUSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    YD_GRVDATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    YD_GRVHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    YD_CRDPRES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    YD_ICMS_PC: {
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
    },
    YD_PER_AC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    YD_MAJ_COF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    YD_ALIQIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    YD_MAJ_PIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    YD_ALIQIM2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    YD_PER_IE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    YD_DTINTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'SYD010'
  });
};
