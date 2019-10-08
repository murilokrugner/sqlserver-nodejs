/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SQ8010', {
    Q8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Q8_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Q8_FATOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Q8_GRAU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Q8_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Q8_PONTOS: {
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
    tableName: 'SQ8010'
  });
};
