/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('XXB', {
    XXB_ROTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    XXB_ALIAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    XXB_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    XXB_PROCID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XXB_TASKID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    XXB_RULE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    XXB_START: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XXB_TYPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XXB_SEEK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    XXB_ORDER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    XXB_KEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
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
    },
    XXB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    }
  }, {
    tableName: 'XXB'
  });
};
