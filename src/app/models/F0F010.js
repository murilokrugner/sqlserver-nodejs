/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('F0F010', {
    F0F_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F0F_CODFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F0F_CAEPF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    F0F_TPCAEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F0F_OBRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F0F_CNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    F0F_TPOBRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F0F_ASSDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F0F_INDPAA: {
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
    tableName: 'F0F010'
  });
};
