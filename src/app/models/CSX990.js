/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CSX990', {
    CSX_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CSX_CODREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CSX_CODLAY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CSX_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CSX_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    CSX_KEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
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
    tableName: 'CSX990'
  });
};
