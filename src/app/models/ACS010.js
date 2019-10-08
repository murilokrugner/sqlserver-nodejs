/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ACS010', {
    ACS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACS_CODREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACS_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    ACS_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACS_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACS_GRPVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACS_TPHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACS_HORDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ACS_HORATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ACS_DATDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ACS_DATATE: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'ACS010'
  });
};
