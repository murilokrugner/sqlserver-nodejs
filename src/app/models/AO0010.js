/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AO0010', {
    AO0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AO0_CODESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AO0_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    AO0_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AO0_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    AO0_DTVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AO0_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO0_DTULTM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AO0_HRULTM: {
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
    tableName: 'AO0010'
  });
};
