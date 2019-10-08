/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCQ010', {
    TCQ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TCQ_CODEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCQ_CODRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TCQ_DTTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TCQ_HRTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TCQ_RETMTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TCQ_CODCER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TCQ_CAPINM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    tableName: 'TCQ010'
  });
};
