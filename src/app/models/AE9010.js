/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AE9010', {
    AE9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AE9_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AE9_CORBRW: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AE9_EVEN11: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN12: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN13: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN14: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN15: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN16: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN17: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN18: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN19: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN27: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN28: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN29: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN30: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN31: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN32: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN33: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN34: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN35: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_MSG1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    AE9_EVEN41: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN42: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE9_EVEN43: {
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
    tableName: 'AE9010'
  });
};
