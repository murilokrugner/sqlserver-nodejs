/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QED010', {
    QED_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QED_CODFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QED_DESCPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QED_DESCIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QED_DESCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QED_FATOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QED_CATEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QED_ENTINS: {
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
    }
  }, {
    tableName: 'QED010'
  });
};
