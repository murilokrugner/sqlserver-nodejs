/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AH9010', {
    AH9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH9_CODLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AH9_DESCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    AH9_TESLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AH9_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AH9_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AH9_PERCEN: {
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
    },
    AH9_CODMEM: {
      type: "IMAGE",
      allowNull: true
    },
    AH9_OBS: {
      type: "IMAGE",
      allowNull: true
    }
  }, {
    tableName: 'AH9010'
  });
};
