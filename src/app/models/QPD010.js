/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QPD010', {
    QPD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPD_CODFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QPD_DESCPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QPD_DESCIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QPD_DESCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QPD_FATOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QPD_CATEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QPD_ENTINS: {
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
    tableName: 'QPD010'
  });
};
