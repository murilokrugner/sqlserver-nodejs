/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTN010', {
    CTN_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTN_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTN_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTN_MASC1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTN_MASC2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTN_MASC3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTN_MASC4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTN_PLAGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTN_PICTV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTN_DECIM: {
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
    CTN_PLREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CTN_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    }
  }, {
    tableName: 'CTN010'
  });
};
