/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DWR010', {
    DWR_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DWR_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DWR_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DWR_TABFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DWR_TIPTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DWR_DATREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DWR_HORREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DWR_CDRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DWR_CDRDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DWR_SRVDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DWR_SRVATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DWR_PRDDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DWR_PRDATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DWR_TIPFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DWR_MANTEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DWR_NUMIDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DWR_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DWR_NEGDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DWR_NEGATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'DWR010'
  });
};
