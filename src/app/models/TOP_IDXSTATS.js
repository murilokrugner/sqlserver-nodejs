/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TOP_IDXSTATS', {
    IDX_ENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    IDX_TABLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    IDX_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    IDX_KEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                               '
    },
    IDX_USE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    }
  }, {
    tableName: 'TOP_IDXSTATS'
  });
};
