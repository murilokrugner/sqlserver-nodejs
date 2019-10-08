/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GXL010', {
    GXL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GXL_NRIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    GXL_CDTRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GXL_DTOCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GXL_HROCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GXL_EMISDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GXL_SERDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    GXL_NRDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    GXL_CODOCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GXL_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    GXL_EDISIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GXL_EDIMSG: {
      type: "IMAGE",
      allowNull: true
    },
    GXL_EDINRL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GXL_EDILIN: {
      type: "IMAGE",
      allowNull: true
    },
    GXL_EDIARQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    GXL_DTIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GXL_CODOBS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GXL_MARKBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GXL_ALTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GXL_USUIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    GXL_FILOCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GXL_FILDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GXL_CDTIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GXL_CDMOT: {
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
    }
  }, {
    tableName: 'GXL010'
  });
};
