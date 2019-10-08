/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DXL010', {
    DXL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DXL_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DXL_DTDIGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DXL_SAFRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DXL_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DXL_PRDTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DXL_LJPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DXL_FAZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DXL_TALHAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DXL_CODVAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DXL_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DXL_PRENSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DXL_PSESTI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DXL_PSLIQU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DXL_BORDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DXL_RDMTOP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DXL_RDMTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DXL_TPRENS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DXL_CODROM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DXL_CODCNJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DXL_NUMDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DXL_OPBN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    DXL_DOCRQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DXL_DOCPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DXL_CODTUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DXL_DTBEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DXL_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    DXL_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DXL_CODUNB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DXL_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DXL_COMPL: {
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
    },
    DXL_PSFISC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'DXL010'
  });
};
