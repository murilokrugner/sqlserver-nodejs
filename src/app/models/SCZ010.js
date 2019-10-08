/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SCZ010', {
    CZ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CZ_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CZ_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CZ_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CZ_MSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CZ_DOC506: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CZ_ARQUIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CZ_CODLOG: {
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
    CZ_CF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    }
  }, {
    tableName: 'SCZ010'
  });
};
