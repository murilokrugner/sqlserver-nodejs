/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CS1990', {
    CS1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CS1_CODREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CS1_NUMLIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CS1_NUMLIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CS1_TIPAUX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CS1_NATLIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    CS1_CODHAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
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
    tableName: 'CS1990'
  });
};
