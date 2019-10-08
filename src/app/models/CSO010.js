/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CSO010', {
    CSO_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CSO_CODREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CSO_REG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CSO_CODVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSO_CODAGL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSO_CODFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CSO_DESFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CSO_VLRFAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSO_INDFAT: {
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
    }
  }, {
    tableName: 'CSO010'
  });
};
