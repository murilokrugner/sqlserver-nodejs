/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VC6010', {
    VC6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VC6_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VC6_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VC6_CODMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VC6_MODVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VC6_FABMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VC6_TIPSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC6_QTDVEI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VC6_VAL_DM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VC6_VAL_DP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VC6_VALCAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VC6_PERBON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VC6_DATVIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VC6_SEGURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VC6_CORRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VC6_VENSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    tableName: 'VC6010'
  });
};
