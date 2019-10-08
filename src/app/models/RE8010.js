/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RE8010', {
    RE8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RE8_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RE8_IDESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RE8_IDSCSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RE8_IDSCEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RE8_SIGLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RE8_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    RE8_DSCSPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    RE8_DSCENG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RE8_DTALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    tableName: 'RE8010'
  });
};
