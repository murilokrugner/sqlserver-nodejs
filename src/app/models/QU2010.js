/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QU2010', {
    QU2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QU2_CHKLST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QU2_REVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QU2_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QU2_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QU2_ULTREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QU2_EFETIV: {
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
    tableName: 'QU2010'
  });
};
