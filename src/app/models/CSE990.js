/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CSE990', {
    CSE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CSE_CODREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CSE_CODVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSE_CODAGL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSE_TPDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CSE_NIVEL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSE_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    CSE_INDVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CSE_VALOR: {
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
    }
  }, {
    tableName: 'CSE990'
  });
};
