/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CSN010', {
    CSN_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CSN_CODREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CSN_REG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CSN_CODFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CSN_DESFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
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
    tableName: 'CSN010'
  });
};
